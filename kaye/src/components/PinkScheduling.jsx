"use client";
import React, { useState, useMemo } from 'react';


const PALETTE = {
  bgLight: 'bg-[#F5DCE0]',       
  bgMedium: 'bg-[#ECBDC4]',      
  bgDark: 'bg-[#E4A0B7]',       
  accent: 'bg-[#E18AAA]',        
  textPrimary: 'text-pink-900',  
  textAccent: 'text-white',      
};


const calculateSJF = (processes) => {
  if (!processes.length) return { results: [], ganttChart: [], avgWaitTime: 0, avgTurnaroundTime: 0 };

  let initialProcesses = processes.map((p, index) => ({
    ...p,
    id: index,
    completed: false,
  })).sort((a, b) => a.arrivalTime - b.arrivalTime);

  let currentTime = 0;
  const results = [];
  const ganttChart = [];
  const n = initialProcesses.length;

  while (results.length < n) {
    const arrivedProcesses = initialProcesses.filter(p => !p.completed && p.arrivalTime <= currentTime);

    if (arrivedProcesses.length === 0) {
      const nextArrival = initialProcesses.find(p => !p.completed);
      if (nextArrival) {
        if (ganttChart.length === 0 || ganttChart[ganttChart.length - 1].processId !== 'Idle') {
          ganttChart.push({ processId: 'Idle', start: currentTime, end: nextArrival.arrivalTime });
        } else {
          ganttChart[ganttChart.length - 1].end = nextArrival.arrivalTime;
        }
        currentTime = nextArrival.arrivalTime;
      } else {
        break; 
      }
      continue;
    }

    const selectedProcess = arrivedProcesses.reduce((min, p) => {
      if (p.burstTime < min.burstTime) return p;
      if (p.burstTime === min.burstTime && p.arrivalTime < min.arrivalTime) return p;
      return min;
    });

    const startTime = currentTime;
    const finishTime = startTime + selectedProcess.burstTime;

    ganttChart.push({
      processId: selectedProcess.name,
      start: startTime,
      end: finishTime,
    });

    const completionTime = finishTime;
    const turnaroundTime = completionTime - selectedProcess.arrivalTime;
    const waitingTime = turnaroundTime - selectedProcess.burstTime;

    results.push({
      id: selectedProcess.id,
      name: selectedProcess.name,
      arrivalTime: selectedProcess.arrivalTime,
      burstTime: selectedProcess.burstTime,
      completionTime,
      turnaroundTime,
      waitingTime,
    });

    selectedProcess.completed = true;
    currentTime = finishTime;
  }

  const totalWT = results.reduce((sum, p) => sum + p.waitingTime, 0);
  const totalTAT = results.reduce((sum, p) => sum + p.turnaroundTime, 0);

  const avgWaitTime = n > 0 ? (totalWT / n).toFixed(2) : 0;
  const avgTurnaroundTime = n > 0 ? (totalTAT / n).toFixed(2) : 0;

  return { results: results.sort((a, b) => a.id - b.id), ganttChart, avgWaitTime, avgTurnaroundTime };
};


export default function SJFCalculator() {
  const [processes, setProcesses] = useState([]);
  const [newProcess, setNewProcess] = useState({ name: '', arrivalTime: '', burstTime: '' });
  const [calculatedMetrics, setCalculatedMetrics] = useState(null);
  const [error, setError] = useState('');

  const { results, ganttChart, avgWaitTime, avgTurnaroundTime } = useMemo(() => {
    return calculatedMetrics || { results: [], ganttChart: [], avgWaitTime: 0, avgTurnaroundTime: 0 };
  }, [calculatedMetrics]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProcess(prev => ({ 
      ...prev, 
      [name]: name !== 'name' ? (value === '' ? '' : Math.max(0, parseInt(value, 10))) : value 
    }));
    setError('');
  };

  const handleAddProcess = () => {
    const { name, arrivalTime, burstTime } = newProcess;
    if (!name || arrivalTime === '' || burstTime === '' || isNaN(arrivalTime) || isNaN(burstTime) || parseInt(burstTime, 10) <= 0) {
      setError('Provide a name and positive integers for Arrival Time (≥0) and Burst Time (>0).');
      return;
    }
    setProcesses(prev => [...prev, {
      name: name.trim().toUpperCase(),
      arrivalTime: parseInt(arrivalTime, 10),
      burstTime: parseInt(burstTime, 10),
    }]);
    setNewProcess({ name: '', arrivalTime: '', burstTime: '' });
    setCalculatedMetrics(null);
    setError('');
  };

  const handleClearAll = () => {
    setProcesses([]);
    setCalculatedMetrics(null);
    setNewProcess({ name: '', arrivalTime: '', burstTime: '' });
    setError('');
  };

  const handleCalculate = () => {
    if (processes.length === 0) {
      setError('Please add processes before calculating.');
      return;
    }
    setCalculatedMetrics(calculateSJF(processes));
    setError('');
  };

  const getProcessColor = (name) => {
    if (name === 'Idle') return 'bg-gray-300 text-gray-700';
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = ['bg-pink-500', 'bg-rose-500', 'bg-fuchsia-500', 'bg-purple-500', 'bg-indigo-500'];
    return `${colors[hash % colors.length]} ${PALETTE.textAccent}`;
  };

  
  const renderInputSection = () => (
    <div className={`p-4 sm:p-6 rounded-lg ${PALETTE.bgLight} ${PALETTE.textPrimary} shadow mb-6`}>
      <h2 className="text-xl sm:text-2xl font-bold mb-3">Process Input</h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-end flex-wrap">
        <input
          name="name"
          placeholder="Process Name (P1, P2)"
          value={newProcess.name}
          onChange={handleInputChange}
          className="p-2 sm:p-3 border border-pink-300 rounded focus:ring-2 focus:ring-pink-500 flex-1 min-w-[100px]"
          maxLength="10"
        />
        <input
          type="number"
          name="arrivalTime"
          placeholder="Arrival Time (AT)"
          value={newProcess.arrivalTime}
          onChange={handleInputChange}
          className="p-2 sm:p-3 border border-pink-300 rounded w-full sm:w-28"
          min="0"
        />
        <input
          type="number"
          name="burstTime"
          placeholder="Burst Time (BT)"
          value={newProcess.burstTime}
          onChange={handleInputChange}
          className="p-2 sm:p-3 border border-pink-300 rounded w-full sm:w-28"
          min="1"
        />
        <button
          onClick={handleAddProcess}
          className={`px-4 py-2 sm:px-6 sm:py-3 ${PALETTE.accent} ${PALETTE.textAccent} font-semibold rounded shadow hover:bg-pink-600 transition w-full sm:w-auto`}
        >
          Add
        </button>
        <button
          onClick={handleClearAll}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-pink-700 font-semibold rounded border border-pink-400 shadow hover:bg-pink-50 transition w-full sm:w-auto"
        >
          Clear All
        </button>
      </div>
      {error && <p className="text-red-500 mt-2 font-medium">{error}</p>}
    </div>
  );

  const renderProcessTable = () => (
    <div className={`overflow-x-auto ${PALETTE.bgLight} p-2 sm:p-4 rounded-lg shadow mb-6`}>
      <h2 className={`text-xl sm:text-2xl font-bold mb-3 ${PALETTE.textPrimary}`}>Processes</h2>
      <table className="w-full text-center border-collapse">
        <thead className={`${PALETTE.bgMedium} border-b-2 border-pink-400`}>
          <tr>
            <th className="p-2 text-left">Process</th>
            <th className="p-2">AT</th>
            <th className="p-2">BT</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((p, idx) => (
            <tr key={idx} className={`${idx % 2 === 0 ? PALETTE.bgLight : 'bg-pink-50'} border-b border-pink-200`}>
              <td className="p-2 text-left font-semibold">{p.name}</td>
              <td className="p-2">{p.arrivalTime}</td>
              <td className="p-2">{p.burstTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleCalculate}
        className={`mt-3 px-6 py-2 ${PALETTE.accent} ${PALETTE.textAccent} font-bold rounded shadow hover:bg-pink-600 transition w-full sm:w-auto`}
        disabled={processes.length === 0}
      >
        Calculate SJF
      </button>
    </div>
  );

  const renderResultTable = () => (
    <div className={`overflow-x-auto ${PALETTE.bgLight} p-2 sm:p-4 rounded-lg shadow mb-6`}>
      <h2 className={`text-xl sm:text-2xl font-bold mb-3 ${PALETTE.textPrimary}`}>Result Metrics</h2>
      <table className="w-full text-center border-collapse">
        <thead className={`${PALETTE.bgMedium} border-b-2 border-pink-400`}>
          <tr>
            <th className="p-2 text-left">Process</th>
            <th className="p-2">AT</th>
            <th className="p-2">BT</th>
            <th className="p-2">CT</th>
            <th className="p-2">TAT</th>
            <th className="p-2">WT</th>
          </tr>
        </thead>
        <tbody>
          {results.map((p, idx) => (
            <tr key={idx} className={`${idx % 2 === 0 ? PALETTE.bgLight : 'bg-pink-50'} border-b border-pink-200`}>
              <td className="p-2 text-left font-semibold">{p.name}</td>
              <td className="p-2">{p.arrivalTime}</td>
              <td className="p-2">{p.burstTime}</td>
              <td className="p-2 font-bold">{p.completionTime}</td>
              <td className="p-2">{p.turnaroundTime}</td>
              <td className="p-2">{p.waitingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={`flex flex-col sm:flex-row justify-around items-center p-2 sm:p-4 ${PALETTE.bgDark} ${PALETTE.textAccent} rounded-lg shadow mt-3`}>
        <p className="text-lg font-bold">Average WT: <span className="ml-2 text-xl">{avgWaitTime}</span></p>
        <p className="text-lg font-bold">Average TAT: <span className="ml-2 text-xl">{avgTurnaroundTime}</span></p>
      </div>
    </div>
  );

  const renderGanttChart = () => {
    if (!ganttChart.length) return null;
    const totalTime = ganttChart[ganttChart.length - 1].end;

    return (
      <div className="mb-6">
        <h2 className={`text-xl sm:text-2xl font-bold mb-3 ${PALETTE.textPrimary}`}>Gantt Chart</h2>
        <div className="flex w-full border-2 border-pink-400 rounded overflow-hidden mb-1">
          {ganttChart.map((block, idx) => {
            const widthPercent = ((block.end - block.start) / totalTime) * 100;
            const colorClass = getProcessColor(block.processId);
            return (
              <div key={idx} style={{ width: `${widthPercent}%` }} className="flex-shrink-0">
                <div className={`h-12 flex items-center justify-center font-bold text-sm ${colorClass}`}>
                  {block.processId !== 'Idle' ? block.processId : 'IDLE'}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative flex w-full h-6 text-xs font-semibold text-pink-900">
          {ganttChart.map((block, idx) => (
            <div key={idx} className="absolute border-r border-pink-800 h-full" style={{ left: `${(block.start / totalTime) * 100}%` }}>
              {block.start}
            </div>
          ))}
          <div className="absolute border-r border-pink-800 h-full" style={{ left: `100%`, transform: 'translateX(-50%)' }}>
            {totalTime}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`pt-24 sm:pt-28 p-4 sm:p-8 min-h-screen max-w-5xl mx-auto ${PALETTE.bgLight}`}>
      <div className="bg-white p-4 sm:p-10 rounded-xl shadow-2xl">
        <h1 className={`text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 text-center ${PALETTE.textPrimary}`}>
          Shortest Job First (SJF) Non-Preemptive Scheduler
        </h1>

        {renderInputSection()}

        {processes.length > 0 && renderProcessTable()}

        {calculatedMetrics && (
          <>
            {renderResultTable()}
            {renderGanttChart()}
          </>
        )}
      </div>
    </div>
  );
}

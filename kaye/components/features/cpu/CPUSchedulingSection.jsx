import PinkScheduling from "@/src/components/PinkScheduling";

export default function CPUSchedulingSection() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] sm:p-6">
        <h1 className="text-3xl font-semibold text-pink-900 dark:text-pink-100">CPU Scheduling</h1>
        <p className="mt-1 text-sm text-pink-700 dark:text-pink-300">
          Shortest Job First (SJF) simulation tool
        </p>
      </div>
      <PinkScheduling />
    </section>
  );
}


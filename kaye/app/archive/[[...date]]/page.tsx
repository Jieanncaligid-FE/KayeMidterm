export default async function ArchiveDatePage({
  params,
}: {
  params: Promise<{ date?: string[] }>;
}) {
  const { date } = await params;

  const parts = date || [];
  const formatted = parts.length ? parts.join("-") : "All dates";

  return (
    <section className="rounded-2xl border border-pink-200 bg-white p-6 shadow-sm dark:border-pink-900 dark:bg-[#1f1525]">
      <h1 className="text-3xl font-semibold text-pink-900 dark:text-pink-100">Archive Filter</h1>
      <p className="mt-2 dark:text-neutral-200">
        Optional catch-all route value: <strong>{formatted}</strong>
      </p>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
        Try <code>/archive</code>, <code>/archive/2026</code>, or <code>/archive/2026/04/08</code>.
      </p>
    </section>
  );
}


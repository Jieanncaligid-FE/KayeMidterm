export default async function CategorySegmentsPage({ params }) {
  const { segments } = await params;

  return (
    <section className="rounded-2xl border border-pink-200 bg-white p-6 shadow-sm dark:border-pink-900 dark:bg-[#1f1525]">
      <h1 className="text-3xl font-semibold text-pink-900 dark:text-pink-100">Category Segments</h1>
      <p className="mt-2 dark:text-neutral-200">
        Catch-all route result: <strong>{segments.join(" / ")}</strong>
      </p>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
        Example: <code>/categories/web/frontend/react</code>
      </p>
    </section>
  );
}


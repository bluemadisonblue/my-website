import Link from 'next/link';

const notes = [
  {
    title: 'AI Engineer',
    date: '2025-04-22',
    slug: 'ai-engineer',
    summary: 'Thoughts on working as an AI Engineer and the future of AI.'
  },
  {
    title: "My thoughts aren't here",
    date: '2024-12-29',
    slug: 'my-thoughts-arent-here',
    summary: 'A personal reflection on sharing ideas and writing.'
  },
  {
    title: 'Hello World',
    date: '2024-07-14',
    slug: 'hello-world',
    summary: 'My first note on this blog.'
  },
];

export default function NotesPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 pt-16">
      <section className="w-full max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-2">My Notes</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">I will try to share my thoughts & news here.</p>
        <div className="space-y-4">
          {notes.map(note => (
            <Link key={note.slug} href={`/notes/${note.slug}`} className="block rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-4 hover:border-blue-500 dark:hover:border-blue-400 transition">
              <div className="text-lg font-semibold mb-1">{note.title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{new Date(note.date).toLocaleDateString()}</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">{note.summary}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 
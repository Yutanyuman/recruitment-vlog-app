import { companies, posts } from '@/mock-data';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Recruitment Vlog App</h1>
      <p className="mb-4">
        This is a prototype of a recruitment-focused social video app built with Next.js
        App Router. It uses mock data and does not persist changes yet. Replace the
        sample posts and companies with real data once your backend is ready.
      </p>
      <div className="flex flex-col gap-4">
        {posts.map((post) => {
          const company = companies.find((c) => c.id === post.companyId);
          return (
            <div key={post.id} className="border rounded-md p-4 shadow-sm">
              {/* Video preview */}
              <div className="mb-2">
                <video
                  controls
                  width="100%"
                  src={post.videoUrl}
                  preload="metadata"
                  poster=""
                />
              </div>
              {/* Company name and caption */}
              <h2 className="text-xl font-semibold">
                {company?.name || 'Unknown Company'}
              </h2>
              <p className="mt-1 text-gray-700">{post.caption}</p>
              {/* Link to company page */}
              {company && (
                <div className="mt-2">
                  <Link
                    href={`/company/${company.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View company page
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
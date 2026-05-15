import { companies, posts } from '@/mock-data';
import { notFound } from 'next/navigation';

interface CompanyPageProps {
  params: {
    id: string;
  };
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const company = companies.find((c) => c.id === params.id);
  if (!company) {
    notFound();
  }
  const companyPosts = posts.filter((post) => post.companyId === company.id);
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{company.name}</h1>
      <p className="mb-6 text-gray-700">{company.description}</p>
      <h2 className="text-2xl font-semibold mb-3">Posts</h2>
      {companyPosts.length === 0 ? (
        <p className="text-gray-600">This company has not posted any videos yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {companyPosts.map((post) => (
            <div key={post.id} className="border rounded-md p-4 shadow-sm">
              <video
                controls
                width="100%"
                src={post.videoUrl}
                preload="metadata"
                poster=""
              />
              <p className="mt-2 text-gray-700">{post.caption}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
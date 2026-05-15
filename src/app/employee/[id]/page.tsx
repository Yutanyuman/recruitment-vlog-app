import Link from 'next/link';
import { getCompany, getMember, getPostsByMember } from '@/mock-data';
import { notFound } from 'next/navigation';

interface EmployeePageProps {
  params: { id: string };
}

export default function EmployeePage({ params }: EmployeePageProps) {
  const member = getMember(params.id);
  if (!member) notFound();
  const company = getCompany(member.companyId)!;
  const memberPosts = getPostsByMember(member.id);
  const groups = [
    { title: '一人の自分', items: memberPosts.filter((post) => post.category.includes('一人')) },
    { title: '学んでいる自分', items: memberPosts.filter((post) => post.category.includes('学ん')) },
    { title: '人といる自分', items: memberPosts.filter((post) => post.category.includes('人と')) }
  ];

  return (
    <main className="app-shell">
      <header className="topbar">
        <Link href="/" className="brand">
          <span className="logo-mark">🌿</span>
          <span>
            <span className="brand-title">Worklog Recruit</span>
            <span className="brand-subtitle">この人と働きたい、から始まる採用SNS</span>
          </span>
        </Link>
        <div className="top-actions">
          <Link className="icon-btn" href="/">⌂</Link>
          <Link className="icon-btn" href="/post">＋</Link>
        </div>
      </header>

      <div className="company-page" style={{ maxWidth: 760 }}>
        <section className="card">
          <div className="profile-header">
            <span className="avatar">{member.avatar}</span>
            <div style={{ flex: 1 }}>
              <div className="profile-name">{member.name}</div>
              <div className="company-meta">{member.role}｜{company.name}</div>
              <p className="author-meta" style={{ marginTop: 10 }}>{member.bio}</p>
              <div className="cta-row">
                <Link className="outline-btn" href={`/company/${company.id}`}>会社を見る</Link>
                <Link className="primary-btn" href="#">フォロー中</Link>
              </div>
            </div>
          </div>
        </section>

        <div className="profile-tabs">
          <span className="tab-pill active">一人の自分</span>
          <span className="tab-pill">学び</span>
          <span className="tab-pill">人といる</span>
        </div>

        {groups.map((group) => {
          const items = group.items.length > 0 ? group.items : memberPosts.slice(0, 3);
          return (
            <section className="card card-pad profile-section" key={group.title}>
              <div className="section-title">{group.title}<a>すべて見る</a></div>
              <div className="horizontal-list">
                {items.map((post) => (
                  <div className="mini-log" key={`${group.title}-${post.id}`}>
                    <div className={`mini-visual ${post.visual}`} />
                    <b style={{ fontSize: 13 }}>{post.comment}</b>
                    <div className="author-meta">0:0{post.duration} ・ {post.createdAt}</div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

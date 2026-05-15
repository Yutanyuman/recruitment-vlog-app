import Link from 'next/link';
import { getCompany, getMembersByCompany, getPostsByCompany, jobs } from '@/mock-data';
import { notFound } from 'next/navigation';

interface CompanyPageProps {
  params: { id: string };
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const company = getCompany(params.id);
  if (!company) notFound();

  const members = getMembersByCompany(company.id);
  const companyPosts = getPostsByCompany(company.id);
  const companyJobs = jobs.filter((job) => job.companyId === company.id);

  return (
    <main className="app-shell">
      <header className="topbar">
        <Link href="/" className="brand">
          <span className="logo-mark">🌿</span>
          <span>
            <span className="brand-title">Worklog Recruit</span>
            <span className="brand-subtitle">人の日常ログから、働く場所のリアルが見えてくる。</span>
          </span>
        </Link>
        <div className="search-box">⌕ 企業名で検索</div>
        <div className="top-actions">
          <Link className="icon-btn" href="/post">＋</Link>
          <Link className="icon-btn" href="/">⌂</Link>
        </div>
      </header>

      <div className="company-page">
        <section className="card hero">
          <div className={`cover ${company.coverTone}`} />
          <div className="company-identity">
            <div className="company-logo">{company.logo}</div>
            <h1 className="company-title">{company.name} <span className="verified">●</span></h1>
            <div className="company-meta">{company.industry}　・　{company.location}　・　従業員{company.employees}</div>
            <div className="tag-row" style={{ marginTop: 12 }}>
              {company.moodTags.map((tag) => <span className="tag blue" key={tag}>{tag}</span>)}
            </div>
            <p className="log-comment" style={{ fontSize: 15, fontWeight: 600, marginTop: 14 }}>{company.description}</p>
            <div className="cta-row">
              <Link className="outline-btn" href="#jobs">採用LPを見る</Link>
              <Link className="primary-btn" href="#talk">話を聞きたい</Link>
            </div>
          </div>
        </section>

        <div className="content-grid">
          <div className="main-column">
            <section className="card card-pad">
              <div className="section-title">この会社で働く人たち <a>すべて見る</a></div>
              <div className="horizontal-list">
                {members.map((member) => (
                  <Link className="person-card" href={`/employee/${member.id}`} key={member.id}>
                    <span className="avatar">{member.avatar}</span>
                    <div className="person-name">{member.name}</div>
                    <div className="person-role">{member.role}</div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="card card-pad">
              <div className="section-title">職場のログ <a>すべて見る</a></div>
              <div className="horizontal-list">
                {companyPosts.map((post) => (
                  <Link className="mini-log" href={`/employee/${post.authorId}`} key={post.id}>
                    <div className={`mini-visual ${post.visual}`} />
                    <b style={{ fontSize: 13 }}>{post.comment}</b>
                    <div className="tag-row" style={{ marginTop: 8 }}>
                      {post.emotionTags.slice(0, 1).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="card card-pad">
              <div className="section-title">社員インタビュー <a>すべて見る</a></div>
              <div className="feed" style={{ gap: 10 }}>
                {members.slice(1, 3).map((member) => (
                  <Link className="company-mini" href={`/employee/${member.id}`} key={member.id}>
                    <span className="avatar">{member.avatar}</span>
                    <span>
                      <b>{member.name}｜{member.role}</b>
                      <span className="author-meta">{member.bio}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="aside-column">
            <section className="card card-pad">
              <div className="section-title">会社のこと</div>
              <div className="info-list">
                <span>設立：{company.founded}</span>
                <span>所在地：{company.location}</span>
                <span>事業内容：{company.industry}</span>
                <span>従業員：{company.employees}</span>
              </div>
            </section>

            {companyJobs.map((job) => (
              <section className="card card-pad job-card" id="jobs" key={job.id}>
                <div className="section-title">募集職種</div>
                <div className="job-title">{job.title} <span className="tag">{job.status}</span></div>
                <div className="info-list">
                  <span>雇用形態：{job.employmentType}</span>
                  <span>勤務地：{job.location}</span>
                  <span>年収：{job.salary}</span>
                  <span>休日：{job.holidays}</span>
                </div>
                <p className="author-meta">{job.description}</p>
                <div className="check-list">
                  {job.fitTags.map((tag) => <span key={tag}>✓ {tag}</span>)}
                </div>
                <Link className="primary-btn" href="#talk">募集要項を見る</Link>
              </section>
            ))}

            <section className="card card-pad" id="talk">
              <div className="section-title">まずは軽く話してみる</div>
              <p className="author-meta">応募の前に、会社の空気や働く人について聞いてみましょう。</p>
              <Link className="primary-btn" style={{ display: 'block', marginTop: 12 }} href="#">話を聞きたい</Link>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';
import { companies, getCompany, getMember, members, posts } from '@/mock-data';

function LogCard({ post }: { post: (typeof posts)[number] }) {
  const member = getMember(post.authorId)!;
  const company = getCompany(post.companyId)!;
  return (
    <article className="log-card">
      <div className={`visual ${post.visual}`}>
        <span className="visual-label">0:0{post.duration}</span>
      </div>
      <div className="log-head">
        <Link className="author" href={`/employee/${member.id}`}>
          <span className="avatar">{member.avatar}</span>
          <span>
            <span className="author-name">{member.name}｜{member.role}</span>
            <span className="author-meta">{company.name}</span>
          </span>
        </Link>
        <span className="timestamp">{post.createdAt}</span>
      </div>
      <div className="log-body">
        <p className="log-comment">{post.comment}</p>
        <div className="tag-row">
          {post.sceneTags.map((tag) => <span className="tag" key={tag}>#{tag}</span>)}
          {post.emotionTags.map((tag) => <span className="tag blue" key={tag}>#{tag}</span>)}
        </div>
        <div className="log-actions">
          <Link className="soft-btn" href={`/company/${company.id}`}>会社を見る</Link>
          <span className="count">♡ {post.likes}</span>
        </div>
      </div>
    </article>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="side-menu">
        <Link className="side-item active" href="/">⌂ ホーム</Link>
        <Link className="side-item" href="/company/green-field">▱ 会社を探す</Link>
        <Link className="side-item" href="#">♡ 気になる</Link>
        <Link className="side-item" href="#">✉ メッセージ</Link>
        <Link className="side-item" href="/employee/ayaka">♙ マイページ</Link>
      </nav>
      <div className="card card-pad" style={{ marginTop: 220 }}>
        <b>採用ご担当者の方へ</b>
        <p className="author-meta">採用のリアルを、もっと伝えませんか？</p>
        <Link className="outline-btn" href="/post" style={{ display: 'block', marginTop: 12 }}>採用をはじめる</Link>
      </div>
    </aside>
  );
}

function RightRail() {
  return (
    <aside className="right-rail">
      <section className="card card-pad">
        <div className="section-title">気になる会社 <a>すべて見る</a></div>
        {companies.map((company) => (
          <Link className="company-mini" key={company.id} href={`/company/${company.id}`}>
            <span className="mini-logo">{company.logo}</span>
            <span>
              <b style={{ fontSize: 13 }}>{company.name}</b>
              <span className="author-meta">{company.industry}</span>
            </span>
          </Link>
        ))}
      </section>
      <section className="card card-pad" style={{ marginTop: 14 }}>
        <div className="section-title">おすすめの人 <a>すべて見る</a></div>
        {members.slice(0, 3).map((member) => (
          <Link className="company-mini" key={member.id} href={`/employee/${member.id}`}>
            <span className="avatar small">{member.avatar}</span>
            <span>
              <b style={{ fontSize: 13 }}>{member.name}｜{member.role}</b>
              <span className="author-meta">フォロー</span>
            </span>
          </Link>
        ))}
      </section>
      <section className="card card-pad" style={{ marginTop: 14 }}>
        <div className="section-title">空気感タグ</div>
        <div className="tag-row">
          {['穏やか','たのしい','集中','フラット','あたたかい','学びが多い','チームワーク'].map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </section>
    </aside>
  );
}

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link className="nav-item active" href="/"><span className="nav-icon">⌂</span>ホーム</Link>
      <Link className="nav-item" href="/company/green-field"><span className="nav-icon">⌕</span>会社を探す</Link>
      <Link className="nav-item" href="#"><span className="nav-icon">♡</span>気になる</Link>
      <Link className="nav-item" href="#"><span className="nav-icon">✉</span>メッセージ</Link>
      <Link className="nav-item" href="/employee/ayaka"><span className="nav-icon">♙</span>マイページ</Link>
    </nav>
  );
}

export default function Home() {
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
        <div className="search-box">⌕ 企業名・人名・職種で検索</div>
        <div className="top-actions">
          <Link className="icon-btn" href="/post">＋</Link>
          <span className="icon-btn">🔔</span>
        </div>
      </header>

      <div className="layout desktop-grid">
        <Sidebar />
        <section>
          <div className="mobile-tabs">
            <span className="tab-pill active">おすすめ</span>
            <span className="tab-pill">フォロー中</span>
            <span className="tab-pill">新着</span>
            <Link className="tab-pill" href="/company/green-field">会社を見る</Link>
          </div>
          <div className="feed">
            {posts.map((post) => <LogCard key={post.id} post={post} />)}
          </div>
        </section>
        <RightRail />
      </div>
      <BottomNav />
    </main>
  );
}

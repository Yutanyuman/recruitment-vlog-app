import Link from 'next/link';

export default function PostPage() {
  const emotions = ['うれしい', '穏やか', 'たのしい', 'がんばった', 'しんどい', 'ワクワク'];
  const scenes = ['仕事中', '学び', '休憩中', '移動中', 'イベント', 'その他'];

  return (
    <main className="app-shell">
      <header className="topbar">
        <Link href="/" className="icon-btn">×</Link>
        <b>ログを投稿する</b>
        <span className="author-meta">下書き</span>
      </header>

      <div className="post-form">
        <section className="card form-card">
          <div className="label">時間をえらぶ</div>
          <div className="segment">
            <button>1秒</button>
            <button className="active">3秒</button>
            <button>10秒</button>
          </div>

          <div className="capture-box">
            <div>
              <div style={{ fontSize: 48, marginBottom: 10 }}>▣</div>
              <b>タップして撮影</b>
              <p className="author-meta">または動画を選択</p>
              <span className="count">0:00 / 0:03</span>
            </div>
          </div>

          <div className="label">コメント（任意）</div>
          <textarea placeholder="今の気持ちや、シェアしたいことを書いてみましょう" maxLength={100} />

          <div className="label">気持ちでえらぶ</div>
          <div className="tag-row">
            {emotions.map((tag) => <span className="pill" key={tag}>{tag}</span>)}
          </div>

          <div className="label">場面でえらぶ</div>
          <div className="tag-row">
            {scenes.map((tag) => <span className="pill" key={tag}>{tag}</span>)}
          </div>

          <button className="submit-btn">ログを投稿する</button>
        </section>
      </div>
    </main>
  );
}

export type Duration = 1 | 3 | 10;

export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  founded: string;
  employees: string;
  tagline: string;
  description: string;
  logo: string;
  coverTone: string;
  moodTags: string[];
}

export interface Member {
  id: string;
  name: string;
  role: string;
  companyId: string;
  avatar: string;
  bio: string;
}

export interface LogPost {
  id: string;
  companyId: string;
  authorId: string;
  duration: Duration;
  comment: string;
  category: string;
  emotionTags: string[];
  sceneTags: string[];
  visual: string;
  likes: number;
  createdAt: string;
}

export interface JobPost {
  id: string;
  companyId: string;
  title: string;
  status: string;
  employmentType: string;
  location: string;
  salary: string;
  holidays: string;
  description: string;
  fitTags: string[];
}

export const companies: Company[] = [
  {
    id: 'green-field',
    name: 'グリーンフィールド株式会社',
    industry: '再生可能エネルギー・環境コンサルティング',
    location: '東京都渋谷区神宮前1-2-3',
    founded: '2017年6月',
    employees: '48名',
    tagline: '自然とともに、未来のあたりまえをつくる',
    description: '自然とともに、未来のあたりまえをつくる。再生可能エネルギーの開発・運用を通じて、持続可能な社会の実現に取り組んでいます。',
    logo: '🌿',
    coverTone: 'cover-green',
    moodTags: ['穏やか', 'あたたかい', '挑戦できる', 'チームワーク', '成長できる']
  },
  {
    id: 'sasaki-design',
    name: '株式会社ササキ',
    industry: 'デザイン・クリエイティブ',
    location: '大阪府大阪市北区',
    founded: '2012年4月',
    employees: '12名',
    tagline: '伝わる前に、感じられるデザインを',
    description: '小さな違和感を見つけて、事業の見え方を整えるデザイン会社です。',
    logo: '✦',
    coverTone: 'cover-warm',
    moodTags: ['少人数', '静か', '集中', 'フラット']
  }
];

export const members: Member[] = [
  { id: 'ayaka', name: 'あやか', role: '広報', companyId: 'green-field', avatar: 'あ', bio: '会社の魅力を届けるのが仕事です。人や想いをつなぐことが好きです。' },
  { id: 'yuta', name: 'ゆうた', role: 'エンジニア', companyId: 'green-field', avatar: 'ゆ', bio: '静かに集中して、仕組みをつくる時間が好きです。' },
  { id: 'misaki', name: 'みさき', role: 'デザイナー', companyId: 'green-field', avatar: 'み', bio: '植物と余白が好きです。見えない空気を形にする仕事をしています。' },
  { id: 'shintaro', name: 'しんたろう', role: '営業', companyId: 'green-field', avatar: 'し', bio: 'お客様との会話から、新しい可能性を見つけるのが好きです。' }
];

export const posts: LogPost[] = [
  { id: 'log-1', companyId: 'green-field', authorId: 'ayaka', duration: 3, comment: '朝のミーティング前。今日も1日がんばろう。', category: '一人の自分', emotionTags: ['穏やか'], sceneTags: ['仕事中'], visual: 'visual-coffee', likes: 23, createdAt: '28時間前' },
  { id: 'log-2', companyId: 'green-field', authorId: 'yuta', duration: 3, comment: '集中してコードを書いてたら、あっという間にお昼すぎてた。', category: '頑張っている自分', emotionTags: ['集中'], sceneTags: ['仕事中'], visual: 'visual-work', likes: 18, createdAt: '5時間前' },
  { id: 'log-3', companyId: 'green-field', authorId: 'misaki', duration: 3, comment: 'チームでランチ。いいアイデアが生まれました🌿', category: '人といる自分', emotionTags: ['たのしい'], sceneTags: ['休憩中'], visual: 'visual-lunch', likes: 31, createdAt: '1日前' },
  { id: 'log-4', companyId: 'green-field', authorId: 'shintaro', duration: 10, comment: '新しい商談スペースができました。居心地よくてお気に入り。', category: '職場の環境', emotionTags: ['落ち着く'], sceneTags: ['仕事中'], visual: 'visual-office', likes: 44, createdAt: '1日前' },
  { id: 'log-5', companyId: 'green-field', authorId: 'ayaka', duration: 3, comment: 'セミナーでの気づきをメモ。学ぶ時間も大事にしています。', category: '学んでいる自分', emotionTags: ['学び'], sceneTags: ['学び中'], visual: 'visual-study', likes: 16, createdAt: '2日前' }
];

export const jobs: JobPost[] = [
  { id: 'job-1', companyId: 'green-field', title: 'Webエンジニア', status: '積極採用中', employmentType: '正社員', location: '東京 / リモート可', salary: '400〜650万円', holidays: '土日祝・年間休日124日', description: 'プロダクトの成長を一緒に支えてくれるエンジニアを募集しています。', fitTags: ['自然や社会課題に関心がある人', '自ら考え、行動できる人', 'チームで成果をつくれる人'] }
];

export function getCompany(id: string) { return companies.find((company) => company.id === id); }
export function getMember(id: string) { return members.find((member) => member.id === id); }
export function getPostsByCompany(companyId: string) { return posts.filter((post) => post.companyId === companyId); }
export function getPostsByMember(memberId: string) { return posts.filter((post) => post.authorId === memberId); }
export function getMembersByCompany(companyId: string) { return members.filter((member) => member.companyId === companyId); }

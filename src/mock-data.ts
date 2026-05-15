export interface Company {
  id: string;
  name: string;
  description: string;
}

export interface Post {
  id: string;
  companyId: string;
  caption: string;
  videoUrl: string;
}

// Sample companies
export const companies: Company[] = [
  {
    id: 'company-1',
    name: 'Acme Inc.',
    description: 'A sample company demonstrating how a company might appear in the recruitment vlog app.'
  },
  {
    id: 'company-2',
    name: 'Globex Corp',
    description: 'Another sample company. Replace these with real data once your backend is connected.'
  }
];

// Sample posts
export const posts: Post[] = [
  {
    id: 'post-1',
    companyId: 'company-1',
    caption: 'Welcome to our office! Here is a quick tour of where the magic happens.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'post-2',
    companyId: 'company-2',
    caption: 'Meet the team at Globex Corp. We love what we do!',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4'
  }
];
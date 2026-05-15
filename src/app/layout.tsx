import '@/app/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Worklog Recruit',
  description: '人の日常ログから、働く場所のリアルが見えてくる採用SNS'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

import Header from '@/components/header/header.component'
import { ReactNode } from 'react'


type Props = {
  title?: string;
  children: ReactNode;
};

export default function Layout({ title = "Portfolio", children }: Props) {
  return (
    <div className="flex flex-col h-full min-h-screen bg-theme-4 text-white no-scrollbar">
      <Header title={title} />
      <div className="flex-1 grow h-full test no-scrollbar">{children}</div>
    </div>
  );
}

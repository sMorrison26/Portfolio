import Header from '../header/header.component'
import { ReactNode } from 'react'


type Props = {
  title?: string;
  children: ReactNode;
};

export default function Layout({ title = "Portfolio", children }: Props) {
  return (
    <div className="flex flex-col h-full min-h-screen bg-theme-4 text-white">
      <Header title={title} />
      <div className="flex-1 grow h-full test">{children}</div>

    </div>
  );
}

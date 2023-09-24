import Header from "../header/header.component";
import Footer from "../footer/footer.component";
import { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
};

export default function Layout({ title = "Portfolio", children }: Props) {
  return (
    <div className="flex flex-col h-screen bg-theme-5 text-white">
      <Header title={title} />
      <div className="grow">{children}</div>
    </div>
  );
}

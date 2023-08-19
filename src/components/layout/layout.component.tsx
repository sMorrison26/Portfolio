import Header from "../header/header.component";
import Footer from '../footer/footer.component';
import { ReactNode } from "react";

type Props = {
    title?: string,
    children: ReactNode
}

export default function Layout({title = 'Portfolio', children}: Props){
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-800 to-gray-700">
            <Header title={title} />
            <div className="flex-grow">{children}</div>
            <Footer />
        </div>
    )
}
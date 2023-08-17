import Header from "../header/header.component";
import Footer from '../footer/footer.component';

export default function Layout({children}){
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-800 to-gray-700">
            <Header />
            {/* <main className="flex-grow bg-sky-300">{children}</main> */}
            <div>{children}</div>
            <Footer />
        </div>
    )
}
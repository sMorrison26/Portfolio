import Header from "../header/header.component";
import Footer from '../footer/footer.component';

export default function Layout({children}){
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-800 to-gray-700">
            <div className="flex flex-col flex-1">
                <Header />
                <main className="flex-1">{children}</main>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}
import Header from "../header/header.component";

export default function Layout({children}){
    return (
        <div className="bg-gradient-to-b from-zinc-800 to-gray-700 h-screen">
            <Header />
            <main>{children}</main>
        </div>
    )
}
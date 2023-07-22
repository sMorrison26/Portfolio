import Header from "@/components/header/header.component";
import Footer from "@/components/footer/footer.component";
export default function Construction(){
    return (
        <>
            <Header />
            <div className="flex justify-center items-center flex-col bg-gradient-to-tr from-purple-500 to-purple-900 h-full text-text-white">
                <p className="text-9xl pb-3 mb-3 font-virtual font-extralight">
                    Page Under Construction!
                </p> 
                <p>I am working hard to bring you something awesome.</p>
                <p>Please check back later!</p>
            </div>
            {/* <Footer /> */}
        </>
    );
}
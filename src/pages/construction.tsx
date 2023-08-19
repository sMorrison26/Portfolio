// import Footer from "@/components/footer/footer.component";
import Layout from "@/components/layout/layout.component";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";


const Construction: NextPageWithLayout = () => {
    return (
        <div className="flex justify-center items-center text-center flex-col p-2 pt-24 text-text-white">
            <p className="text-9xl xs:text-7xl pb-3 mb-3 font-virtual font-extralight">
                Page Under Construction!
            </p>
            <p>I am working hard to bring you something awesome.</p>
            <p>Please check back later!</p>
        </div>
    );
}

Construction.getLayout = function getLayout(page: ReactElement){
    return (
        <Layout title="Under Construction">
            {page}
        </Layout>
    )
}

export default Construction
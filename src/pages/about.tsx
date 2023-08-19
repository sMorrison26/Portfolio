import Layout from "@/components/layout/layout.component"
import type { ReactElement } from "react"
import type { NextPageWithLayout } from "./_app"

const About: NextPageWithLayout = () => {
    return (
        <></>
    )
}

About.getLayout = function getLayout(page: ReactElement){
    return (
        <Layout title='About'>
            {page}
        </Layout>
    )
}
export default About
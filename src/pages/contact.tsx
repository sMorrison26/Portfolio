import Layout from "@/components/layout/layout.component";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const Contact: NextPageWithLayout = () => {
  return(
    <div className="flex justify-center items-center max-w-screen-xl mx-auto min-h-[80vh]">
      <div className="w-1/2 border border-purple-600">
        
      </div>
    </div>
  );
};
Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}
export default Contact;
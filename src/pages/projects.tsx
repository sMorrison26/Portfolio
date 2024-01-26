import { useState, useEffect, use } from 'react'
import Project from '../components/project/project.component'
import type { ReactElement } from 'react'
// import type { ReactElement, ServerContextJSONArray } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout/layout.component'
// import { preProcessFile } from 'typescript'
import {Button} from '@nextui-org/react'
import { Modal } from '@nextui-org/react'

const Projects: NextPageWithLayout = () => {

  //project data
  const [projectsList, setProjectsList] = useState([]);
  
  // const [projectGroup, setProjectGroup] = useState(0);

  //get project data
  useEffect(() => {
    async function fetchData() {
      try {
        const encodedPath = btoa("/assets/text/projects.json");
        const apiUrl = `api/getJson?path=${encodedPath}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProjectsList(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching project data: ", error);
      }
    }
    fetchData();
  }, []);
  

  return (
    <div className="flex-1 flex flex-col items-center mb-10">
      <p className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-tr from-white to-theme-1 bg-clip-text text-transparent font-bold py-4">Projects</p>
      <div id="projects" className="sm:w-3/4 md:w-4/5 p-4 mx-auto">
        {projectsList.map((item) => (
          <div key={item.title} className="flex flex-col mt-6">
            {/* <div className="w-full py-2"> */}
              <p className="text-xl sm:text-2xl md:text-3xl mb-4 border-b border-b-white">{item.title}</p>
            {/* </div> */}
            <div className="grid grid-cols-2 gap-4">
              {item.projects.map((proj: any) => (
                <Project key={proj.name} props={proj} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Projects">{page}</Layout>;
};
export default Projects;




// I have to make each image a square

//flip card 
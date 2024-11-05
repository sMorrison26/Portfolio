import { useState, useEffect } from 'react'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout/layout.component'
import ProjectSection from '@/components/project/projectSection.component'

export interface ProjectSectionType {
  projects: Array<projectType>,
  title: string,
  visible: boolean
}

export interface projectType {
  name: string,
  description: string,
  github: string,
  link: string,
  imagesrc: string,
  date: string
}

const Projects: NextPageWithLayout = () => {

  //project data
  const [projectsList, setProjectsList] = useState([]);

  const [allVisible, setAllVisible] = useState<boolean>(false);
  
  //get project data
  useEffect(() => {
    async function fetchData() {
      try {
        const encodedPath = btoa("/assets/text/projects.json");
        const apiUrl = `api/getJson?path=${encodedPath}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProjectsList(data);
      } catch (error) {
        console.error("Error fetching project data: ", error);
      }
    }
    fetchData();
  }, []);
  
  

  return (
    <div className="flex-1 flex flex-col items-center  mb-10 mt-12 md:mt-32 sm:w-3/4 md:w-4/5 mx-auto p-4">
      <p className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-tr from-white to-theme-1 bg-clip-text text-transparent font-bold py-4">Projects</p>
      <p className='text-xs text-white/50 ml-auto text-right hover:text-white/80 cursor-pointer' onClick={() => setAllVisible(!allVisible)}>
        {allVisible ? "Hide all" : "Expand all"}
      </p>
      {/* Individual Project Section */}
      <div id="projects" className="w-full">
        {projectsList.map((item: ProjectSectionType, index) => (
          <ProjectSection key={index}  {...item} visible={allVisible} />
        ))}
      </div>
    </div>
  );
};
Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Projects">{page}</Layout>;
};
export default Projects;

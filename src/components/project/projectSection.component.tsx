import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from "./project.component";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ProjectSectionType, projectType } from "@/pages/projects";


export default function ProjectSection(props: ProjectSectionType) {

  //visibility of section
  const [visible, setVisible] = useState<boolean>(props.visible);
  
  //if allVisibility changes, update it accordingly
  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible])

  return (
    <div className="flex flex-col mt-6 mb-10">
      {/* Title */}
      <div className={`flex items-center justify-between mb-4 ${visible ? "text-purple-500 hover:text-purple-400" : "text-white/60 hover:text-white/70"} cursor-pointer `} onClick={() => setVisible(!visible)}>
        <p className={`sm:text-xl md:text-2xl font-light`}>{props.title}</p>
        <FontAwesomeIcon icon={visible ? faChevronDown : faChevronUp} className='text-lg md:text-2xl'/>
      </div>
      {/* Projects */}
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 overflow-hidden transition-all ease-in-out duration-1000 ${visible ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"}`}>
        {props.projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

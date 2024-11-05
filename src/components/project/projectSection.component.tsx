import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Project from "./project.component";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ProjectSectionType } from "@/pages/projects";


export default function ProjectSection({ projects, title }: ProjectSectionType) {

  //visibility of section
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="flex flex-col mt-6">
      {/* Title */}
      <div className={`flex justify-between mb-4 ${visible ? "text-purple-500 hover:text-purple-400" : "text-white/50 hover:text-white/70"} cursor-pointer `} onClick={() => setVisible(!visible)}>
        <p className={`text-lg sm:text-xl md:text-2xl `}>{title}</p>
        <FontAwesomeIcon icon={visible ? faChevronDown : faChevronUp} className='text-2xl'/>
      </div>
      {/* Projects */}
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden transition-all duration-1000 ${visible ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"}`}>
        {projects.map((project, index) => (
          <Project key={index} props={project} />
        ))}
      </div>
    </div>
  );
}

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { projectType } from "@/pages/projects";

export default function   Project(props: projectType) {
  //props takes a title, an image, a link, a description, image alt too
  const divStyle = {
    backgroundImage: `url(${props.imagesrc})`,
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div onClick={onOpen} className="dark hover:cursor-pointer border-b border-transparent hover:border-b-white/50">
      <div className="flex items-end min-h-40 md:min-h-60 bg-cover bg-center" style={divStyle}>
      </div>
      <div className="text-white w-full py-2">
          <p className="text-sm md:text-medium font-bold text-white/80">{props.name}</p>
          <p className="text-xs md:text-sm italic text-white/60">{props.date}</p>
        </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
        classNames={{
          body: 'py-6',
          backdrop: "bg-gradient-to-tl from-purple-700/50 via-black/30 to-purple-700/50 backdrop-opacity-20",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
        }}>
        <ModalContent className="">
          {(onClose) => (
            <>
              <ModalHeader>{props.name}</ModalHeader>
              <ModalBody>
                <p>{props.description}</p>
                <div className="flex justify-around w-full text-2xl">
                  <Link href={props.github} className="hover:text-purple-400 transition delay-75">
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <p className="w-full text-center">{props.date}</p>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

// import Link from 'next/link'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button} from "@nextui-org/react";


export default function Project({ props }) {
  //props takes a title, an image, a link, a description, image alt too
  const divStyle = {
    backgroundImage: `url(${props.imagesrc})`,
  }

  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  return (
    // <Link href={props.link}>
    <div onClick={onOpen}>
      <div className="flex items-end min-h-[100px] sm:min-h-[200px] md:min-h-[300px] bg-cover bg-center rounded-lg transition duration-1000 ease-in-out hover:h-full" style={divStyle}>
        <div className="bg-theme-1 bg-opacity-60 p-1 sm:p-4 w-full rounded-b-lg transition duration-450 ease-in-out hover:h-full">
          <p className="text-lg italic sm:underline">{props.name}</p>
          <p className="italic hidden sm:block">{props.description}</p>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{props.name}</ModalHeader>
              <ModalBody>
                <p>
                  {props.description}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>Close</Button>
                {/* <Button color='primary' onPress={onOpen}></Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
    //</Link>
  );
}

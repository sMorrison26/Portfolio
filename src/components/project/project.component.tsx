import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button} from "@nextui-org/react";


export default function Project({ props }) {
  //props takes a title, an image, a link, a description, image alt too
  const divStyle = {
    backgroundImage: `url(${props.imagesrc})`,
  }

  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  return (
    <div onClick={onOpen} className="dark">
      <div className="flex items-end min-h-[100px] sm:min-h-[200px] md:min-h-[300px] bg-cover bg-center rounded-lg transition duration-1000 ease-in-out hover:h-full" style={divStyle}>
        <div className="bg-theme-1 bg-opacity-60 p-1 sm:p-4 w-full rounded-b-lg transition duration-450 ease-in-out hover:h-full">
          <p className="text-lg italic sm:underline">{props.name}</p>
          <p className="italic hidden sm:block">{props.description}</p>
        </div>
      </div>
      <Modal
       isOpen={isOpen} 
       onOpenChange={onOpenChange} 
       backdrop="blur" 
       classNames={{
        body: 'py-6',
        backdrop: "bg-gradient-to-tl from-purple-700/50 via-black/30 to-purple-700/50 backdrop-opacity-20",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        // footer: "border-t-[1px] border-[#292f46]"
        // closeButton: "hover:bg-white/5 active:bg-white/10",
        }}>
        <ModalContent className="">
          {(onClose) => (
            <>
              <ModalHeader>{props.name}</ModalHeader>
              <ModalBody>
                <p>
                  {props.description}
                </p>
              </ModalBody>
              {/* <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>Close</Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

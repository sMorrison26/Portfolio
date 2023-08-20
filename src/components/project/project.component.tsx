import Image from "next/image";
import Link from "next/link";
export default function Project({ props }) {
  //props takes a title, an image, a link, a description, image alt too
  return (
    <div className="flex flex-col justify-around text-center">
      <div className="flex justify-center">
        <p className="text-xl md:text-4xl bg-clip-text bg-gradient-to-r from-text-white to-purple-700 text-transparent font-bold w-fit sm:mb-8">
          {props.name}
        </p>
      </div>
      <div className="flex justify-center m-4">
        <div className="sm:shrink-0">
          <div className="mx-auto flex items-center justify-center">
            <div className="rounded-md bg-gradient-to-b from-text-white via-purple-600 to-purple-800 p-1 h-56 sm:h-96 w-56 sm:w-96 mx-8 sm:mx-16 my-4 sm:my-8">
              <Link href={props.link} target="_blank">
                <div className="rounded-md h-full w-full bg-slate-900 relative overflow-hidden">
                  <Image
                    className="object-cover"
                    src={props.imagesrc}
                    fill={true}
                    sizes="50vw"
                    alt={props.alt}
                    priority={true}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto w-56 sm:w-96">
        <p className="text-center italic">{props.description}</p>
      </div>
    </div>
  );
}

/*
- put a max word count on description to press read more.
- image should be at certain height and width. 

*/

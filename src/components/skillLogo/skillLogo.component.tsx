import Image from "next/image";
import { useEffect, useState } from "react";

export default function SkillLogo({ src, alt, color }) {

  const [outlineColor, setOutlineColor] = useState('outline-white');

  useEffect(() => {
    setOutlineColor('outline-' + color + '-700');
  }, [outlineColor]);

  return (
    <div className={`flex justify-center items-center outline outline-2 ${color} rounded-sm mx-auto p-2 w-10 sm:w-12 md:w-14 lg:w-18 h-10 sm:h-12 md:h-14 lg:h-18`}>
      <Image src={src} alt={alt} className="object-contain h-full"/>
    </div>
  );
}

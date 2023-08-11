import { useState } from 'react';
import Project from '../components/project/project.component'
export default function Projects() {
    // const projectsList = [
    //     { name: "Project1", description: "description1", link: "link1", imagesrc: "imagesrc1" },
    //     { name: "Charity Finder", description: "An application developed by 3 students at RPI", link: "/charityFinder", imagesrc: "src" },
    //     { name: "Project1", description: "pickle app", link: "link1", imagesrc: "imagesrc1" },
    //     { name: "Project1", description: "itws personal page", link: "link1", imagesrc: "imagesrc1" }
    // ]
    const projectsList = [];
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = currentPage - 1;
    const endIndex = startIndex + 1;
    
    const visibileItems = projectsList.slice(startIndex,endIndex);

    return (
        // take a project component that takes a name, a link, a description, an image,
        <div className='bg-slate-500 text-text-white rounded-lg shadow w-1/2 m-auto'>
            <div className="flex flex-col justify-between items-center mt-24 p-4 w-full max-w-screen-md mx-auto">
                <div className=''>
                    <ul>
                        {visibileItems.map(item => (
                            <li key={item.name}>{item.description}</li>
                        ))}
                    </ul>
                </div>
                <div className='mt-4'>
                    <button className='group bg-slate-900 rounded-md shadow p-1 disabled:bg-slate-600 disabled:text-gray-500 mr-4' onClick={() => setCurrentPage(currentPage-1)} disabled={currentPage === 1}>
                    <span className='group-disabled:hidden'>&larr;</span> Previous
                    </button>
                    &nbsp;
                    <button className='group bg-slate-900 rounded shadow py-1 px-2 disabled:bg-slate-600 disabled:text-gray-500 ml-4' onClick={() => setCurrentPage(currentPage+1)} disabled={currentPage >= projectsList.length}>
                        Next <span className='group-disabled:hidden'>&rarr;</span> 
                    </button>
                </div>
            </div>
        </div>
    );
}
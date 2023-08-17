import { useState, useEffect } from 'react';
import Project from '../components/project/project.component'
import { encode } from 'punycode';

export default function Projects() {
    
    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const encodedPath = btoa('/assets/text/projects.json');
                const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/getJson?path=${encodedPath}`;
                const response = await fetch(apiUrl);
                console.log(response);
                const data = await response.json();
                // console.log(data);
                setProjectsList(data);
            } catch (error){
                console.error('Error fetching project data: ', error);
            }
        }
        fetchData();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = currentPage - 1;
    const endIndex = startIndex + 1;


    const visibileItems = projectsList.slice(startIndex, endIndex);

    return (
        // take a project component that takes a name, a link, a description, an image
        <div className="flex-1 flex flex-col items-center text-text-white mx-auto max-w-screen-xl">
            <div className="p-4 w-full min-h-full mt-12 md:mt-24">
                <ul>
                    {visibileItems.map(item => (
                        <li key={currentPage}>
                            <Project props={item} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex justify-around sm:mt-8 w-full max-w-[14rem]'>
                    <button className='group bg-slate-900 rounded-md shadow py-1 px-2 disabled:bg-slate-600 disabled:text-gray-500' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                        <span className='group-disabled:hidden'>&larr;</span> Previous
                    </button>
                    <p className='text-xs self-center'>{currentPage}/{projectsList.length}</p>
                    <button className='group bg-slate-900 rounded shadow py-1 px-2 disabled:bg-slate-600 disabled:text-gray-500' onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= projectsList.length}>
                        Next <span className='group-disabled:hidden'>&rarr;</span>
                    </button>
            </div>
        </div>
        // <div className='flex-1 bg-sky-900 h-full'>p</div>
    );
}

//TODO: I should find a way to edit an outer file that cannot be modified by outside people
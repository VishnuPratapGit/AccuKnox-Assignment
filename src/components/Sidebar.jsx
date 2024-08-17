import { useState } from 'react'
import SidebarInputs from './SidebarInputs.jsx';
import { useSelector } from 'react-redux';
import { X } from 'lucide-react';

const Sidebar = ({ showSidebar, setShowSidebar, setCategories }) => {
    const [active, setActive] = useState("CSPM");
    const categories = useSelector(state => state.widgets.categories);

    return (
        <>
            <div
                className={`h-svh w-1/2 z-10 dark:bg-neutral-900 bg-white fixed top-0 border-r dark:border-neutral-800 transition-transform duration-500 ${showSidebar ? "-translate-x-0" : "-translate-x-full"}`}
            >
                <div className='bg-violet-900 text-white p-3 pl-5 flex justify-between'>
                    <div className='flex items-center text-lg'>Add Widget</div>
                    <div className='cursor-pointer mb-2' onClick={() => setShowSidebar(false)} >
                        <X />
                    </div>
                </div>

                <h3 className='p-5 py-8'>Personalise your Dashboard by adding the following Widget</h3>

                <div className='flex gap-10 p-3 px-10'>
                    <div
                        onClick={() => setActive("CSPM")}
                        className={`hover:border-b-2 border-blue-600 cursor-pointer ${active === 'CSPM' ? 'border-b-2' : ''}`}>
                        CSPM
                    </div>
                    <div
                        onClick={() => setActive("CWPP")}
                        className={`hover:border-b-2 border-blue-600 cursor-pointer ${active === 'CWPP' ? 'border-b-2' : ''}`}>
                        CWPP
                    </div>
                    <div
                        onClick={() => setActive("Images")}
                        className={`hover:border-b-2 border-blue-600 cursor-pointer ${active === 'Images' ? 'border-b-2' : ''}`}>
                        Image
                    </div>
                    <div
                        onClick={() => setActive("Ticket")}
                        className={`hover:border-b-2 border-blue-600 cursor-pointer ${active === 'Ticket' ? 'border-b-2' : ''}`}>
                        Ticket
                    </div>
                </div>

                {categories.map((category) => (
                    active === category.name.split(' ')[0] &&
                    category.widgets.map((widget) => (
                        <SidebarInputs key={widget.id} widget={widget} categoryId={category.id} />
                    ))
                ))}
            </div>
        </>
    )
}

export default Sidebar
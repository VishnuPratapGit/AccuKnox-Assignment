import { X } from 'lucide-react';
import { useState } from 'react';

const Widget = ({ setShowSidebar, widgetObj, showBtn = false, onDelete }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="border dark:border-neutral-700 flex justify-center items-center rounded-xl p-2 h-44 m-2 dark:bg-neutral-900 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {showBtn ? (
                <button
                    onClick={() => setShowSidebar(true)}
                    className="border-2 border-neutral-500"
                >
                    + Add Widget
                </button>
            ) : (
                <>
                    <div className="flex-grow text-center">{widgetObj.name}</div>
                    {isHovered && (
                        <div
                            onClick={() => onDelete(widgetObj.id)}
                            className="absolute top-2 right-2 text-red-600 cursor-pointer"
                        >
                            <X />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Widget;

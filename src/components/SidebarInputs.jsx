import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { widgetInputChange, toggleWidgetFlag } from '../redux/widgetsSlice.js';


const SidebarInputs = ({ widget, categoryId, onFlagChange }) => {
    const [label, setLabel] = useState(widget.name);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const newLabel = e.target.value;
        setLabel(newLabel);
        dispatch(widgetInputChange({ categoryId, widgetId: widget.id, input: newLabel }));
    };

    const handleFlagChange = () => {
        const newFlag = !widget.flag;
        // onFlagChange(newFlag);
        dispatch(toggleWidgetFlag({ categoryId, widgetId: widget.id, flag: newFlag }));
    };

    return (
        <div className='flex justify-start items-center border dark:border-neutral-700 gap-4 rounded-md p-3 mx-10 mt-5'>
            <input
                type="checkbox"
                checked={widget.flag}
                onChange={handleFlagChange}
                name={widget.name}
                id={widget.id}
            />
            <label htmlFor={widget.id}></label>
            <input
                className='bg-transparent h-full w-full outline-none'
                value={label}
                type="text"
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SidebarInputs;
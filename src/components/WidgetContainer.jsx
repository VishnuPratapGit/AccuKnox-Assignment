import Widget from "./Widget";
import { useDispatch } from 'react-redux';
import { toggleWidgetFlag } from '../redux/widgetsSlice.js';

export default function WidgetContainer({ heading, setShowSidebar, category }) {
    const dispatch = useDispatch();

    const handleDeleteWidget = (categoryId, widgetId, flag) => {
        dispatch(toggleWidgetFlag({ categoryId, widgetId, flag }));
    };

    return (
        <>
            <h2 className="mt-4 p-2 dark:text-white">{heading}</h2>
            <div className="border dark:border-neutral-700 p-2 h-max w-full grid sm:grid-cols-3 dark:bg-neutral-800 rounded-2xl">
                {category.widgets.filter((widgetObj) => widgetObj.flag).map((widgetObj) => (
                    <Widget
                        key={widgetObj.id}
                        setShowSidebar={setShowSidebar}
                        widgetObj={widgetObj}
                        onDelete={(widgetId) => handleDeleteWidget(category.id, widgetId, false)}
                    />
                ))}
                <Widget setShowSidebar={setShowSidebar} showBtn={true} />
            </div>
        </>

    )
}
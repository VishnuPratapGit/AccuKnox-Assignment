import { useState } from "react";
import Sidebar from "./components/Sidebar";
import WidgetContainer from "./components/WidgetContainer";
import { Menu } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const categories = useSelector(state => state.widgets.categories);

  return (
    <>
      <div
        className="dark:bg-neutral-900 z-10 dark:border-b dark:border-neutral-600 shadow-md bg-white d cursor-pointer fixed w-full p-4 top-0"
        onClick={() => setShowSidebar(true)}>
        <Menu />
      </div>

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className="min-h-svh w-full sm:px-20 pt-20">
        {categories.map((category) => (
          <WidgetContainer
            key={category.id}
            heading={category.name}
            setShowSidebar={setShowSidebar}
            category={category}
          />
        ))}
      </div>
    </>
  )
}

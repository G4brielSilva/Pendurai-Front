import { FC, ReactNode } from "react";

interface SidebarComponentProps {
    id?: string;
    title?: string;
    children?: ReactNode;
}

const Sidebar: FC<SidebarComponentProps> = ({
    id = 'sidebar',
    title = 'Title',
    children
}) => {
  return (
    <div id={id} className="min-w-[24%] sm:min-w-[16%] h-100 bg-gray-500 text-white">
      <h2 className="text-2xl p-4">{title}</h2>
      <ul className="p-4 gap-18">
        {children}
      </ul>
    </div>
  );
};

export default Sidebar;

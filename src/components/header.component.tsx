import { FC } from "react";

interface HeaderComponentProps {
    id?: string;
    title?: string;
}

const HeaderComponent: FC<HeaderComponentProps> = ({
    id = 'header',
    title = 'Title',
}) => {
    return <>
        <div id={id} className="flex items-start justify-start pt-12 pl-8">
            <h1 className="overflow text-4xl sm:text-6xl font-bold text-gray-600">
                {title}
            </h1>
        </div>
    </>;
};

export default HeaderComponent;
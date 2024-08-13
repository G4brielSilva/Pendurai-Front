import { FC, ReactNode } from "react";
import LoginButton from "./button.component";

interface FormComponentProps {
    id?: string;
    title?: string;
    buttonTitle?: string;
    placeholder?: string;
    required?: boolean;
    children?: ReactNode;
}

const FormComponent: FC<FormComponentProps> = ({
    id = 'form',
    title = 'title',
    buttonTitle = 'Send',
    children
}) => {
    return <>
        <div className="flex flex-col items-center justify-start h-full p-4 mt-[15%] sm:mt-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-500 mb-4">{title}</h2>
            <form 
                id={id} 
                className="w-full min-w-sm max-w-xl min-h-1/3 sm:min-h-vs bg-white p-8 rounded-lg shadow-md"
            >
                {children}
                <LoginButton
                    buttonTitle="Enter"
                />
            </form>
        </div>
    </>;
};

export default FormComponent;
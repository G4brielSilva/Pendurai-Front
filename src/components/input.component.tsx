import { FC } from "react";

interface InputComponentProps {
    id?: string;
    type?: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    margin?: string;
}

const InputComponent: FC<InputComponentProps> = ({
    id = 'input',
    type = 'text',
    label = 'Input',
    placeholder = 'placeholder',
    required = false,
    margin = 'mt-4',
}) => {
    return <>
        <label htmlFor={id} className={"block text-gray-600 text-sm sm:text-lg font-bold mb-1 " + margin}>
            {label}
        </label>
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="w-full px-3 py-1 sm:py-2 text-gray-600 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-gray-400"
            required={required}
        />
    </>;
};

export default InputComponent;
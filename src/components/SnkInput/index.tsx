import React from "react";

interface Params{
    type: string,
    id: string,
    className?: string,
    placeholder?: string
}

const SnkInput: React.FC<Params> = ({
    type,
    className,
    id,
    placeholder
}) => {
    return (
        <input type={type} className={className} id={id} placeholder={placeholder} />
    )
}

export default SnkInput;
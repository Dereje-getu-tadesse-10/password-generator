import * as React from "react"



export const Checkbox = ({label, checked, onChange, disabled}) => {
    return (
        <div className="flex items-center">
            <input type="checkbox" id={label} className="w-6 h-6 cursor-pointer"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={label} className="ml-2 text-white font-medium tracking-[.1px] cursor-pointer">
                {label}
            </label>
        </div>
    )
}
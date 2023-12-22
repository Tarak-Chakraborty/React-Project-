import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-emerald-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 mt-7 rounded-lg text-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
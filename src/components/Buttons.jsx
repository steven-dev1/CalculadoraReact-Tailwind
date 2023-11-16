function Button({children}) {
    return (
        <button className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-800 transition-all duration-200 m-1">{children}</button>
    )
}

export default Button
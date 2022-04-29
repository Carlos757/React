const header = ({ children }) => {
    return (
        <>
            <header className="text-center bg-blue-600 sm:rounded-b-full py-3">
                <h1 className="text-slate-100 text-3xl font-light ">
                    {children + " "}
                    <span className=" text-3xl w-full text-slate-800 font-bold">
                        Veterinaria
                    </span>
                </h1>
            </header>
        </>
    );
};
export default header;

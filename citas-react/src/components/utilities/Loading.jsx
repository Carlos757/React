import React from "react";

const Loading = () => {
    return (
        <>
            <p className=" text-3xl text-center flex justify-center items-center h-full">
                <i className="fa-solid fa-circle-notch fa-spin mr-3"></i>
                Cargando
            </p>
        </>
    );
};

export default Loading;

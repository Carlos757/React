import React from "react";

const NoData = () => {
    return (
        <>
            <p className=" text-3xl text-center flex justify-center flex-col items-center h-full">
                <i className="fa-solid fa-circle-info mr-3"></i>
                No hay pacientes registrados
            </p>
        </>
    );
};

export default NoData;

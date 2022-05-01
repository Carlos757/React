import React from "react";

const Alerta = ({ text }) => {
    return (
        <div className="alerta error">
            <p className="">{text}</p>
        </div>
    );
};

export default Alerta;

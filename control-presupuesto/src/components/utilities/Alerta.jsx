import React from "react";

const Alerta = ({ text }) => {
    return (
        <div className="alerta error">
            <span className="">{text}</span>
        </div>
    );
};

export default Alerta;

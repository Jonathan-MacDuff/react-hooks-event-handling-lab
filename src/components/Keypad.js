import React from "react";

function Keypad (){
    function keyEvent() {
        console.log ("Entering password...")
    };
    return (
        <div>
            <input onChange={keyEvent} type="password" />
        </div>
    )
}

export default Keypad;
import { useState, useEffect } from "react";

function Texting({text}) {
    const [texting, stateTexting] = useState('');

    useEffect(() =>  {
        const interval = setInterval(() => {
            stateTexting((prev) => prev + texting)
        }, 100);
        return () => clearInterval(interval);
    })

    return  (
        <span>{text}</span>
    )
}

export default Texting;
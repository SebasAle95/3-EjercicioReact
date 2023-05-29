import { useState } from "react";



const Sta = () => {

const [cambio, setCambio] = useState('');


    return (
        <div>
            <h2>{cambio}</h2>
            <button onClick={()=> setCambio('from changed state')}>Click Me</button>
        </div>
    );
};

export default Sta;
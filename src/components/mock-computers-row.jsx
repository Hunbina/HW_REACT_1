import React, { useState } from "react"
import { MockComputersRowCells } from "./mock-computer-row-cell";

export function MockComputersRow(props){
    const [bought, setBought] = useState(false);

    const handleBoughtMock = () => {
        setBought(!bought);
    };
   
    return (
            <tr key={props.mock.cpu} className={bought===false ? 'mock' : 'mock bought'}>
                <MockComputersRowCells mock = {props.mock} boughtMock={handleBoughtMock}/>
            </tr>
        )
    
}
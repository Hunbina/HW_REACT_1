import React, { useState } from "react"

export function MockComputersRowCells(props){
        return(
            <>
                <td>{props.mock.cpu}</td>
                <td>{props.mock.location}</td>
                <td>{props.mock.RAM}</td>
                <td>{props.mock.drivers.type}</td>
                <td>{props.mock.drivers.size}</td>
                <td>
                    <button onClick={() => props.boughtMock()}>BUY</button>
                </td>
            </>
        );
}
import React from "react"

const headerNames=['cpu', 'location', 'RAM', 'drivers', 'type', 'size', 'actions']
export function MockComputersHeader(props){
    const handleClickFactory = (column) =>{
        return()=>{
            props.handleSort(column);
        }
    }
    return(
        <thead>     
            <tr>
              <th onClick={handleClickFactory(headerNames[0])} rowSpan={2}>{headerNames[0]}</th>
              <th onClick={handleClickFactory(headerNames[1])} rowSpan={2}>{headerNames[1]}</th>
              <th onClick={handleClickFactory(headerNames[2])} rowSpan={2}>{headerNames[2]}</th>
              <th colSpan={2}>{headerNames[3]}</th>  
              <th rowSpan={2}>{headerNames[6]}</th>  
            </tr>
            <tr>
                <th onClick={handleClickFactory(headerNames[4])}>{headerNames[4]}</th>
                <th onClick={handleClickFactory(headerNames[5])}>{headerNames[5]}</th>
            </tr>
           
        </thead> 
    )
}
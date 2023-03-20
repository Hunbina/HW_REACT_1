import { MockComputersHeader } from "./mock-computers-header";
import React, { useRef, useState } from "react";
import { MockComputersRow } from "./mock-computers-row";

const MockComputersMock = [
    {cpu: 'AMD', location: 'LONDON', RAM: 32, drivers: {type: 'HDD', size: 512}},
    {cpu: 'INTEL', location: 'LONDON', RAM: 32, drivers: {type: 'HDD', size: 512}},
    {cpu: 'INTEL', location: 'NEW YORK', RAM: 32, drivers: {type: 'SDD', size: 512}},
    {cpu: 'AMD', location: 'NEW YORK', RAM: 32, drivers: {type: 'SDD', size: 512}},
    {cpu: 'AMD', location: 'NEW YORK', RAM: 64, drivers: {type: 'SDD', size: 512}},
    {cpu: 'AMD', location: 'NEW YORK', RAM: 64, drivers: {type: 'SDD', size: 1024}},
  ];

  const SearchColumns = ['cpu', 'location', 'RAM', 'type', 'size']

export function MockComputersList() {

    const [MockComputers, setMocks] = useState(MockComputersMock);
    const [FilteredMockComputers, setFilteredMocks] = useState(MockComputersMock);

    const handleSort = (column) => {
        const newMockComputers =[...FilteredMockComputers].sort((a, b) => {
            if(typeof a === 'number') return a[column] - b[column];
            return a[column] > b[column] ? 1 :-1;
        });
        setFilteredMocks(newMockComputers);
    }

    const inputFilter = useRef(null);

    const handleFilter = (event)=>{

        const searchString = inputFilter.current.value
        const newMocks = MockComputersMock.filter((el) =>{
            for (const column of SearchColumns) {
                const searchElement = ''+ el[column];
                if (searchElement.toLowerCase().trim().includes(searchString.toLowerCase().trim())) return true;              
            }
            return false;
        });

        setFilteredMocks(newMocks)
    };
    return (
        <>
            <span>
                <label htmlFor="filter">Sort me</label>
                <input ref={inputFilter} type="text" id="filter" onChange={handleFilter}></input>
            </span>
            <table>
                <MockComputersHeader handleSort={handleSort}/>  
                <tbody>
                    {FilteredMockComputers.map((el) =>{
                        return <MockComputersRow mock={el} />;
                        })}
                </tbody>
            </table>
        </ >   
        )
}
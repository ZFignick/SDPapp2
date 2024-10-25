// src/components/HousingTable.jsx
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useTable } from "react-table";
import "../styles/HousingTable.css";

const HousingTable = () => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        Papa.parse("../public/AffordableHousing.csv", {
            download: true,
            header: true,
            complete: (results) => {
                setData(results.data);
                if (results.data.length > 0) {
                    const cols = Object.keys(results.data[0]).map((key) => ({
                        Header: key,
                        accessor: key,
                    }));
                    setColumns(cols);
                }
            },
            error: (error) => {
                console.error("Error parsing CSV file:", error);
            }
        });
    }, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div className="table-container">
            <table {...getTableProps()} className="mt-20">
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            ))}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default HousingTable;
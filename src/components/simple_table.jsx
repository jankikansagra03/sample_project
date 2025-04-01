import React from "react";

const TableComponent = () => {
    const tableData = [
        { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
        { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
        { id: 3, name: "Alice Brown", age: 25, email: "alice@example.com" },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">ID</th>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Age</th>
                        <th className="px-4 py-2 border">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border">{row.id}</td>
                            <td className="px-4 py-2 border">{row.name}</td>
                            <td className="px-4 py-2 border">{row.age}</td>
                            <td className="px-4 py-2 border">{row.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;

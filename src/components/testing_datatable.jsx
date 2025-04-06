import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-dt";
import axios from "axios";

const DataTable = () => {
  const tableRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  // Fetch data from API
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/all-users")
      .then((response) => {
        console.log("Users fetched:", response.data);
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else if (Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        } else {
          throw new Error("Invalid response format");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError(error.response?.data?.message || "Failed to fetch users");
        setLoading(false);
      });
  }, []);

  // Initialize DataTable
  useEffect(() => {
    if (users.length > 0 && tableRef.current) {
      // Destroy previous DataTable instance if exists
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().destroy();
      }

      // Initialize DataTable
      $(tableRef.current).DataTable({
        paging: true,
        searching: true,
        ordering: true,
        data: users,
        columns: [
          {
            title: "Sr.NO",
            data: null,
            render: function (data, type, row, meta) {
              return meta.row + 1;
            },
          },
          { title: "Name", data: "fullname" },
          { title: "Email", data: "email" },

        ],
      });
    }
  }, [users]);

  return (
    <div>
      <h2>User Data</h2>

      {loading && <p className="text-center text-gray-500">Loading users...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && users.length > 0 ? (
        <table ref={tableRef} className="display">
          <thead>
            <tr>
              <th>Sr.NO</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{ }</td>
                <td>{user.name}</td> {/* Ensure this matches the API */}
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default DataTable;




import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-dt";
import axios from "axios";

const DataTable = () => {
  const tableRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (users.length > 0 && !$.fn.DataTable.isDataTable(tableRef.current)) {
      $(tableRef.current).DataTable({
        paging: true,
        searching: true,
        ordering: true,
        destroy: true, // Add this to destroy existing instance
        data: users, // Add the data directly
        columns: [
          { data: "_id" },
          { data: "fullname" },
          { data: "email" },
          { data: "role" },
        ],
      });
    }
  }, [users]); // Add users as dependency

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/all-users") // Replace with actual API URL
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
        console.error("Error fetching users:", error.response || error);
        setError(error.response?.data?.message || "Failed to fetch users");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Updated users state:", users);
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
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
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

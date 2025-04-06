import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-dt";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataTable = () => {
  const tableRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch data from API
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/api/users/all-users")
      .then((response) => {
        setUsers(response.data.users); // Make sure this is correct
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  };

  // Initialize DataTable once users are loaded
  useEffect(() => {
    if (users.length > 0 && tableRef.current) {
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().destroy(); // Destroy previous table if any
      }

      $(tableRef.current).DataTable({
        paging: true,
        searching: true,
        ordering: true,
        data: users,
        columns: [
          { title: "Sr.NO", data: null, render: (_, __, ___, meta) => meta.row + 1 },
          { title: "Name", data: "fullname" },
          { title: "Email", data: "email" },
          {
            title: "Action",
            data: null,
            render: function (data, type, row) {
              return ` 
                <button class="view-btn btn btn-info btn-sm" data-id="${row._id}">View</button>
                <button class="edit-btn btn btn-warning btn-sm" data-id="${row._id}">Edit</button>
                <button class="delete-btn btn btn-danger btn-sm" data-id="${row._id}">Delete</button>
              `;
            },
          },
        ],
      });

      $(tableRef.current).on("click", ".view-btn", function () {
        handleView($(this).data("id"));
      });

      $(tableRef.current).on("click", ".edit-btn", function () {
        handleEdit($(this).data("id"));
      });

      $(tableRef.current).on("click", ".delete-btn", function () {
        handleDelete($(this).data("id"));
      });
    }

    // Cleanup the DataTable on component unmount
    return () => {
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().destroy();
      }
    };
  }, [users]);

  // View User
  const handleView = (id) => {
    // axios.get(`http://localhost:5000/api/users/users/${id}`).then((response) => {
    //   alert(`User Details:\nName: ${response.data.fullname}\nEmail: ${response.data.email}`);
    // });
    navigate(`/admin/view-user/${id}`); // Correct usage of navigate
  };

  // Edit User
  const handleEdit = (id) => {
    alert(`Edit User with ID: ${id}`);
    navigate(`/admin/edit-user/${id}`); // Correct usage of navigate
  };

  // Delete User
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:5000/api/users/delete-user/${id}`)
        .then(() => {
          alert("User deleted successfully!");
          fetchUsers();
        })
        .catch(() => alert("Failed to delete user"));
    }
  };

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>
                  <button className="view-btn btn btn-info btn-sm" data-id={user._id}>
                    View
                  </button>
                  <button className="edit-btn btn btn-warning btn-sm" data-id={user._id}>
                    Edit
                  </button>
                  <button className="delete-btn btn btn-danger btn-sm" data-id={user._id}>
                    Delete
                  </button>
                </td>
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

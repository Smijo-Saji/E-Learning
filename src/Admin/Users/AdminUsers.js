import React from "react";
import "./AdminUsers.css";
import Layout from "../Utils/Layout";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
function AdminUsers() {
  return (
    <div className="d-flex">
      <Layout />
      <div className="users-div p-3">
        <h3 className="mb-4">All Users</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Update Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Button>Update Role</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AdminUsers;

import React, { useContext, useEffect, useState } from "react";
import "./AdminUsers.css";
import Table from "react-bootstrap/Table";
import { Button, Modal } from "react-bootstrap";
import { userContext } from "../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../..";
import toast from "react-hot-toast";

function AdminUsers() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/users`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const updateRoleHandler = async (id) => {
    try {
      const { data } = await axios.put(
        `${base_url}/api/user/${id}`,
        {},
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      toast.success(data.message);
      fetchUsers();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (user && user.role !== "admin") return navigate("/");
    fetchUsers();
  }, []);

  const handleUpdateClick = (id) => {
    setSelectedUserId(id);
    setShowModal(true);
  };

  const handleConfirmUpdate = () => {
    if (selectedUserId) {
      updateRoleHandler(selectedUserId);
    }
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUserId(null);
  };

  return (
    <div>
      <div className="users-div">
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
            {users &&
              users.map((e, i) => (
                <tr key={e._id}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.role === "admin" ? "Teacher" : "User"}</td>
                  <td>
                    <Button onClick={() => handleUpdateClick(e._id)}>
                      Update Role
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <img
              src="https://i.postimg.cc/pTp5F1Qv/images-removebg-preview-5.png"
              alt=""
              className="warnig-model-img"
            />
            <p className="text-center fw-bold mt-2">Are You Sure?</p>
            <p className="text-center">
              All values associated with this field will be changed.{" "}
            </p>
            <div className="mx-3 d-flex flex-column gap-3">
              <button className="btn btn-warning" onClick={handleConfirmUpdate}>
                Update Role
              </button>
              <button className="btn border" onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AdminUsers;

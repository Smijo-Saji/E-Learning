import React, { useState } from "react";
import "./AdminCourses.css";
import Layout from "../Utils/Layout";
import CourseCard from "../../components/CradComponents/CourseCard";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function AdminCourses() {
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  return (
    <div className="d-flex">
      <Layout />
      <div className="main-course-div">
        <div className="course-list-div p-3">
          <div className="all-course-div border p-2 rounded">
            <h3>All Courses</h3>
            <div className="admin-course-card-sec d-flex gap-2 justify-content-evenly flex-wrap">
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
        <div className="course-add-div p-3">
          <div className="add-form-div p-2 border rounded">
            <h3>Add Course</h3>
            <Form.Floating className="mb-2">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Mearn Stack"
              />
              <label htmlFor="floatingInputCustom">Title</label>
            </Form.Floating>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Description"
              className="mb-2"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a description here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Form.Floating className="mb-2">
              <Form.Control
                id="floatingPriceCuston"
                type="number"
                placeholder="Price"
              />
              <label htmlFor="floatingInputCustom">Price</label>
            </Form.Floating>
            <Form.Floating className="mb-2">
              <Form.Control
                id="floatingCreatedByCuston"
                type="text"
                placeholder="Created By"
              />
              <label htmlFor="floatingInputCustom">Created By</label>
            </Form.Floating>
            <FloatingLabel
              controlId="floatingSelect"
              label="Category"
              className="mb-2"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="Game Development">Game Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
              </Form.Select>
            </FloatingLabel>
            <Form.Floating className="mb-2">
              <Form.Control
                id="floatingBurationCuston"
                type="number"
                placeholder="Duration"
              />
              <label htmlFor="floatingInputCustom">Duration</label>
            </Form.Floating>

            <Form.Control
              id="floatingBurationCuston"
              type="file"
              placeholder="Preview"
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <div className="d-flex justify-content-center">
                <img src={imagePrev} alt="" className="mt-1 w-50" />
              </div>
            )}
            <div className="d-flex justify-content-center my-3">
              <button className="btn btn-success">Add</button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AdminCourses;

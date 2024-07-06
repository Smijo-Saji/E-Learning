import React, { useContext, useEffect, useState } from "react";
import "./AdminCourses.css";

import CourseCard from "../../components/CradComponents/CourseCard";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { userContext } from "../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { courseContext } from "../../context/CourseContextProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { base_url } from "../..";

function AdminCourses() {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  const { courses, fetchCourses } = useContext(courseContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [createdBy, SetCreatedBy] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const courseAddHandler = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      description === "" ||
      category === "" ||
      price === "" ||
      createdBy === "" ||
      duration === "" ||
      image === ""
    ) {
      setError("*Please Fill All Fields");
    } else {
      setError("");
      setBtnLoading(true);
      const myForm = new FormData();
      myForm.append("title", title);
      myForm.append("description", description);
      myForm.append("category", category);
      myForm.append("price", price);
      myForm.append("createdBy", createdBy);
      myForm.append("duration", duration);
      myForm.append("file", image);

      try {
        const { data } = await axios.post(
          `${base_url}/api/course/new`,
          myForm,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );

        toast.success(data.message);
        setBtnLoading(false);
        await fetchCourses();
        setImage("");
        setTitle("");
        setCategory("");
        setDescription("");
        setDuration("");
        SetCreatedBy("");
        setImagePrev("");
        setPrice("");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (user.role !== "admin") return navigate("/");
  }, []);

  return (
    <div>
      <div className="main-course-div">
        <div className="course-list-div mb-3 pe-2">
          <div className="all-course-div border p-2 rounded">
            <h3>All Courses</h3>
            <div className="admin-course-card-sec d-flex gap-3 justify-content-evenly flex-wrap py-3">
              {courses && courses.length > 0 ? (
                courses.map((i) => <CourseCard course={i} />)
              ) : (
                <p>No Courses Yet!!</p>
              )}
            </div>
          </div>
        </div>
        <div className="course-add-div ">
          <div className="add-form-div p-2 border rounded">
            <h3>Add Course</h3>
            <Form.Floating className="mb-2">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Mearn Stack"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FloatingLabel>
            <Form.Floating className="mb-2">
              <Form.Control
                id="floatingPriceCuston"
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label htmlFor="floatingInputCustom">Price</label>
            </Form.Floating>
            <Form.Floating className="mb-2">
              <Form.Control
                id="floatingCreatedByCuston"
                type="text"
                placeholder="Created By"
                value={createdBy}
                onChange={(e) => SetCreatedBy(e.target.value)}
              />
              <label htmlFor="floatingInputCustom">Created By</label>
            </Form.Floating>
            <FloatingLabel
              controlId="floatingSelect"
              label="Category"
              className="mb-2"
            >
              <Form.Select
                aria-label="Floating label select example"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
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
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
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
              <div
                className="d-flex justify-content-center mt-3"
                style={{ height: "100px" }}
              >
                <img src={imagePrev} alt="" className="mt-1 w-50" />
              </div>
            )}
            <p className="text-danger text-center error-msg m-0 my-1 ">
              {error}
            </p>
            <div className="d-flex justify-content-center mb-3">
              <button
                className="btn btn-success w-100 mb-2 mt-3"
                disabled={btnLoading}
                onClick={(e) => courseAddHandler(e)}
              >
                {btnLoading ? "Please Wait.," : "Add"}
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AdminCourses;

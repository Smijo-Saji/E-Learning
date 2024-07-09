import React, { useEffect, useState } from "react";
import "./Lecture.css";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../..";
import Loading from "../../components/Loading/Loading";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import toast from "react-hot-toast";
import Comments from "../../components/Comments/Comments";

function Lecture({ user }) {
  const navigate = useNavigate();
  const params = useParams();

  const [course, setCourse] = useState({});
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lecLoading, setLecLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPreview, setVideoPreview] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  //model-1
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //model-2
  const [showModal, setShowModal] = useState(false);
  const [selectedLecId, setSelectedLecId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedLecId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedLecId) {
      deleteHandler(selectedLecId);
    }
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLecId(null);
  };

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${base_url}/api/lecture/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      toast.success(data.message);
      fetchLectures();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //fetching lectures
  const fetchLectures = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/lectures/${params.id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setLectures(data.lectures);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //fetching lecture
  const fetchLecture = async (id) => {
    setLecLoading(true);
    try {
      const { data } = await axios.get(`${base_url}/api/lecture/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLecture(data.lecture);
      setLecLoading(false);
    } catch (error) {
      console.log(error);
      setLecLoading(false);
    }
  };

  const fetchSingleCourse = async () => {
    const { data } = await axios.get(`${base_url}/api/course/${params.id}`);
    setCourse(data.course);
  };

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPreview(reader.result);
      setVideo(file);
    };
  };

  //add lecture

  const addLectureHandler = async (e) => {
    setBtnLoading(true);
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);

    try {
      const { data } = await axios.post(
        `${base_url}/api/course/${params.id}`,
        myForm,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      toast.success(data.message);
      setBtnLoading(false);
      handleClose();
      setTitle("");
      setDescription("");
      setVideo("");
      setVideoPreview("");
      fetchLectures();
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  const [completed, setCompleted] = useState("");
  const [completedLec, setCompletedLec] = useState("");
  const [lectureLength, setLecLength] = useState("");
  const [progress, setProgress] = useState([]);

  async function fetchProgress() {
    try {
      const { data } = await axios.get(
        `${base_url}/api/user/progress?course=${params.id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      setCompleted(data.courseProgressPercentage);
      setCompletedLec(data.completedLectures);
      setLecLength(data.allLectures);
      setProgress(data.progress);
    } catch (error) {
      console.log(error);
    }
  }

  const addProgress = async (id) => {
    try {
      const { data } = await axios.post(
        `${base_url}/api/user/progress?course=${params.id}&lectureId=${id}`,
        {},
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      fetchProgress();
    } catch (error) {
      console.log(error);
    }
  };

  //edit Lecture
  const [titleEdit, setTitleEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [videoEdit, setVideoEdit] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [videoPreviewEdit, setVideoPreviewEdit] = useState("");

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const changeVideoHandlerEdit = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPreviewEdit(reader.result);
      setVideoEdit(file);
    };
  };

  const handleEditClick = async (id) => {
    setSelectedLecId(id);
    const { data } = await axios.get(`${base_url}/api/lecture/${id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    setTitleEdit(data.lecture.title);
    setDescriptionEdit(data.lecture.description);
    setVideoPreviewEdit(`${base_url}/${data.lecture.video}`);
    handleShowEdit(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    const myForm = new FormData();
    myForm.append("title", titleEdit);
    myForm.append("description", descriptionEdit);
    if (videoEdit) {
      myForm.append("file", videoEdit);
    }

    try {
      const { data } = await axios.put(
        `${base_url}/api/lecture/${selectedLecId}`,
        myForm,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      toast.success(data.message);
      setBtnLoading(false);
      handleCloseEdit(false);
      setTitleEdit("");
      setDescriptionEdit("");
      setVideoEdit("");
      setVideoPreviewEdit("");
      fetchLectures();
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.role !== "admin" && !user.subscription.includes(params.id))
      return navigate("/");
    fetchLectures();
    fetchSingleCourse();
    fetchProgress();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container className="my-4" style={{ minHeight: "75vh" }}>
          <Row>
            <Col lg={8} md={8} className="p-2">
              <div className="left-vedio-sec">
                {lecLoading ? (
                  <>
                    <div className="rounded w-100 shimmer-img ">
                      <div class="loading">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <p className="m-0 mt-3 shimmer-p"></p>
                    <p className="m-0 mt-1 shimmer-p-created"></p>
                    <h3 className="m-0 mb-3 shimmer-h3 mt-1"></h3>
                  </>
                ) : (
                  <>
                    {lecture.video ? (
                      <>
                        <video
                          src={`${base_url}/${lecture.video}`}
                          width={"100%"}
                          controls
                          controlsList="nodownload noremoteplayback"
                          disablePictureInPicture
                          disableRemotePlayback
                          autoPlay
                          className="rounded border"
                          onEnded={() => addProgress(lecture._id)}
                        ></video>
                        <h3 className="m-0 mt-3">{lecture.title}</h3>
                        <p className="created-time m-0">
                          {" "}
                          {new Date(lecture.createdAt).toLocaleString(
                            undefined,
                            { timeZone: "Asia/Kolkata" }
                          )}
                        </p>
                        <p className="m-0">{lecture.description}</p>
                      </>
                    ) : (
                      <>
                        <img
                          src={`${base_url}/${course.image}`}
                          width={"100%"}
                          className="rounded border"
                        ></img>
                        <h3 className="m-0 mt-3">{course.title}</h3>
                        <p className="created-time m-0">
                          Course Added at -{" "}
                          {new Date(course.createdAt).toLocaleString(
                            undefined,
                            { timeZone: "Asia/Kolkata" }
                          )}
                        </p>

                        <p className="m-0">{course.description}</p>
                      </>
                    )}
                  </>
                )}
                {user.role === "user" &&
                  (completed === 100 ? (
                    <button
                      className="btn btn-success mt-3 w-100"
                      onClick={() =>
                        (window.location.href =
                          "https://drive.google.com/uc?export=download&id=10YX7RJjNzrvtfOP3O15-S-fKp4RETW3A")
                      }
                    >
                      <i className="fa-solid fa-download me-3"></i>
                      Download Certificate{" "}
                    </button>
                  ) : (
                    <p className="uncomplete-p mt-3">
                      After Course Completion Certificate Will Be Available Here{" "}
                      <i className="fa-solid fa-download"></i>
                    </p>
                  ))}

                <Comments courseId={params.id} />
              </div>
            </Col>
            <Col lg={4} md={4} className="p-2">
              <div className="right-lecture-sec border rounded">
                <div className="right-header-sec  p-2">
                  <h3 className="m-0">{course.title}</h3>
                  <p className="m-0">Eduzen - {course.createdBy} </p>
                  {user.role === "user" && (
                    <div className=" d-flex align-items-center justify-content-between ">
                      <p className="m-0 progress-p">Progress</p>
                      <progress value={completed} max={100} className="w-50" />
                      <p className="m-0 progress-p">
                        {completedLec}/{lectureLength}
                      </p>
                      <p className="m-0 progress-p">
                        ({Math.round(completed)} %)
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-3">
                  {user && user.role === "admin" && (
                    <button
                      className="btn btn-success w-100 mb-3"
                      onClick={handleShow}
                    >
                      Add Lecture
                    </button>
                  )}
                  {lectures && lectures.length > 0 ? (
                    <>
                      {lectures.map((e, i) => (
                        <>
                          <div
                            className={`d-flex justify-content-between align-items-center lecture-card py-1 ps-2 rounded ${
                              lecture._id === e._id && "active-div"
                            }`}
                            key={i}
                            onClick={() => fetchLecture(e._id)}
                          >
                            <div className="d-flex align-items-center gap-3">
                              <i class="fa-solid fa-video"></i>
                              <div>
                                <h6 className="m-0">
                                  {i + 1}. {e.title}
                                </h6>
                                <p className="m-0">Eduzen</p>
                              </div>
                            </div>
                            {progress &&
                              progress[0]?.completedLectures?.includes(
                                e._id
                              ) && (
                                <img
                                  src="https://i.postimg.cc/pdbzs43Y/11-Completed-check-tick-verified-approved-512.webp"
                                  alt=""
                                  style={{ width: "20px" }}
                                  className="me-3"
                                />
                              )}
                          </div>

                          {user && user.role === "admin" && (
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-danger mt-2"
                                onClick={() => handleDeleteClick(e._id)}
                              >
                                Delete Lec {i + 1}
                              </button>
                              <button
                                className="btn border mt-2"
                                onClick={() => handleEditClick(e._id)}
                              >
                                <i class="fa-regular fa-pen-to-square"></i>
                              </button>
                            </div>
                          )}
                          <hr className="m-1" />
                        </>
                      ))}
                    </>
                  ) : (
                    <p>No Lectures Yet !!</p>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {/* add model */}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Add Lecture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="name@example.com"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="floatingInputCustom">Title</label>
          </Form.Floating>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Description"
              style={{ height: "100px" }}
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </FloatingLabel>

          <input
            type="file"
            className="mt-3 form-control"
            placeholder="Choose Video"
            required
            onChange={changeVideoHandler}
          />
          {videoPreview && (
            <video
              src={videoPreview}
              alt=""
              width={"100%"}
              controls
              className="rounded mt-3"
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={btnLoading}
            variant="primary"
            onClick={(e) => addLectureHandler(e)}
          >
            {btnLoading ? "Uploading.." : "Upload"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* lec delete */}

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <img
              src="https://i.postimg.cc/x10jsp5n/stock-vector-attention-sign-icon-warning-icon-1939873015-removebg-preview.png"
              alt=""
              className="warnig-model-img"
            />
            <p className="text-center fw-bold">Are You Sure?</p>
            <p className="text-center">
              This action cannot be undone, All values associated with this
              field will be lost{" "}
            </p>
            <div className="mx-3 d-flex flex-column gap-3">
              <button className="btn btn-danger" onClick={handleConfirmDelete}>
                Delete Lecture
              </button>
              <button className="btn border" onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal for editing lecture */}
      <Modal show={showEdit} onHide={handleCloseEdit} centered>
        <Modal.Header>
          <Modal.Title>Edit Lecture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="name@example.com"
              required
              value={titleEdit}
              onChange={(e) => {
                setTitleEdit(e.target.value);
              }}
            />
            <label htmlFor="floatingInputCustom">Title</label>
          </Form.Floating>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Description"
              style={{ height: "100px" }}
              required
              value={descriptionEdit}
              onChange={(e) => {
                setDescriptionEdit(e.target.value);
              }}
            />
          </FloatingLabel>

          <input
            type="file"
            className="mt-3 form-control"
            placeholder="Choose Video"
            required
            onChange={changeVideoHandlerEdit}
          />

          {videoPreviewEdit && (
            <video
              src={videoPreviewEdit}
              alt=""
              width={"100%"}
              controls
              className="rounded mt-3"
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button
            disabled={btnLoading}
            variant="primary"
            onClick={(e) => handleEditSubmit(e)}
          >
            {btnLoading ? "Updating..." : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Lecture;

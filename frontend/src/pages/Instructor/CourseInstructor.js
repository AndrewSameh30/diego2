import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseInstructor = () => {
  const [course, setCourse] = useState([]);
  const [DiscountRate, setDiscountRate] = useState(null);
  const [DiscountDuration, setDiscountDuration] = useState(null);
  const [Video, setVideo] = useState(null);

  const { id } = useParams();

  const fetchCourses = async () => {
    const { data } = await axios.get(`/api/guest/getcourse/${id}`);

    setCourse(data);
  };

  const handleRateSubmit = async (e) => {
    e.preventDefault();
    const discount = { DiscountRate, DiscountDuration };

    await axios
      .put(`/api/instructor/setdiscount/${id}`, {
        Discount: discount,
      })
      .then((res) => {
        console.log(res);
        alert("Promotion is added");
      });
  };

  const handleSubmitVid = async (e) => {
    e.preventDefault();
    const video = Video;

    await axios
      .put(`/api/instructor/uploadVideoLinkAsCoursePreview/${id}`, {
        Video: video,
      })
      .then((res) => {
        console.log(res);
        alert("Video is added");
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <article>
      <div>
        <h1>{course?.Title}</h1>
        <p> {course?.Subject}</p>
        <p> {course?.Price}</p>
        <p> {course?.Rating}</p>
      </div>

      <form className="userForm" onSubmit={handleRateSubmit}>
        <h3> Add Discount </h3>

        <label>DiscountRate</label>
        <input
          type="Number"
          required
          value={DiscountRate}
          onChange={(e) => setDiscountRate(e.target.value)}
        />

        <label>DiscountDuration</label>
        <input
          type="Number"
          required
          value={DiscountDuration}
          onChange={(e) => setDiscountDuration(e.target.value)}
        />

        <button> set Promotion </button>
      </form>

      <form className="userForm" onSubmit={handleSubmitVid}>
        <h3> Add video for the course </h3>
        <label>Video</label>
        <input
          type="text"
          required
          value={Video}
          onChange={(e) => setVideo(e.target.value)}
        />
        <button> add video </button>
      </form>
    </article>
  );
};

export default CourseInstructor;

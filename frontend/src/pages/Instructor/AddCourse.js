import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AddCourse = () => {
  const [Title, setTitle] = useState("");
  // const [Subject, setSubject] = useState("");
  const [Price, setPrice] = useState("");
  const [Video, setVideo] = useState("");
  // const [Subtitle, setSubtitle] = useState("");
  const [idInst, setIDInst] = useState("");

  const { id } = useParams();

  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/instructor/createcourse`, {
        Title,
        Price,
        instructor: id,
        Video: Video,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="classForm" onSubmit={handleSubmit}>
      <h3> Add new Course </h3>

      <label>Title</label>
      <input
        type="text"
        required
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* <label>Subject</label>
      <input
        type="text"
        required
        value={Subject}
        onChange={(e) => setSubject(e.target.value)}
      /> */}

      <label>Price</label>
      <input
        type="Number"
        required
        value={Price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label>Video Link</label>
      <input
        type="text"
        required
        value={Video}
        onChange={(e) => setVideo(e.target.value)}
      />

      {/* <label>Subtitles</label>
      <input
        type="text"
        required
        value={Subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      /> */}

      <button> Add Course </button>
    </form>
  );
};

export default AddCourse;

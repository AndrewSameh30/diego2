import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ListCardInstructor from "../../components/ListCardInstructor";

const InstructorListCourse = () => {
  const [courses, setCourses] = useState([]);
  const { id } = useParams();

  const fetchCourses = async () => {
    const { data } = await axios.get(`/api/instructor/viewcourse/${id}`);

    setCourses(data);
  };

  const handleChange = async (e) => {
    e.preventDefault();
    if (e.target != null) {
      const { value } = e.target;
      const filteredCourses = courses.filter(
        (course) => course.Title.toLowerCase().includes(value.toLowerCase())
        // || course.Subject.toLowerCase().includes(value.toLowerCase()) ||
        // course.Instructor.toLowerCase().includes(value.toLowerCase())
      );

      setCourses(filteredCourses);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="InstructorListCourse">
      <div className="courses">
        <input type={"text"} onChange={handleChange} />
        <ListCardInstructor searchResults={courses} />
      </div>
    </div>
  );
};

export default InstructorListCourse;

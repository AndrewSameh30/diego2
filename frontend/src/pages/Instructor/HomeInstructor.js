import { useParams } from "react-router-dom";

const HomeInstructor = () => {
  const { id } = useParams();
  return (
    <div className="HomeInstructor">
      <details>
        <summary></summary>
        <nav class="menu">
          <a onClick={() => (window.location.href = `/HomeInstructor/${id}`)}>
            Home
          </a>
          <a onClick={() => (window.location.href = `/AddCourse/${id}`)}>
            Add Course
          </a>
          <a
            onClick={() =>
              (window.location.href = `/InstructorListCourse/${id}`)
            }
          >
            View My Courses
          </a>
          <a
            onClick={() =>
              (window.location.href = `/EditProfileInstructor/${id}`)
            }
          >
            Edit My Profile
          </a>
          <a
            onClick={() => (window.location.href = `/InstructorContract/${id}`)}
          >
            My contract
          </a>

          {/* <a
            onClick={() =>
              (window.location.href = `/EditEmail/${id}`)
            }
          >
            Edit Email
          </a>

          <a
            onClick={() =>
              (window.location.href = `/EditBiography/${id}`)
            }
          >
            Edit Biography
          </a>

          <a
            onClick={() =>
              (window.location.href = `/ChangePassword/${id}`)
            }
          >
            Change Password
          </a> */}

          <a onClick={() => (window.location.href = `/mostview`)}>mostview</a>
        </nav>
      </details>
    </div>
  );
};

export default HomeInstructor;

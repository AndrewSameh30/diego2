import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditBiography = () => {
  const [Biography, setBiography] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const { id } = useParams();

  const [instructor, setInstructor] = useState({});

  useEffect(() => {
    const getInstructor = async () => {
      const response = await axios.get(`/api/instructor/viewinstructor/${id}`);
      setInstructor(response.data);
    };
    getInstructor();
  }, []);

  const handleSubmitBio = async (e) => {
    e.preventDefault();
    const biography = { Biography };
    const response = await axios.put(
      `/api/instructor/editbiography/${id}`,
      biography
    );

    if (response.data) {
      console.log(response.data);
      alert("updated successfully");
      window.location.href = `/EditProfileInstructor/${id}`;
    }
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    const email = { Email };
    const response = await axios.put(`/api/instructor/editemail/${id}`, email);

    if (response.data) {
      console.log(response.data);
      alert("updated successfully");
      window.location.href = `/EditProfileInstructor/${id}`;
    }
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    const password = { Password };
    const response = await axios.put(
      `/api/instructor/changepassword/${id}`,
      password
    );

    await axios.post(`/api/instructor/receiveemail/${id}`);

    if (response.data) {
      console.log(response.data);
      alert("updated successfully");
      window.location.href = `/EditProfileInstructor/${id}`;
    }
  };

  return (
    <div>
      <p>Email: {instructor?.Email}</p>
      <p>Biography: {instructor?.Biography}</p>
      <p>Money: {instructor?.Money}</p>
      <p>Ratings: {instructor?.Rate}</p>

      <h3> Edit </h3>

      <label>new Biography</label>
      <input
        type="text"
        required
        onChange={(e) => setBiography(e.target.value)}
      />

      <button onClick={handleSubmitBio}> update </button>

      <label>new Email</label>
      <input type="text" required onChange={(e) => setEmail(e.target.value)} />

      <button onClick={handleSubmitEmail}> update </button>

      <label>new Password</label>
      <input
        type="text"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmitPassword}> update </button>
    </div>
  );
};

export default EditBiography;

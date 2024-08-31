import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainingCoordinator = () => {
  const [courses, setCourses] = useState([]);
  const [courseData, setCourseData] = useState({
    courseID: '',
    courseName: '',
    OU: '',
    typeOfTraining: '',
    startDate: '',
    endDate: '',
    batchCount: 0,
    trainerName: '',
    status: '',
  });

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('/api/courses');
      setCourses(response.data);
    };

    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/courses', courseData);
      alert('Course added/updated successfully');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/courses/${id}`);
      alert('Course deleted successfully');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Manage Courses</h2>
      <form onSubmit={handleSubmit}>
    
        <button type="submit">Save Course</button>
      </form>

      <h3>Existing Courses</h3>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.courseName} - <button onClick={() => handleDelete(course._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingCoordinator;

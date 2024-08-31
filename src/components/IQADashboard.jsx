import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IQADashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('/api/courses');
      setCourses(response.data);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Recent Training Programs</h2>
      <ul>
        {courses.slice(0, 10).map((course) => (
          <li key={course._id}>
            {course.courseName} - Feedback Score: {course.finalFeedback}
            <a href={`/course/${course._id}`}>More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IQADashboard;

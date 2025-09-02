const express = require('express');
const app = express();
app.use(express.json());

// Temporary in-memory DB
let courses = [
  { id: 1, title: "Intro to CS" }
];

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok', service: 'course-service' }));

// Get all courses
app.get('/courses', (req, res) => {
  res.json(courses);
});

// Add a new course
app.post('/courses', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Course title is required" });
  }
  const newCourse = { id: courses.length + 1, title };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('course-service running on port', process.env.PORT || 3000);
});

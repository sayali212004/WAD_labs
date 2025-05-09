const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(express.json());

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoints for dashboard data
app.get('/api/dashboard/stats', (req, res) => {
    // Mock data for dashboard statistics
    const stats = {
        totalStudents: 2450,
        facultyMembers: 125,
        activeCourses: 84,
        upcomingExams: 6
    };
    res.json(stats);
});

app.get('/api/dashboard/recent-admissions', (req, res) => {
    // Mock data for recent admissions
    const admissions = [
        {
            id: 'C2023001',
            name: 'John Smith',
            course: 'Computer Science',
            date: '2023-09-15',
            status: 'Active'
        },
        {
            id: 'C2023002',
            name: 'Sarah Johnson',
            course: 'Electrical Eng',
            date: '2023-09-14',
            status: 'Active'
        },
        {
            id: 'C2023003',
            name: 'Michael Brown',
            course: 'Mechanical Eng',
            date: '2023-09-13',
            status: 'Active'
        }
    ];
    res.json(admissions);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

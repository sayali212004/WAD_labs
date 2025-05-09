$(document).ready(function () {
    // Sidebar toggle
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // Dropdown menu
    $('.dropdown-toggle').dropdown();

    // Active menu item highlight
    $('.components li').on('click', function() {
        $('.components li').removeClass('active');
        $(this).addClass('active');
    });

    // Fetch and display dashboard statistics
    fetch('/api/dashboard/stats')
        .then(response => response.json())
        .then(data => {
            // Update the statistics cards
            $('.card:contains("Total Students") .h5').text(data.totalStudents);
            $('.card:contains("Faculty Members") .h5').text(data.facultyMembers);
            $('.card:contains("Active Courses") .h5').text(data.activeCourses);
            $('.card:contains("Upcoming Exams") .h5').text(data.upcomingExams);
        })
        .catch(error => console.error('Error fetching dashboard stats:', error));

    // Fetch and display recent admissions
    fetch('/api/dashboard/recent-admissions')
        .then(response => response.json())
        .then(data => {
            const tbody = $('.table tbody');
            tbody.empty(); // Clear existing rows
            
            data.forEach(admission => {
                tbody.append(`
                    <tr>
                        <td>${admission.id}</td>
                        <td>${admission.name}</td>
                        <td>${admission.course}</td>
                        <td>${admission.date}</td>
                        <td><span class="badge bg-success">${admission.status}</span></td>
                    </tr>
                `);
            });
        })
        .catch(error => console.error('Error fetching recent admissions:', error));
});
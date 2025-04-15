// Registration
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const user = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
    window.location.href = 'login.html';
  });
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      sessionStorage.setItem('loggedIn', 'true');
      window.location.href = 'profile.html';
    } else {
      alert('Invalid credentials');
    }
  });
}

// Profile
const profilePage = document.getElementById('profileData');
if (profilePage) {
  const loggedIn = sessionStorage.getItem('loggedIn');
  if (!loggedIn) {
    alert('Please login first');
    window.location.href = 'login.html';
  } else {
    const user = JSON.parse(localStorage.getItem('user'));
    profilePage.innerHTML = `
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;
  }
}

// Logout
function logout() {
  sessionStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}

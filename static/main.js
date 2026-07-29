// Popups show/hide karne ke functions
function openModal(id) { 
    document.getElementById(id).style.display = 'flex'; 
}

function closeModal(id) { 
    document.getElementById(id).style.display = 'none'; 
}

function switchModal(closeId, openId) {
    closeModal(closeId);
    openModal(openId);
}

// Teeno sooraton mein enter hone par Profile Area update karne ka function
function handleLoginSuccess(username) {
    const profileHTML = `
        <div class="user-profile-box">
            <img class="profile-img" src="https://w3schools.com" alt="Profile">
            <span class="username-text">${username}</span>
            <button class="btn" style="background:#dc3545" onclick="triggerLogout()">Logout</button>
        </div>
    `;
    document.getElementById('authArea').innerHTML = profileHTML;
    // Saare modals band kar do
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

// 1. SIGNUP SUBMIT
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let username = document.getElementById('signUsername').value;
    let email = document.getElementById('signEmail').value;
    let password = document.getElementById('signPassword').value;

    fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert(data.message); // Saved Info ka alert call
            document.getElementById('signupForm').reset();
            handleLoginSuccess(data.username); // Automatic Login Logic
        } else {
            document.getElementById('signupError').innerText = data.message;
        }
    });
});

// 2. LOGIN SUBMIT
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('logEmail').value;
    let password = document.getElementById('logPassword').value;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            handleLoginSuccess(data.username);
        } else {
            document.getElementById('loginError').innerText = data.message;
        }
    });
});

// 3. OTP EMAIL SUBMIT
let globalForgetEmail = "";
document.getElementById('otpEmailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    globalForgetEmail = document.getElementById('forgetEmail').value;

    fetch('/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: globalForgetEmail })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
            document.getElementById('otpEmailForm').style.display = 'none';
            document.getElementById('otpVerifyForm').style.display = 'block';
        } else {
            document.getElementById('forgetError').innerText = data.message;
        }
    });
});

// 4. OTP CODE VERIFY SUBMIT
document.getElementById('otpVerifyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let otp = document.getElementById('otpCode').value;

    fetch('/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: globalForgetEmail, otp: otp })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert("OTP Verified! 🎉");
            handleLoginSuccess(data.username);
        } else {
            document.getElementById('forgetError').innerText = data.message;
        }
    });
});

function triggerLogout() {
    fetch('/logout').then(() => { window.location.reload(); });
}

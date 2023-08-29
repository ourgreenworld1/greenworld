// Hàm chuyển hướng đến trang "trangchu.html"
function redirectToHomepage() {
    window.location.href = "index.html";
}

// Hàm thực hiện chức năng chuyển đổi giữa các biểu mẫu
function toggleForm() {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");

    loginForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");
}

// Lấy tham chiếu đến liên kết "Sign up" và "Login"
var signupLink = document.getElementById("signup-link");
var loginLink = document.getElementById("login-link");

// Thêm trình nghe sự kiện click cho liên kết "Sign up" và "Login" để chuyển đổi giữa các biểu mẫu
signupLink.addEventListener("click", function(e) {
    e.preventDefault();
    toggleForm();
});

loginLink.addEventListener("click", function(e) {
    e.preventDefault();
    toggleForm();
});

// Thêm trình nghe sự kiện submit cho biểu mẫu "Login"
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Thực hiện xử lý khi submit form "Login"
    // ...

    // Sau khi xử lý thành công, chuyển đến trang "trangchu.html"
    redirectToHomepage();
});

// Thêm trình nghe sự kiện submit cho biểu mẫu "Sign Up"
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Thực hiện xử lý khi submit form "Sign Up"
    // ...

    // Tắt form "Sign Up"
    var signupForm = document.getElementById('signup-form');
    signupForm.classList.add('hidden');

    // Hiển thị form "Sign Up Successfully" và đếm ngược thời gian
    var signupSuccess = document.getElementById('signup-success');
    signupSuccess.style.display = 'block';

    var countdownElement = document.getElementById('countdown');
    var countdown = 3;

    var countdownInterval = setInterval(function() {
        countdown--;
        countdownElement.innerText = countdown;
        
        // Sau khi bảng "Sign Up Successfully" tắt thì chuyển đến trang "trangchu.html"
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            signupSuccess.style.display = 'none';
            redirectToHomepage();
        }
    }, 1000);
});
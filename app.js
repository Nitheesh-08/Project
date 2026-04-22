function login(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
        error.style.color = "red";
        error.innerText = "Invalid email format";
    }
    else if (!passwordRegex.test(password)) {
        error.style.color = "red";
        error.innerText =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
    }
    else {
        error.style.color = "green";
        error.innerText = "Login Successful";

        // Store login status
        localStorage.setItem("login", "true");

        // Redirect to home page
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);
    }
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}
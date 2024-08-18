import { Firebase } from "./class/firebase.js"

const firebase = new Firebase()

async function handleSubmitSignUp(e) {
    e.preventDefault()
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    try {
        await firebase.signup(email, password);;
        alert("Tạo tài khoản thành công!")
        location.href="/login n signup/login.html"
        
    } catch (error) {
        alert("Something went wrong" + error.message)
    }
}
document.getElementById("signup-form").addEventListener("submit", handleSubmitSignUp)


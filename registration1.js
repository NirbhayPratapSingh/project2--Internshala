let Student = JSON.parse(localStorage.getItem("studeninfo")) || [];

document.querySelector("#singupbutton").addEventListener("click", function () {
    let email = document.querySelector("#email1").value;
    let password = document.querySelector("#password1").value;
    let fname = document.querySelector("#fname1").value;
    let lname = document.querySelector("#lname1").value;

    let obj = {
        email,
        password,
        fname,
        lname,
    }
    Student.push(obj);
    alert("Successful Singed Up")
    window.location.href = ""
    localStorage.setItem("studeninfo", JSON.stringify(Student));

})
document.getElementById("google").addEventListener("click", function () {
    window.location.href = " https://accounts.google.com/o/oauth2/auth/identifier?client_id=827625755886-edpmpa7jsvq8al2v03utohjqg4j2sd3b.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Finternshala.com%2Flogin%2Fgoogle&scope=profile%20email&response_type=code&state=eyAicm9sZSIgOiAidXNlciIsICJzdWNjZXNzX3BhZ2UiIDogIi9zdHVkZW50L2Rhc2hib2FyZCIsICJ1dG1fc291cmNlIiA6ICIiICwgInV0bV9tZWRpdW0iIDogIiIsICJ1dG1fY2FtcGFpZ24iIDogIiIgfQ%2C%2C&flowName=GeneralOAuthFlow"
})
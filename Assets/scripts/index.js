document.getElementById('mainBody').innerHTML = "Home page";
document.body.style.backgroundColor = "#808080";

var loginFlag = 0;

function loginPage(){
    document.getElementById('mainBody').innerHTML = "<div id='loginBox' style='border-style: groove;'><form class='form' id='loginForm' onsubmit='return Login()'><div class='col-md-4'><label for='validationCustomUsername' class='form-label'>Username</label><div class='input-group has-validation'><input type='text' class='form-control' id='validationCustomUsername' aria-describedby='inputGroupPrepend' required=''><div class='invalid-feedback'>Please enter your username.</div></div></div><div class='col-md-4'><label for='Password' class='form-label'>Password</label><input type='password' class='form-control' id='password-login' required=''></div><br><button type='submit' id='loginButton' class='btn btn-primary'>Login</button><br><br></form></div>";
    document.getElementById('homeBtn').innerHTML = "<a class='nav-link' aria-current='page' href='javascript:homePage()'>Home</a>";
    document.getElementById('taskList').innerHTML = "<a class='nav-link' href='javascript:taskPage()'>Task list</a>";
    document.getElementById('loginBtn').innerHTML = "<a class='nav-link active' href='javascript:loginPage()'>Login</a>";
    document.body.style.backgroundColor = "#FFFFFF";
}

function homePage(){
    document.getElementById('mainBody').innerHTML = "Home page";
    document.getElementById('homeBtn').innerHTML = "<a class='nav-link active' aria-current='page' href='javascript:homePage()'>Home</a>";
    document.getElementById('taskList').innerHTML = "<a class='nav-link' href='javascript:taskPage()'>Task list</a>";
    document.getElementById('loginBtn').innerHTML = "<a class='nav-link' href='javascript:loginPage()'>Login</a>";
    document.body.style.backgroundColor = "#808080"; 
}

function taskPage(){
    document.getElementById('homeBtn').innerHTML = "<a class='nav-link' aria-current='page' href='javascript:homePage()'>Home</a>";
    document.getElementById('taskList').innerHTML = "<a class='nav-link active' href='javascript:taskPage()'>Task list</a>";
    document.getElementById('loginBtn').innerHTML = "<a class='nav-link' href='javascript:loginPage()'>Login</a>";
    document.body.style.backgroundColor = "#FFFFFF";

    if(loginFlag == 0){
        document.getElementById('mainBody').innerHTML = "<center>You can't access this page because you are not logged in. <br> Please login first.</center>";
    }
    else if(loginFlag==1){
        document.getElementById('mainBody').innerHTML = "Task page";
    }
}

function Login(){

}

function Logout(){
    loginFlag = 0;
    homePage();
}
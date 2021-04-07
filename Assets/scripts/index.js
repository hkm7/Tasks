document.getElementById('mainBody').innerHTML = "Home page";
var loginFlag = 0;

function loginPage(){
    document.getElementById('mainBody').innerHTML = "Login Page";
    document.getElementById('homeBtn').innerHTML = "<a class='nav-link' aria-current='page' href='javascript:homePage()'>Home</a>";
    document.getElementById('taskList').innerHTML = "<a class='nav-link' href='javascript:taskPage()'>Task list</a>";
    document.getElementById('loginBtn').innerHTML = "<a class='nav-link active' href='javascript:loginPage()'>Login</a>";
}

function homePage(){
    document.getElementById('mainBody').innerHTML = "Home page";
    document.getElementById('homeBtn').innerHTML = "<a class='nav-link active' aria-current='page' href='javascript:homePage()'>Home</a>";
    document.getElementById('taskList').innerHTML = "<a class='nav-link' href='javascript:taskPage()'>Task list</a>";
    document.getElementById('loginBtn').innerHTML = "<a class='nav-link' href='javascript:loginPage()'>Login</a>";
}

function taskPage(){
    document.getElementById('homeBtn').innerHTML = "<a class='nav-link' aria-current='page' href='javascript:homePage()'>Home</a>";
    document.getElementById('taskList').innerHTML = "<a class='nav-link active' href='javascript:taskPage()'>Task list</a>";
    document.getElementById('loginBtn').innerHTML = "<a class='nav-link' href='javascript:loginPage()'>Login</a>";
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
}
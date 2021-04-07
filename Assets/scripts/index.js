document.getElementById('mainBody').innerHTML = "Home page";
var loginFlag = 0;

function loginPage(){
    document.getElementById('mainBody').innerHTML = "Login Page";
}

function homePage(){
    document.getElementById('mainBody').innerHTML = "Home page";
}

function taskPage(){
    if(loginFlag == 0){
        document.getElementById('mainBody').innerHTML = "<center>You can't access this page because you are not logged in. <br> Please login first.</center>";
    }
    else if(loginFlag==1){
    document.getElementById('mainBody').innerHTML = "Task page";
    }
}
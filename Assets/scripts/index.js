document.getElementById('mainBody').innerHTML = "Home page";
document.body.style.backgroundColor = "#808080";

var loginFlag = 0;
var loginString = "Login";
var taskNum = 0;

function loginPage(){
    document.body.style.backgroundColor = "#FFFFFF";
    $('#homeBtn').html("<a class='nav-link' aria-current='page' href='javascript:homePage()'>Home</a>");
    $('#taskList').html("<a class='nav-link' href='javascript:taskPage()'>Task list</a>");
    $('#loginBtn').html("<a class='nav-link active' href='javascript:loginPage()'>"+loginString+"</a>");

    if(loginFlag==0){
        $("#mainBody").html("<div id='loginBox' style='border-style: groove;'><form class='form' id='loginForm' action='javascript:Login()'><div class='col-md-4'><label for='validationCustomUsername' class='form-label'>Username</label><div class='input-group has-validation'><input type='text' class='form-control' id='validationCustomUsername' aria-describedby='inputGroupPrepend' required=''><div class='invalid-feedback'>Please enter your username.</div></div></div><div class='col-md-4'><label for='Password' class='form-label'>Password</label><input type='password' class='form-control' id='password-login' required=''></div><br><button type='submit' id='loginButton' class='btn btn-primary'>Login</button><br><br></form></div>");
    }
    else{
        $("#mainBody").html("<br><center><h1>You are logged in as Admin!</h1></center><br><hr id='footerSeparator'><br><a href='javascript:Logout()'><center><h2>Logout</h2></center></a>"); 
    }
}

function homePage(){
    document.getElementById('mainBody').innerHTML = "Home page";
    $('#homeBtn').html("<a class='nav-link active' aria-current='page' href='javascript:homePage()'>Home</a>");
    $('#taskList').html("<a class='nav-link' href='javascript:taskPage()'>Task list</a>");
    $('#loginBtn').html("<a class='nav-link' href='javascript:loginPage()'>"+loginString+"</a>");
    document.body.style.backgroundColor = "#808080"; 
}

function taskPage(){
    $('#homeBtn').html("<a class='nav-link' aria-current='page' href='javascript:homePage()'>Home</a>");
    $('#taskList').html("<a class='nav-link active' href='javascript:taskPage()'>Task list</a>");
    $('#loginBtn').html("<a class='nav-link' href='javascript:loginPage()'>"+loginString+"</a>");

    document.body.style.backgroundColor = "#FFFFFF";

    if(loginFlag == 0){
        $('#mainBody').html("<center>You can't access this page because you are not logged in. <br> Please login first.</center>");
    }
    else if(loginFlag==1){
        $('#mainBody').html("<div id='table-div'><table class='table' id='table'><thead class='thead-dark'><tr><th>User ID</th><th>ID</th><th>Title</th><th>Completed</th></tr></thead><tbody></tbody></table><br><hr id='footerSeparator'></div>");
        loadData();
    }
}

function loadData(){
    $.getJSON("https://jsonplaceholder.typicode.com/todos",function(jsonData){
        $("table").show(2000, "linear");
        var data ="";
        $.each(jsonData, function(key,tabledata){
            data += "<tr>";
            data += "<td>"+tabledata.userId+"</td>";
            data += "<td>"+tabledata.id+"</td>";
            data += "<td>"+tabledata.title+"</td>";
                
            if (tabledata.completed == false){
                data += "<td>"+'<input type="checkbox" disabled=true name="checkbox-' + tabledata + 'id ="checkbox"' + tabledata + '" value="' + tabledata + '" class="custom" />' +"</td>";
            }
            else {
                data += '<td>' + '<input type="checkbox" name="checkbox-' + tabledata + 'id ="checkbox"' + tabledata + '" value="' + tabledata + '" class="custom" />' + '  </td>';
            }
            
            data += '</tr>';
        });
            
        $("#table").append(data);
            
        $('input[type="checkbox"]').click(function(){

            if (check = $("input:checkbox:checked").length) {
                if (check == 5) {
                    alert("Way to Go! 5 task have been completed!!");
                }
            } 
            else {
                alert("5 tasks have been unchecked... Start hustling fast!");
            }

        });
    });
}

function myfun(y){
    var promise = new Promise(function (resolve){
        if(y == true){
            taskNum++;
            if(taskNum == 5){
                resolve();
            }
        }
        else{
            taskNum--;
        }
    });
    promise
    .then(function(){
        alert("Way to Go! 5 task have been completed!!");
    })
}

function Login(){
    let uname = $('#validationCustomUsername').val(); 
    let pwd= $('#password-login').val();

    if(uname == "admin" && pwd == "12345"){
        loginFlag = 1;
        loginString = "Admin";
        taskPage();
    } 
    else{
        alert("Error: Wrong username or password!");
    }
}

function Logout(){
    loginFlag = 0;
    loginString = "Login";
    homePage();
    
}
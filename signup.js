let username = document.getElementById("username");
let password = document.getElementById("password");
let passwordHelper= document.getElementById("password-helper");
let usernameHelper= document.getElementById("username-helper");
let users = [[1,5]];
let pass,user;

class signup{

    constructor(){
        this.users = JSON.parse(localStorage.getItem('users'));
        usernameHelper.style.visibility="hidden";
        passwordHelper.style.visibility="hidden";
    }

    loginClick(){
        window.location.href = "./login.html";
    }

    signUpClick(){

        usernameHelper.style.visibility="hidden";
        passwordHelper.style.visibility="hidden";

        // console.log(username.value);

        let index = users.find( user => user[0]==username.value);

        console.log(index);
        if(index !== undefined){
            usernameHelper.style.visibility="visible";
        }
        
        else if(password.value > 8){
            console.log(index[1],password.value);
            passwordHelper.style.visibility='visible';
        }
        else {
            console.log("all is good")
            // window.location.href = "./index.html";
        };

    }

 

}


let signupObj;
window.addEventListener("load", () => {
    signupObj = new signup();
});

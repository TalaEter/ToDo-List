let username = document.getElementById("username");
let password = document.getElementById("password");
let passwordHelper= document.getElementById("password-helper");
let usernameHelper= document.getElementById("username-helper");
let users =[];
let pass,user;

class signup{

    constructor(){
        // console.log("parsed");
        users = JSON.parse(localStorage.getItem('users'));
        usernameHelper.style.visibility="hidden";
        // console.log("username hidden");

        passwordHelper.style.visibility="hidden";
        // console.log("password hidden");

    }

    loginClick(){
        window.location.href = "./login.html";
    }

    signUpClick(){

        usernameHelper.style.visibility="hidden";
        passwordHelper.style.visibility="hidden";

        // let index = users.find( user => user[0]==username.value);
        let index = users.find( ({user, pass}) => user==username.value);
        console.log(index);
        console.log(password.value.length);
        
        if(index !== undefined){ //if username is taken show error message
            usernameHelper.style.visibility="visible";
        }
        
        else if(password.value.length < 8){
            //console.log(index[1],password.value);
            passwordHelper.style.visibility='visible';
        }
        else {
            console.log("all is good");
            
            let newUser = {user:username.value, pass:password.value};
        
            users.push(newUser);    
    
            localStorage.setItem("users", JSON.stringify(users));
            console.log("added User");
            // startList.appendChild(element);
            // window.location.href = "./index.html";
        }

    }

 

}


let signupObj;
window.addEventListener("load", () => {
    signupObj = new signup();
});

const title = document.querySelector('#title');
const regForm = document.querySelector('.regForm');

const usernameReg = document.getElementById('usernameReg');
const passwordReg = document.getElementById('passwordReg');

const logForm = document.querySelector('.logForm');

const username = document.getElementById('username');
const password = document.getElementById('password');

const usernameAndPasswords = {}

const time = new Date().toLocaleString();

function checkIfUserExists(username, usernameAndPasswords) {
	if (usernameAndPasswords.hasOwnProperty(username)) {
		return true
	}
}

function validateUserNameAndPassword(username, password, usernameAndPasswords,) {
	if(usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] == password) {
		return true;
	}
}

// VALIDATE PASSWORD
function validatePassword(password) {
    // FOR LENGTH
    if (password.length < 8) {
        return false;
    }

    // FOR INTEGERS
    if (/^\d+$/.test(password)) {
        return false;
    }

    // FOR UPPER AND LOWERCASE
    if (!(/[a-z]/.test(password) && /[A-Z]/.test(password))) {
        return false;
    }

    return true;
}

regForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (usernameReg.value.length == 0 || passwordReg.value.length == 0) {
        alert("Fill out all the forms first");
        return;
    }

    // PASSWORD ALERT
    if (!validatePassword(passwordReg.value)) {
        alert("Password must be at least 8 characters long, contain both uppercase and lowercase letters, and not consist only of integers");
        return;
    }

    
    if (checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
        alert('Username is already taken');
    } else {
        
        usernameAndPasswords[usernameReg.value] = passwordReg.value;
        console.log(usernameAndPasswords);

        
        logForm.style.display = "block";
        regForm.style.display = "none";
    }
});

logForm.addEventListener('submit', function (e) {

	if (validateUserNameAndPassword(username.value, password.value, usernameAndPasswords)) {

		logForm.style.display = "none";

		document.querySelector('.welcomePanel #greeting').innerHTML = "Welcome, " + username.value + "!";
        	document.querySelector('.cardFooter').innerHTML = "Time logged in: " + time;

	}
	else {

		alert("Username and password don't exist");

	}

})

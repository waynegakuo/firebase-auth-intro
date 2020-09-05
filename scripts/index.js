const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

const logoutButton = document.querySelector('.logout')
const detailsContainer = document.querySelector('.container')

burger.addEventListener('click', () => {
    ul.classList.toggle('show');
})

/**
 * Sign up user by email and password
 */
const signInUser = document.querySelector('#signup-form');
signInUser.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user info from sign up form
    const email = signInUser['email'].value;
    const password = signInUser['password'].value;

    //JavaScript validation for NULL values
    if (email !== '' && password !== '') {

        //Sign up user using Firebase
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Info Submitted to Firebase...');
                signInUser.reset();
                signInUser.querySelector('.error').innerHTML = '';
            }).catch(err => {
                signInUser.querySelector('.error').innerHTML = err.message;
            })
    }
    else {
        alert('Kindly fill in the fields');
    }
})

// Log in user
const loginUser = document.querySelector('#login-form');
loginUser.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get user info from login form
    const loginEmail = loginUser['email'].value;
    const loginPassword = loginUser['password'].value;

    //JavaScript validation for NULL values
    if (loginEmail !== '' && loginPassword !== '') {

        //Sign up user using Firebase
        auth.signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(() => {
                console.log('Info Submitted to Firebase...');
                loginUser.reset();
                loginUser.querySelector('.error').innerHTML = '';
            }).catch(err => {
                loginUser.querySelector('.error').innerHTML = err.message;
            })
    }
    else {
        alert('Kindly fill in the fields');
    }

})

// Check on currently logged in status
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in.
        console.log(`${user.email} is signed in`);
        detailsContainer.querySelector('.email-show').innerHTML = user.email // showing the signed in user's email
        logoutButton.style.display = 'block';
        // ...
    } else {
        // User is signed out.
        console.log('User signed out');
        detailsContainer.querySelector('.email-show').innerHTML = '';
        logoutButton.style.display = 'none';
    }
});

// Logout user
const logoutUser = () => {
    auth.signOut();
}
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Login successful!');
            document.getElementById('login-form').reset();
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});
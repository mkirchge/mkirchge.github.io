var email = document.getElementById('emaillink');
email.style.visibility = 'hidden'; 

function toggleEmail() {
    if (email.style.visibility === 'hidden') {
        email.style.visibility = 'visible';
    } else {
        email.style.visibility = 'hidden';
    }
}

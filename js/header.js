document.addEventListener('DOMContentLoaded', function() {
    const myImage = document.getElementById('navbar');
    const logo = document.getElementById('logo');

    setTimeout(function() {
        myImage.classList.add('animate');
        logo.classList.add('animate');
    }, 100);
});

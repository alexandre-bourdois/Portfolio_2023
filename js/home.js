document.addEventListener('DOMContentLoaded', function() {
    const myImage = document.getElementById('myImage');

    setTimeout(function() {
        myImage.classList.add('animate');
    }, 500);
});

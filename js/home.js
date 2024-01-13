document.addEventListener('DOMContentLoaded', function() {
    const myImage = document.getElementById('myImage');
    const content = document.getElementById('home_content');

    setTimeout(function() {
        myImage.classList.add('animate');
        content.classList.add('animate');
    }, 200);
});

const closedface = document.querySelector(".closed");
const openface = document.querySelector(".open");

//Add Event listener

closedface.addEventListener('click', function () {
    if (openface.classList.contains('open')) {
        openface.classList.add('active');
        closedface.classList.remove('active')
    }
})

openface.addEventListener('click', function () {
    if (closedface.classList.contains('closed')) {
        closedface.classList.add('active');
        openface.classList.remove('active')
    }
})
const circle = document.querySelector("#circle");


// I can Try to use Click rethare than mouseeneter 
circle.addEventListener('mouseenter' , function () {
    if(!circle.classList.contains('hover'))
    circle.classList.add('hover');
})

circle.addEventListener('mouseleave',function () {
    if(circle.classList.contains('hover'))
        {
            circle.classList.remove('hover');
        }
    
})
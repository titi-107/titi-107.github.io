document.querySelectorAll('#experience').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ `<a>`   
        const targetElement = document.querySelector('#intro');

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt
        }
    });
});
document.querySelectorAll('#about').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ `<a>`   
        const targetElement = document.querySelector('#aboutme');

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt
        }
    });
}); 
document.querySelectorAll('#cm').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ `<a>`   
        const targetElement = document.querySelector('#cm_fb');

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt
        }
    });
}); 
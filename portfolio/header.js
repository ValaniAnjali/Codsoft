const checkbtnIcon = document.querySelector('.checkbtn i');
const checkbox = document.getElementById('check');
const navUl = document.querySelector('.header ul');
const header = document.querySelector('.header');

document.querySelectorAll('.header ul li a').forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false;
        navUl.style.top = '-100%';
    });
});

checkbtnIcon.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
        navUl.style.top = '10%';
    } else {
        navUl.style.top = '-100%';
    }
});

checkbtnIcon.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
        navUl.style.top = '-100%';
    } else {
        navUl.style.top = '10%';
    }
});


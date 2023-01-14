let parentBar = document.querySelector('.parentBar')
let iconBar = document.querySelector('.iconBar');
let navbarNav = document.querySelector('.navbar-nav');
parentBar.addEventListener('click', ()=> {
    iconBar.classList.toggle('fa-xmark');
    navbarNav.classList.toggle('open');
})

window.addEventListener('scroll', ()=> {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('changeBg', window.scrollY > 50);
})




// create filter tabs in shop-section
let tabButtons = document.querySelectorAll('.into-list button');
let tabButtonsArr = Array.from(tabButtons);

let menu = document.querySelectorAll('.menu-cards > div');
let menuArr = Array.from(menu);

tabButtonsArr.forEach((e)=> {
    e.addEventListener('click', (ele)=> {
        tabButtonsArr.forEach((element)=> element.classList.remove('active'));
        ele.currentTarget.classList.add('active');
        menuArr.filter((divs)=> {
            divs.style.display = 'none';
        });
        document.querySelector(ele.currentTarget.dataset.filter).style.display = 'block';
    });
});





// move cycle on scroll in section-eight-time
let deliveryBoy = document.querySelector('.delivery-boy');
let deliveryBoyMove = -80;
let lastScrollpoos = 0;

window.addEventListener("scroll" , ()=> {
    let deliveryBoyTopPoos = deliveryBoy.getBoundingClientRect().top;
    if(deliveryBoyTopPoos < 500  && deliveryBoyTopPoos >= 250) {
        let activeScrollPoos = window.scrollY;

        if(lastScrollpoos < activeScrollPoos) {
            deliveryBoyMove ++;
        }
        else {
            deliveryBoyMove --;
        }

        lastScrollpoos = activeScrollPoos;

        deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
    }
});
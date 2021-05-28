

// ========================= DESKTOP-MENU ====================================\\
const desktopMenu = document.querySelectorAll(".item");

desktopMenu.forEach(desktopMenu => {
    desktopMenu.addEventListener('click', () => {
        const item = desktopMenu.parentElement;
        const isActive = item.classList.contains('add') ? true : false; 
        const listItems = document.querySelectorAll(".list__item");
        listItems.forEach(listItem => {
            listItem.classList.remove('add');
        })
        if (isActive){
            item.classList.remove('add');
            item.classList.add('remove')
        }
        else{
            item.classList.add('add')
            item.classList.remove('remove')
        }
            
    });
});

// ========================= Mobile-hamburger ====================================\\
const noScroll = document.querySelector('body')
const mobileMenu = document.querySelector('.mobile__menu');
const mobileNav = document.querySelector('.mobile');
const audio = document.querySelector('#audio')
const audioRemove = document.querySelector('#audioremove');
mobileMenu.addEventListener('click', ()=>{
    let mp3 = 0;
    if(mobileMenu.classList.contains('open') || mp3 == 1){
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('close');
        mobileNav.classList.remove('show');
        mobileNav.classList.add('hide');
        audioRemove.play();
        noScroll.classList.remove('no__scroll')
    }
    else{
        mobileMenu.classList.add('open');
        mobileMenu.classList.remove('close')
        mobileNav.classList.add('show');
        mobileNav.classList.remove('hide');
        audio.play();
        noScroll.classList.add('no__scroll')
    }
})

// ========================= MOBILE-MENU ====================================\\
const linkOpen = document.querySelectorAll('.mobilelist__item'); 

linkOpen.forEach(linkOpen =>{
    linkOpen.addEventListener('click', ()=>{
        if(linkOpen.classList.contains('mobile-link-open')){
            linkOpen.classList.remove('mobile-link-open');
            linkOpen.classList.add('mobile-link-close')
        }
        else{
            linkOpen.classList.add('mobile-link-open')
            linkOpen.classList.remove('mobile-link-close')
        }
    })
})


// ========================= ATTRIBUTION ====================================\\
const naming = document.querySelector('.naming');
const attribution = document.querySelector('.attribution');
const blurEffect = document.querySelector('main');
const mobileName = document.querySelector('.attribution-mobile');
const namingAudIn = document.querySelector('#naming-audIn')
const namingAudOut = document.querySelector('#naming-audOut')

naming.addEventListener('click', ()=>{
    if(naming.classList.contains('clickIn')){
        naming.classList.remove('clickIn')
        attribution.classList.add('out')
        attribution.classList.remove('in')
        blurEffect.classList.remove('blur')
        mobileName.classList.remove('mobile-name-add')
        mobileName.classList.add('mobile-name-remove')
        noScroll.classList.remove('no__scroll')
        namingAudOut.play();
    }
    else{
        naming.classList.add('clickIn')
        attribution.classList.add('in')
        attribution.classList.remove('out')
        blurEffect.classList.add('blur')
        mobileName.classList.add('mobile-name-add')
        mobileName.classList.remove('mobile-name-remove')
        noScroll.classList.add('no__scroll')
        namingAudIn.play();
    }
})
// ========================================================================\\





















































































// desktopMenu.addEventListener('click', ()=>{
//     if(desktopMenu.classList.contains('add')){
//         desktopMenu.classList.remove('add');
//         desktopMenu.classList.add('remove');
//     }
//     else{
//         desktopMenu.classList.add('add')
//         desktopMenu.classList.remove('remove');
//     }
// })
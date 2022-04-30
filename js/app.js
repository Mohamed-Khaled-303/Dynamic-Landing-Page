//Define Global Variables
const navBarList = document.querySelector('#navbar__list'); //storing the nav bar listin a variable
const sections = document.querySelectorAll('section'); //get a list of all sections in my page


// Building the navigation menu
function creatingListItem(section) { //creating list and add anchor inside it 
    let listItemElement = document.createElement('li');
    listItemElement.innerHTML = `<a href="#${section.getAttribute('id')}" data-nav=${section.getAttribute('id')} class="menu__link">${section.getAttribute('data-nav')}</a>`;
    return listItemElement;
}

function createAndAppendlist(section, navList) { //creat and append list
    navList.appendChild(creatingListItem(section))
}

for (let section of sections) {
    createAndAppendlist(section, navBarList);
}
//Adding an active state on the link when it is clicked
let links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(lnk => lnk.classList.remove('active'));
        this.classList.add('active');
    });
});

// Adding functionality to distinguish the section in view
function removeActiveClass() {
    sections.forEach(section => {
        section.classList.remove('your-active-class');
    })
}

function addActiveClass(id) {
    let selector = `section#${id}`;
    document.querySelector(selector).classList.add('your-active-class');
}

window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop;
    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 && scrollPosition < section.offsetTop + section.offsetHeight) {
            let currentId = section.getAttribute('id');
            removeActiveClass();
            addActiveClass(currentId);
        }
    });
});
//Adding the functionality to scroll to sectionst
function smoothScrolling(element) {
    element.scrollIntoView({
        behavior: "smooth",
        block: 'start'
    });
}

navBarList.addEventListener("click", event => {
    event.preventDefault();
    let sec = document.getElementById(`${event.target.getAttribute('data-nav')}`);
    smoothScrolling(sec);
});
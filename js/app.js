//Define Global Variables
const navBarList = document.querySelector('#navbar__list'); //storing the nav bar listin a variable
const sections = document.querySelectorAll('section'); //get a list of all sections in my page


// Building the navigation menu
for (let section of sections) {
    let listItemElement = document.createElement('li');
    listItemElement.innerHTML = `<a href="#${section.getAttribute('id')}" data-nav=${section.getAttribute('id')} class="menu__link">${section.getAttribute('data-nav')}</a>`;
    navBarList.appendChild(listItemElement)
}

// Adding functionality to distinguish the section in view
window.onscroll = () => {
    for (let section of sections) {
        let sectionPlace = section.getBoundingClientRect(); //store the section place in the veiw port in a variable 
        if (sectionPlace.top >= -400 && sectionPlace.top <= 150) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

//Adding the functionality to scroll to sectionst
navBarList.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.dataset.nav) {
        document
            .getElementById(`${event.target.getAttribute('data-nav')}`)
            .scrollIntoView({
                behavior: "smooth"
            });
    }
});
//Define Global Variables
const navBarList = document.querySelector('#navbar__list'); //storing the nav bar listin a variable
const sections = document.querySelectorAll('section'); //get a list of all sections in my page


// Building the navigation menu
for (let section of sections) {
    let listItemElement = document.createElement('li');//creating a new object <li></li>
    listItemElement.innerHTML = `<a href="#${section.getAttribute('id')}" data-nav=${section.getAttribute('id')} class="menu__link">${section.getAttribute('data-nav')}</a>`;//Adding an ancor inside the <li></li>
    navBarList.appendChild(listItemElement) // appending the <li></li> to the navbar 
}

// Adding functionality to distinguish the section in view
window.onscroll = () => {
    for (let section of sections) {
        let sectionPlace = section.getBoundingClientRect(); //store the section place in the veiw port in a variable 
        if (sectionPlace.top >= -400 && sectionPlace.top <= 150) {//check weather the section is on the view port or not
            section.classList.add('your-active-class');//making the section active
        } else {
            section.classList.remove('your-active-class');//disactive the section 
        }
    }
}

//Adding the functionality to scroll to sectionst
navBarList.addEventListener("click", event => {
    event.preventDefault();//prevent the default scrolling behavior
    console.log(event.target.getAttribute('data-nav'));
    if (event.target.getAttribute('data-nav')) {
        document
            .getElementById(`${event.target.getAttribute('data-nav')}`)
            .scrollIntoView({
                behavior: "smooth"//smothing the scrolling
            });
    }
});
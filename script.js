
AOS.init();


const experienceItems = document.querySelectorAll('.experience');
const descriptionContainer = document.querySelector('.description');

experienceItems.forEach(experience => {
    experience.addEventListener('click', () => {
        // Remove the "active" class from all experience items
        experienceItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add the "active" class to the clicked experience
        experience.classList.add('active');

        // Update the description container with the selected experience's description
        descriptionContainer.innerHTML = `
            <h2>Experience Description</h2>
            <p>${experience.getAttribute('data-description')}</p>
        `;
    });
});



// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

$(document).ready(function () {
    $(".experience-item").click(function () {
        // Hide all descriptions
        $(".experience-description").removeClass("active");
        
        // Show the description associated with the clicked item
        var description = $(this).data("description");
        $(".experience-description").text(description).addClass("active");
    });
});
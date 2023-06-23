import './style.css';
import createPageContent from './content';
import displayMenu from './menu';
import displayContact from './contact';

createPageContent();

const homeBtn = document.getElementById("home-btn");
homeBtn.onclick = function() {
    document.getElementById("body-content-title").textContent = "Restaurant Name";
    document.getElementById("body-content-info").textContent = "This is a description of the restaurant.";
};

const menuBtn = document.getElementById("menu-btn");
menuBtn.onclick = function() {
    displayMenu();
}

const contactBtn = document.getElementById("contact-btn");
contactBtn.onclick = function() {
    displayContact();
}
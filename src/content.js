
export default function createPageContent() {
    const content = createElementWithId("div", "content");
    document.body.appendChild(content);

    const header = createElementWithId("div", "header");
    content.appendChild(header);

    const body = createElementWithId("div", "body");
    content.appendChild(body);

    const homeBtn = createElementWithId("button", "home-btn");
    homeBtn.textContent = "Home";
    header.appendChild(homeBtn);

    const menuBtn = createElementWithId("button", "menu-btn");
    menuBtn.textContent = "Menu";
    header.appendChild(menuBtn);

    const contactBtn = createElementWithId("button", "contact-btn");
    contactBtn.textContent = "Contact";
    header.appendChild(contactBtn);

    const bodyContent = createElementWithId("div", "body-content");
    body.appendChild(bodyContent);

    const bodyContentTitle = createElementWithId("div", "body-content-title");
    bodyContentTitle.textContent = "Restaurant Name";
    bodyContent.appendChild(bodyContentTitle);

    const bodyContentInfo = createElementWithId("div", "body-content-info");
    bodyContentInfo.textContent = "This is a description of the restaurant.";
    bodyContent.appendChild(bodyContentInfo);

    function createElementWithId(tag, id) {
        const element = document.createElement(tag);
        element.setAttribute("id", id);
        return element;
    }
}
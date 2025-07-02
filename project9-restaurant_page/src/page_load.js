import cafeImage from "./images/cafe_image.jpg";
import contactImage from "/home/alex/The-Odin-Project/project9-restaurant_page/src/images/beach_phone.jpg";

function create_header() {
    
    /* -------------------- CREATING THE HEADER -------------------- */
    // Create a header element, and create and append three buttons to it
    const header = document.createElement('header')

    const homeBtn = document.createElement('button')
    homeBtn.addEventListener('click', create_homepage)
    homeBtn.id = 'home-btn'
    
    const menuBtn = document.createElement('button')
    menuBtn.addEventListener('click', () => {console.log("hi")})
    menuBtn.id = 'menu-btn'
    
    const contactBtn = document.createElement('button')
    contactBtn.addEventListener('click', create_contact)
    contactBtn.id = 'contact-btn'
    
    homeBtn.textContent = 'Home'
    menuBtn.textContent = 'Menu'
    contactBtn.textContent = 'Contact'

    header.append(homeBtn, menuBtn, contactBtn)
    
    // Append the header with its buttons to the document body
    document.body.appendChild(header)

}


function create_homepage() {
    
    /* -------------------- CREATING THE BODY -------------------- */
    // Remove any child nodes except for header
    while (document.body.childNodes.length > 2) {
    document.body.removeChild(document.body.lastChild);
    }
    
    // Create a content div below header and create two sub-divs within it; intro and image
    const content = document.createElement('div')
    const contentIntro = document.createElement('div')
    const contentImage = document.createElement('div')
    
    content.id = 'content'
    contentIntro.id = 'content-intro'
    contentImage.id = 'content-image'

    content.append(contentImage, contentIntro)

    // Add image to contentImage
    const image = document.createElement("img");
    image.src = cafeImage;
    image.id = 'cafe-image'
    contentImage.appendChild(image)

    // Add text to contentIntro
    const introHeader = document.createElement('h1')
    introHeader.id = 'intro-header'
    introHeader.textContent = 'Welcome to Oceanic Station Coffee!'

    const introBody = document.createElement('p')
    introBody.id = 'intro-body'
    introBody.textContent = "Nestled right by the beach, Oceanic Station Coffee is your new go-to spot for great vibes and even better flavors. Whether you're here for a fresh-brewed coffee, a scoop of creamy ice cream, a fizzy soda, or one of our homemade baked goods, we’ve got something for every craving. Drop by, kick back, and soak in the coastal breeze with us!"

    contentIntro.append(introHeader, introBody)
    
    // Append content to document body
    document.body.appendChild(content)

}


function create_contact() {
    
    /* -------------------- CREATING CONTACT PAGE -------------------- */
    // Remove any child nodes except for header
    while (document.body.childNodes.length > 2) {
    document.body.removeChild(document.body.lastChild);
    }
    
    // Create a content div below header and create two sub-divs within it; intro and image
    const contact = document.createElement('div')
    const contactInfo = document.createElement('div')
    const contactImageDiv = document.createElement('div')
    
    contact.id = 'contact'
    contactInfo.id = 'contact-info'
    contactImageDiv.id = 'contact-image'

    contact.append(contactImageDiv, contactInfo)

    // Add image to contentImage
    const image = document.createElement("img");
    image.src = contactImage;
    image.id = 'beach-phone'
    contactImageDiv.appendChild(image)

    // Add text to contactInfo
    const contactHeader = document.createElement('h1')
    contactHeader.id = 'contact-header'
    contactHeader.textContent = 'Contact Us!'

    const contactPhone = document.createElement('p')
    contactPhone.id = 'contact-phone'
    contactPhone.textContent = "📞 (123) 456-7890"

    const contactAddress = document.createElement('p')
    contactAddress.id = 'contact-address'
    contactAddress.textContent = "📍 421 Tidal View Road, Cedar Cove, BC V9K 3L2"

    const contactHours = document.createElement('div')
    contactHours.id = 'contact-hours'
    const montues = document.createElement('p')
    montues.textContent = "Monday, Tuesday: CLOSED"

    const wedthurs = document.createElement('p')
    wedthurs.textContent = "Wednesday, Thursday: 8AM - 8PM"

    const frisatsun = document.createElement('p')
    frisatsun.textContent = "Friday, Saturday, Sunday: 8AM - 11PM"

    contactHours.append(montues, wedthurs, frisatsun)
    
    contactInfo.append(contactHeader, contactPhone, contactAddress, contactHours)
    
    // Append content to document body
    document.body.appendChild(contact)

}

function load_homepage() {
    create_header()
    create_homepage()
}


function add_button_functionality() {
    // Home Button
    homeBtn = document.getElementById('home-btn')
    
    
}
export {load_homepage, add_button_functionality}


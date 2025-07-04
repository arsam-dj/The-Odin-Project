import cafeImage from "./images/cafe_image.jpg";
import contactImage from "./images/beach_phone.jpg";
import coffeeImage from "./images/coffee_espresso.jpg";
import iceCreamImage from "./images/strawberry_icecream.jpg";
import lemonadeImage from "./images/lemonade_soda.jpg";
import bananaBreadImage from "./images/banana_bread.jpg";

function create_header() {
    
    /* -------------------- CREATING THE HEADER -------------------- */
    // Create a header element, and create and append three buttons to it
    const header = document.createElement('header')

    const homeBtn = document.createElement('button')
    homeBtn.addEventListener('click', create_homepage)
    homeBtn.id = 'home-btn'
    
    const menuBtn = document.createElement('button')
    menuBtn.addEventListener('click', create_menu)
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


function create_menu() {
    
    /* -------------------- CREATING MENU PAGE -------------------- */
    // Remove any child nodes except for header
    while (document.body.childNodes.length > 2) {
    document.body.removeChild(document.body.lastChild);
    }
    
    // Create a menu div below header and create different food-type subdivs within it
    const menu = document.createElement('div')
    const coffeeDiv = document.createElement('div')
    const iceCreamDiv = document.createElement('div')
    const drinksDiv = document.createElement('div')
    const bakedGoodsDiv = document.createElement('div')
    
    menu.id = 'menu'
    coffeeDiv.id = 'coffee-div'
    iceCreamDiv.id = 'icecream-div'
    drinksDiv.id = 'drinks-div'
    bakedGoodsDiv.id = 'baked-goods-div'

    // Add images and foods to each menu div

    // Espresso and Coffee
    const image1 = document.createElement("img");
    image1.src = coffeeImage;
    image1.className = 'menu-img'

    const coffeeMenu = document.createElement('div')
    coffeeMenu.className = 'menu-subdiv'

    const coffeeDivHeader = document.createElement('p')
    coffeeDivHeader.className = 'menuDivHeader'
    coffeeDivHeader.textContent = 'Coffee & Espresso'

    const coffee1 = document.createElement('div')
    coffee1.className = 'item-subdiv'
    const coffee1Header = document.createElement('p')
    coffee1Header.textContent = 'Seaside Brew'
    const coffee1Body = document.createElement('p')
    coffee1Body.textContent = 'Freshly ground medium roast, brewed to perfection using locally sourced beans'
    const coffee1Ingredients = document.createElement('p')
    coffee1Ingredients.textContent = 'Ingredients: Arabica coffee beans, filtered water'
    coffee1.append(coffee1Header, coffee1Body, coffee1Ingredients)

    const coffee2 = document.createElement('div')
    coffee2.className = 'item-subdiv'
    const coffee2Header = document.createElement('p')
    coffee2Header.textContent = 'Salted Caramel Latte'
    const coffee2Body = document.createElement('p')
    coffee2Body.textContent = 'Espresso with steamed milk, homemade salted caramel sauce, topped with sea salt flakes'
    const coffee2Ingredients = document.createElement('p')
    coffee2Ingredients.textContent = 'Ingredients: Espresso, whole milk, caramel (sugar, butter, cream), sea salt'
    coffee2.append(coffee2Header, coffee2Body, coffee2Ingredients)

    const coffee3 = document.createElement('div')
    coffee3.className = 'item-subdiv'
    const coffee3Header = document.createElement('p')
    coffee3Header.textContent = 'Vanilla Coconut Cold Brew'
    const coffee3Body = document.createElement('p')
    coffee3Body.textContent = 'Smooth cold brew coffee infused with natural vanilla and coconut milk'
    const coffee3Ingredients = document.createElement('p')
    coffee3Ingredients.textContent = 'Ingredients: Cold brew concentrate, vanilla extract, coconut milk, ice'
    coffee3.append(coffee3Header, coffee3Body, coffee3Ingredients)

    const coffee4 = document.createElement('div')
    coffee4.className = 'item-subdiv'
    const coffee4Header = document.createElement('p')
    coffee4Header.textContent = 'Cinnamon Drift Cappuccino'
    const coffee4Body = document.createElement('p')
    coffee4Body.textContent = 'Espresso topped with steamed milk and a sprinkle of cinnamon dust'
    const coffee4Ingredients = document.createElement('p')
    coffee4Ingredients.textContent = 'Ingredients: Espresso, whole milk, cinnamon powder'
    coffee4.append(coffee4Header, coffee4Body, coffee4Ingredients)

    coffeeMenu.append(coffeeDivHeader, coffee1, coffee2, coffee3, coffee4)
    coffeeDiv.append(image1, coffeeMenu)
    
    
    // Ice Cream Scoops
    const image2 = document.createElement("img");
    image2.src = iceCreamImage;
    image2.className = 'menu-img'
    iceCreamDiv.appendChild(image2)

    // Other Drinks
    const image3 = document.createElement("img");
    image3.src = lemonadeImage;
    image3.className = 'menu-img'
    drinksDiv.appendChild(image3)

    // Baked Goods
    const image4 = document.createElement("img");
    image4.src = bananaBreadImage;
    image4.className = 'menu-img'
    bakedGoodsDiv.appendChild(image4)
    
    // Append content to document body
    menu.append(coffeeDiv, iceCreamDiv, drinksDiv, bakedGoodsDiv)
    document.body.appendChild(menu)

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

    const hoursHeader = document.createElement('p')
    hoursHeader.id = 'hours-header'
    hoursHeader.textContent = "Hours of Operation"

    const montues = document.createElement('p')
    montues.id = 'hours'
    montues.textContent = "Monday, Tuesday: CLOSED"

    const wedthurs = document.createElement('p')
    wedthurs.id = 'hours'
    wedthurs.textContent = "Wednesday, Thursday: 8AM - 8PM"

    const frisatsun = document.createElement('p')
    frisatsun.id = 'hours'
    frisatsun.textContent = "Friday, Saturday, Sunday: 8AM - 11PM"

    contactHours.append(hoursHeader, montues, wedthurs, frisatsun)
    
    contactInfo.append(contactHeader, contactPhone, contactAddress, contactHours)
    
    // Append content to document body
    document.body.appendChild(contact)

}

function load_homepage() {
    create_header()
    create_homepage()
}

export {load_homepage}


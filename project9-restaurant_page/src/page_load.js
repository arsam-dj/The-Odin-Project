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

    const iceCreamMenu = document.createElement('div')
    iceCreamMenu.className = 'menu-subdiv'

    const iceCreamDivHeader = document.createElement('p')
    iceCreamDivHeader.className = 'menuDivHeader'
    iceCreamDivHeader.textContent = 'Ice Cream Scoops'

    const iceCream1 = document.createElement('div')
    iceCream1.className = 'item-subdiv'
    const iceCream1Header = document.createElement('p')
    iceCream1Header.textContent = 'Coastal Cream Classic'
    const iceCream1Body = document.createElement('p')
    iceCream1Body.textContent = 'Rich vanilla bean ice cream made in-house with real Madagascar vanilla'
    const iceCream1Ingredients = document.createElement('p')
    iceCream1Ingredients.textContent = 'Ingredients: Milk, cream, sugar, vanilla bean'
    iceCream1.append(iceCream1Header, iceCream1Body, iceCream1Ingredients)

    const iceCream2 = document.createElement('div')
    iceCream2.className = 'item-subdiv'
    const iceCream2Header = document.createElement('p')
    iceCream2Header.textContent = 'Sea Breeze Strawberry'
    const iceCream2Body = document.createElement('p')
    iceCream2Body.textContent = 'Fresh strawberry ice cream with chunks of local strawberries'
    const iceCream2Ingredients = document.createElement('p')
    iceCream2Ingredients.textContent = 'Ingredients: Milk, cream, sugar, fresh strawberries'
    iceCream2.append(iceCream2Header, iceCream2Body, iceCream2Ingredients)

    const iceCream3 = document.createElement('div')
    iceCream3.className = 'item-subdiv'
    const iceCream3Header = document.createElement('p')
    iceCream3Header.textContent = 'Chocolate Wave'
    const iceCream3Body = document.createElement('p')
    iceCream3Body.textContent = 'Decadent dark chocolate ice cream with cocoa nibs'
    const iceCream3Ingredients = document.createElement('p')
    iceCream3Ingredients.textContent = 'Ingredients: Milk, cream, sugar, dark cocoa powder, cocoa nibs'
    iceCream3.append(iceCream3Header, iceCream3Body, iceCream3Ingredients)

    iceCreamMenu.append(iceCreamDivHeader, iceCream1, iceCream2, iceCream3)
    iceCreamDiv.append(image2, iceCreamMenu)

    // Other Drinks
    const image3 = document.createElement("img");
    image3.src = lemonadeImage;
    image3.className = 'menu-img'

    const drinksMenu = document.createElement('div')
    drinksMenu.className = 'menu-subdiv'

    const drinksDivHeader = document.createElement('p')
    drinksDivHeader.className = 'menuDivHeader'
    drinksDivHeader.textContent = 'Refreshing Drinks'

    const drinks1 = document.createElement('div')
    drinks1.className = 'item-subdiv'
    const drinks1Header = document.createElement('p')
    drinks1Header.textContent = 'Ocean Mist Lemonade Soda'
    const drinks1Body = document.createElement('p')
    drinks1Body.textContent = 'Homemade lemonade mixed with sparkling water and a hint of mint'
    const drinks1Ingredients = document.createElement('p')
    drinks1Ingredients.textContent = 'Ingredients: Fresh lemon juice, sparkling water, sugar, fresh mint leaves'
    drinks1.append(drinks1Header, drinks1Body, drinks1Ingredients)

    const drinks2 = document.createElement('div')
    drinks2.className = 'item-subdiv'
    const drinks2Header = document.createElement('p')
    drinks2Header.textContent = 'Ginger Tidal Fizz'
    const drinks2Body = document.createElement('p')
    drinks2Body.textContent = 'Ginger syrup with club soda and fresh lime'
    const drinks2Ingredients = document.createElement('p')
    drinks2Ingredients.textContent = 'Ingredients: Ginger root syrup, club soda, lime juice'
    drinks2.append(drinks2Header, drinks2Body, drinks2Ingredients)

    drinksMenu.append(drinksDivHeader, drinks1, drinks2)
    drinksDiv.append(image3, drinksMenu)

    // Baked Goods
    const image4 = document.createElement("img");
    image4.src = bananaBreadImage;
    image4.className = 'menu-img'

    const bakedGoodsMenu = document.createElement('div')
    bakedGoodsMenu.className = 'menu-subdiv'

    const bakedGoodsDivHeader = document.createElement('p')
    bakedGoodsDivHeader.className = 'menuDivHeader'
    bakedGoodsDivHeader.textContent = 'Homemade Baked Goods'

    const bakedGoods1 = document.createElement('div')
    bakedGoods1.className = 'item-subdiv'
    const bakedGoods1Header = document.createElement('p')
    bakedGoods1Header.textContent = 'Driftwood Blueberry Muffin'
    const bakedGoods1Body = document.createElement('p')
    bakedGoods1Body.textContent = 'Moist muffin packed with fresh blueberries and a hint of lemon zest'
    const bakedGoods1Ingredients = document.createElement('p')
    bakedGoods1Ingredients.textContent = 'Ingredients: Flour, sugar, eggs, butter, fresh blueberries, lemon zest, baking powder'
    bakedGoods1.append(bakedGoods1Header, bakedGoods1Body, bakedGoods1Ingredients)

    const bakedGoods2 = document.createElement('div')
    bakedGoods2.className = 'item-subdiv'
    const bakedGoods2Header = document.createElement('p')
    bakedGoods2Header.textContent = 'Salt Spray Scone'
    const bakedGoods2Body = document.createElement('p')
    bakedGoods2Body.textContent = 'Flaky scone with sea salt flakes and cheddar cheese'
    const bakedGoods2Ingredients = document.createElement('p')
    bakedGoods2Ingredients.textContent = 'Ingredients: Flour, butter, cheddar cheese, sea salt, baking powder'
    bakedGoods2.append(bakedGoods2Header, bakedGoods2Body, bakedGoods2Ingredients)

    const bakedGoods3 = document.createElement('div')
    bakedGoods3.className = 'item-subdiv'
    const bakedGoods3Header = document.createElement('p')
    bakedGoods3Header.textContent = 'Beachcomber Banana Bread'
    const bakedGoods3Body = document.createElement('p')
    bakedGoods3Body.textContent = 'Sweet banana bread with pecans and cinnamon'
    const bakedGoods3Ingredients = document.createElement('p')
    bakedGoods3Ingredients.textContent = 'Ingredients: Ripe bananas, flour, sugar, eggs, pecans, cinnamon, baking soda'
    bakedGoods3.append(bakedGoods3Header, bakedGoods3Body, bakedGoods3Ingredients)

    bakedGoodsMenu.append(bakedGoodsDivHeader, bakedGoods1, bakedGoods2, bakedGoods3)
    bakedGoodsDiv.append(image4, bakedGoodsMenu)
    
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


const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


const header = document.querySelector("h1");
header.textContent = siteContent["cta"]["h1"];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

const logoImg = document.querySelector("#logo-img");
logoImg.src = siteContent["images"]["logo-img"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["images"]["cta-img"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["images"]["accent-img"]

const featuresHeading = document.querySelector(".text-content:nth-of-type(1) h4");
featuresHeading.textContent = siteContent["main-content"]["features-h4"];
const featuresText = document.querySelector(".text-content:nth-of-type(1) p");
featuresText.textContent = siteContent["main-content"]["features-content"]

const aboutHeading = document.querySelector(".text-content:nth-of-type(2) h4");
aboutHeading.textContent = siteContent["main-content"]["about-h4"];
const aboutText = document.querySelector(".text-content:nth-of-type(2) p");
aboutText.textContent = siteContent["main-content"]["about-content"];

const servicesHeading = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
servicesHeading.textContent = siteContent["main-content"]["services-h4"];
const servicesText = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
servicesText.textContent = siteContent["main-content"]["services-content"];

const productHeading = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
productHeading.textContent = siteContent["main-content"]["product-h4"];
const productText = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
productText.textContent = siteContent["main-content"]["product-content"];

const visionHeading = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
visionHeading.textContent = siteContent["main-content"]["vision-h4"];
const visionText = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
visionText.textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];
const address = document.querySelector(".contact p:nth-of-type(1)");
address.textContent = siteContent["contact"]["address"];
const phone = document.querySelector(".contact p:nth-of-type(2)");
phone.textContent = siteContent["contact"]["phone"];
const email = document.querySelector(".contact p:nth-of-type(3)");
email.textContent = siteContent["contact"]["email"];

const footer = document.querySelector("footer")
footer.textContent = siteContent["footer"]["copyright"]

const navBar = document.querySelectorAll("nav a");
for (let i = 0; i < navBar.length; i++) {
  console.log(navBar[i].textContent);
}
navBar[0].textContent = siteContent["nav"]["nav-item-1"]
navBar[1].textContent = siteContent["nav"]["nav-item-2"]
navBar[2].textContent = siteContent["nav"]["nav-item-3"]
navBar[3].textContent = siteContent["nav"]["nav-item-4"]
navBar[4].textContent = siteContent["nav"]["nav-item-5"]
navBar[5].textContent = siteContent["nav"]["nav-item-6"]
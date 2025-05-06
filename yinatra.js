


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const textes = document.querySelectorAll(".typewriter span")
let prevText = textes[textes.length-1]
let i = 0

animate()
setInterval(_=> animate(), 5000)

function animate(){
	let index = (i++)%textes.length

	prevText.style.display = "none"
	textes[index].style.display = "block"

	prevText = textes[index]
}





const benefits = [
    {
        title: "Project 1",
        description: `<b>AI-Powered Document Extraction Web Application :</b><br>
        Developed an OCR and NLP-based classification system using Tesseract and TensorFlow to accurately extract key data fields from invoices, purchase orders, and bank statements, automating the processing of structured, semi-structured, and unstructured documents. Implemented AI-driven data validation and compliance through rule-based accuracy checks and machine learning models, correcting inconsistencies, enhancing extraction precision, and enabling seamless ERP integration and automated workflows.`
    },
    {
        title: "Project 2",
        description: `<b>US-Based School Calendar Mobile Application :</b><br>
        Designed and maintained scalable backend APIs for seamless data retrieval, integrating real federal holidays and non-student days from county or district calendars. Additionally, developed a reminder and notification system for important school dates and implemented multi-language support, enabling users to personalize their experience in English or Spanish.`
    },
    {
        title: "Project 3",
        description: `<b>Enterprise Resource Planning Web Application :</b><br>
        Achieved over 99% accuracy in data extraction and processing, ensuring precise order management, inventory tracking, and financial operations. Improved system efficiency by reducing processing time by 30%, streamlining order fulfillment, and optimizing inventory updates through AI-powered automation.`
    },
    {
        title: "Project 4",
        description: `<b>Task Management Web Application :</b><br>
        Implemented a real-time project tracking system that enhanced team collaboration and increased task completion efficiency by 25%. Optimized status updates and approval workflows, reducing manual efforts and improving overall system stability, resulting in a 99% uptime rate.`
    },
    {
        title: "Project 5",
        description: `<b>Financial AI Agent :</b><br>
        Designed and developed an AI agent capable of understanding and categorizing user queries, asking basic follow-up questions to gather additional details, and clearly explaining the user's intent. Based on the collected information, the agent provides helpful financial suggestions or insights tailored to the user's specific query.`
    },
    {
        title: "Project 6",
        description: `<b>Employee Registration Portal :</b><br>
        Developed an Employee Registration Portal where users can securely register their personal details, which are stored and managed using Python-based software applications. The portal includes an admin panel that enables administrators to view and manage all registered employee information efficiently.`
    },
];

let currentIndex = 0;
const benefitsList = document.getElementById("benefits-list").getElementsByTagName("p");
const benefitContent = document.getElementById("benefit-content");

function updateSlide(index) {
    currentIndex = index;
    for (let i = 0; i < benefitsList.length; i++) {
        benefitsList[i].classList.remove("active");
    }
    benefitsList[index].classList.add("active");
    benefitContent.innerHTML = `
    <p style="line-height: 35px;"  class="normal_ff fs-13">${benefits[index].description}</p>`;
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % benefits.length;
    updateSlide(currentIndex);
}

setInterval(autoSlide, 3000);

for (let i = 0; i < benefitsList.length; i++) {
    benefitsList[i].addEventListener("click", function () {
        updateSlide(parseInt(this.getAttribute("data-index")));
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".nav-it");

    navItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove("active_nav"));
            
            // Add active class to the clicked item
            this.classList.add("active_nav");
        });
    });
});

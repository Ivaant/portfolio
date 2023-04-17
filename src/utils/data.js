import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectServices = [
	{
		name: "Website Design",
		desc: "catchy, responsive, UX-optimized",
		icon: HiOutlineDesktopComputer,
		bg: "#e8ac41",
	},
	{
		name: "Web Development",
		desc: "functional, modern, agile",
		icon: CiMobile1,
		bg: "#28496e",
	},
	{
		name: "Web Maintenance",
		desc: "up-to-date, secure, smooth",
		icon: MdWorkspacesOutline,
		bg: "#9c6e1c",
	},
];

export const ValuePropHeader = "Expert Web Development Services for small and medium businesses";
export const ValuePropText = "With years of experience working with small and medium businesses, we understand the unique challenges that these companies face. That's why we offer expert web development services that can help businesses like yours succeed in today's digital landscape";

export const ProductFeatures = ["Understand the unique challenges of SMB", "Offer expert web development solutions", "Help you succeed with digital presence"];

export const processStages = [
	{
		heading: "Project requirements formulation",
		text: " We work together to understand your specific needs and requirements",
		img: "prd.png"
	},
	{
		heading: "Prioritization and requirements mapping",
		text: "We prioritize your needs and map out your requirements to ensure we are aligned throughout the project",
		img: "userStoryMapping.png"
	},
	{
		heading: "Design and prototype",
		text: "We create wireframes and prototypes to ensure the design meets your needs before we begin development",
		img: "wireframe.png"
	},
	{
		heading: "Development",
		text: "We use state-of-the-art web development technologies to bring your website to life",
		img: "webDevelopment.png"
	},
	{
		heading: "Testing",
		text: "We thoroughly test your website to ensure it is functional, secure, and optimized for user experience",
		img: "testing.png"
	},
	{
		heading: "Deployment",
		text: "We deploy your website to your hosting environment and ensure everything is working as it should",
		img: "deployment.png"
	}
];

export const projects = [
	{
		name: "Travel Tour Booking App",
		text: "Web app for travel booking with own RESTful API, JWT-authentication and Stripe payment integration.",
		screenshot: "natours.png",
		techs: ["Node/Express", "REST API", "MongoDB/Mongoose", "SCSS", "PUG", "JWT", "Mapbox API", "Stripe"],
		url: "https://natours-travel-booking-app.onrender.com/",
		git: "https://github.com/Ivaant/natours"
	},
	{
		name: "Face Detection App",
		text: "Full-stack face detection application with simple authentication  and user rating functions.",
		screenshot: "face-detection-app.png",
		techs: ["React", "PostgreSQL", "Node/Express"],
		url: "https://face-detection-app-ehyh.onrender.com/",
		git: "https://github.com/Ivaant/smart-brain-app/tree/master"
	},
	{
		name: "Cuisine Shopping Cart App",
		text: "Web app based on MealDB API with a shopping cart and customers/meals rating system.",
		screenshot: "the-meal-db.png",
		techs: ["Node/Express", "MongoDB/Mongoose", "EJS"],
		url: "https://mealdb-shopping-cart-app.onrender.com/",
		git: "https://github.com/Ivaant/meal-shopping-cart"
	},
	{
		name: "Antenna Recruiting LP",
		text: "Recruiting landing page with user data collection function. Designing and building front end components. Styling components according to design. Created custom CSS animations.",
		screenshot: "antenna-site.png",
		techs: ["HTML/SASS", "JavaScript"],
		url: "https://ivaant.github.io/antenna-site/",
		git: "https://github.com/Ivaant/antenna-site"
	}

];

export const cta = "Do you have a business opportunity, or are you just a creative looking for collaboration?";
export const cta2 = "In either way let's work together to meet your needs and exceed customer's expectations.";

export const sliderSettings = {
	dots: true,
	infinite: false,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	initialSlide: 0,
	touchMove: true,
	useCSS: true,

	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

import invoiceImg from "../assets/Invoice Flow.PNG";
import climateImg from "../assets/Climate Guide.PNG";
import SchoolPortalImg from "../assets/School Portal.PNG";
import pollyGlotImg from "../assets/PollyGlot.PNG";
import arianaSmartImg from '../assets/arianaSmartImg.JPG'
import travelgenie2 from '../assets/Travel Genie 2.JPG'

const allProjects = [
  {
    id: 1,
    name: "TravelGenie",
    image: travelgenie2,
    description:
      "An AI-powered travel planning application that helps users plan trips, manage budgets, organize packing lists, and create personalized travel itineraries.",
    link: "https://travel-genie-kamair-orpin.vercel.app/",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    featured: true,
    status: "Live",
    progress: 100,
    codeLink: "https://github.com/asma-samadi",
  },

  {
    id: 2,
    name: "Climate Guide",
    image: climateImg,
    description:
      "A weather application that displays real-time weather information, temperature, humidity, and forecast data through a clean and user-friendly interface.",
    link: "https://climateguide.netlify.app/",
    techStack: ["HTML", "JavaScript", "CSS"],
    featured: true,
    status: "Live",
    progress: 100,
    codeLink: "https://github.com/asma-samadi/DailyWeather",
  },
  {
    id: 3,
    name: "Freelance Invoice App",
    image: invoiceImg,
    description:
      "A responsive invoice management application that helps freelancers create invoices, manage clients, track payments, and organize billing information.",
    link: "https://asma-samadi.github.io/freelance-invoice-app/",
    techStack: ["HTML", "JavaScript", "CSS"],
    featured: true,
    status: "Completed",
    progress: 100,
    codeLink: "https://github.com/asma-samadi/freelance-invoice-app",
  },
  {
    id: 4,
    name: "Ariana Smart",
    image: arianaSmartImg,
    description:
      "An AI-powered airline management and passenger platform inspired by Ariana Afghan Airlines, featuring flight booking requests, trip planning, eTickets, and an AI assistant.",
    link: "https://ariana-smart.vercel.app/",
    techStack: ["React", "JavaScript", "Supabase", "Node.js", "AI"],
    featured: true,
    status: "Live",
    progress: 100,
    codeLink: "https://github.com/asma-samadi/ariana-smart-stage8-part1-pdf",
  },
  {
    id: 5,
    name: "School Portal",
    image: SchoolPortalImg,
    description:
      "A school management portal interface designed for students and teachers. It includes sections for courses, announcements, schedules, and academic information.",
    link: "https://asma-samadi.github.io/school-portal/",
    techStack: ["HTML", "JavaScript", "CSS"],
    featured: false,
    status: "Completed",
    progress: 100,
    codeLink: "https://github.com/asma-samadi/school-portal",
  },
  {
    id: 6,
    name: "PollyGlot",
    image: pollyGlotImg,
    description:
      "An AI-powered translation application that helps users translate text between languages through a simple, modern, and user-friendly interface.",
    link: "https://pollyglot-web.netlify.app/",
    techStack: ["React", "JavaScript", "AI"],
    featured: true,
    status: "Live",
    progress: 100,
    codeLink: "https://github.com/asma-samadi",
  },
];

export default allProjects;
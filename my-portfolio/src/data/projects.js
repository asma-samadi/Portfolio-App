import invoiceImg from "../assets/Invoice Flow.PNG";
import climateImg from "../assets/Climate Guide.PNG";
import SchoolPortalImg from '../assets/School Portal.PNG'

const allProjects = [
  {
    id: 1,
    name: "Freelance Invoice App",
    image: invoiceImg,
    description:
      "A responsive invoice management application that helps freelancers create invoices, manage clients, track payments, and organize billing information.",
    link: "https://asma-samadi.github.io/freelance-invoice-app/",
    techStack: ["HTML", "JavaScript", "CSS"],
    featured: true,
    status: "Completed",
    progress: 85,
    codeLink: "https://github.com/asma-samadi/freelance-invoice-app",
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
    progress: 90,
    codeLink: "https://github.com/asma-samadi/DailyWeather",
  },
  {
    id: 3,
    name: "School Portal",
    image: SchoolPortalImg,
    description:
      "A school management portal interface designed for students and teachers. It includes sections for courses, announcements, schedules, and academic information.",
    link: "https://asma-samadi.github.io/school-portal/",
    techStack: ["HTML", "JavaScript", "CSS"],
    featured: false,
    status: "Learning Project",
    progress: 100,
    codeLink: "https://github.com/asma-samadi/school-portal",
  },
];

export default allProjects
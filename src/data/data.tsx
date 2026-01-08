import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import tu20Group from '../images/tu20group.jpg';
import tu20Judge from '../images/tu20judge.JPG';
import tu20Win from '../images/tu20win.JPG';
import WBR from '../images/wbr.png';
import WBRteam from '../images/W25team.jpg';
import waterloo from '../images/waterloo.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import tu20Logo from '../images/tu20-logo.png'; 
import kftLogo from '../images/kft-logo.png';
import decaLogo from '../images/deca-logo.png';
import ibLogo from '../images/ib-logo.png'
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Frank Lin - Portfolio',
  description: "Hi everyone! Welcome to my personal website :D",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Frank Lin`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
       I'm a first year student at the <strong className="text-stone-100">University of Waterloo</strong>, currently enrolled
        in a <strong className="text-stone-100">Bachelor's of Computing and Financial Management.</strong> 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I love playing <strong className="text-stone-100">Badminton</strong>,
        trying new songs on <strong className="text-stone-100">piano</strong>, and playing games with my friends{' '}
        .
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1mZdCTGyNewUMhpLWrr5RclQ-i3NrRwD0/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hello everyone! My name is Frank, and I'm a Computing + Financial Management student at the University of Waterloo. I'm eager to learn more about building projects using CS, and how it can be used to connect to the financial industry. I also take part in any case competitions that come up, so you might see me at one from time to time. In my free time, I enjoy playing piano, badminton, and spending time with friends. I'm always down for a quick game of badminton if you reach out :) That's all for now, I'm looking forward to the rest of my Waterloo journey!`,
  aboutItems: [
    {label: 'Location', text: 'Milton, ON', Icon: MapIcon},
    {label: 'Age', text: '18', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Badminton, Piano, Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Waterloo', Icon: AcademicCapIcon},
    {label: 'Program', text: 'Computing and Financial Management', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 5,
      },
      {
        name: 'Mandarin',
        level: 5,
      },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      {
        name: 'Leadership',
        level: 8,
      },
      {
        name: 'Time Management',
        level: 7,
      },
      {
        name: 'Communication',
        level: 8,
      },
    ],
  },
  
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
  title: 'Benchmark-Tracking Portfolio System',
  description: 'An automatic allocation model for TSX benchmark tracking',
  detailedDescription: 'This comprehensive portfolio management system uses advanced algorithms to track and replicate market benchmark performance. Built with Python, it processes real-time market data to provide accurate portfolio positioning.',
  features: [
    'Designed an automatic allocation model that invests across a benchmark composed of the TSX',
    'Achieved the closest return to the market goal out of 50 other competitors, with a differential of only 0.02%',
    'Implemented optimization algorithms for portfolio rebalancing',
    'Created data visualization tools for performance tracking'
  ],
  technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
  url: 'https://github.com/ViridityLime/Benchmark-Tracking-Portfolio-System-.git',
  image: porfolioImage1,
},

  {
  title: 'Tech Under Twenty',
  description: 'Led a national non-profit organization connecting high school students with career opportunities',
  detailedDescription: 'As President of Tech Under Twenty, I scaled the organization to national reach across Canada, managing over 30 executives and establishing chapters in 20 schools. Through strategic partnerships and events, we connected hundreds of students with hiring companies and provided essential business education.',
  technologies: ['Leadership', 'Event Management', 'Marketing', 'Fundraising'],
  features: [
    'Spearheaded competitions and events that connected high-school students with hiring companies; led 30+ executives in event operations; directed 6 large-scale events with 200+ participants',
    'Launched TU20 chapters in 20 Canadian schools; designed and delivered business-pitch curriculum for 150+ students; managed 20+ chapter leads nationwide',
    'Scaled TU20 to national reach through strategic marketing and direct outreach; established presence in 2 new provinces (Alberta and Nova Scotia)',
    'Secured corporate funding through sponsor-package creation, cold outreach, and stakeholder meetings'
  ],

  url: 'https://techundertwenty.com', // Update with actual URL
  image: porfolioImage2,
  screenshots: [porfolioImage2, tu20Group, tu20Judge, tu20Win] // Add more images if you have them
},
  {
    title: 'Co-founder of Carbon Trackers',
    description: 'Using our product, we plan to reduce carbon emissions in our environment by tracking a user’s carbon footprint. By allowing the user to be aware of their carbon footprint and daily activities that cause it, users can reduce carbon emissions in the environment by following the solutions the app provides. With our start up, we aim to cleanse our atmosphere and bring our planet one step closer to a carbon-free environment. Sheridan college has generously granted us with a $2000 honorarium to fund our startup project',
    url: 'https://www.linkedin.com/company/carbon-trackers/?viewAsMember=true',
    image: porfolioImage3,
  },
   {
  title: 'Power BI Dashboard',
  description: 'Built an interactive dashboard displaying stock data with visuals and market analysis',
  detailedDescription: 'Built an interactive dashboard displaying stock data with visuals and market analysis',
  technologies: ['Power BI', 'DAX', 'M'],
  features: [
    'Built an interactive dashboard with real-time portfolio tracking and broad market analysis; Includes customizable date ranges and intervals with dynamic graph adjustment and a live news feed explaining recent price movements',
    'Uses visuals such as candlestick charts, line graphs, and clustered column charts displaying ticker price and volume; includes analytical data such as P/E ratios, dividend yield, updated closing prices and price/sale ratios'

  ],

  url: 'https://app.powerbi.com/groups/me/reports/b5c83cf6-4c83-493d-92a9-0cf15fc6e076/6e4eb9265de650088237?experience=power-bi', // Update with actual URL
  image: porfolioImage4,
},
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },

   {
    title: 'Waterloo Business Review',
    description: 'Editor of a team that wrote a fully reasearched business article',
    detailedDescription: 'As a team editor, I worked with a team to draft and polish a business article reviewing real-world market trends',
    technologies: ['Research', 'Team Management', 'Editing', 'Outreach'],
    features: [
    'Working as an editor for the Waterloo Business Review organization',
    'Attend weekly meetings to stay updated with the rest of the executive team',
    'Initiates team meetings with 4 other executives to ideate, research, structure, and write out a polished article',
    'Outreach to company executives and university upper-years to gather meaningful data'],
    url: 'https://waterloobusinessreview.org/about.html',
    image: WBRteam,
    },
 
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2030',
    location: 'Waterloo University',
    image: waterloo,

    title: 'Computing and Financial Management',
    content: <p>In my program, I learn coding from the David Cheriton school of Computer Science, as well as fundamental finance knowledge from the School of Accounting and Finance. CFM combines both of these skills,
       teaching me to use knowledge of both Finance and CS to build meaningful, real-world projects that can be used in markets.</p>,
  },
  {
    date: 'June 2025',
    location: 'White Oaks Secondary School',
    image:ibLogo,
    title: 'Graduate of the International Baccalaureate Program',
    content: <p>For two years, I've studied under the IB program, taking rigorous courses like High Level Mathematics and Economics to enhance both my problem-solving and understanding of global markets. 
      The IB program pushed me to maximize my capabilities through hard work and dedication, and the results were well worth it.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2025 - Present',
    location: 'Waterloo Business Review',
    title: 'Team Editor',
    image: WBR,
    content: (
      <ul className="list-disc list-outside ml-5 space-y-2 text-sm md:text-base">
        <li className="pl-2">Working as an editor for the Waterloo Business Review organization</li>
        <li className="pl-2">Attends weekly meetings to stay updated with the rest of the executive team</li>
        <li className="pl-2">Initiates team meetings with 4 other executives to ideate, research, structure, and write out a polished article</li>
        <li className="pl-2">Outreach to company executives and university upper-years to gather meaningful data </li>
      </ul>
    ),

  },
  {
    date: 'August 2023 - June 2025',
    location: 'Tech Under Twenty',
    title: 'Non-profit President',
    image: tu20Logo,
    content: (
      <ul className="list-disc list-outside ml-5 space-y-2 text-sm md:text-base">
        <li className="pl-2">Spearheaded competitions and events that connected high-school students with hiring companies; led 30+ executives in event operations; directed 6 large-scale events with 200+ participants.</li>
        <li className="pl-2">Launched TU20 chapters in 20 Canadian schools; designed and delivered business-pitch curriculum for 150+ students; managed 20+ chapter leads nationwide.</li>
        <li className="pl-2">Scaled TU20 to national reach through strategic marketing and direct outreach; established presence in 2 new provinces (Alberta and Nova Scotia).</li>
        <li className="pl-2">Secured corporate funding through sponsor-package creation, cold outreach, and stakeholder meetings.</li>
      </ul>
    ),
  },
 {
    date: 'August 2023 - August 2024',
    location: 'Ontario DECA',
    title: 'DECA Masters Council',
    image: decaLogo,

    content: (
      <ul className="list-disc list-outside ml-5 space-y-2 text-sm md:text-base">
        <li className="pl-2">Selected as one of the 10 members of the DECA masters council in Ontario</li>
        <li className="pl-2">Helping over 10,500 Ontario DECA competitors by providing case studies workshops and training to enhance competitors' chances of qualifying and competing for international competitions.
</li>
        <li className="pl-2">Working alongside the provincial officers and fellow DECA masters to lead workshops, training competitors for Provincial and ICDC levels of competition
</li>
      </ul>
    ),
  },



  {
    date: 'July 2021 - August 2025',
    location: 'Kung Fu Tea',
    title: 'Team Supervisor',
    image: kftLogo,

    content: (
      <ul className="list-disc list-outside ml-5 space-y-2 text-sm md:text-base">
        <li className="pl-2">Supervised daily operations, balancing bubble tea making and customer service while maximizing efficiency.</li>
        <li className="pl-2">Ensured customer satisfaction and high-quality service by actively listening to customer needs.</li>
      </ul>
    ),
  },
];
/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [

    {
      name: 'Steve Jobs',
      text: 'The people who are crazy enough to think they can change the world are the ones who do',
      image: 'https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.757xw:0.534xh;0.0799xw,0.0372xh&resize=1400:*',
    },
     {
      name: 'Wayne Gretzky',
      text: 'You miss 100% of the shots you do not take',
      image: 'https://media.wnyc.org/i/800/0/l/85/1/waynegretzky.jpg',
    },
    {
      name: 'Martin Luther King Jr.',
      text: 'I have a dream',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWlcdGnGL37Lo4-ZAqVNH3QCAMkgYms6x3w&s',
    },
    {
      name: 'Master Oogway',
      text: 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present',
      image: 'https://shapes.inc/api/public/avatar/masteroogway-jtvx',
    },
    {
      name: 'Mario',
      text: 'Lets a go!',
      image: 'https://ssb.wiki.gallery/images/thumb/2/2e/Mario_SSB4_Alt.png/250px-Mario_SSB4_Alt.png',
    },
    
    
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Feel free to get in touch!',
  description: 'Reach out to me here:',
  items: [
    {
      type: ContactType.Email,
      text: 'Frank.linxiaohong@gmail.com',
      href: 'mailto:Frank.linxiaohong@gmail.com',
    },
    {
      type: ContactType.Instagram,
      text: '@froncliosis',
      href: 'https://www.instagram.com/froncliosis/',
    },
    {
      type: ContactType.Github,
      text: 'Viridity_Lime',
      href: 'https://github.com/ViridityLime/FrankLin.github.io',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ViridityLime/FrankLin.github.io'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/frank-lin-4446a4214/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/froncliosis/'},
];

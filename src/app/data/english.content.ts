import { CVPage } from '@/app/data/data.model';
import { tech } from '@/app/data/tech-stack';

export const englishCV: CVPage[] = [{
  id: 'page-1',
  about: {
    title: 'About',
    educationTitle: 'Education',
    info: [
      {label: 'Portfolio', value: 'https://brambronswijk.nl'},
      {label: 'Email', value: 'bram@passionatepeople.io'},
      {label: 'Date of birth', value: '6 October 1993'}
    ],
    intro: 'A full-stack developer from Delft with a passion for UI design and frontend \n' +
      'development. Always doing my best to deliver high quality code. Always working \n' +
      'on many side projects, to try out new things, and to keep up to date with the \n' +
      'latest technologies. Continuously looking for optimizations and efficiency in \n' +
      'Agile/Scrum processes. \n\n' +
      'Feel free to take a look at my portfolio at https://brambronswijk.nl.',
  },
  experienceTitle: 'Work experience',
  workExperience: [
    {
      title: 'Passionate People client: Vanderlande',
      date: 'March 2022 – Current',
      techStack: [tech.typescript, tech.angular, tech.ngrx, tech.moduleFederation, tech.d3, tech.playwright, tech.cucumber, tech.chartJs, tech.storybook, tech.docker],
      description: 'Fulfilled the senior frontend role within the team and coached junior developers. Worked on a process mining tool for the baggage \n' +
        'handling system of large airports. The tool contained rich interactions and various visualizations like a node segment diagram of the \n' +
        ' airports and various charts. Set up a scalable infrastructure using micro-frontends to enhance cross-team collaboration.',
      activities: [
        'Improved overall architecture of the process mining tool',
        'Introduced mature Redux-based state management using NGRX',
        'Improved the UX flows within the application',
        'Introduced unit, integration and e2e testing',
        'Setup micro-frontend architecture, initially as a NPM package and later using Module Federation',
        'Worked on internal design system',
      ],
    },
    {
      title: 'Passionate People client: Hoogendoorn Growth Management / Let’s Grow',
      date: 'Apr 2021 – Feb 2022',
      techStack: [tech.typescript, tech.nodeJs, tech.angular, tech.ngxs, tech.highCharts, tech.jest, tech.nestJS, tech.fabricJs, tech.scss],
      description: 'Worked in two different teams within Hoogendoorn. Build a sophisticated dashboard for Greenhouse automation, with lots \n' +
        'of views, reports, graphs and customizable content.',
      activities: [
        'Migration of .NET Core widgets and charts displayed in iFrames to Angular',
        'Enhanced performance of data heavy dashboard',
        'Set up a chart configurator with a complex user flow',
        'Created a photoshop-like visual configurator for greenhouses using Fabric.js',
        'Improved overall CSS architecture and responsive design',
        'Created workshops to teach team members about the workings of Angular, RXJS and Observables',
      ],
    }
  ],
}, {
  id: 'page-2',
  workExperience: [
    {
      title: 'Lyceo – Senior Frontend Developer / Lead',
      date: 'Sept 2018 – Mar 2021',
      techStack: [tech.typescript, tech.nodeJs, tech.angular, tech.rxjs, tech.ionic, tech.jest, tech.react, tech.laravel, tech.fastlane, tech.vueJs, tech.docker, tech.scss],
      description: 'Authority within the team regarding frontend. Worked on a complex scheduling application in Angular. Also created \n' +
        'various apps in Ionic. Did full-stack work on a homework institute tool with a Laravel API and a Vue.js frontend.',
      activities: [
        'Worked on various Angular and Ionic SPA dashboards and several Ionic mobile apps',
        'Created various NPM packages, including one for a custom OAuth implementation',
        'Setup automatic deployment of ionic apps to the app stores using Fastlane',
        'Introduced unit testing using Jest.',
        'Setup performance and error monitoring using Sentry',
        'Created tracking time dashboard to analyse and improve the SCRUM process within the team',
      ],
    },
    {
      title: 'Lyceo – Wordpress Developer',
      date: 'Sept 2017 – Aug 2018',
      techStack: [tech.typescript, tech.wordpress, tech.php, tech.twig, tech.jest, tech.react, tech.webpack, tech.cypress, tech.nginx, tech.gitlabCI, tech.aws, tech.docker, tech.scss],
      description: 'Developed various features for a variety of websites. Set up a mature infrastructure for the hosting of 15 WordPress websites on AWS, including' +
        'automatic updates, security checks and monitoring. For a number of webshops, a link had to be made with multiple back ofce systems. For the ' +
        'webshops, I set up a React frontend in TypeScript.',
      activities: [
        'Improved overall architecture of the WordPress websites',
        'Developed various features, themes and plugins',
        'Solved scalability and performance issues on a high trafc webshop',
        'Deployments using Gitlab-ci',
        'Setup S3 Bucket Image CDN hosting.',
        'Tailored webpack setup',
        'Setup E2E tests initially using Nightwatch later using Cypress',
        'Setup availability monitoring using pingdom and setup performance and error monitoring using Sentry',
      ],
    },
    {
      title: 'Freelance Webdeveloper',
      date: 'Apr 2014 – Feb 2018',
      techStack: [tech.javascript, tech.wordpress, tech.php, tech.react, tech.gitlabCI, tech.git, tech.scss],
      description: 'During my studies at the TU Delft, I worked as a freelance web developer. I developed various frontends for \n' +
        ' dashboards, using mustache.js, JavaScript and SCSS. Apart from that, I designed and developed many \n' +
        ' tailor-made WordPress websites.',
      activities: [
        'Created interactive tool for RowCoaching to follow sailings and rowing regatta\'s real-time',
        'Created the frontend for IRIS to log the time during rowing regatta\'s',
        'Created an admin dashboard to host rowing regatta\'s',
        'Redesigned and created React home page for Laga',
        'Designed and developed over 20 custom WordPress websites using PHP, Javascript, CSS',
        'Deployments using Gitlab-ci',
      ],
    }
  ],
}];
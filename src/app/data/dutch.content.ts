import { CVPage } from '@/app/data/data.model';
import { tech } from '@/app/data/tech-stack';

export const dutchCV: CVPage[] = [{
  id: 'page-1',
  about: {
    title: 'Over mij',
    educationTitle: 'Opleiding',
    info: [
      {label: 'Portfolio', value: 'https://brambronswijk.nl'},
      {label: 'E-mail', value: 'bram@passionatepeople.io'},
      {label: 'Geboortedatum', value: '6 oktober 1993'}
    ],
    intro: 'Ik ben een full-stack ontwikkelaar uit Delft met een passie voor UI-design en  \n' +
      'front-end development. Ik werk secuur en doe altijd mijn best om code van hoge kwaliteit te leveren. Ik werk veel aan hobbyprojecten om ' +
      'nieuwe dingen uit te proberen en op de hoogte te blijven van de laatste ontwikkelingen. Ik ben altijd op ' +
      'zoek naar optimalisaties en efficiëntie binnen het ontwikkel proces. \n\n' +
      ' Neem gerust een kijkje op mijn portfolio op https://brambronswijk.nl.',
  },
  experienceTitle: 'Werkervaring',
  workExperience: [
    {
      title: 'Passionate People client: Vanderlande',
      date: 'maart 2022 – heden',
      techStack: [tech.typescript, tech.angular, tech.ngrx, tech.moduleFederation, tech.d3, tech.jest, tech.playwright, tech.cucumber, tech.chartJs, tech.storybook, tech.docker],
      description: 'Ik vervul de rol van senior frontend engineer binnen het team en coach junior ontwikkelaars. ' +
        'Ik werk aan een process-mining tool voor het bagageafhandelingssysteem van grote luchthavens. De tool ' +
        'bevat veel complexe interacties en verschillende visualisaties zoals plattegronden van de ' +
        'luchthavens en diverse grafieken. Ik heb een schaalbare infrastructuur opgezet met behulp van microfrontends ' +
        'om de samenwerking tussen teams te vereenvoudigen.',
      activities: [
        'Verbeteren van de algehele architectuur van de process-mining tool',
        'Introduceerde degelijk Redux-based state management met behulp van NGRX',
        'Verbeterde de UX-flows binnen de applicatie',
        'Opzetten van unit-, integratie- en e2e-tests',
        'Opzetten van microfrontend-architectuur, aanvankelijk met NPM-pakketten en later met behulp van Module Federation',
        'Meegewerkt aan intern designsystem en component library',
      ],
    },
    {
      title: 'Passionate People client: Hoogendoorn Growth Management / Let’s Grow',
      date: 'apr 2021 – feb 2022',
      techStack: [tech.typescript, tech.nodeJs, tech.angular, tech.ngxs, tech.highCharts, tech.jest, tech.nestJS, tech.fabricJs, tech.scss],
      description: 'Werkte in twee verschillende teams binnen Hoogendoorn. Werkte aan een geavanceerd dashboard voor ' +
        'kasautomatisering, met veel verschillende visualizaties, rapporten, grafieken en customizable content.',
      activities: [
        'Migratie van iFrames met .NET Core-widgets en grafieken naar Angular',
        'Verbeterde performance van complex dashboard',
        'Opzetten van een grafiekconfigurator met een complexe user-flow',
        'Een photoshop-achtige visuele configurator gemaakt voor kassen met behulp van Fabric.js',
        'Verbeterde algehele CSS-architectuur en responsive-design',
        'Gaf workshops om teamleden kennis bij te brengen over de werking van Angular, RXJS en Observables',
      ],
    }
  ],
}, {
  id: 'page-2',
  workExperience: [
    {
      title: 'Lyceo – Senior Frontend Ontwikkelaar / Lead',
      date: 'sept 2018 – mrt 2021',
      techStack: [tech.typescript, tech.nodeJs, tech.angular, tech.rxjs, tech.ionic, tech.jest, tech.react, tech.laravel, tech.fastlane, tech.vueJs, tech.docker, tech.scss],
      description: 'Autoriteit binnen het team met betrekking tot de front-end. Ik heb gewerkt aan een complexe planningtool in Angular. ' +
        'Ook heb ik verschillende apps gemaakt in Ionic. Ik heb full-stack werk verricht aan een tool voor huiswerkinstellingen met een Laravel API en een Vue.js front-end.',
      activities: [
        'Gewerkt aan verschillende Angular en Ionic SPA-dashboards. Ook heb ik verschillende Ionic mobile apps uitgerold',
        'Diverse NPM-packages opgezet, waaronder een pakketje voor een custom OAuth-implementatie',
        'CI/CD pipeline met automatische deploys van ionic-apps naar de app stores opgezet met Fastlane',
        'Unit testing met Jest geintroduceerd',
        'Opzetten van performance en error monitoring met Sentry',
        'Een tracking-time dashboard gemaakt (als hobbyproject) om het SCRUM-proces binnen het team te analyseren en verbeteren',
      ],
    },
    {
      title: 'Lyceo – Wordpress Ontwikkelaar',
      date: 'sept 2017 – aug 2018',
      techStack: [tech.typescript, tech.wordpress, tech.php, tech.twig, tech.jest, tech.react, tech.webpack, tech.cypress, tech.nginx, tech.gitlabCI, tech.aws, tech.docker, tech.scss],
      description: 'Verschillende features ontwikkeld voor diverse websites. De infrastructuur opgezet voor het hosten van 15 WordPress websites\n' +
        'op AWS, inclusief automatische updates, beveiligingscontroles en monitoring. Voor een aantal webshops moest een koppeling worden gemaakt met meerdere backoffice-systemen. Voor de ' +
        'webshops heb ik een React-frontend in TypeScript opgezet.',
      activities: [
        'Verbeterde de algehele architectuur van de WordPress-websites',
        'Diverse features, thema\'s en plugins ontwikkeld',
        'Schaalbaarheids- en performance issues opgelost bij een cruciale webshop met veel verkeer',
        'CI/CD pipeline opgezet met behulp van Gitlab-ci',
        'Opzetten van S3 Bucket Image CDN-hosting.',
        'Custom webpack-setup',
        'Opzetten van E2E-tests, aanvankelijk met Nightwatch later met Cypress',
        'Opzetten van availability monitoring met pingdom en opzetten van performance en error monitoring met Sentry',
      ],
    },
    {
      title: 'Freelance Webontwikkelaar',
      date: 'apr 2014 – feb 2018',
      techStack: [tech.javascript, tech.wordpress, tech.php, tech.react, tech.gitlabCI, tech.git, tech.scss],
      description: 'Tijdens mijn studie aan de TU Delft werkte ik als freelance webontwikkelaar. Ik ontwikkelde ' +
        'diverse front-ends voor dashboards, met behulp van mustache.js, JavaScript en SCSS. Daarnaast ontwierp ' +
        'en ontwikkelde ik veel op maat gemaakte WordPress-websites.',
      activities: [
        'Ontwikkelde tool voor RowCoaching om zeil- en roeiregatta\'s realtime te kunnen volgen',
        'De front-end gemaakt voor IRIS om de uitslag tijdens roeiregatta\'s bij te houden',
        'Een admin dashboard gemaakt om roeiregatta\'s te organiseren',
        'Redesign gemaakt voor de home page voor Laga ontwikkeld met React',
        'Ontwikkelde meer dan 20 op maat gemaakte WordPress-websites',
        'Deployments met behulp van Gitlab-ci',
      ],
    }
  ],
}];

const projects = [
  {
    id: 0,
    name: 'Personal website',
    preview: 'https://cve-personal.netlify.app/',
    github: 'https://github.com/CVE-078/personal-website',
    type: 'Website',
    stack: ['React', 'SCSS', 'BEM'],
    picture: '/assets/v7RfA1q.webp'
  },
  {
    id: 1,
    name: 'Airbnb Clone',
    preview: 'https://airbnb-clone-react.vercel.app/',
    github: 'https://github.com/CVE-078/airbnb-clone-react',
    type: 'Clone',
    stack: ['Next.js', 'Tailwind CSS', 'API'],
    picture: '/assets/Wg58djZ.webp'
  },
  {
    id: 2,
    name: 'F1 Game Leaderboard',
    preview: 'https://f1-leaderboard.netlify.app/',
    github: 'https://github.com/CVE-078/f1-leaderboard',
    type: 'Application',
    stack: ['Vue.js', 'Firebase', 'Tailwind CSS', 'SCSS', 'BEM'],
    picture: '/assets/hDC6DoO.webp'
  }
]

const jobs = [
  {
    id: 0,
    company: 'Software Bastards',
    url: 'https://softwarebastards.nl/',
    title: 'Front End Developer',
    location: 'Abcoude, Netherlands',
    startDate: 'November 2021',
    endDate: 'Present',
    description: ''
  },
  {
    id: 1,
    company: 'Intermix',
    url: 'https://www.intermix.nl/',
    title: 'Web Developer',
    location: 'Sliedrecht, Netherlands',
    startDate: 'September 2019',
    endDate: 'October 2021',
    description: ''
  },
  {
    id: 2,
    company: 'Dutch Blue',
    url: 'https://www.dutchblue.nl/',
    title: 'Full Stack Developer',
    location: 'Dordrecht, Netherlands',
    startDate: 'March 2019',
    endDate: 'August 2019',
    description: ''
  },
  {
    id: 3,
    company: 'B.made',
    url: 'https://www.bmade.nl/',
    title: 'Service Developer',
    location: 'Rotterdam, Netherlands',
    startDate: 'August 2018',
    endDate: 'February 2019',
    description: ''
  },
  {
    id: 4,
    company: 'Intermix',
    url: 'https://www.intermix.nl/',
    title: 'Web Developer',
    location: 'Sliedrecht, Netherlands',
    startDate: 'March 2015',
    endDate: 'July 2018',
    description: ''
  },
  {
    id: 5,
    company: 'Intermix',
    url: 'https://www.intermix.nl/',
    title: 'Internship',
    location: 'Sliedrecht, Netherlands',
    startDate: 'September 2014',
    endDate: 'February 2015',
    description: ''
  }
]

const menu = [
  {
    id: 0,
    name: 'about',
    link: '#about',
    type: 'link'
  },
  {
    id: 1,
    name: 'jobs',
    link: '#jobs',
    type: 'link'
  },
  {
    id: 2,
    name: 'projects',
    link: '#projects',
    type: 'link'
  },
  {
    id: 3,
    name: 'say hello!',
    link: '#contact',
    type: 'button'
  },
]

const socials = [
  {
    id: 0,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/christiaan-van-eijnsbergen/',
    icon: 'fab fa-fw fa-linkedin-in'
  },
  {
    id: 1,
    name: 'Github',
    url: 'https://github.com/CVE-078',
    icon: 'fab fa-fw fa-github'
  },
  {
    id: 2,
    name: 'Resume',
    url: '/cv',
    icon: 'fas fa-fw fa-file-alt'
  }
]

const titles = ['a 27-year-old', 'an avid gamer', 'a problem solver', 'a father-of-one', 'a tv series binger', 'a web developer']

const about = `
    <p>Hello, nice to meet you!</p>

    <p>I am Christiaan van Eijnsbergen, a 27-year-old, Web Developer with a passion for Front-End development.</p>

    <p>
        My interest for programming began after being on my dad's computer (perhaps too often..) back in the day - in all honesty, mainly to play games.
        Choosing to study computer science came quite natural due to the amount of time spent on the computer, only to realise in high school that I was actually thoroughly enjoying it.
    </p>

    <p>My goals are to bring ideas and designs to life and create websites and applications users will have a great experience using.</p>

    <p>
        I am currently employed at <a href="https://softwarebastards.nl/" target="_blank" rel="noopener noreferrer" class="link link--external" alt="Software Bastards" title="Software Bastards">Software Bastards</a> as a Front End Developer.
    </p>
`

export { projects, jobs, menu, socials, titles, about }
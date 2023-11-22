export const coreTechnologies = [
  {
    title: 'Django',
    description: 'Python web framework',
    detail: 'The web application framework that powers μblog',
    image: 'django.jpeg',
    documentationLink: 'https://www.djangoproject.com/',
  },
  {
    title: 'Vue 3',
    description: 'The latest version of Vue.js',
    detail: 'Used to build the frontend',
    image: 'vue3.png',
    documentationLink: 'https://vuejs.org/',
  },
  {
    title: 'Django REST Framework',
    description: 'API Framework for Django',
    detail: 'Used for building APIs with Django',
    image: 'drf_square.png',
    documentationLink: 'https://www.django-rest-framework.org/',
  },
  {
    title: 'Quasar',
    description: 'A Vue.js Framework for building web apps',
    detail: 'A Vue.js framework and component library',
    image: 'quasar.png',
    documentationLink: 'https://quasar.dev/',
  },
]

const otherTechnologies = [
  {
    title: 'Postgres',
    description: 'This is postgres',
    detail: 'This is more about postgres',
    image: 'elephant.png',
    documentationLink: 'https://www.postgresql.org/',
  },
  {
    title: 'Redis',
    description: 'An in memory database',
    detail: 'Used for caching and message brokering',
    image: 'redis.png',
    documentationLink: 'https://redis.io',
  },
  {
    title: 'GitHub Actions',
    description: 'GitHubs\'s CI/CD tool',
    detail: 'Used for test automation and deployment',
    image: 'ghactions.png',
    documentationLink: 'https://github.com/features/actions',
  },
  {
    title: 'CDK',
    description: 'AWS Cloud Development Kit',
    detail: 'Used for defining AWS infrastructure in code',
    image: 'cdk.png',
    documentationLink: 'https://aws.amazon.com/cdk/',
  },
  {
    title: 'Terraform',
    description: 'Infrastructure as Code',
    detail: 'Used for defining AWS infrastructure in code',
    image: 'terraform.webp',
    documentationLink: 'https://www.terraform.io/',
  },
  {
    title: 'Bootstrap 4',
    description: 'A UI Framework',
    detail: 'Used for styling Django templates',
    image: 'bootstrap.png',
    documentationLink: 'https://getbootstrap.com',
  },
  {
    title: 'TypeScript',
    description: 'A superset of TypeScript',
    detail: 'Used in several parts of the project tech stack',
    image: 'ts.png',
    documentationLink: 'https://www.typescriptlang.org/',
  },
  {
    title: 'Python',
    description: 'A general-purpose programming language',
    detail: 'The language used for programming the web backend',
    image: 'python.png',
    documentationLink: 'https://www.python.org/',
  },
  {
    title: 'Poetry',
    description: 'Python dependency management and packaging made easy',
    detail: 'A tool used to manage python dependencies',
    image: 'poetry.png',
    documentationLink: 'https://python-poetry.org/',
  },
  {
    title: 'Black',
    description: 'The uncompromising Python code formatter',
    detail: 'A tool used for formatting Python code',
    image: 'black.png',
    documentationLink: 'https://github.com/psf/black',
  },
  {
    title: 'Cypress',
    description: 'An end-to-end testing framework',
    detail: 'A framework used to test the application',
    image: 'cypress.png',
    documentationLink: 'https://www.cypress.io',
  },
  {
    title: 'DigitalOcean',
    description: 'DigitalOcean, Inc. is an American cloud infrastructure provider headquartered in New York City with data centers worldwide.',
    detail: 'The cloud computing services you need, with the predictable pricing, developer-friendly features, and scalability you\'ll love.',
    image: 'do.png',
    documentationLink: 'https://www.digitalocean.com/',
  },
  {
    title: 'ECS',
    description: 'A container orchestration tool for AWS',
    detail: 'A tool used to run the application containers in AWS',
    image: 'ecs.png',
    documentationLink: 'https://aws.amazon.com/ecs/',
  },
  {
    title: 'Projen',
    description: 'Define and maintain complex project configuration through code',
    detail: 'Used for maintaining the CDK construct library',
    image: 'projen.png',
    documentationLink: 'https://github.com/projen/projen#readme',
  },
  {
    title: 'pytest',
    description: 'helps you write better programs',
    detail: 'used for unit-testing backend python code',
    image: 'pytest.png',
    documentationLink: 'https://docs.pytest.org/en/latest/index.html',
  },
  {
    title: 'Jazzband',
    detail: 'Jazzband is a collaborative community to share the responsibility of maintaining Python-based projects',
    description: 'We are all part of this',
    image: 'jazzband.png',
    documentationLink: 'https://jazzband.co/',
  },
  {
    title: 'NGINX',
    detail: 'Advanced Load Balancer, Web Server, & Reverse Proxy',
    description: 'NGINX is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more',
    image: 'nginx.png',
    documentationLink: 'https://www.nginx.com/',
  },
  {
    title: 'pgadmin',
    detail: 'Database UI for PostgreSQL',
    description: 'pgAdmin 4 is a free open source graphical management tool for PostgreSQL and derivative relational databases such as EnterpriseDB\'s EDB Advanced Server',
    image: 'postgres-alt.svg',
    // image: 'pgadmin.svg',
    documentationLink: 'https://www.pgadmin.org/',
  },
  {
    title: 'cloud-init',
    detail: 'Cloud-init is the industry standard multi-distribution method for cross-platform cloud instance initialization',
    description: 'Cloud-init is used in the project to configure cloud compute instances',
    image: 'cloud-init.png',
    documentationLink: 'https://cloudinit.readthedocs.io/en/latest/',
  },
  {
    title: 'Jupyter',
    description: 'interactive python environment',
    detail: 'used for prototyping',
    image: 'jupyter.png',
    documentationLink: 'https://jupyter.org/',
  },
  {
    title: 'Kubernetes',
    description: 'Open-source container orchestration tool',
    detail: 'Used to run containers on AWS',
    image: 'k8s.png',
    documentationLink: 'https://kubernetes.io',
  },
  {
    title: 'minikube',
    description: 'a tool for running kubernetes locally',
    detail: 'Used for local development',
    image: 'minikube.png',
    documentationLink: 'https://minikube.sigs.k8s.io/docs/start/',
  },
  {
    title: 'docker',
    description: 'a tool for building and running containers',
    detail: 'used for local development, CI/CD and production',
    image: 'docker.png',
    documentationLink: 'https://www.docker.com/',
  },
  {
    title: 'diagrams.net',
    description: 'an open source diagramming tool',
    detail: 'used for generating diagrams for this project',
    image: 'diagrams.png',
    documentationLink: 'https://www.diagrams.net/',
  },
  {
    title: 'JWT',
    description: 'JSON Web Tokens',
    detail: 'JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties',
    image: 'jwt.svg',
    documentationLink: 'https://jwt.io/',
  },
  {
    title: 'GraphQL',
    description: 'A query language for your API',
    detail: 'used for querying data in the application',
    image: 'gql.png',
    documentationLink: 'https://graphql.org/',
  },
  {
    title: 'Graphene',
    description: 'GraphQL in Python Made Easy',
    detail: 'a library for using GraphQl in Django',
    image: 'graphene.png',
    documentationLink: 'https://graphene-python.org/',
  },
  {
    title: 'Celery',
    description: 'an open source asynchronous task queue based on distributed message passing',
    detail: 'a library used for processing tasks',
    image: 'celery.png',
    documentationLink: 'https://docs.celeryproject.org/en/stable/getting-started/introduction.html',
  },
  {
    title: 'OpenAPI',
    description: 'defines a standard, language-agnostic interface to RESTful APIs',
    detail: 'used for documenting the REST API for this project',
    image: 'openapi.png',
    documentationLink: 'https://swagger.io/specification/',
  },
  {
    title: 'Sentry',
    description: 'Error Monitoring - Get Started in Minutes',
    detail: 'Open-source error tracking with full stacktraces & asynchronous context',
    image: 'sentry.png',
    documentationLink: 'https://sentry.io/',
  },
  {
    title: 'GitLab',
    description: 'Accelerate modern DevOps',
    detail: 'An all-in one DevOps tool',
    image: 'gitlab.png',
    documentationLink: 'https://about.gitlab.com/',
  },
  {
    title: 'Pulumi',
    description: 'Modern Infrastructure as Code',
    detail: 'Used to deploy an application to the local minikube cluster',
    image: 'pulumi.png',
    documentationLink: 'https://www.pulumi.com',
  },
  {
    title: 'jsii',
    description: 'jsii allows code in any language to naturally interact with JavaScript classes',
    detail: 'used to publish the CDK construct to npm and PyPI',
    image: 'jsii.png',
    documentationLink: 'https://aws.github.io/jsii/',
  },
  {
    title: 'GNU Make',
    description: 'Make is a build automation tool that automatically builds executable programs and libraries from source code',
    detail: 'used to simplify local development and provide aliases for long commands',
    image: 'gnu.png',
    documentationLink: 'https://www.gnu.org/software/make/',
  },
  {
    title: 'MailHog',
    description: 'Web and API based SMTP testing',
    detail: 'used locally for testing that involves sending emails to users',
    image: 'mailhog.png',
    documentationLink: '',
  },
  {
    title: 'VSCode',
    description: 'A code editor redefined and optimized for building and debugging modern web and cloud applications',
    detail: 'my editor of choice for working on this project',
    image: 'vscode.png',
    documentationLink: 'https://code.visualstudio.com/',
  },
  {
    title: 'Copilot',
    description: 'AI pair programmer',
    detail: 'a VSCode extension that helps you write code',
    image: 'copilot.png',
    documentationLink: 'https://copilot.github.com/',
  },
  {
    title: 'K6',
    description: 'A load testing framework for JavaScript',
    detail: 'used for load testing the API',
    image: 'k6.png',
    documentationLink: 'https://k6.io/',
  },
  {
    title: 'Docker swarm',
    description: 'A distributed container orchestration platform',
    detail: 'used for running containers on any machine',
    image: 'swarm.png',
    documentationLink: 'https://www.docker.com/products/swarm',
  },
  {
    title: 'Traefik',
    description: 'A reverse proxy and load balancer',
    detail: 'used for routing traffic to the API',
    image: 'traefik.png',
    documentationLink: 'https://traefik.io/',
  },
  {
    title: 'Portainer',
    description: 'A Docker management platform',
    detail: 'used for managing docker swarm clusters',
    image: 'portainer.svg',
    documentationLink: 'https://portainer.io/',
  },
  {
    title: 'VuePress',
    description: 'Vue-powered Static Site Generator',
    detail: 'used for building the documentation site for this project',
    image: 'vuepress.png',
    documentationLink: 'https://vuepress.vuejs.org/',
  },
  {
    title: 'systemd',
    description: 'systemd is a software suite that provides an array of system components for Linux operating systems',
    detail: 'systemd is a Linux initialization system and service manager',
    image: 'systemd.png',
    documentationLink: 'https://portainer.io/',
  },
  {
    title: 'Raspberry Pi',
    description: 'A low-cost, open-source, and easy-to-use computer',
    detail: 'used for running the application',
    image: 'raspberrypi.png',
    documentationLink: 'https://www.raspberrypi.org/',
  },
  {
    title: 'Netlify',
    description: 'An intuitive Git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps',
    detail: 'used to deploy the Quasar application',
    image: 'netlify.png',
    documentationLink: 'https://www.netlify.com/',
  },
  {
    title: 'Focal Fossa',
    description: 'Ubuntu 20.04',
    detail: 'one of the preferred operating systems for developing this project',
    image: 'focalfossa.png',
    documentationLink: 'https://releases.ubuntu.com/20.04/',
  },
  {
    title: 'Windows 10',
    description: 'Microsoft Operation System',
    detail: 'one of the preferred operating systems for developing this project',
    image: 'windows10.png',
    documentationLink: 'https://www.microsoft.com/en-us/windows/get-windows-10',
  },
  {
    title: 'WSL',
    description: 'Windows Subsystem for Linux',
    detail: 'Windows Subsystem for Linux is a compatibility layer for running Linux binary executables natively on Windows 10, Windows 11, and Windows Server 2019. In May 2019, WSL 2 was announced, introducing important changes such as a real Linux kernel, through a subset of Hyper-V features.',
    image: 'wsl.png',
    documentationLink: 'https://docs.microsoft.com/en-us/windows/wsl/about',
  },
  {
    title: 'macOS Big Sur',
    description: 'macOS version 11.4',
    detail: 'one of the preferred operating systems for developing this project',
    image: 'bigsur.png',
    documentationLink: 'https://www.apple.com/macos/big-sur/',
  },
  {
    title: 'Apple Silicon',
    description: 'Apple M1 Chip',
    detail: 'This project can be developed on Apple\'s latest hardware',
    image: 'm1.jpeg',
    documentationLink: 'https://www.apple.com/mac/',
  },
]

export const allTechnologies = coreTechnologies.concat(otherTechnologies);
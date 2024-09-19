import type { RouteLocationRaw } from 'vue-router'
import type { NuxtApp } from '#app'
import type { AwesomeLayoutPageNavbarMenu } from '~/utils/types'
import type {
  Personal,
  Summary,
  Education,
  Project,
  Company,
  Certification
} from '~/utils/curriculumVitae'

export interface NuxtAwesomeAppConfig {
  /** title name */
  name?: string
  /** description */
  description?: string

  /** project config */
  project?: {
    /** links */
    links?: {
      /** project github link */
      github?: string
    }
  }

  /** layout config */
  layout?: {
    /** page layout */
    page?: {
      /** navbar */
      navbar?: {
        /** menus in navbar */
        menus?: AwesomeLayoutPageNavbarMenu[]
      }
    }
    /** footer */
    footer?: {
      /** footer year */
      year?: number
    }
    /** welcome component page */
    welcome?: {
      title?: string
      disableInfoReplaceIndexInWelcomePage?: boolean
      primaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
      secondaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
    }
  }

  /** author config */
  author?: {
    /** author name */
    name?: string
    /** author dateOfBirth */
    dateOfBirth?: string
    /** author email */
    email?: string
    /** author phoneNumber */
    phoneNumber?: string
    /** author city */
    city?: string
    /** author links */
    links?: {
      /** author github link */
      github?: string
      /** author medium link */
      medium?: string
      /** author website link */
      website?: string
    }
  }

  curriculumVitae?: {
    en: {
      information: Personal
      summary?: Summary
      workExperience: Company[] | null
      technologies: string[] | string
      education?: Education
      languages: Language[]
      certifications?: Certification[] | null
      projects: Project[] | null
      stack: string[]
      softSkills: string[]
    }
    es: {
      information: Personal
      summary?: Summary
      workExperience: Company[] | null
      technologies: string[] | string
      education?: Education
      languages: Language[]
      certifications?: Certification[] | null
      projects: Project[] | null
      stack: string[]
      softSkills: string[]
    },
    ca: {
      information: Personal
      summary?: Summary
      workExperience: Company[] | null
      technologies: string[] | string
      education?: Education
      languages: Language[]
      certifications?: Certification[] | null
      projects: Project[] | null
      stack: string[]
      softSkills: string[]
    }
  }
  /** author config */
  disableInfoReplaceIndexInWelcomePage?: boolean
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    awesome?: NuxtAwesomeAppConfig
  }
}

export default defineAppConfig({
  awesome: {
    name: 'Home, Sweet Home',
    description: '',
    project: {
      links: {
        github: 'https://github.com/mllagostera',
        linkedin: 'https://www.linkedin.com/in/mllagostera',
        stackshare: 'https://stackshare.io/mllagostera/my-stack#stack',
        x: 'https://x.com/vansid',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            {
              "type": "link",
              "title": "workExperience",
              "to": "#workExperience"
            },
            {
              "type": "link",
              "title": "education",
              "to": "#education"
            },
            {
              "type": "link",
              "title": "technicalSkills",
              "to": "#technologies"
            },
            {
              "type": "link",
              "title": "projects",
              "to": "#projects"
            }
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
        isDemo: false,
        isActive: true,
        link: 'https://github.com/mllagostera/nuxt-3-cv',
      },
      welcome: {
        title: 'Miquel Llagostera',
        disableInfoReplaceIndexInWelcomePage: true,
        primaryActionButton: {
          title: 'Nuxt 3',
          to: 'https://nuxt.com/',
        },
        secondaryActionButton: {
          title: 'Github',
          to: 'https://github.com/mllagostera/nuxt-3-cv',
        },
      },
    },
    author: {
      name: 'Miquel Llagostera',
      email: 'mllagosterarios@gmail.com',
      dateOfBirth: '10/07/1984',
      phoneNumber: '',
      city: 'Barcelona',
      links: {
        github: 'https://github.com/mllagostera',
        website: 'https://mllagostera.com',
        linkedin: 'https://www.linkedin.com/in/mllagostera',
      },
    },
    disableInfoReplaceIndexInWelcomePage: false,
    curriculumVitae: {
      en: {
        information: {
          fullName: 'Miquel Llagostera',
          position: 'Scrum Master | Agile Lover | Agile Coach | Software Development Lover',
        },
        summary: {
          about: 'string',
          summary: [
            'Dynamic and results-driven Scrum Master with over a decade of technical development expertise, specializing in digital certification and electronic security (PKI).',
            'Proven track record in system administration, software and mobile development, as well as DevOps',
            'Skilled in leading diverse, cross-functional teams to successful project outcomes',
            'Currently excelling in the role at Logalty and Firmaprofesional, as part of Logalty Group',
          ],
        },
        workExperience: [
          {
            companyName: 'Logalty',
            startDate: 'Nov 2022',
            endDate: 'Present',
            position: 'Scrum Master',
            description: [
              'Facilitated daily stand-up meetings, sprint planning, and retrospectives to ensure team alignment and continuous improvement',
              'Coached team members on Scrum framework principles and best practices to increase efficiency and productivity',
              'Collaborated with product owners to prioritize backlog items and ensure timely delivery of high-quality software products',
              'Implemented Agile methodologies and tools to track project progress and drive successful completion of deliverables',
            ],
            projects: [
              'Implement Agile Development Workflow using Jira',
            ],
            technologies:[
              'Scrum',
              'Jira',
              'Teamwork',
              'Software Management',
              'Agile Methodologies',
              'Agile Software Methodologies',
              'Problem Solving',
              'Facilitation',
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Oct 2023',
            endDate: 'Present',
            position: 'Scrum Master',
            description: [
              'Facilitated daily stand-up meetings, sprint planning, and retrospectives to ensure team alignment and continuous improvement',
              'Coached team members on Scrum framework principles and best practices to increase efficiency and productivity',
              'Collaborated with product owners to prioritize backlog items and ensure timely delivery of high-quality software products',
              'Implemented Agile methodologies and tools to track project progress and drive successful completion of deliverables',
            ],
            projects: [
              'Implement Agile Development Workflow using Jira',
            ],
            technologies:[
              'Scrum',
              'Jira',
              'Teamwork',
              'Software Management',
              'Agile Methodologies',
              'Agile Software Methodologies',
              'Problem Solving',
              'Facilitation',
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Jan 2022',
            endDate: 'Oct 2023',
            position: 'Scrum Master & Software Development Manager',
            description: [
              'Facilitated daily stand-up meetings, sprint planning, and retrospectives to ensure team alignment and continuous improvement',
              'Coached team members on Scrum framework principles and best practices to increase efficiency and productivity',
              'Collaborated with product owners to prioritize backlog items and ensure timely delivery of high-quality software products',
              'Implemented Agile methodologies and tools to track project progress and drive successful completion of deliverables',
              'Manager of an international offshore team, responsible for coordinating and ensuring effective collaboration across different time zones, from Japan to Spain',
              'Mentor to new developers and team leads, fostering professional growth and leadership skills, and coach for Product Owners and Product Managers, ensuring alignment with project goals and successful product delivery',
              'Tasked with identifying and incorporating external tools such as Pipelines, Jenkins, and Sensiolabs Insight to improve code quality',
              'Leader in managing and contributing to the company\'s open source projects, promoting a culture of collaboration and innovation',
              'Implementer of DevOps practices creating a new CI/CD process, including software delivery, Docker containerization, Ansible automation, cloud services, ensuring efficient, reliable operations and reducing deployment times',              
              'Hands on when required'
            ],
            projects: [
              'Implement Agile Development Workflow using Jira',
              'Create CI/CD using Bitbucket Pipelines and Jenkins',
              'Design an strategic plan to integrate external and offshore development resources',
            ],
            technologies:[
              'Scrum',
              'Jira',
              'Teamwork',
              'Software Management',
              'Agile Methodologies',
              'Agile Software Methodologies',
              'Problem Solving',
              'Facilitation',
              'Ansible',
              'Team Management',
              'Development',
              'Symfony',
              'DevOps'
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Nov 2016',
            endDate: 'Jan 2022',
            position: 'Software Development Manager',
            description: [
              'Manager of an international offshore team, responsible for coordinating and ensuring effective collaboration across different time zones',
              'Designer of strategic plans to integrate external and offshore development resources, optimizing team capabilities',
              'Mentor to new developers and team leads, fostering professional growth and leadership skills, and coach for Product Owners and Product Managers, ensuring alignment with project goals and successful product delivery',
              'Tasked with identifying and incorporating external tools such as Pipelines, Jenkins, and Sensiolabs Insight to improve code quality',
              'Leader in managing and contributing to the company\'s open source projects, promoting a culture of collaboration and innovation',
              'Implementer of DevOps practices creating a new CI/CD process, including software delivery, Docker containerization, Ansible automation, cloud services, ensuring efficient, reliable operations and reducing deployment times',              
              'Proactive in providing technical support and development when required, ensuring milestone achievement and quality standards, as backend developer experienced in PHP, Symfony, Java, MySQL, Elasticsearch, and SQLite'
            ],
            projects: [
              'Increase the size temas without losing quality on devlivered software',
            ],
            technologies:[
              'Teamwork',
              'Software Management',
              'Agile Methodologies',
              'Agile Software Methodologies',
              'Problem Solving',
              'Facilitation',
              'Ansible',
              'Team Management',
              'Development',
              'Symfony',
              'DevOps'
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Feb 2011',
            endDate: 'Nov 2016',
            position: 'Senior Software Developer',
            description: [
              'Led the design and upkeep of the PKI management platform, ensuring optimal security and performance',
              'Managed the design and maintenance of the time-stamping platform, enhancing its functionality and reliability',
              'Oversaw the design and maintenance of the MobileID platform across iOS, Android, and backend systems, ensuring seamless integration and operation',
              'Developed backend solutions using PHP, Java, and MySQL, contributing to robust and scalable applications. Frontend interfaces using Javascript and JQuery, enhancing user experience',
              'Provided advanced technical support, resolving complex issues to maintain system stability and user satisfaction',
              'Starting to implement agile methodologies to streamline development workflows and improve team efficiency',
              'Managed system administration tasks including Apache, Linux, and firewall configurations to ensure secure and efficient operations'
            ],
            projects: [
              'MobileID'
            ],
            technologies: [
              'Product Requirements',
              'Symfony',
              'VMware',
              'PHP',
              'Help Desk Support',
              'SonicWALL',
              'Technical Understanding',
              'Java',
              'Android Development',
              'Software Solutions',
              'Teamwork',
              'Team Leadership',
              'Agile Methodologies',
              'Tomcat',
              'iOS Development',
              'Problem Solving',
            ]              
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Apr 2008',
            endDate: 'Feb 2011',
            position: 'Junior Software Developer',
            description: [
              'Developed and maintained the PKI management platform to ensure optimal performance',
              'Developed and managed the upkeep of the time-stamping platform to enhance functionality',
              'Provided end-user technical support for seamless system operation',
              'Developed backend applications using PHP, Java, and MySQL',
              'Created frontend interfaces using Javascript and JQuery to improve user experience'
            ],
            projects: '',
            technologies:[
              'Technical Support',
              'PHP',
              'Java',
              'Javascript',
              'Mysql',
              'Development',
              'Symfony'
            ]
          },
        ],
        softSkills: [
          'Effective Communication',
          'Leadership',
          'Empathy',
          'Conflict Resolution',
          'Facilitation',
          'Adaptability',
          'Patience',
          'Critical Thinking',
          'Negotiation',
          'Mentorship and Coaching',
          'Emotional Intelligence',
          'Teamwork',
          'Loyal',
          'Integrity',
        ],
        technologies: [
          'Code quality & continuous improvement',
          'REST API building',
          'Agile Development & Scrum',
          'Team work',
          'Design Patterns',
          'Software architecture',
          'Long term vision',
          'From monolithic to microservices',
        ],
        stack: [
          //programming
          "devicon-plain:php",
          "devicon-plain:html5-wordmark",
          "devicon-plain:css3-wordmark",
          "devicon-plain:android",
          "devicon-plain:nodejs-wordmark",
          "devicon-plain:jquery-wordmark",
          "devicon-plain:javascript",
          "devicon-plain:typescript",
          "devicon-plain:java",
          "devicon-plain:python-wordmark",
          "devicon-plain:objectivec",
          //framworks
          "skill-icons:symfony-dark",
          "devicon-plain:wordpress-wordmark",
          "devicon-plain:vuejs-wordmark",
          "devicon-plain:nuxtjs",
          "devicon-plain:tailwindcss-wordmark",
          "devicon-plain:bootstrap",
          "devicon-plain:doctrine-wordmark",
          //ddbb
          "devicon-plain:mysql-wordmark",
          "devicon-plain:sqlite-wordmark",
          "devicon-plain:mongodb-wordmark",
          "devicon-plain:postgresql-wordmark",
          "devicon-plain:azuresqldatabase",
          //version control
          "devicon-plain:git-wordmark",
          //ide
          "devicon-plain:xcode",
          "devicon-plain:visualstudio",
          "devicon-plain:phpstorm",
          "devicon-plain:intellij",
          "devicon-plain:androidstudio",
          "devicon-plain:eclipse",
          //tech
          "devicon-plain:jenkins",
          "devicon-plain:apache-wordmark",
          "devicon-plain:ansible-wordmark",
          "devicon-plain:linux",
          "devicon-plain:bash",
          "devicon-plain:docker-wordmark",
          "devicon-plain:jira",
          "devicon-plain:slack",
          "devicon-plain:heroku-wordmark",
          "devicon-plain:amazonwebservices-wordmark",
          "devicon-plain:googlecloud-wordmark",
          "devicon-plain:firebase-wordmark",
          "devicon-plain:vsphere-wordmark",
          "devicon-plain:kibana-wordmark",
          "devicon-plain:elasticsearch"
        ],
        education: {
          title: 'Bachelor of Information Technology',
          school: 'Universitat Autònoma de Barcelona',
          scholastic: '2005 - 2008'
        },
        certifications: [
          {
            title: 'Scrum Manager - Expert Level',
            school: 'PUE',
            scholastic: 'Sep 2016',
            urlDescription: 'Show Credential',
            url: 'https://scrummanager.com/website/c/profile/member.php?id=15517'
          },
          {
            title: 'nCSD – Thales Certified Solution Developer',
            school: 'Thales e-Security',
            scholastic: 'Jan 2014'
          }
        ],
        languages: [
          {
            name: 'Spanish',
            level: 'native',
            flag: 'flag:es-4x3',
          },
          {
            name: 'Catalan',
            level: 'native',
            flag: 'flag:es-ct-4x3',
          },
          {
            name: 'English',
            level: 'advanced',
            flag: 'flag:sh-4x3',
          },
        ],
        projects: [
          {
            name: 'My personal webpage',
            position: 'Full stack',
            description: 'My own CV using NUXT 3',
            startDate: 'Sep 2024',
            endDate: 'Current',
            tools: 'Sublime',
            technologies: 'Vue 3, Nuxt 3, HTML, SCSS, Tailwind CSS',
            release: 'Sep 2024',
          }
        ],
      },
      es: {
        information: {
          fullName: 'Miquel Llagostera',
          position: 'Scrum Master | Agile Lover | Agile Coach | Software Development Lover',
        },
        summary: {
          about: 'string',
          summary: [
            'Scrum Master dinámico y orientado a resultados con más de una década de experiencia en desarrollo técnico, especializado en certificación digital y seguridad electrónica (PKI)',
            'Historial comprobado en administración de sistemas, desarrollo de software y móvil, así como en DevOps.',
            'Hábil en liderar equipos diversos y multifuncionales hacia resultados exitosos en proyectos',
            'Actualmente destacando en el rol de Scrum Master en Logalty y Firmaprofesional, como parte del Grupo Logalty.',
          ],
        },
        workExperience: [
          {
            companyName: 'Logalty',
            startDate: 'Nov 2022',
            endDate: 'Actualmente',
            position: 'Scrum Master',
            description: [
              'Facilitar reuniones diarias, planificación de sprints y retrospectivas para asegurar la alineación del equipo y la mejora continua',
              'Coach a los miembros del equipo en los principios y mejores prácticas del marco de trabajo Scrum para aumentar la eficiencia y la productividad',
              'Colaborar con los product owners para priorizar los elementos del backlog y asegurar la entrega oportuna de productos de software de alta calidad',
              'Implementar metodologías y herramientas ágiles para rastrear el progreso del proyecto y asegurar la finalización exitosa de los entregables',
            ],
            projects: 
            [
              'Implementar el flujo de desarrollo ágil usando Jira'
            ],
            technologies:[
              'Scrum',
              'Jira',
              'Trabajo en equipo',
              'Gestión de desarrollo',
              'Metodologías ágiles',
              'Metodologías de desarrollo ágiles',
              'Solucion de problemas',
              'Facilitador',
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Oct 2023',
            endDate: 'Actualmente',
            position: 'Scrum Master',
            description: [
              'Facilitar reuniones diarias, planificación de sprints y retrospectivas para asegurar la alineación del equipo y la mejora continua',
              'Coach a los miembros del equipo en los principios y mejores prácticas del marco de trabajo Scrum para aumentar la eficiencia y la productividad',
              'Colaborar con los product owners para priorizar los elementos del backlog y asegurar la entrega oportuna de productos de software de alta calidad',
              'Implementar metodologías y herramientas ágiles para rastrear el progreso del proyecto y asegurar la finalización exitosa de los entregables',
            ],
            projects: 
            [
              'Implementar el flujo de desarrollo ágil usando Jira'
            ],
            technologies:[
              'Scrum',
              'Jira',
              'Trabajo en equipo',
              'Gestión de desarrollo',
              'Metodologías ágiles',
              'Metodologías de desarrollo ágiles',
              'Solucion de problemas',
              'Facilitador',
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'En 2022',
            endDate: 'Oct 2023',
            position: 'Scrum Master & Software Development Manager',
            description: [
              'Facilitar reuniones diarias, planificación de sprints y retrospectivas para asegurar la alineación del equipo y la mejora continua',
              'Coach a los miembros del equipo en los principios y mejores prácticas del marco de trabajo Scrum para aumentar la eficiencia y la productividad',
              'Colaborar con los product owners para priorizar los elementos del backlog y asegurar la entrega oportuna de productos de software de alta calidad',
              'Implementar metodologías y herramientas ágiles para rastrear el progreso del proyecto y asegurar la finalización exitosa de los entregables',
              'Mentor de nuevos desarrolladores y líderes de equipo, fomentando el crecimiento profesional y las habilidades de liderazgo, y coach de Product Owners y Product Managers, asegurando la alineación con los objetivos del proyecto y la entrega exitosa del producto',
              'Encargado de identificar e incorporar herramientas externas como Pipelines, Jenkins y Sensiolabs Insight para mejorar la calidad del código',
              'Líder en la gestión y contribución a los proyectos de código abierto de la empresa, promoviendo una cultura de colaboración e innovación',
              'Implementador de prácticas DevOps creando un nuevo proceso de CI/CD, incluyendo la entrega de software, la contenedorización con Docker, la automatización con Ansible y los servicios en la nube, asegurando operaciones eficientes y fiables y reduciendo los tiempos de despliegue',
              'Proactivo en proporcionar soporte técnico y desarrollo cuando es necesario, asegurando el cumplimiento de hitos y estándares de calidad, como desarrollador backend con experiencia en PHP, Symfony, Java, MySQL, Elasticsearch y SQLite'
            ],
            projects: [
              'Implementar el flujo de desarrollo ágil usando Jira',
              'Crear el flujo CI/CD usando Bitbucket Pipelines y Jenkins',
              'Diseñar un plan estratégico para integrar desarrolladores externos en un equipo consolidado',
            ],
            technologies:[
              'Scrum',
              'Jira',
              'Trabajo en equipo',
              'Metodologías ágiles',
              'Metodologías de desarrollo ágiles',
              'Solucion de problemas',
              'Facilitador',
              'Ansible',
              'Gestón de equipos',
              'Desarrollo',
              'Symfony',
              'DevOps',
              'Atlassian Suite',
              'Liderazgo'
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Nov 2016',
            endDate: 'Jan 2022',
            position: 'Software Development Manager',
            description: [
              'Team Lead de un equipo internacional deslocalizado formado por 7 personas',
              'Responsable del desarrollo simultáneo de más de 8 proyectos para grandes empresas tanto públicas como privadas',
              'Líder del equipo web, siendo el responsable de la toma de decisiones técnicas y de la asignación de las tareas a mi equipo en los diferentes proyectos',
              'Creador del flujo de desarrollo de software estable para toda la empresa',
              'Mentor de los nuevos desarrolladores',
              'Impulsor del código opensource de la empresa',
              'Diseñador del plan para poder agregar fuentes de desarrollo externas y deslocalizadas',
              'Responsable de buscar e incorporar las herramientas externas para mejorar la calidad del código desarrollado (Pipelines, Jenkins, Sensiolabs Insight)'
            ],
            projects: [
              'Incrementar el tamaño del equipo de desarrollo sin perder calidad en el sofrware entregado'
            ],
            technologies:[
              'Trabajo en equipo',
              'Gestión de desarrollo',
              'Metodologías ágiles',
              'Metodologías de desarrollo ágiles',
              'Solucion de problemas',
              'Ansible',
              'Gestón de equipos',
              'Desarrollo',
              'Symfony',
              'DevOps',
              'Atlassian Suite',
              'Liderazgo'
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Feb 2011',
            endDate: 'Nov 2016',
            position: 'Senior Software Developer',
            description: [
              'Responsable del diseño y mantenimiento de la plataforma de gestión de PKI, asegurando una seguridad y un rendimiento óptimos',
              'Responsable del diseño y mantenimiento de la plataforma de sellado de tiempo, mejorando su funcionalidad y fiabilidad',
              'Responsable del diseño y mantenimiento de la plataforma MobileID en iOS, Android y sistemas backend, asegurando una integración y operación sin problemas',
              'Responsable del diseño y mantenimiento de la plataforma Firmamobile para iOS y Android, proporcionando una solución móvil robusta',
              'Los desarrollos de las soluciones backend utilizando PHP, Java y MySQL, contribuyendo a aplicaciones robustas y escalables. Interfaces frontend usando Javascript y JQuery, mejorando la experiencia del usuario',
              'Empezando a implementar metodologías ágiles para optimizar los flujos de trabajo de desarrollo y mejorar la eficiencia del equipo',
              'Gestionar tareas de administración de sistemas, incluyendo configuraciones de Apache, Linux y firewall, para asegurar operaciones seguras y eficientes',
              'Proporcionar soporte técnico avanzado, resolviendo problemas complejos para mantener la estabilidad del sistema y la satisfacción del usuario'
            ],
            projects: [
              'MobileID',
            ],
            technologies:[
              'Product Requirements',
              'Symfony',
              'VMware',
              'PHP',
              'Help Desk Support',
              'SonicWALL',
              'Technical Understanding',
              'Java',
              'Android Development',
              'Software Solutions',
              'Teamwork',
              'Team Leadership',
              'Agile Methodologies',
              'Tomcat',
              'iOS Development',
              'Problem Solving',
            ]  
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Apr 2008',
            endDate: 'Feb 2011',
            position: 'Junior Software Developer',
            description: [
              'Desarrollar y mantener la plataforma de gestión de PKI para asegurar un rendimiento óptimo',
              'Desarrollar y gestionar el mantenimiento de la plataforma de sellado de tiempo para mejorar la funcionalidad',
              'Proporcionó soporte técnico a los usuarios finales para una operación del sistema sin problemas',
              'Desarrollo de aplicaciones backend utilizando PHP, Java y MySQL',
              'Desarrollo de interfaces frontend usando Javascript y JQuery para mejorar la experiencia del usuario'
            ],
            projects: '',
            technologies: [
              'Soporte al cliente',
              'PHP',
              'Java',
              'Javascript',
              'Mysql',
              'Desarrollo',
              'Symfony'
            ]
          },
        ],
        softSkills: [
          'Comunicación efectiva',
          'Liderazgo',
          'Empatía',
          'Resolución de conflictos',
          'Facilitación',
          'Adaptabilidad',
          'Paciencia',
          'Pensamiento crítico',
          'Negociación',
          'Mentoría y coaching',
          'Inteligencia emocional',
          'Trabajo en equipo',
          'Lealtad',
          'Integridad',
        ],
        technologies: [
          'Mejora continua de la calidad del código',
          'Contrucción de REST API',
          'Desarrollo Agile & Scrum',
          'Trabajo en equipo',
          'Patrones de diseño',
          'Arquitectura de software',
          'Visión a largo plazo',
          'De monolítico a microservicio',
        ],
        stack: [
          //programming
          "devicon-plain:php",
          "devicon-plain:html5-wordmark",
          "devicon-plain:css3-wordmark",
          "devicon-plain:android",
          "devicon-plain:nodejs-wordmark",
          "devicon-plain:jquery-wordmark",
          "devicon-plain:javascript",
          "devicon-plain:typescript",
          "devicon-plain:java",
          "devicon-plain:python-wordmark",
          "devicon-plain:objectivec",
          //framworks
          "skill-icons:symfony-dark",
          "devicon-plain:wordpress-wordmark",
          "devicon-plain:vuejs-wordmark",
          "devicon-plain:nuxtjs",
          "devicon-plain:tailwindcss-wordmark",
          "devicon-plain:bootstrap",
          "devicon-plain:doctrine-wordmark",
          //ddbb
          "devicon-plain:mysql-wordmark",
          "devicon-plain:sqlite-wordmark",
          "devicon-plain:mongodb-wordmark",
          "devicon-plain:postgresql-wordmark",
          "devicon-plain:azuresqldatabase",
          //version control
          "devicon-plain:git-wordmark",
          //ide
          "devicon-plain:xcode",
          "devicon-plain:visualstudio",
          "devicon-plain:phpstorm",
          "devicon-plain:intellij",
          "devicon-plain:androidstudio",
          "devicon-plain:eclipse",
          //tech
          "devicon-plain:jenkins",
          "devicon-plain:apache-wordmark",
          "devicon-plain:ansible-wordmark",
          "devicon-plain:linux",
          "devicon-plain:bash",
          "devicon-plain:docker-wordmark",
          "devicon-plain:jira",
          "devicon-plain:slack",
          "devicon-plain:heroku-wordmark",
          "devicon-plain:amazonwebservices-wordmark",
          "devicon-plain:googlecloud-wordmark",
          "devicon-plain:firebase-wordmark",
          "devicon-plain:vsphere-wordmark",
          "devicon-plain:kibana-wordmark",
          "devicon-plain:elasticsearch"
        ],
        education: {
          title: 'Grado en Informática, especialidad Sistemas',
          school: 'Univeritat Autònoma de BarcelonaSchool Technical College',
          scholastic: '2005 - 2008',
        },
        languages: [
          {
            name: 'Español',
            level: 'native',
            flag: 'flag:es-4x3',
          },
          {
            name: 'Catalán',
            level: 'native',
            flag: 'flag:es-ct-4x3',
          },
          {
            name: 'Inglés',
            level: 'advanced',
            flag: 'flag:sh-4x3',
          },
        ],
        certifications: [
          {
            title: 'Scrum Manager - Nivel Experto',
            school: 'PUE',
            scholastic: 'Sep 2016',
            urlDescription: 'Show Credential',
            url: 'https://scrummanager.com/website/c/profile/member.php?id=15517'
          },
          {
            title: 'nCSD – Thales Certified Solution Developer',
            school: 'Thales e-Security',
            scholastic: 'En 2014'
          }
        ],
        projects: [
          {
            name: 'Página web personal',
            position: 'Front-End Developer',
            description: 'Crear una página web personal para aprender el uso de Nuxt3 y tailwindcss',
            startDate: 'Set 2024',
            endDate: 'Actualmente',
            tools: 'Vue 3, Nuxt 3, HTML, SCSS, Tailwind CSS',
            technologies: 'Vue 3, Nuxt 3, HTML, SCSS, Tailwind CSS',
            release: 'Set 2024',
          },
        ],
      },
      ca: {
        information: {
          fullName: 'Miquel Llagostera',
          position: 'Scrum Master | Agile Lover | Agile Coach | Software Development Lover',
        },
        summary: {
          about: 'string',
          summary: [
            'Scrum Màster dinàmic i orientat a resultats amb més d\'una dècada d\'experiència en desenvolupament tècnic, especialitzat en certificació digital i seguretat electrònica (PKI)',
            'Historial comprovat en administració de sistemes, desenvolupament de programari i mòbil, així com en DevOps.',
            'Hàbil a liderar equips diversos i multifuncionals enfocats cap a resultats reeixits en projectes',
            'Actualment destacant en el rol de Scrum Màster en Logalty i Firmaprofesional, com a part del Grup Logalty.',
          ],
        },
        workExperience: [
          {
            companyName: 'Logalty',
            startDate: 'Nov 2022',
            endDate: 'Actualment',
            position: 'Scrum Master',
            description: [
              'Facilitar reunions diàries, planificació de sprints i retrospectives per a assegurar l\'alineació de l\'equip i la millora contínua',
              'Coach als membres de l\'equip en els principis i millors pràctiques del marc de treball Scrum per a augmentar l\'eficiència i la productivitat',
              'Col·laborar amb els product owners per a prioritzar els elements del backlog i assegurar el lliurament oportú de productes de programari d\'alta qualitat',
              'Implementar metodologies i eines àgils per a rastrejar el progrés del projecte i assegurar la finalització reeixida dels lliurables',
            ],
            projects: 
            [
              'Implementar el fluxe de desenvolupament àgil fent servir Jira'
            ],
            technologies:[
              'Scrum',
              'Jira',
              'Treball en equip',
              'Gestió de desenvolupament',
              'Metodologies àgils',
              'Metodologias de desenvolupament àgils',
              'Solució de problemes',
              'Facilitador',
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Oct 2023',
            endDate: 'Actualment',
            position: 'Scrum Master',
            description: [
              'Facilitar reunions diàries, planificació de sprints i retrospectives per a assegurar l\'alineació de l\'equip i la millora contínua',
              'Coach als membres de l\'equip en els principis i millors pràctiques del marc de treball Scrum per a augmentar l\'eficiència i la productivitat',
              'Col·laborar amb els product owners per a prioritzar els elements del backlog i assegurar el lliurament oportú de productes de programari d\'alta qualitat',
              'Implementar metodologies i eines àgils per a rastrejar el progrés del projecte i assegurar la finalització reeixida dels lliurables',
            ],
            projects: 
            [
              'Implementar el fluxe de desenvolupament àgil fent servir Jira'
            ],
            technologies:[
              'Scrum',
              'Jira',
              'Treball en equip',
              'Gestió de desenvolupament',
              'Metodologies àgils',
              'Metodologias de desenvolupament àgils',
              'Solució de problemes',
              'Facilitador',
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Gen 2022',
            endDate: 'Oct 2023',
            position: 'Scrum Master & Software Development Manager',
            description: [
              'Facilitar reunions diàries, planificació de sprints i retrospectives per a assegurar l\'alineació de l\'equip i la millora contínua',
              'Coach als membres de l\'equip en els principis i millors pràctiques del marc de treball Scrum per a augmentar l\'eficiència i la productivitat',
              'Col·laborar amb els product owners per a prioritzar els elements del backlog i assegurar el lliurament oportú de productes de programari d\'alta qualitat',
              'Implementar metodologies i eines àgils per a rastrejar el progrés del projecte i assegurar la finalització reeixida dels lliurables',
              'Mentor de nous desenvolupadors i líders d\'equip, fomentant el creixement professional i les habilitats de lideratge, i coach de Product Owners i Product Managers, assegurant l\'alineació amb els objectius del projecte i el lliurament reeixit del producte',
              'Encarregat d\'identificar i incorporar eines externes com Pipelines, Jenkins i Sensiolabs Insight per a millorar la qualitat del codi',
              'Líder en la gestió i contribució als projectes de codi obert de l\'empresa, promovent una cultura de col·laboració i innovació',
              'Implementador de pràctiques DevOps creant un nou procés de CI/CD, incloent-hi el lliurament de programari, la contenedorización amb Docker, l\'automatització amb Ansible i els serveis en el núvol, assegurant operacions eficients i fiables i reduint els temps de desplegament',
              'Proactiu a proporcionar suport tècnic i desenvolupament quan és necessari, assegurant el compliment de fites i estàndards de qualitat, com a desenvolupador backend amb experiència en PHP, Symfony, Java, MySQL, Elasticsearch i SQLite'
            ],
            projects: [
              'Implementar el flux de desenvolupament àgil usant Jira',
              'Crear el flux CI/CD usant Bitbucket Pipelines i Jenkins',
              'Dissenyar un pla estratègic per a integrar desenvolupadors externs en un equip consolidat',
            ],
            technologies:[
              'Scrum',
              'Jira',
              'Treball en equip',
              'Metodologies àgils',
              'Metodologies de desenvolupament àgils',
              'Solucion de problemes',
              'Facilitador',
              'Ansible',
              'Gestón d\'equips',
              'Desenvolupament',
              'Symfony',
              'DevOps',
              'Atlassian Suite',
              'Lideratge'
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Nov 2016',
            endDate: 'Gen 2022',
            position: 'Software Development Manager',
            description: [
              'Team Lead d\'un equip internacional deslocalitzat format per 7 persones',
              'Responsable del desenvolupament simultani de més de 8 projectes per a grans empreses tant públiques com privades',
              'Líder de l\'equip web, sent el responsable de la presa de decisions tècniques i de l\'assignació de les tasques al meu equip en els diferents projectes',
              'Creador del flux de desenvolupament de programari estable per a tota l\'empresa',
              'Mentor dels nous desenvolupadors',
              'Impulsor del codi opensource de l\'empresa',
              'Dissenyador del pla per a poder agregar fonts de desenvolupament externes i deslocalitzades',
              'Responsable de buscar i incorporar les eines externes per a millorar la qualitat del codi desenvolupat (Pipelines, Jenkins, Sensiolabs Insight)'
            ],
            projects: [
              'Incrementar la grandària de l\'equip de desenvolupament sense perdre qualitat en el software lliurat'
            ],
            technologies:[
              'Treball en equip',
              'Gestió de desenvolupament',
              'Metodologies àgils',
              'Metodologies de desenvolupament àgils',
              'Solucion de problemes',
              'Ansible',
              'Gestón d\'equips',
              'Desenvolupament',
              'Symfony',
              'DevOps',
              'Atlassian Suite',
              'Lideratge'
            ]
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Feb 2011',
            endDate: 'Nov 2016',
            position: 'Senior Software Developer',
            description: [
              'Responsable del disseny i manteniment de la plataforma de gestió de PKI, assegurant una seguretat i un rendiment òptims',
              'Responsable del disseny i manteniment de la plataforma de segellament de temps, millorant la seva funcionalitat i fiabilitat',
              'Responsable del disseny i manteniment de la plataforma MobileID en iOS, Android i sistemes backend, assegurant una integració i operació sense problemes',
              'Responsable del disseny i manteniment de la plataforma Firmamobile per a iOS i Android, proporcionant una solució mòbil robusta',
              'Els desenvolupaments de les solucions backend utilitzant PHP, Java i MySQL, contribuint a aplicacions robustes i escalables. Interfícies frontend usant JavaScript i JQuery, millorant l\'experiència de l\'usuari',
              'Començant a implementar metodologies àgils per a optimitzar els fluxos de treball de desenvolupament i millorar l\'eficiència de l\'equip',
              'Gestionar tasques d\'administració de sistemes, incloent-hi configuracions d\'Apache, Linux i firewall, per a assegurar operacions segures i eficients',
              'Proporcionar suport tècnic avançat, resolent problemes complexos per a mantenir l\'estabilitat del sistema i la satisfacció de l\'usuari'
            ],
            projects: [
              'MobileID, carpeta ciutadana',
            ],
            technologies:[
              'Requisits de producte',
              'Symfony',
              'VMware',
              'PHP',
              'Suport d\'integracions del client',
              'SonicWALL',
              'Comprensió tècnica',
              'Java',
              'Software Solutions',
              'Treball en equip',
              'Lideratge d\'equips',
              'Agile Methodologies',
              'Tomcat',
              'Desenvolupament Android',
              'Desenvolupament iOS',
              'Resolució de problemes',
            ]  
          },
          {
            companyName: 'Firmaprofesional',
            startDate: 'Abr 2008',
            endDate: 'Feb 2011',
            position: 'Junior Software Developer',
            description: [
              'Desenvolupar i mantenir la plataforma de gestió de PKI per a assegurar un rendiment òptim',
              'Desenvolupar i gestionar el manteniment de la plataforma de segellament de temps per a millorar la funcionalitat',
              'Proporcionar suport tècnic als usuaris finals per a una operació del sistema sense problemes',
              'Desenvolupament d\'aplicacions backend utilitzant PHP, Java i MySQL',
              'Desenvolupament d\'interfícies frontend usant JavaScript i JQuery per a millorar l\'experiència de l\'usuari'
            ],
            projects: '',
            technologies: [
              'Suport al client',
              'PHP',
              'Java',
              'Javascript',
              'Mysql',
              'Desarrollo',
              'Symfony'
            ]
          },
        ],
        technologies: [
          'Millora contínua de la qualitat del codi',
          'Contrucció de REST API',
          'Desenvolupament Agile & Scrum',
          'Treball en equip',
          'Patrons de disseny',
          'Arquitectura de software',
          'Visió a llarg termini',
          'De monolític a microservei',
        ],
        softSkills: [
          'Comunicació efectiva',
          'Lideratge',
          'Empatia',
          'Resolució de conflictes',
          'Facilitació',
          'Adaptabilitat',
          'Paciència',
          'Pensament crític',
          'Negociació',
          'Mentoria i coaching',
          'Intel·ligència emocional',
          'Treball en equip',
          'Lleialtat',
          'Integritat',
        ],
        stack: [
          //programming
          "devicon-plain:php",
          "devicon-plain:html5-wordmark",
          "devicon-plain:css3-wordmark",
          "devicon-plain:android",
          "devicon-plain:nodejs-wordmark",
          "devicon-plain:jquery-wordmark",
          "devicon-plain:javascript",
          "devicon-plain:typescript",
          "devicon-plain:java",
          "devicon-plain:python-wordmark",
          "devicon-plain:objectivec",
          //framworks
          "skill-icons:symfony-dark",
          "devicon-plain:wordpress-wordmark",
          "devicon-plain:vuejs-wordmark",
          "devicon-plain:nuxtjs",
          "devicon-plain:tailwindcss-wordmark",
          "devicon-plain:bootstrap",
          "devicon-plain:doctrine-wordmark",
          //ddbb
          "devicon-plain:mysql-wordmark",
          "devicon-plain:sqlite-wordmark",
          "devicon-plain:mongodb-wordmark",
          "devicon-plain:postgresql-wordmark",
          "devicon-plain:azuresqldatabase",
          //version control
          "devicon-plain:git-wordmark",
          //ide
          "devicon-plain:xcode",
          "devicon-plain:visualstudio",
          "devicon-plain:phpstorm",
          "devicon-plain:intellij",
          "devicon-plain:androidstudio",
          "devicon-plain:eclipse",
          //tech
          "devicon-plain:jenkins",
          "devicon-plain:apache-wordmark",
          "devicon-plain:ansible-wordmark",
          "devicon-plain:linux",
          "devicon-plain:bash",
          "devicon-plain:docker-wordmark",
          "devicon-plain:jira",
          "devicon-plain:slack",
          "devicon-plain:heroku-wordmark",
          "devicon-plain:amazonwebservices-wordmark",
          "devicon-plain:googlecloud-wordmark",
          "devicon-plain:firebase-wordmark",
          "devicon-plain:vsphere-wordmark",
          "devicon-plain:kibana-wordmark",
          "devicon-plain:elasticsearch"
        ],
        education: {
          title: 'Grau en Informàtica, especialitat en Sistemas',
          school: 'Univeritat Autònoma de BarcelonaSchool Technical College',
          scholastic: '2005 - 2008',
        },
        languages: [
          {
            name: 'Espanyol',
            level: 'native',
            flag: 'flag:es-4x3',
          },
          {
            name: 'Català',
            level: 'native',
            flag: 'flag:es-ct-4x3',
          },
          {
            name: 'Anglès',
            level: 'advanced',
            flag: 'flag:sh-4x3',
          },
        ],
        certifications: [
          {
            title: 'Scrum Manager - Nivell Expert',
            school: 'PUE',
            scholastic: 'Set 2016',
            urlDescription: 'Show Credential',
            url: 'https://scrummanager.com/website/c/profile/member.php?id=15517'
          },
          {
            title: 'nCSD – Thales Certified Solution Developer',
            school: 'Thales e-Security',
            scholastic: 'Gen 2014'
          }
        ],
        projects: [
          {
            name: 'Pàgina web personal',
            position: 'Front-End Developer',
            description: 'The Nuxt CV Template is a simple CV designed to help you present essential information including Personal Information, Summary, Work Experience, Skills, Education, Projects, etc. Employers can use this template to evaluate and assess your overall capabilities.',
            startDate: 'Sep 2024',
            endDate: 'Actualment',
            tools: 'Vue 3, Nuxt 3, HTML, SCSS, Tailwind CSS',
            technologies: 'Desenvolupament',
            release: 'Sep 2024',
          },
        ],
      }
    },
  } as NuxtAwesomeAppConfig,
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em',
  },
})

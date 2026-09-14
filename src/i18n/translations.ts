// src/i18n/translations.ts
// Central translation dictionary for PT Teknalogi Transformasi Digital

export type Locale = 'en' | 'id';

export const translations = {
  en: {
    meta: {
      defaultTitle: 'PT Teknalogi Transformasi Digital | Enterprise Software Engineering',
      defaultDescription: 'Enterprise software engineering solutions, centralized system integration, and sovereign cloud transformation for modern corporations.',
      portfolioTitle: 'Enterprise Project Portfolio | PT Teknalogi Transformasi Digital',
      portfolioDescription: 'Track record of mission-critical software engineering and industrial digital transformation at national scale.',
      servicesTitle: 'Enterprise Capabilities & Services | PT Teknalogi Transformasi Digital',
      servicesDescription: 'End-to-end solutions from distributed system architecture to sovereign cloud governance for modern enterprises.'
    },
    nav: {
      about: 'About Us',
      industries: 'Industries',
      services: 'Services',
      resources: 'Resources',
      caseStudy: 'Case Study',
      portfolio: 'Portfolio',
      contact: 'Contact Us',
      languageSelectAria: 'Select interface language',
      industriesDropdown: [
        { title: 'Banking & Financial Services', desc: 'Secure, compliant fintech and core banking architectures.', href: '/layanan' },
        { title: 'Technology & SaaS', desc: 'High-scale multi-tenant architectures and cloud products.', href: '/layanan' },
        { title: 'Manufacturing & Industry', desc: 'Real-time telemetry, IoT systems, and supply-chain platforms.', href: '/layanan' },
        { title: 'Healthcare & Life Sciences', desc: 'Compliant medical data systems and digital health platforms.', href: '/layanan' },
        { title: 'Professional & Business Services', desc: 'Automated workflow engines and enterprise management portals.', href: '/layanan' },
      ],
      industriesMega: {
        title: 'Industry Sectors',
        subtitle: 'We have completed 1250+ projects across 130+ sectors. Experienced in your industry? We have handled it before.',
        items: [
          {
            id: 'banking',
            title: 'Banking & Financial Services',
            desc: 'Secure fintech architectures, payment gateways, and regulatory compliance.',
            image: '/industry/perbankan.webp',
            fallback: '/industry/perbankan.png',
            href: '/industries/banking'
          },
          {
            id: 'tech-saas',
            title: 'Technology & SaaS',
            desc: 'High-throughput microservices, multi-tenant cloud platforms, and APIs.',
            image: '/industry/teknologi_and_saas.webp',
            fallback: '/industry/teknologi_and_saas.png',
            href: '/industries/tech-saas'
          },
          {
            id: 'manufacturing',
            title: 'Manufacturing & Industry',
            desc: 'Real-time IoT telemetry, production monitoring, and supply chain automation.',
            image: '/industry/manufaktur.webp',
            fallback: '/industry/manufaktur.png',
            href: '/industries/manufacturing'
          },
          {
            id: 'healthcare',
            title: 'Healthcare & Life Sciences',
            desc: 'Encrypted clinical records, telemedicine systems, and patient data portals.',
            image: '/industry/kesehatan.webp',
            fallback: '/industry/kesehatan.png',
            href: '/industries/healthcare'
          },
          {
            id: 'business-services',
            title: 'Professional & Business Services',
            desc: 'Corporate workflow engines, enterprise ERP, and business management portals.',
            image: '/industry/layananprofesional.webp',
            fallback: '/industry/layananprofesional.png',
            href: '/industries/business-services'
          },
          {
            id: 'insurance',
            title: 'Insurance',
            desc: 'Digital underwriting, policy administration, and automated claims engines.',
            image: '/industry/asuransi.jpg',
            fallback: '/industry/asuransi.jpg',
            href: '/industries/insurance'
          },
          {
            id: 'education',
            title: 'Education',
            desc: 'Scalable e-learning platforms, student management, and academic portals.',
            image: '/industry/pendidikan.jpg',
            fallback: '/industry/pendidikan.jpg',
            href: '/industries/education'
          },
          {
            id: 'telecom',
            title: 'Telecommunications',
            desc: 'Network telemetry dashboards, customer portals, and telecom OSS/BSS tools.',
            image: '/industry/telekomunikasi.jpg',
            fallback: '/industry/telekomunikasi.jpg',
            href: '/industries/telecom'
          },
          {
            id: 'retail',
            title: 'Retail & E-Commerce',
            desc: 'Omnichannel commerce platforms, inventory sync, and POS integrations.',
            image: '/industry/retail.jpg',
            fallback: '/industry/retail.jpg',
            href: '/industries/retail'
          },
          {
            id: 'logistics',
            title: 'Logistics & Supply Chain',
            desc: 'Automated warehouse tracking, fleet telemetry, and freight routing systems.',
            image: '/industry/logistik.jpg',
            fallback: '/industry/logistik.jpg',
            href: '/industries/logistics'
          }
        ]
      },
      servicesDropdown: [
        { title: 'Website Development', desc: 'High-performance web applications and responsive corporate portals.', href: '/services/website-development' },
        { title: 'Software & App Development', desc: 'Mission-critical iOS, Android, and distributed backend systems.', href: '/services/software-development' },
        { title: 'SEO & AI Search Optimization', desc: 'Advanced search engine optimization, GEO, and AI answer discovery.', href: '/services/seo' },
        { title: 'System Maintenance & SLA', desc: '24/7 reliability engineering, security audits, and system uptime.', href: '/services/web-maintenance' },
      ],
      servicesMega: {
        title: 'Services & Capabilities',
        subtitle: 'Build, optimize, and manage your organization’s digital ecosystem with us.',
        ctaLabel: 'Explore All Services',
        ctaHref: '/layanan',
        items: [
          {
            title: 'Website Development',
            desc: 'Custom websites and web applications tailored to your business needs.',
            icon: 'globe',
            href: '/services/website-development'
          },
          {
            title: 'Software Development',
            desc: 'Enterprise applications and business systems tailored to corporate needs.',
            icon: 'code',
            href: '/services/software-development'
          },
          {
            title: 'Mobile App Development',
            desc: 'Android, iOS, and cross-platform mobile applications.',
            icon: 'mobile',
            href: '/services/mobile-app-development'
          },
          {
            title: 'Workflow Automation',
            desc: 'Integrate and automate your business processes with AI technology.',
            icon: 'workflow',
            href: '/services/workflow-automation'
          },
          {
            title: 'Search Engine Optimization (SEO)',
            desc: 'Increase website ranking and visibility in search engines.',
            icon: 'search',
            href: '/services/seo'
          },
          {
            title: 'AI-Powered Search Optimization',
            desc: 'Enhance visibility across next-generation AI search platforms.',
            icon: 'ai-search',
            href: '/services/ai-search'
          },
          {
            title: 'SEO & AI-Search Audit',
            desc: 'Comprehensive assessment of your website’s SEO, AEO, and GEO readiness.',
            icon: 'audit',
            href: '/services/seo-audit'
          },
          {
            title: 'Website Maintenance',
            desc: 'Ensure your website always runs optimally with peak performance.',
            icon: 'maintenance',
            href: '/services/web-maintenance'
          }
        ],
        featuredSolutions: {
          title: 'Featured Solutions',
          desc: 'Popular turnkey solutions built on our core enterprise engineering capabilities.',
          ctaLabel: 'Explore All Solutions',
          ctaHref: '/layanan',
          solutions: [
            { label: 'Website Company Profile', href: '/layanan' },
            { label: 'Custom Enterprise Software', href: '/layanan' },
            { label: 'Technical SEO', href: '/layanan' },
            { label: 'Corporate Website SEO', href: '/layanan' },
            { label: 'SEO B2B', href: '/layanan' },
            { label: 'Generative Engine Optimization (GEO)', href: '/layanan' }
          ]
        }
      },
      resourcesDropdown: [
        { title: 'Tech Stack & Tooling', desc: 'The modern tools and battle-tested frameworks we rely on.', href: '#tech-stack' },
        { title: 'Enterprise Architecture', desc: 'Proven architectural blueprints for mission-critical platforms.', href: '/layanan' },
        { title: 'Engineering Methodology', desc: 'Iterative sprint delivery, rigorous code review, and QA standards.', href: '#ai-disciplines' },
      ],
      resourcesMega: {
        title: 'Resource Center',
        subtitle: 'Guides, insights, frameworks, and company updates for better digital decision-making.',
        quickLinks: [
          { label: 'Insights', href: '#ai-disciplines', icon: 'lightbulb' },
          { label: 'News', href: '#partners', icon: 'newspaper' },
          { label: 'Press Releases', href: '#partners', icon: 'press' },
          { label: 'FAQ', href: '#lets-talk-cta', icon: 'faq' },
          { label: 'Legal & Compliance', href: '#footer-legal', icon: 'legal' },
        ],
        featured: [
          {
            brand: 'Tekna',
            name: 'Workspace',
            tag: 'Workspace',
            desc: 'Collaborative enterprise digital workspace and integrated productivity platform.',
            image: '/resource_workspace.png',
            webp: '/resource_workspace.webp',
            href: '/resources/workspace'
          },
          {
            brand: 'Tekna',
            name: 'Ticketing',
            tag: 'Helpdesk',
            desc: 'Enterprise service desk, IT ticketing management, and incident resolution workflows.',
            image: '/resource_ticketing.png',
            webp: '/resource_ticketing.webp',
            href: '/resources/ticketing'
          },
          {
            brand: 'Tekna',
            name: 'LIMS',
            tag: 'Enterprise',
            desc: 'Laboratory Information Management System for automated testing and compliance data tracking.',
            image: '/resource_LIMS.png',
            webp: '/resource_LIMS.webp',
            href: '/resources/lims'
          },
          {
            brand: 'Tekna',
            name: 'TraKerja',
            tag: 'HR Tech',
            desc: 'Integrated workforce tracking platform, operational productivity, and enterprise talent solutions.',
            image: '/resource_trakerja.png',
            webp: '/resource_trakerja.webp',
            href: '/resources/trakerja'
          },
          {
            brand: 'Tekna',
            name: 'PixelPlay!',
            tag: 'Creative',
            desc: 'Interactive digital experiences, creative web applications, and gamified enterprise portals.',
            image: '/resource_pixelplay.png',
            webp: '/resource_pixelplay.webp',
            href: '/resources/pixelplay'
          }
        ],
        knowledgeHub: {
          title: 'Knowledge Hub',
          desc: 'Learn the fundamentals behind modern websites, software, search visibility, and digital growth.',
          topics: [
            { label: 'Website Development', href: '/services/website-development' },
            { label: 'Fundamental SEO', href: '/services/seo' },
            { label: 'AI Search, GEO, AEO', href: '/services/ai-search' },
            { label: 'AI & Implementation', href: '/services/software-development' }
          ],
          ctaLabel: 'Explore Knowledge Hub',
          ctaHref: '/knowledge-hub'
        }
      }
    },
    hero: {
      headlinePart1: 'We engineer',
      headlinePart2: 'your growth.',
      subtitle: 'Restructuring corporate operations through resilient, high-throughput enterprise software architectures free of technical debt.'
    },
    partners: {
      heading: 'Trusted by Leading Enterprises & Institutions'
    },
    companyOverview: {
      title: "End-to-end engineering, from architecture to operation.",
      description: "PT Teknalogi Transformasi Digital is an enterprise software engineering and system integration firm based in Jakarta, Indonesia. We help corporations and institutions architect, build, and operate resilient, scalable, and secure digital ecosystems, accelerating AI adoption and modernizing core cloud infrastructure.",
      stats: [
        { value: "2+", label: "Years of experience" },
        { value: "15+", label: "Projects completed" }
      ],
      audience: "Built for scaleups, SMEs, enterprises, and public institutions.",
      imageAlt: "Software engineers collaborating in a modern enterprise engineering workspace in Jakarta"
    },
    aiDisciplines: {
      headline: 'Tailored Engineering, Proven Results.',
      description: "We help forward-thinking organizations design, engineer, and optimize high-throughput digital platforms through custom web architectures, mobile ecosystems, enterprise software, and intelligent search systems. Every solution we deliver is custom-crafted from the ground up, precisely aligned with each client's unique operational demands, security standards, and business goals. Explore our services and discover engineering built to power your business.",
      titlePart1: 'Tailored Engineering,',
      titlePart2: 'Proven Results',
      viewAllCta: 'Everything we do',
      items: [
        {
          id: 'web-dev',
          title: 'Website Development',
          description: 'High-performance websites, scalable web applications, and responsive SaaS frontends tailored to your brand.',
          image: '/services/web_dev_v2.webp',
          fallback: '/services/web_dev_v2.jpg',
          tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
          href: '/services/website-development'
        },
        {
          id: 'software-app',
          title: 'Software & App Development',
          description: 'Robust iOS and Android applications backed by high-throughput enterprise backends and scalable microservices.',
          image: '/services/software_app_v2.webp',
          fallback: '/services/software_app_v2.jpg',
          tags: ['iOS & Android', 'Flutter', 'Cloud Architecture', 'APIs'],
          href: '/services/software-development'
        },
        {
          id: 'seo-ai',
          title: 'SEO & AI Search Optimization',
          description: 'Accelerate brand visibility across traditional search engines and next-generation AI answer engines.',
          image: '/services/seo_ai_v2.webp',
          fallback: '/services/seo_ai_v2.jpg',
          tags: ['Technical SEO', 'GEO & AEO', 'AI Search', 'Audits'],
          href: '/services/seo'
        },
        {
          id: 'maintenance',
          title: 'Maintenance & Enhancement Services',
          description: 'Proactive SLA-backed maintenance, security audits, database tuning, and continuous infrastructure evolution.',
          image: '/services/maintenance_v2.webp',
          fallback: '/services/maintenance_v2.jpg',
          tags: ['SLA Support', 'Security Audits', 'Cloud Ops', 'CI/CD'],
          href: '/services/web-maintenance'
        }
      ]
    },
    industries: {
      headline: 'Serving Diverse Sectors & Industries',
      description: "Every industry has distinct digital imperatives. At Teknalogi, we continuously research digital ecosystem dynamics across our clients' sectors to understand unique and evolving challenges and opportunities. This approach enables us to deliver tailored solutions that not only meet operational demands, but empower organizations to adapt, accelerate, and lead in their respective markets. Explore the industries we serve and discover how our engineering expertise can empower your organization.",
      exploreLabel: 'Explore',
      comingSoonLabel: 'Coming soon',
      items: [
        {
          id: 'banking',
          title: 'Banking & Financial Services',
          image: '/industry/perbankan.webp',
          fallback: '/industry/perbankan.png',
          status: 'available',
          colSpan: 'col-span-12 md:col-span-6'
        },
        {
          id: 'tech-saas',
          title: 'Technology & SaaS',
          image: '/industry/teknologi_and_saas.webp',
          fallback: '/industry/teknologi_and_saas.png',
          status: 'coming_soon',
          colSpan: 'col-span-12 md:col-span-6'
        },
        {
          id: 'manufacturing',
          title: 'Manufacturing & Industry',
          image: '/industry/manufaktur.webp',
          fallback: '/industry/manufaktur.png',
          status: 'coming_soon',
          colSpan: 'col-span-12 md:col-span-4'
        },
        {
          id: 'health',
          title: 'Healthcare & Life Sciences',
          image: '/industry/kesehatan.webp',
          fallback: '/industry/kesehatan.png',
          status: 'coming_soon',
          colSpan: 'col-span-12 md:col-span-4'
        },
        {
          id: 'business-services',
          title: 'Professional & Business Services',
          image: '/industry/layananprofesional.webp',
          fallback: '/industry/layananprofesional.png',
          status: 'coming_soon',
          colSpan: 'col-span-12 md:col-span-4'
        }
      ]
    },
    worksShowcase: {
      headlinePart1: 'Your Trustworthy Partner',
      headlinePart2: 'for Customized IT Solutions',
      description: 'Helping you boost your business performance with website and mobile app development.',
      ctaButton: 'See Our Works',
      projects: [
        {
          id: 'kelolaaja',
          title: 'KelolaAja',
          category: 'Enterprise ERP & Cloud Finance',
          tag: 'Multi-tenant SaaS',
          image: '/works/kelolaaja.webp',
          fallback: '/works/kelolaaja.png'
        },
        {
          id: 'nikawa',
          title: 'Nikawa Teknika Indonesia',
          category: 'Industrial IoT & Automation',
          tag: 'Precision Manufacturing',
          image: '/works/nikawa.webp',
          fallback: '/works/nikawa.png'
        },
        {
          id: 'pixelplay',
          title: 'PixelPlay',
          category: 'Digital Gaming & Entertainment Ecosystem',
          tag: 'Interactive Platform',
          image: '/works/pixelplay.webp',
          fallback: '/works/pixelplay.png'
        },
        {
          id: 'trakerja',
          title: 'TraKerja',
          category: 'Talent Infrastructure & Ecosystem',
          tag: 'National Platform',
          image: '/works/trakerja.webp',
          fallback: '/works/trakerja.png'
        }
      ]
    },
    techStack: {
      badge: 'TECHNOLOGY STACK',
      title: 'Proven Engineering Stacks for Enterprise Scale',
      description: 'We deploy robust, battle-tested technologies to guarantee continuous system availability and performance.'
    },
    footer: {
      tagline: 'Enterprise IT architecture and software engineering consultancy accelerating corporate digital transformation.',
      navTitle: 'Navigation',
      home: 'Home',
      portfolio: 'Project Portfolio',
      services: 'Enterprise Services',
      virtualOfficeTitle: 'Virtual Office',
      contactTitle: 'Direct Contact',
      copyright: '© 2026 PT Teknalogi Transformasi Digital. All rights reserved.'
    },
    contactModal: {
      badge: 'TECHNICAL CONSULTATION',
      title: 'Start a Technical Discussion',
      subtitle: 'Consult your system architecture requirements and digital transformation roadmap with our engineering team.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Arya Wijaya',
      emailLabel: 'Corporate / Personal Email',
      emailPlaceholder: 'e.g. arya@company.com',
      phoneLabel: 'WhatsApp / Phone Number',
      phonePlaceholder: 'e.g. +62 812-3456-7890',
      messageLabel: 'Project Details / System Requirements',
      messagePlaceholder: 'Describe your system scope, expected user concurrency, or architectural bottlenecks...',
      submit: 'Send Message',
      submitting: 'Sending...',
      successTitle: 'Message Sent Successfully',
      successMessage: 'Thank you for reaching out. Our engineering team will review your inquiry and respond within 24 business hours.',
      close: 'Close'
    },
    servicesPage: {
      badge: 'CORE CAPABILITIES',
      heroTitle: 'Enterprise Software Engineering Services',
      heroSubtitle: 'Comprehensive end-to-end engineering: from distributed system blueprints to sovereign cloud modernization for modern enterprises.',
      ctaButton: 'Consult Your Requirements',
      capabilityBadge: 'Technical Capabilities',
      deliverablesLabel: 'Key Deliverables:',
      items: [
        {
          number: '01',
          title: 'Enterprise Architecture & Distributed Systems',
          category: 'System Architecture',
          description: 'Designing resilient modular system architectures, distributed message brokers, and database partitioning to process millions of daily transactions without latency degradation.',
          capabilities: [
            'Microservices & Event-Driven Architecture (Kafka / RabbitMQ)',
            'High-Throughput Database Sharding & Caching Strategy',
            'Disaster Recovery & Multi-Region High Availability',
            'Unified API Gateway Design & Adaptive Rate Limiting'
          ],
          deliverables: 'Formal architecture blueprint, latency benchmarking metrics, and system governance documentation.'
        },
        {
          number: '02',
          title: 'Custom Mission-Critical Software Engineering',
          category: 'Software Engineering',
          description: 'End-to-end engineering of critical business platforms with clean architecture, enterprise encryption protocols, and automated test coverage for sustained business reliability.',
          capabilities: [
            'National-Scale Core Business Engine Development',
            'High-Performance Enterprise Web & Mobile Applications',
            'Automated Testing Suite (Unit, Integration, End-to-End)',
            'Continuous Integration & Continuous Deployment (CI/CD)'
          ],
          deliverables: 'Enterprise-grade source code, automated deployment pipeline, and technical knowledge transfer.'
        },
        {
          number: '03',
          title: 'Cloud Modernization & Sovereign Infrastructure',
          category: 'Cloud Governance',
          description: 'Multi-cloud migration and infrastructure governance emphasizing national data sovereignty, Kubernetes container orchestration, and cost optimization.',
          capabilities: [
            'Infrastructure as Code (Terraform / OpenTofu)',
            'Container Orchestration & Cluster Management (Kubernetes)',
            'Data Residency Compliance & Domestic Security Standards',
            'Full-Stack Observability (Centralized Metrics, Logs, Tracing)'
          ],
          deliverables: 'Zero-downtime infrastructure cluster, 24/7 observability dashboard, and cost optimization roadmap.'
        },
        {
          number: '04',
          title: 'Technical Audit & System Debt Elimination',
          category: 'Technical Debt Elimination',
          description: 'Comprehensive codebase diagnostics, monolithic system decomposition, cybersecurity vulnerability mitigation, and systematic refactoring to restore engineering agility.',
          capabilities: [
            'Codebase Health Audit & Vulnerability Assessment',
            'Monolith Decomposition into Isolated Microservices',
            'Memory Profile Optimization & Database Query Tuning',
            'Critical Dependency Updates & Framework Deprecations'
          ],
          deliverables: 'Technical audit report, phased refactoring roadmap, and benchmarked performance gains.'
        }
      ]
    },
    portfolioPage: {
      badge: 'TRACK RECORD',
      heroTitle: 'Industrial & National Scale Engineering Portfolio',
      heroSubtitle: 'Mission-critical digital platforms engineered for high concurrency, robust security, and uncompromised availability.',
      impactLabel: 'Measurable Impact:',
      techLabel: 'Technology Stack:',
      items: [
        {
          id: 'trakerja',
          title: 'TraKerja',
          category: 'Talent Infrastructure & Ecosystem',
          badge: 'National Platform',
          description: 'Distributed labor and workforce system architecture with high scalability, real-time identity verification, and automated digital talent matching algorithms.',
          metrics: [
            { label: 'Active Users', value: '500,000+' },
            { label: 'System Uptime', value: '99.98%' },
            { label: 'API Response Latency', value: '< 75ms' }
          ],
          technologies: ['Golang', 'TypeScript', 'PostgreSQL', 'Redis', 'Kubernetes'],
          impact: 'Accelerated job placement cycles from 14 days down to 48 hours with verified qualification matching.'
        },
        {
          id: 'kelolaaja',
          title: 'KelolaAja',
          category: 'Enterprise ERP & Cloud Finance',
          badge: 'Multi-tenant SaaS',
          description: 'Enterprise cloud ERP solution for financial standardization, multi-branch ledger consolidation, and direct banking API integrations.',
          metrics: [
            { label: 'Transaction Volume', value: 'IDR 120B+/mo' },
            { label: 'Business Entities', value: '1,200+' },
            { label: 'Reconciliation Accuracy', value: '100%' }
          ],
          technologies: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
          impact: 'Eliminated 100% of manual bookkeeping discrepancies and reduced monthly financial close times.'
        },
        {
          id: 'nikawa',
          title: 'PT Nikawa Teknika Indonesia',
          category: 'Industrial IoT & Automation',
          badge: 'Manufacturing & Supply Chain',
          description: 'Industrial IoT telemetry and analytics platform for precision manufacturing line monitoring, component quality inspection, and automated preventative maintenance alerts.',
          metrics: [
            { label: 'Downtime Reduction', value: '35%' },
            { label: 'Connected Sensors', value: '250+ Units' },
            { label: 'Anomaly Detection', value: 'Real-time' }
          ],
          technologies: ['Rust', 'Python', 'MQTT', 'TimescaleDB', 'Grafana'],
          impact: 'Prevented critical equipment failures in precision component manufacturing through real-time anomaly forecasting.'
        },
        {
          id: 'hris',
          title: 'Enterprise HRIS & People Analytics',
          category: 'Corporate Human Capital',
          badge: 'Enterprise Grade',
          description: 'Workforce management platform handling tens of thousands of corporate employees with multi-entity payroll automation, regulatory compliance, and centralized encryption.',
          metrics: [
            { label: 'Managed Employees', value: '45,000+' },
            { label: 'Payroll Processing Time', value: '-80%' },
            { label: 'Audit Compliance Rate', value: '100%' }
          ],
          technologies: ['Java / Spring Boot', 'React', 'PostgreSQL', 'Vault', 'AWS'],
          impact: 'Streamlined corporate payroll operations from 5 business days to 2 hours with audit-grade precision.'
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "These are the questions that commonly arise during discussions with clients. We have gathered them here to make our approach, engineering workflow, and capabilities clear and accessible.",
      trustedLabel: "Trusted by",
      trustedSub: "Enterprise clients across sectors",
      askButton: "Still have questions?",
      items: [
        {
          id: "about-teknalogi",
          question: "What is PT Teknalogi Transformasi Digital?",
          answer: "PT Teknalogi Transformasi Digital is an enterprise software engineering, centralized system integration, and sovereign cloud architecture firm based in Jakarta, Indonesia. We help corporations, state-owned enterprises, and financial institutions architect, build, and operate resilient, scalable, and secure digital platforms aligned with strategic operational goals."
        },
        {
          id: "services",
          question: "What services does Teknalogi provide?",
          answer: "We provide end-to-end enterprise engineering services, including distributed backend and microservices architecture, core banking and fintech software, industrial IoT and real-time telemetry systems, legacy system modernization, sovereign cloud deployment, and applied enterprise AI integration."
        },
        {
          id: "clients",
          question: "What types of organizations typically work with Teknalogi?",
          answer: "Our partners range from banking and financial institutions, multinational manufacturing enterprises, telecommunications and logistics leaders, to public sector agencies requiring uncompromising standards in system reliability, high throughput, and data governance."
        },
        {
          id: "geography",
          question: "Does Teknalogi only serve clients in Indonesia?",
          answer: "While our core engineering headquarters and primary client base are in Indonesia, our team regularly handles cross-border system architectures and integrations for regional enterprises across Southeast Asia and collaborates with international technology partners."
        },
        {
          id: "approach",
          question: "How does Teknalogi approach starting a new project?",
          answer: "We begin every engagement with Deep Architectural Discovery: auditing existing system topologies, mapping technical debt, and validating business throughput requirements. From there, we formulate a modular technical blueprint, develop rapid proof-of-concepts, and execute iterative agile sprints backed by automated CI/CD pipelines and continuous security audits."
        },
        {
          id: "legacy",
          question: "Can Teknalogi handle or modernize existing legacy systems?",
          answer: "Yes, this is one of our key specializations. We employ phased architectural migration patterns (such as the Strangler Fig pattern) to decouple legacy monolithic systems into modular, API-driven services without causing downtime or operational disruption to ongoing business processes."
        },
        {
          id: "security",
          question: "How are data security, SLA performance, and compliance guaranteed?",
          answer: "Every architecture we deploy adheres to zero-trust security principles, end-to-end payload encryption, and strict alignment with ISO 27001 standards and Indonesian Personal Data Protection (PDP) regulations. We offer enterprise SLAs guaranteeing up to 99.9% uptime, multi-region failover redundancy, and comprehensive audit documentation."
        },
        {
          id: "consultation",
          question: "How can we discuss a prospective project with Teknalogi?",
          answer: "You can schedule a consultation directly by clicking the 'Still have questions?' button or reaching out via our contact channels. Our principal solutions architects will schedule a dedicated technical discovery session within 24 business hours to evaluate your project specifications."
        }
      ]
    },
    letsTalk: {
      headline: "Let's talk.",
      subtitle: "We're ready to help you deliver high-performing websites, boost your business visibility in search engines, and build digital platforms tailored to your specific needs.",
      cta: "Contact Us"
    },
    businessNeed: {
      eyebrow: "TAKE THE NEXT STEP",
      headlinePart1: "Let's start from",
      headlinePart2: "your business requirements.",
      description: "Discuss your system architecture, platform modernization, or digital integration roadmap with our engineering team. We are ready to help formulate precise technical execution.",
      cta: "Talk to Teknalogi",
      note: "Direct consultation via WhatsApp with our solutions team"
    },
    webDevService: {
      meta: {
        title: "Website Development | PT Teknalogi Transformasi Digital",
        description: "Custom websites and web applications tailored to your business needs. High performance, responsive, and enterprise-grade.",
      },
      breadcrumbs: {
        home: "Home",
        homeHref: "/",
        services: "Services",
        servicesHref: "/layanan",
        current: "Web Development",
      },
      trustBadge: {
        label: "Trusted by",
        sublabel: "Corporations and growing enterprises across Indonesia",
      },
      hero: {
        headline: "Custom Websites and Web Applications Tailored to Your Business Needs",
        description: "Teknalogi delivers enterprise-grade web development tailored for corporate growth, institutional scalability, and digital transformation in Indonesia. Every website and web application is engineered with an SEO-first approach, mobile-first responsive design, structured information architecture, and custom CMS workflows, backed by high performance, stringent security, and dependable long-term support.",
        primaryCta: "Consult Web Development Needs",
        primaryCtaHref: "/contact",
        secondaryCta: "Learn More",
        secondaryCtaHref: "#what-we-deliver",
      },
      quickLinks: {
        title: "Quick Navigation",
        links: [
          { label: "What We Deliver?", href: "#what-we-deliver" },
          { label: "About This Service", href: "#about-service" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      features: {
        headline: "Core Features of Teknalogi Web Development Services",
        subheadline: "Every aspect of our web development services is engineered to support real business outcomes, from bespoke architecture to long-term reliability and support.",
        items: [
          {
            id: "custom-design",
            title: "Custom Design & Features",
            desc: "Every website is engineered with tailored UI/UX and features designed around your unique operational workflows, ensuring distinct competitive differentiation in your digital market.",
            icon: "cube",
            glowColor: "from-blue-100/60",
          },
          {
            id: "seo-first",
            title: "SEO-First Engineering",
            desc: "Technical markup, semantic metadata, and information hierarchy are architected from day one for search engine discovery, establishing a dependable foundation for long-term organic reach.",
            icon: "search",
            glowColor: "from-sky-100/60",
          },
          {
            id: "info-architecture",
            title: "Structured Information Architecture",
            desc: "An organized content hierarchy streamlines visitor navigation and enables search engines to crawl and index your corporate pages with maximum clarity.",
            icon: "hierarchy",
            glowColor: "from-indigo-100/60",
          },
          {
            id: "custom-cms",
            title: "Intuitive Custom CMS",
            desc: "A tailored content management system engineered around your editorial workflows, empowering internal teams to update pages and media independently without engineering dependencies.",
            icon: "cms",
            glowColor: "from-amber-100/60",
          },
          {
            id: "functional-warranty",
            title: "Functional Warranty & Assurance",
            desc: "Every deployment undergoes comprehensive quality assurance and is backed by a post-launch functional warranty, eliminating operational risks and ensuring flawless execution.",
            icon: "shield-check",
            glowColor: "from-emerald-100/60",
          },
          {
            id: "website-security",
            title: "Enterprise Website Security",
            desc: "Rigorous security practices, encrypted data transmission, and vulnerability hardening protect corporate integrity, user trust, and business continuity.",
            icon: "lock",
            glowColor: "from-violet-100/60",
          },
          {
            id: "high-performance",
            title: "High Performance & Responsiveness",
            desc: "Lightning-fast load times and seamless cross-device adaptability deliver superior user experiences and strengthen Core Web Vitals search rankings.",
            icon: "speed",
            glowColor: "from-cyan-100/60",
          },
          {
            id: "internal-training",
            title: "Internal Team Training",
            desc: "Dedicated hands-on onboarding sessions covering every system capability, equipping your staff to manage content, media, and inbound inquiries with complete confidence.",
            icon: "training",
            glowColor: "from-blue-100/60",
          },
          {
            id: "maintenance-support",
            title: "Continuous Maintenance & Support",
            desc: "Proactive system monitoring, regular dependency updates, and responsive technical assistance ensure your web assets remain secure, performant, and aligned with company growth.",
            icon: "support",
            glowColor: "from-purple-100/60",
          },
        ],
      },
      aboutService: {
        id: "about-service",
        title: "About Teknalogi Web Development Services",
        tocTitle: "TABLE OF CONTENTS",
        sections: [
          {
            id: "definisi-web-development",
            tocLabel: "Web Development Definition",
            title: "What Is Web Development and Its Strategic Business Value",
            paragraphs: [
              "Web development is the systematic engineering, design, and lifecycle maintenance of digital platforms, encompassing technical infrastructure and visual interfaces to ensure peak online performance. For modern organizations, an enterprise website is far more than a simple brand presence. It serves as a foundational strategic asset that accelerates market expansion, strengthens institutional credibility, and builds immediate trust with potential clients.",
              "An effective web platform must execute core business logic flawlessly, remain straightforward for non-technical teams to manage, provide rigorous cybersecurity safeguards, and load with instantaneous responsiveness to retain prospective customers. Verified functionality, operational flexibility, and high performance form the bedrock of every web solution engineered by Teknalogi."
            ],
          },
          {
            id: "desain-fitur-custom",
            tocLabel: "Custom Design & Features",
            title: "The Strategic Advantage of Custom Design and Tailored Features",
            paragraphs: [
              "No two commercial enterprises operate with identical workflows, customer segments, or business models. Generic off-the-shelf templates frequently introduce plugin bloat, maintenance fragility, and rigid limitations that fail to accurately represent your brand's unique market advantage. Teknalogi architects each web platform around bespoke technical blueprints, pairing distinctive corporate visual identity with tailored operational capabilities.",
            ],
            bullets: [
              {
                label: "Design reflecting corporate identity",
                text: "a cohesive visual aesthetic meticulously aligned with your organizational values and design standards.",
              },
              {
                label: "Features mapped directly to workflows",
                text: "practical functional capabilities engineered for real operations, avoiding extraneous template bloat.",
              },
              {
                label: "Optimal user experiences",
                text: "intuitive information pathways and accessible interfaces that help visitors effortlessly complete their objectives.",
              },
            ],
            closingParagraph: "This tailored approach ensures that your corporate web platform looks thoroughly distinguished while operating reliably as an indispensable business asset.",
          },
          {
            id: "seo-mobile-first",
            tocLabel: "SEO & Mobile-First",
            title: "SEO-First and Mobile-First Principles for Long-Term Digital Visibility",
            paragraphs: [
              "Even the most visually sophisticated web platform yields little value if decision-makers cannot find it through search engines. At Teknalogi, search engine optimization is an architectural priority embedded from day one into semantic HTML markup, metadata schemas, URL routing, and content structuring, rather than an afterthought applied at launch. This technical foundation ensures sustainable organic search presence over years of operational growth.",
              "Given that the vast majority of web traffic across Southeast Asia and global markets originates on smartphones, our mobile-first engineering guarantees seamless ergonomics across every form factor. Layouts, typography, and interactive components scale smoothly, delivering immediate responsiveness from handheld devices to high-resolution desktop displays.",
            ],
          },
          {
            id: "arsitektur-cms",
            tocLabel: "Architecture & CMS",
            title: "Structured Information Architecture and Custom CMS for Scalable Governance",
            paragraphs: [
              "Deliberate information architecture dictates how intuitively visitors explore, evaluate, and digest corporate information. We design transparent navigation structures that reduce user cognitive load while enabling search engine crawlers to parse institutional content hierarchies efficiently.",
            ],
            bullets: [
              {
                label: "Transparent navigation structures",
                text: "clear, frictionless pathways guiding prospective clients to essential services and case studies.",
              },
              {
                label: "Organized content hierarchies",
                text: "structured layouts that elevate readability and maximize search engine relevance.",
              },
              {
                label: "Intuitive custom CMS interfaces",
                text: "purpose-built administration consoles tailored to your editorial team without dependency on fragile third-party plugins.",
              },
            ],
            closingParagraph: "Our proprietary CMS configurations empower marketing and communications staff to publish content, update media assets, and introduce new corporate offerings independently, eliminating ongoing reliance on external engineering support.",
          },
          {
            id: "garansi-keamanan",
            tocLabel: "Assurance & Security",
            title: "Functional Warranty, Stringent Security, and High Performance Benchmarks",
            paragraphs: [
              "Every enterprise deployment delivered by Teknalogi undergoes exhaustive multi-browser testing, automated regression suites, and manual quality assurance. We accompany each project with an enforceable functional warranty verifying that all capabilities operate precisely according to agreed technical specifications.",
              "Cybersecurity remains a non-negotiable imperative, especially for enterprises handling sensitive corporate transactions, customer records, or internal system integrations. We implement multi-layer defenses, SSL/TLS encryption, OWASP mitigation, and strict input sanitization to safeguard your data assets and maintain continuous business operations.",
              "Performance engineering is prioritized from initial scaffolding. Through code minification, image asset compression, and responsive edge caching, every page achieves rapid load speeds that comfortably surpass Core Web Vitals thresholds and keep potential clients engaged.",
            ],
          },
          {
            id: "training-maintenance",
            tocLabel: "Training & Maintenance",
            title: "Comprehensive Team Training and Dependable Long-Term Maintenance",
            paragraphs: [
              "A production launch represents the beginning of your digital platform's operational lifecycle, not its conclusion. Teknalogi provides structured onboarding sessions and comprehensive administrative documentation, empowering your team to govern every administrative workflow with complete autonomy.",
              "Our dedicated maintenance SLA packages safeguard ongoing platform stability through proactive security patches, continuous dependency management, automated backup routines, and rapid-response technical assistance. With sustained engineering stewardship, organizational leadership can focus entirely on core business expansion.",
            ],
          },
        ],
      },
      faq: {
        badge: "FAQ",
        headline: "FAQ About Web Development",
        subheadline: "Clear answers to essential questions regarding web engineering, modern architecture, and Teknalogi services.",
        trustedLabel: "Trusted by",
        trustedSub: "Corporations and growing enterprises across Indonesia",
        askButton: "Consult Web Development Needs",
        items: [
          {
            id: "faq-ui-ux-vs-dev",
            question: "What is the difference between UI/UX design and web development?",
            answer: "UI/UX design focuses on user research, interface prototyping, visual hierarchy, and intuitive interaction flows before any code is written. Web development is the technical engineering process that transforms those designs into functional digital platforms, encompassing frontend interface coding, backend database architecture, system integrations, and server deployment.",
          },
          {
            id: "faq-learning-curve",
            question: "Is web development difficult to learn?",
            answer: "The learning curve depends on technical depth. Foundational technologies like semantic HTML, CSS, and basic JavaScript can be grasped relatively quickly. However, architecting enterprise systems, managing data security compliance, integrating external APIs, and achieving Core Web Vitals benchmarks demand rigorous software engineering principles and extensive production experience.",
          },
          {
            id: "faq-relevance-2026",
            question: "Is web development still relevant in 2026?",
            answer: "It is more vital than ever. In 2026, an enterprise website is not just an online brochure: it serves as the core operational foundation, AI integration hub, encrypted commerce channel, and proprietary data gateway that protects organizations from shifting third-party social media algorithms.",
          },
          {
            id: "faq-cpp-usage",
            question: "Is C++ used in web development?",
            answer: "C++ is rarely used for routine website layout or application scripting, where TypeScript, JavaScript, Python, Go, and PHP predominate. However, C++ powers critical low-level web infrastructure, including high-performance web servers, browser rendering engines, and WebAssembly (Wasm) modules executed directly inside modern client browsers.",
          },
          {
            id: "faq-mobile-first",
            question: "Why is mobile-first design essential in web development?",
            answer: "The clear majority of global and Indonesian web traffic originates on mobile devices. A mobile-first methodology prioritizes essential content hierarchy, touch-friendly navigation, and rapid bandwidth efficiency on small screens first, before scaling smoothly up to desktop monitors. It is also a decisive criterion in Google mobile-first search indexing.",
          },
          {
            id: "faq-custom-cms",
            question: "What are the advantages of a custom CMS over standard CMS platforms?",
            answer: "Standard CMS platforms frequently rely on numerous third-party plugins that introduce security vulnerabilities, code bloat, and recurring plugin conflicts. A custom CMS is engineered precisely around your internal editorial workflows, offering lightweight execution, strict role-based access control (RBAC), and near-zero dependency debt.",
          },
          {
            id: "faq-security-assurance",
            question: "How does Teknalogi ensure the security of developed websites?",
            answer: "Teknalogi applies zero-trust security practices from initial scaffolding. Every platform includes enforced TLS/SSL encryption, comprehensive protection against OWASP Top 10 vulnerabilities (including SQL injection and cross-site scripting), strict data sanitization, brute-force mitigation, and hardened HTTP headers.",
          },
          {
            id: "faq-maintenance-services",
            question: "What maintenance services are provided after launch?",
            answer: "Our continuous maintenance coverage includes proactive uptime monitoring, regular security and dependency patch updates, automated off-site encrypted database backups, bug resolution, Core Web Vitals optimization, and priority technical support through dedicated communication channels.",
          },
          {
            id: "faq-consultation-process",
            question: "How does the project consultation process work at Teknalogi?",
            answer: "You can initiate contact through our WhatsApp channel or consultation form. Our solution architects will arrange an initial technical discovery session to evaluate your organizational objectives, required system integrations, and project scope, delivering a transparent roadmap before engineering begins.",
          },
          {
            id: "faq-internal-training",
            question: "Is team training provided for client internal staff?",
            answer: "Yes, every enterprise deployment includes hands-on onboarding sessions tailored for your internal operations and marketing staff. We guide your team through content publishing, media management, user permission administration, and workflow governance, accompanied by comprehensive written documentation.",
          },
        ],
      },
    },
    softwareDevService: {
      meta: {
        title: "Software Development | PT Teknalogi Transformasi Digital",
        description: "Enterprise software house delivering custom business software solutions. From scalable architectures to enterprise integration and security by design.",
      },
      breadcrumbs: {
        home: "Home",
        homeHref: "/",
        services: "Services",
        servicesHref: "/layanan",
        current: "Software Development",
      },
      trustBadge: {
        label: "Trusted by",
        sublabel: "Corporations and growing enterprises across Indonesia",
      },
      hero: {
        headline: "Software House for Your Enterprise Business Solutions",
        description: "Teknalogi delivers specialized software engineering designed around your unique business requirements and operational workflows. From scalable distributed architectures to enterprise system integrations and security by design, we build robust software platforms ready to power your organizational growth.",
        primaryCta: "Request Software Consultation",
        primaryCtaHref: "/contact",
        secondaryCta: "Learn More",
        secondaryCtaHref: "#what-we-deliver",
      },
      quickLinks: {
        title: "Quick Navigation",
        links: [
          { label: "What We Deliver?", href: "#what-we-deliver" },
          { label: "About This Service", href: "#about-service" },
          { label: "Explore Solutions", href: "#what-we-deliver" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      features: {
        headline: "Core Features of Software Development Services",
        subheadline: "Our software house services are built on core engineering capabilities designed to deliver verified business value, from initial architecture to dependable long-term operations.",
        items: [
          {
            id: "business-driven-design",
            title: "Business-Driven Software Design",
            desc: "Every solution is architected from a deep understanding of your operational workflows and commercial objectives, ensuring the software actively advances business outcomes rather than just ticking technical specifications.",
            icon: "business",
            glowColor: "from-teal-100/60",
          },
          {
            id: "security-by-design",
            title: "Security by Design",
            desc: "Enterprise cybersecurity is integrated from initial architectural scaffolding, protecting sensitive corporate workflows and customer data through multi-layered defense and strict vulnerability mitigation.",
            icon: "shield",
            glowColor: "from-cyan-100/60",
          },
          {
            id: "long-term-warranty",
            title: "Long-Term Warranty & Support",
            desc: "We commit to comprehensive ongoing maintenance and SLA-backed support after launch, ensuring your business systems remain resilient, secure, and performant as organizational needs scale.",
            icon: "support",
            glowColor: "from-emerald-100/60",
          },
          {
            id: "scalable-architecture",
            title: "Scalable Architecture for Growth",
            desc: "System blueprints are engineered around current workloads and future expansion milestones, accommodating exponential transaction volume and user concurrency without requiring disruptive overhauls.",
            icon: "scale",
            glowColor: "from-blue-100/60",
          },
          {
            id: "rbac-access-control",
            title: "Role-Based Access & Permissions",
            desc: "Granular permission engines and role-based access control (RBAC) ensure users only interact with authorized data and functions, upholding operational integrity and regulatory compliance.",
            icon: "lock",
            glowColor: "from-indigo-100/60",
          },
          {
            id: "custom-workflows",
            title: "Integrated Custom Workflows",
            desc: "Every operational workflow reflects your actual organizational processes, delivering an intuitive user experience that reduces onboarding friction and enhances day-to-day team productivity.",
            icon: "workflow",
            glowColor: "from-sky-100/60",
          },
          {
            id: "enterprise-integration",
            title: "Enterprise System Integration",
            desc: "Seamless bidirectional connectors integrate with your existing ERPs, CRMs, banking APIs, and legacy databases, synchronizing core data streams across your enterprise IT landscape.",
            icon: "integration",
            glowColor: "from-violet-100/60",
          },
          {
            id: "maintainable-codebase",
            title: "Maintainable Engineering Standards",
            desc: "Developed following clean architecture, strict documentation, and modular separation of concerns. Maintainable codebases drastically lower technical debt and ongoing operational costs.",
            icon: "code",
            glowColor: "from-purple-100/60",
          },
          {
            id: "modular-systems",
            title: "Modular & Connected Systems",
            desc: "Independent micro-modules allow individual subsystems to be updated, refactored, or scaled without compromising platform stability, granting maximum technical agility over the long term.",
            icon: "module",
            glowColor: "from-teal-100/60",
          },
        ],
      },
      aboutService: {
        id: "about-service",
        title: "About Teknalogi Software Development Services",
        tocTitle: "TABLE OF CONTENTS",
        sections: [
          {
            id: "definisi-software-house",
            tocLabel: "Software House Definition",
            title: "What Is a Software House and Its Role in Modern Business",
            paragraphs: [
              "A software house is an engineering consultancy specializing in designing, developing, and deploying bespoke software tailored directly to specific business needs. Unlike generic commercial off-the-shelf software built for common denominators, a software house constructs digital platforms aligned with your unique workflows, organizational structures, and strategic milestones.",
              "Organizations ranging from agile mid-market scaleups to multi-national enterprises require software that not only functions technically, but genuinely complements the way their teams collaborate. Off-the-shelf software often creates friction and operational bottlenecks. Teknalogi ensures your enterprise technology remains deeply relevant, easily integrated, and built to scale alongside your organization."
            ],
          },
          {
            id: "manfaat-software-kustom",
            tocLabel: "Custom Software Benefits",
            title: "Strategic Business Benefits of Custom Software Development",
            paragraphs: [
              "Bespoke software delivers competitive advantages unobtainable through standard off-the-shelf tools. When an enterprise platform is engineered around your precise operational requirements, it functions as a customized force multiplier rather than a compromise of rigid preset features."
            ],
            bullets: [
              {
                label: "Alignment with unique business processes",
                text: "every workflow is modeled after your authentic operations rather than forcing teams to adapt to inflexible third-party software constraints.",
              },
              {
                label: "Seamless integration with existing systems",
                text: "bespoke solutions connect directly with operational ERPs, accounting ledgers, and databases to synchronize data without duplicate manual effort.",
              },
              {
                label: "Scalability aligned with corporate growth",
                text: "resilient architecture easily absorbs increases in concurrent users, multi-branch operations, and transaction throughput without performance loss.",
              },
              {
                label: "Measurable operational efficiency",
                text: "targeted process automation reduces human error, cuts administrative overhead, and frees valuable human resources for core strategic initiatives.",
              },
            ],
          },
          {
            id: "pilar-layanan",
            tocLabel: "Core Service Pillars",
            title: "Core Pillars of Teknalogi Software Engineering",
            paragraphs: [
              "Our software development approach is anchored in core engineering principles that guarantee solutions are not only dependable today, but remain scalable assets for decades to come."
            ],
            bullets: [
              {
                label: "Business-driven design",
                text: "we begin with in-depth discovery of organizational goals and operational workflows, architecting systems that solve concrete commercial challenges.",
              },
              {
                label: "Scalable architecture and optimal tech stack",
                text: "architectures and programming languages are selected based on actual operational scope, preventing over-engineering while remaining ready for scale.",
              },
              {
                label: "Enterprise system integration",
                text: "we build open, secure API interfaces that bridge existing legacy infrastructure, ensuring clean data synchronization across departments.",
              },
              {
                label: "Security by design and role-based access",
                text: "cybersecurity standards and strict role permissions are baked in from the foundation, protecting proprietary data and regulatory compliance.",
              },
              {
                label: "Maintainable engineering and long-term support",
                text: "clean modular codebases, comprehensive documentation, and proactive SLA agreements provide ongoing confidence for business continuity.",
              },
            ],
          },
          {
            id: "konteks-pasar-indonesia",
            tocLabel: "Indonesian Market Context",
            title: "Software Engineering Relevance for the Indonesian Enterprise Landscape",
            paragraphs: [
              "Commercial organizations in Indonesia navigate distinct operational challenges: evolving domestic regulations, distributed workforces spanning diverse regions, and escalating pressure to optimize operational expenditure. High-impact enterprise software must be engineered with this local context in mind.",
              "Corporate enterprises, government institutions, and growing scaleups each possess distinct operational complexities. Large organizations demand robust governance, multi-branch consolidation, and high-concurrency transaction handling. Mid-market companies require lean, high-velocity adoption without excessive server overhead. Teknalogi tailors each software architecture to the exact scale and growth horizon of your enterprise."
            ],
          },
        ],
      },
      faq: {
        headline: "FAQ About Software Development Services",
        subheadline: "Clear answers to essential questions regarding software engineering, enterprise architecture, and Teknalogi services.",
        trustedLabel: "Trusted by",
        trustedSub: "Corporations and growing enterprises across Indonesia",
        askButton: "Consult Software Requirements",
        items: [
          {
            question: "What is a software house?",
            answer: "A software house is an engineering firm specializing in designing and developing bespoke software tailored to specific client business needs. Unlike off-the-shelf software packages, a software house constructs customized solutions aligned with an organization's unique processes, structure, and strategic objectives.",
          },
          {
            question: "How does a software house work when developing software?",
            answer: "The engagement begins with deep operational discovery and technical scoping, proceeds into system architecture and interface prototyping, advances through iterative agile development sprints, undergoes rigorous QA testing, and concludes with deployment, staff training, and ongoing maintenance.",
          },
          {
            question: "What are the benefits of using a software house for my enterprise?",
            answer: "Your organization receives a solution tailored precisely to internal business logic, operational independence without recurring license restrictions, complete intellectual property ownership, and direct integration with existing enterprise systems.",
          },
          {
            question: "What services does a software house typically provide?",
            answer: "Core capabilities include enterprise architecture design, custom web and mobile application engineering, legacy system modernization, API and ERP integration, cybersecurity hardening, and long-term SLA maintenance support.",
          },
          {
            question: "How does Teknalogi ensure the security of developed software?",
            answer: "We apply security-by-design from initial architecture: role-based access controls (RBAC), end-to-end data encryption, OWASP Top 10 vulnerability mitigation, parameterized data queries, and systematic code vulnerability audits.",
          },
          {
            question: "Can the software solution scale as my business grows?",
            answer: "Yes. Every system is built on modular, decoupled architecture. Backends, database clusters, and interfaces are engineered to scale horizontally, supporting exponential increases in data volume and user traffic without requiring systemic rebuilds.",
          },
          {
            question: "How is long-term support provided after software deployment?",
            answer: "We provide functional warranty periods, proactive infrastructure monitoring, routine dependency and security patches, rapid bug resolution, and dedicated SLA response windows to ensure zero unplanned operational disruption.",
          },
          {
            question: "Is software house development suitable for both SMEs and large enterprises?",
            answer: "Yes. For growing businesses, we engineer streamlined, high-efficiency applications with rapid time-to-market. For large enterprises, we deliver distributed architectures capable of governing multi-entity operations and stringent compliance mandates.",
          },
          {
            question: "What is the difference between custom software and off-the-shelf solutions?",
            answer: "Off-the-shelf software is built for broad market averages, often imposing rigid workflows, feature bloat, and escalating recurring subscription fees. Custom software is purpose-built for your specific operational advantages and remains an owned institutional asset.",
          },
          {
            question: "How can we start a software requirements consultation with Teknalogi?",
            answer: "You can reach out directly via our WhatsApp consultation button or contact form. Our enterprise solutions team will schedule a technical discovery session to discuss your operational roadmap and system architecture with no initial commitment.",
          },
        ],
      },
    },
    mobileDevService: {
        meta: {
          title: 'Mobile App Development | PT Teknalogi Transformasi Digital',
          description: 'Custom iOS and Android mobile app development for enterprise business solutions. Scalable architecture, security by design, and end-to-end device testing.',
        },
        breadcrumbs: {
          home: 'Home',
          homeHref: '/',
          services: 'Services',
          servicesHref: '/services',
          current: 'Mobile App Development',
        },
        trustBadge: {
          label: 'Trusted by',
          sublabel: 'Corporations and growing enterprises across Indonesia',
        },
        hero: {
          headline: 'Mobile App Development for Secure and Scalable Business Solutions',
          description: 'Teknalogi empowers corporations and growing businesses with user-centric mobile applications built on purpose-fit technologies and protected by secure, scalable architecture. From native engineering to unified cross-platform solutions, we craft mobile software aligned with your business goals and built to scale alongside your organization.',
          primaryCta: 'Request Consultation',
          primaryCtaHref: '/contact',
          secondaryCta: 'Explore Capabilities',
          secondaryCtaHref: '#what-we-deliver',
        },
        quickLinks: {
          links: [
            { label: 'What We Deliver?', href: '#what-we-deliver' },
            { label: 'About This Service', href: '#about-service' },
            { label: 'Explore Solutions', href: '#what-we-deliver' },
            { label: 'FAQ', href: '#faq' },
          ],
        },
        features: {
          headline: 'Core Capabilities in Mobile App Development',
          subheadline: 'Every facet of our mobile service is engineered to produce secure, scalable, and resilient mobile applications that create measurable business impact.',
          items: [
            {
              id: 'user-centric',
              title: 'User-Centric Mobile Experience',
              desc: 'Our design process starts with a deep understanding of user behaviors and workflows. The outcome is intuitive navigation, elevated retention rates, and immediate operational adoption.',
              icon: 'user-centric',
              glowColor: 'from-blue-100/60',
            },
            {
              id: 'security-by-design',
              title: 'Secure Mobile Architecture',
              desc: 'Enterprise security standards are integrated from initial discovery rather than patched post-launch. We safeguard enterprise credentials, customer identities, and business continuity.',
              icon: 'shield',
              glowColor: 'from-indigo-100/60',
            },
            {
              id: 'performance-optimization',
              title: 'Device & Performance Optimization',
              desc: 'We optimize binaries, memory lifecycles, and caching to ensure silky-smooth response times across diverse mobile chipsets, varying screen densities, and low-bandwidth connectivity.',
              icon: 'performance',
              glowColor: 'from-sky-100/60',
            },
            {
              id: 'native-cross-platform',
              title: 'Native & Cross-Platform Development',
              desc: 'From Swift on iOS and Kotlin on Android to Flutter and React Native, our architectural choices reflect user demographics, feature depth, and operational capital efficiency.',
              icon: 'cross-platform',
              glowColor: 'from-cyan-100/60',
            },
            {
              id: 'backend-api-integration',
              title: 'Backend & Enterprise API Integration',
              desc: 'Mobile apps must seamlessly communicate with existing systems. We engineer robust, authenticated REST and GraphQL connectors to your ERPs, CRMs, and core databases.',
              icon: 'api',
              glowColor: 'from-teal-100/60',
            },
            {
              id: 'quality-assurance',
              title: 'Quality Assurance & Device Lab Testing',
              desc: 'Every release passes rigorous automated and manual test suites across physical devices, evaluating battery consumption, screen orientations, stress loads, and offline edge cases.',
              icon: 'qa',
              glowColor: 'from-sky-100/60',
            },
            {
              id: 'purpose-fit-tech',
              title: 'Purpose-Fit Technology Selection',
              desc: 'We evaluate technical frameworks against long-term roadmap objectives. No single stack is dogmatically forced; every engineering choice is verified against performance needs.',
              icon: 'architecture',
              glowColor: 'from-violet-100/60',
            },
            {
              id: 'scalable-architecture',
              title: 'Scalable Modular App Foundations',
              desc: 'Engineered with clean architectural patterns to absorb surging active users and iterative feature deployments without accumulating crippling technical refactoring debt.',
              icon: 'scale',
              glowColor: 'from-indigo-100/60',
            },
            {
              id: 'continuous-maintenance',
              title: 'Continuous Maintenance & OS Upgrades',
              desc: 'App launch is day one. We provide proactive monitoring, timely compatibility patches for new iOS and Android OS cycles, rapid bug mitigation, and ongoing feature rollouts.',
              icon: 'maintenance',
              glowColor: 'from-blue-100/60',
            },
          ],
        },
        aboutService: {
          id: 'about-service',
          title: 'About Teknalogi Mobile App Development Services',
          tocTitle: 'TABLE OF CONTENTS',
          sections: [
            {
              id: 'definisi-pengembangan-aplikasi-mobile',
              tocLabel: 'Mobile App Definition',
              title: 'What Is Mobile App Development and Its Strategic Value',
              paragraphs: [
                'Mobile application development is the end-to-end discipline of conceptualizing, architecting, engineering, and publishing software engineered specifically for mobile devices such as smartphones and tablets. It encompasses the complete application lifecycle, from user experience analysis and interface prototyping to device-level testing, store approval, and multi-year production maintenance.',
                'For forward-thinking organizations, a well-crafted mobile application extends customer accessibility, streamlines frontline operational workflows, and builds direct, persistent brand trust. In a rapidly growing mobile-first market like Indonesia, high-performance mobile software is a strategic cornerstone for competitive modern enterprises.',
              ],
            },
            {
              id: 'pendekatan-pengembangan',
              tocLabel: 'Development Paradigms',
              title: 'Development Paradigms: Native, Cross-Platform, and Hybrid',
              paragraphs: [
                'Selecting the proper engineering approach establishes overall application responsiveness, long-term maintenance costs, and hardware capability. Three primary approaches dominate modern engineering:',
              ],
              bullets: [
                {
                  label: 'Native development',
                  text: 'software written specifically for one operating system utilizing Swift for iOS or Kotlin for Android, delivering maximum runtime velocity and complete hardware integration.',
                },
                {
                  label: 'Cross-platform engineering',
                  text: 'a single unified codebase generating performant applications for both Android and iOS simultaneously, reducing time-to-market and total cost of ownership.',
                },
                {
                  label: 'Hybrid solutions',
                  text: 'combining web runtime components within native shells, suitable for lightweight, content-centric applications requiring selective device sensor access.',
                },
              ],
            },
            {
              id: 'nilai-utama-layanan',
              tocLabel: 'Core Service Values',
              title: 'Core Values of Teknalogi Mobile Engineering',
              paragraphs: [
                'Our mobile engineering services are built to solve concrete enterprise challenges rather than merely outputting functional code. Every project is anchored by eight foundational values:',
              ],
              bullets: [
                {
                  label: 'User-centric experience design',
                  text: 'user interfaces mapped directly against authentic customer behavior to maximize daily active usage and satisfaction.',
                },
                {
                  label: 'Purpose-fit technology architecture',
                  text: 'rigorous evaluation of frameworks tailored to your business scale without unnecessary complexity or architectural debt.',
                },
                {
                  label: 'Security-by-design discipline',
                  text: 'proactive cryptographic protections, secure session storage, and data validation built into the application foundation.',
                },
                {
                  label: 'Enterprise backend integration',
                  text: 'rock-solid connectivity to transactional databases, payment gateways, and core operational platforms.',
                },
                {
                  label: 'Scalable system blueprints',
                  text: 'modular code separation allowing new features to deploy seamlessly alongside exponential user base growth.',
                },
                {
                  label: 'Performance and hardware efficiency',
                  text: 'stringent optimization ensuring immediate responsiveness across low-bandwidth environments and standard hardware.',
                },
                {
                  label: 'Systematic device lab verification',
                  text: 'structured quality assurance evaluating real-world touch latency, network interruptions, and battery consumption.',
                },
                {
                  label: 'Sustained lifecycle maintenance',
                  text: 'ongoing operational support keeping apps resilient, secure, and compliant with evolving Apple and Google store requirements.',
                },
              ],
            },
            {
              id: 'proses-dan-dukungan',
              tocLabel: 'Process and Lifecycle',
              title: 'Structured Engineering Lifecycle and Ongoing Support',
              paragraphs: [
                'Building successful mobile software requires an iterative, transparent engineering lifecycle. Each client engagement follows six coordinated milestones:',
              ],
              bullets: [
                {
                  label: 'Requirements discovery',
                  text: 'clarifying operational milestones, target user profiles, and technical infrastructure constraints prior to architecture design.',
                },
                {
                  label: 'UI/UX interface engineering',
                  text: 'crafting high-fidelity interactive wireframes and design systems validated against real user interaction patterns.',
                },
                {
                  label: 'Sprint-based development',
                  text: 'writing clean, documented code and integrating secure backend APIs through transparent bi-weekly sprint deliverables.',
                },
                {
                  label: 'Quality assurance and device testing',
                  text: 'verifying stability, memory leaks, and network resilience across diverse physical Android and iOS devices.',
                },
                {
                  label: 'Store publishing and launch',
                  text: 'managing Apple App Store and Google Play Store compliance, submission guidelines, and production deployment.',
                },
                {
                  label: 'Continuous optimization and upgrades',
                  text: 'providing guaranteed SLAs for operating system upgrades, dependency updates, and rapid incident response.',
                },
              ],
            },
          ],
        },
        faq: {
          headline: 'FAQ About Mobile App Development',
          subheadline: 'Clear answers to essential questions regarding mobile architecture, development paradigms, security, and app store publishing.',
          trustedLabel: 'Trusted by',
          trustedSub: 'Corporations and growing enterprises across Indonesia',
          askButton: 'Consult Mobile App Needs',
          items: [
            {
              question: 'What is mobile application development?',
              answer: 'Mobile app development is the end-to-end engineering lifecycle of researching user requirements, designing interfaces, writing native or cross-platform code, integrating backend APIs, and releasing applications onto iOS and Android platforms.',
            },
            {
              question: 'What is the difference between native and cross-platform apps?',
              answer: 'Native applications are coded specifically for one OS (Swift for iOS, Kotlin for Android), offering maximum hardware acceleration. Cross-platform apps use a single unified codebase (Flutter or React Native) to serve both platforms, optimizing engineering costs and launch timelines.',
            },
            {
              question: 'How are mobile app development costs calculated?',
              answer: 'Project investment is shaped by functional scope, platform targets (iOS, Android, or both), third-party integrations, and regulatory compliance standards. We outline transparent, milestone-based budget projections following our initial discovery session.',
            },
            {
              question: 'What is the development process at Teknalogi?',
              answer: 'We operate via structured agile phases: business discovery, interactive UI/UX prototyping, sprint-based coding, rigorous physical device testing, app store submission, and proactive long-term maintenance.',
            },
            {
              question: 'Why is security critical in mobile application design?',
              answer: 'Mobile devices are exposed to public networks and physical theft. We implement cryptographic token storage, SSL certificate pinning, end-to-end payload encryption, and code obfuscation to protect company data and customer privacy.',
            },
            {
              question: 'Does Teknalogi provide post-launch maintenance?',
              answer: 'Yes. We deliver structured support contracts covering annual iOS and Android OS updates, immediate vulnerability patches, uptime monitoring, and continuous feature expansion under dependable SLAs.',
            },
            {
              question: 'How does Teknalogi optimize mobile application performance?',
              answer: 'We minimize app binary sizes, implement intelligent caching mechanisms, compress graphical assets, and structure lightweight API payloads to guarantee fast loading speeds even under challenging network conditions.',
            },
            {
              question: 'What is backend and API integration in mobile development?',
              answer: 'Backend and API integration connects the client-side smartphone interface with central cloud servers, database clusters, ERPs, payment gateways, and real-time push notification services.',
            },
            {
              question: 'Does Teknalogi assist with Google Play Store and Apple App Store publishing?',
              answer: 'Yes. We guide developer account registrations, prepare compliance documentation, verify Apple and Google privacy requirements, and manage the approval lifecycle through to public availability.',
            },
            {
              question: 'How do we begin a mobile development consultation with Teknalogi?',
              answer: 'You can contact our engineering team via our WhatsApp consultation button or contact form. We will coordinate a technical discovery session to review your product roadmap with zero upfront obligation.',
            },
          ],
        },
      },
    workflowAutoService: {
      meta: {
        title: 'Workflow Automation Solutions | PT Teknalogi Transformasi Digital',
        description: 'Enterprise workflow automation and system integration services. Custom business logic, adaptive AI components, and human-in-the-loop controls for scalable operations.',
      },
      breadcrumbs: {
        home: 'Home',
        homeHref: '/',
        services: 'Services',
        servicesHref: '/services',
        current: 'Workflow Automation',
      },
      trustBadge: {
        label: 'Trusted by',
        sublabel: 'Enterprises and growing businesses across Indonesia',
      },
      hero: {
        headline: 'Workflow Automation Solutions for Business Process Optimization',
        description: 'Teknalogi delivers end-to-end Workflow Automation services that help organizations streamline manual tasks, integrate multi-vendor systems and APIs, and elevate operational productivity. Featuring custom workflow architectures, adaptive AI assistance, and continuous SLA monitoring, our solutions are built for corporations, enterprises, and expanding businesses in Indonesia.',
        primaryCta: 'Request Free Consultation',
        primaryCtaHref: '/contact',
        secondaryCta: 'Explore Capabilities',
        secondaryCtaHref: '#what-we-deliver',
      },
      quickLinks: {
        links: [
          { label: 'What We Deliver?', href: '#what-we-deliver' },
          { label: 'About This Service', href: '#about-service' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      features: {
        headline: 'Core Capabilities in Workflow Automation',
        subheadline: 'Each capability is engineered to resolve authentic operational bottlenecks faced by enterprise corporations and growing businesses in Indonesia.',
        items: [
          {
            id: 'custom-process',
            title: 'Custom Business Process Automation',
            desc: 'We design bespoke workflows mapped to your authentic operational logic instead of forcing rigid templates. Every process transition runs smoothly with measurable business relevance.',
            icon: 'workflow',
          },
          {
            id: 'ai-driven',
            title: 'AI-Driven Adaptive Automation',
            desc: 'For processes requiring situational adaptability beyond static logic gates, we integrate context-aware AI modules that recognize document patterns, classify unstructured records, and respond dynamically.',
            icon: 'ai',
          },
          {
            id: 'flexible-deployment',
            title: 'Flexible Deployment Options',
            desc: 'We tailor implementations to your existing IT infrastructure, whether in secure private cloud, on-premise data centers, or hybrid enterprise architectures without requiring wholesale legacy disruption.',
            icon: 'deployment',
          },
          {
            id: 'modular-design',
            title: 'Modular and Structured Workflow Architecture',
            desc: 'A clean modular architecture simplifies phased rollouts, testing, and continuous optimization. Individual modules can be enhanced independently without needing to re-engineer the complete workflow.',
            icon: 'modular',
          },
          {
            id: 'system-api-integration',
            title: 'Enterprise System and API Integration',
            desc: 'Reliable automation demands seamless interoperability. We build authenticated middleware connecting ERPs, CRMs, databases, and third-party APIs to keep business data synchronized in real time.',
            icon: 'api',
          },
          {
            id: 'data-transformation',
            title: 'Automated Data Transformation and Sync',
            desc: 'Incoming data from disparate endpoints often varies in formatting. We automate schema validation, payload restructuring, and transactional database synchronization across your technology stack.',
            icon: 'database',
          },
          {
            id: 'continuous-monitoring',
            title: 'Continuous Performance Monitoring and Optimization',
            desc: 'Real-time telemetry continuously observes workflow lifecycles to detect throughput latency, bottleneck queues, or abnormal exceptions early, driving data-informed process tuning.',
            icon: 'monitoring',
          },
          {
            id: 'human-in-the-loop',
            title: 'Human-in-the-Loop Governance',
            desc: 'Critical organizational actions require human authority. We embed secure human approval gates into automated flows for financial sign-offs, regulatory checks, and exception management without sacrificing overall speed.',
            icon: 'governance',
          },
          {
            id: 'error-handling',
            title: 'Resilient Error Handling and Fault Tolerance',
            desc: 'Every pipeline is engineered with automated retry mechanisms, dead-letter queuing, fallback routing, and instant alerting to ensure mission-critical business continuity during unexpected edge cases.',
            icon: 'shield',
          },
        ],
      },
      aboutService: {
        id: 'about-service',
        title: 'Workflow Automation: Concepts, Strategic Value, and Implementation',
        tocTitle: 'TABLE OF CONTENTS',
        sections: [
          {
            id: 'definisi-workflow-automation',
            tocLabel: 'Definition',
            title: 'What Is Workflow Automation and Its Operational Role',
            paragraphs: [
              'Workflow automation is the disciplined practice of orchestrating a coordinated sequence of business tasks and system handoffs that were previously performed through manual effort. By defining programmatic business rules, conditional logic, and standardized data structures, systems execute multi-step processes reliably, securely, and at high velocity without requiring human prompts at every juncture.',
              'Unlike simple task macros that trigger an isolated action, workflow automation connects entire operational chains: from external system triggers to cross-departmental reviews, data updates, and enterprise confirmations. For modern corporations and expanding enterprises across Indonesia, this architecture establishes an unshakeable foundation for operational resilience and sustainable expansion.',
            ],
          },
          {
            id: 'manfaat-bisnis',
            tocLabel: 'Business Benefits',
            title: 'Measurable Business Returns from Process Automation',
            paragraphs: [
              'Deploying structured automation yields immediate and tangible improvements to organizational productivity. Key strategic benefits include:',
            ],
            bullets: [
              {
                label: 'Elevated operational efficiency',
                text: 'Repetitive clerical work is processed automatically, enabling internal teams to dedicate their expertise to strategic, high-value client initiatives.',
              },
              {
                label: 'Elimination of manual errors',
                text: 'Automating continuous data entry, approval notifications, and document routing prevents costly human oversights and compliance oversights.',
              },
              {
                label: 'Accelerated process throughput',
                text: 'Automated pipelines eliminate unnecessary operational delays, dramatically reducing turnaround times for internal stakeholders and external clients.',
              },
              {
                label: 'Data-driven decision confidence',
                text: 'Real-time synchronization across disparate software endpoints provides leadership teams with verified, up-to-the-minute operational intelligence.',
              },
              {
                label: 'Seamless operational scalability',
                text: 'Modular workflows absorb increasing transactional volumes and user loads without requiring linear expansion of headcount or manual overhead.',
              },
            ],
          },
          {
            id: 'fitur-utama',
            tocLabel: 'Key Service Pillars',
            title: 'Core Pillars of Teknalogi Workflow Engineering',
            paragraphs: [
              'We architect automation ecosystems that adapt to organizational realities rather than forcing arbitrary templates. Every implementation is grounded in eight core pillars:',
            ],
            bullets: [
              {
                label: 'Custom business logic modeling',
                text: 'Workflows reflect your actual operating procedures and corporate governance guidelines with precise situational fidelity.',
              },
              {
                label: 'Multi-system and API integration',
                text: 'Authenticated bridges keep your central ERP, CRM, payment systems, and core databases synchronized in real time.',
              },
              {
                label: 'Human-in-the-loop validation',
                text: 'Strategic checkpoints enable designated stakeholders to review and authorize critical financial and compliance milestones.',
              },
              {
                label: 'Contextual AI classification',
                text: 'Specialized machine learning models parse incoming invoices, unstructured text, and customer tickets to classify data dynamically.',
              },
              {
                label: 'Automated schema transformation',
                text: 'Data payloads across disparate protocols are parsed, sanitized, and transformed into target destination formats automatically.',
              },
              {
                label: 'Robust fault tolerance',
                text: 'Integrated error handling, automatic retries, and fallback logging ensure no transaction is lost during network or host interruptions.',
              },
              {
                label: 'Adaptable infrastructure deployment',
                text: 'Engineered for seamless hosting across on-premise hardware, private corporate clouds, or hybrid cloud environments.',
              },
              {
                label: 'Continuous telemetry and optimization',
                text: 'Ongoing metric collection and quarterly performance tuning guarantee that automated pipelines maintain peak operating speed.',
              },
            ],
          },
          {
            id: 'fleksibilitas-solusi',
            tocLabel: 'Enterprise Flexibility',
            title: 'Scalable Architecture for Diverse Enterprise Scales',
            paragraphs: [
              'Automation requirements naturally vary by organizational scale, regulatory posture, and industry sector. Large enterprises with hundreds of cross-departmental handoffs face different operational hurdles than growing businesses modernizing core transaction loops.',
              'For enterprise corporations, we engineer resilient pipelines capable of managing distributed dependencies, strict audit trails, and multi-tenant security. For expanding mid-market companies, we identify high-impact processes that yield immediate cost reduction and rapid ROI.',
              'Human-in-the-loop controls remain indispensable across all tiers. High-value transactions, sensitive employee decisions, and contractual approvals retain human oversight while the tedious data preparation is handled automatically.',
            ],
          },
          {
            id: 'integrasi-dan-ai',
            tocLabel: 'API, AI, and Monitoring',
            title: 'The Triad of System Connectivity, AI Logic, and Real-Time Telemetry',
            paragraphs: [
              'Resilient system and API connectivity represents the foundation of any workflow automation strategy. Without secure and performant integration layers, automated processes cannot reliably exchange data across organizational boundaries.',
              'The integration of AI modules adds valuable adaptability, particularly for workflows handling semi-structured forms, unstructured email requests, or visual document verification. Importantly, AI is applied intentionally where it brings true analytical leverage; straightforward deterministic logic is kept clean and lightweight.',
              'Finally, real-time observability provides continuous clarity over system health. If an anomaly or latency spike occurs, monitoring systems immediately alert administrators and trigger self-healing fallback procedures before business processes are compromised.',
            ],
          },
          {
            id: 'langkah-selanjutnya',
            tocLabel: 'Next Steps',
            title: 'Next Steps: Technical Discovery and Phased Rollout',
            paragraphs: [
              'The most dependable route to automation success begins with a clear operational assessment: identifying which business workflows offer the highest return on investment and how existing systems can connect seamlessly.',
              'Our solutions engineering team is prepared to guide your discovery phase, evaluate technical integration points, and formulate a transparent automation roadmap tailored to your organizational goals with zero upfront obligation.',
            ],
          },
        ],
      },
      faq: {
        headline: 'FAQ About Workflow Automation',
        subheadline: 'Clear answers to essential questions regarding workflow design, API integration, artificial intelligence, and enterprise deployment.',
        trustedLabel: 'Trusted by',
        trustedSub: 'Enterprises and growing businesses across Indonesia',
        askButton: 'Consult Workflow Automation Needs',
        items: [
          {
            question: 'What is workflow automation?',
            answer: 'Workflow automation is the orchestrated automation of sequential business operations, data exchanges, and team tasks based on defined rules, eliminating manual repetitive interventions and accelerating business turnaround times.',
          },
          {
            question: 'How do you create a workflow automation solution?',
            answer: 'We begin with a technical discovery phase to map existing business logic, specify system API endpoints, build modular workflows with built-in validation gates, test edge cases rigorously, and deploy with real-time telemetry monitoring.',
          },
          {
            question: 'What is the difference between workflow automation and general business process automation?',
            answer: 'Workflow automation generally concentrates on routing tasks, documents, and data seamlessly between specific applications and individuals, whereas broad business process automation (BPA) often encompasses holistic organizational re-engineering.',
          },
          {
            question: 'Must workflow automation be based on artificial intelligence?',
            answer: 'No. The majority of operational workflows perform with maximum speed, reliability, and cost-efficiency using deterministic rule-based logic. We integrate AI selectively for tasks requiring contextual comprehension, such as unstructured document parsing and classification.',
          },
          {
            question: 'How do system and API integrations support workflow automation?',
            answer: 'API integrations serve as the central nervous system of automation, allowing distinct software platforms like ERPs, CRMs, cloud databases, and communication tools to exchange validated data securely without manual human data entry.',
          },
          {
            question: 'What is human-in-the-loop in workflow automation?',
            answer: 'Human-in-the-loop is a governance mechanism where an automated workflow pauses at critical decision nodes to require human validation or managerial sign-off before proceeding, ensuring high compliance and zero unauthorized transactions.',
          },
          {
            question: 'What deployment options are available for workflow automation?',
            answer: 'We deliver flexible deployment models matched to your security policy: public cloud environments, dedicated on-premise enterprise servers, or secure hybrid cloud architectures with encrypted data synchronization.',
          },
          {
            question: 'How are continuous monitoring and optimization performed?',
            answer: 'Automated telemetry dashboards track execution latency, error rates, throughput volume, and queue health in real time. We review performance metrics regularly to identify bottleneck queues and continuously fine-tune process efficiency.',
          },
          {
            question: 'How can workflow automation assist growing businesses and SMEs in Indonesia?',
            answer: 'For growing businesses, automation dramatically lowers operational overhead, prevents costly administrative mistakes, speeds up client invoicing, and allows small teams to manage high transaction volumes without ballooning operational costs.',
          },
        ],
      },
    },
    aiSearchService: {
      meta: {
        title: 'AI-Powered Search Optimization (GEO, AEO & AI Search) | PT Teknalogi Transformasi Digital',
        description: 'Enterprise AI Search, Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO) services. Boost brand authority and organic visibility in AI-driven search engines.',
      },
      breadcrumbs: {
        home: 'Home',
        homeHref: '/',
        services: 'Services',
        servicesHref: '/services',
        current: 'AI Search, GEO, and AEO',
      },
      trustBadge: {
        label: 'Trusted by',
        sublabel: 'Enterprises and growing businesses across Indonesia',
      },
      hero: {
        headline: 'Optimize Digital Visibility with GEO, AEO, and AI-Powered Search Optimization',
        description: 'Teknalogi empowers enterprises and growing businesses across Indonesia to strengthen brand visibility and capture high-intent qualified leads through integrated AI Search strategies. We synthesize Answer Engine Optimization, Generative Engine Optimization, entity signal enrichment, and continuous visibility tracking so your business remains authoritative and effortlessly discoverable across modern artificial intelligence environments.',
        primaryCta: 'Request Consultation',
        primaryCtaHref: '/contact',
        secondaryCta: 'Explore Capabilities',
        secondaryCtaHref: '#what-we-deliver',
      },
      quickLinks: {
        links: [
          { label: 'What We Deliver?', href: '#what-we-deliver' },
          { label: 'About This Service', href: '#about-service' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      features: {
        headline: 'Core Capabilities in AI Search, GEO, and AEO',
        subheadline: 'Each capability is engineered to reinforce your organization’s digital prominence in modern artificial intelligence search ecosystems, spanning strategic positioning, technical readiness, and continuous monitoring.',
        items: [
          {
            id: 'ai-visibility-strategy',
            title: 'AI Search Visibility Strategy',
            desc: 'We develop strategic roadmaps that enhance your business visibility across AI search engines and conversational answer platforms, tailored to your brand identity, target buyers, and industry competitive landscape.',
            icon: 'strategy',
          },
          {
            id: 'entity-brand-signals',
            title: 'Entity Signal and Brand Profile Optimization',
            desc: 'We amplify the digital signals that define and distinguish your brand in AI search networks, ensuring entity data consistency, knowledge graph alignment, and verified brand attributes across all indexing endpoints.',
            icon: 'entity',
          },
          {
            id: 'ai-visibility-monitoring',
            title: 'Continuous AI Visibility Monitoring',
            desc: 'AI search visibility is a dynamic metric. We implement continuous telemetry to track how your brand, products, and insights are cited across AI search platforms, enabling data-informed roadmap adjustments.',
            icon: 'monitoring',
          },
          {
            id: 'aeo',
            title: 'Answer Engine Optimization (AEO)',
            desc: 'We structure content and technical metadata so your brand emerges as the primary cited answer in conversational AI systems, building immediate trust with users seeking direct factual solutions.',
            icon: 'aeo',
          },
          {
            id: 'ai-readable-content',
            title: 'AI-Readable Content Architecture',
            desc: 'Poorly structured content creates parsing friction for AI models. We organize and format your digital assets with semantic clarity so answer engines can effortlessly ingest, understand, and prioritize your information.',
            icon: 'content',
          },
          {
            id: 'seo-ai-integration',
            title: 'SEO and AI Search Synthesis',
            desc: 'Existing SEO investments remain highly valuable. We harmonize foundational organic search practices with AI engine optimization, building a unified digital ecosystem that dominates both traditional links and generative answers.',
            icon: 'synthesis',
          },
          {
            id: 'geo',
            title: 'Generative Engine Optimization (GEO)',
            desc: 'GEO aligns your digital footprint with how generative language models select and synthesize information, maximizing the probability that your brand is featured as a foundational reference in AI-generated answers.',
            icon: 'geo',
          },
          {
            id: 'technical-readiness',
            title: 'AI Search Technical Readiness',
            desc: 'Website architecture and content infrastructure must support rapid indexing and retrieval by AI crawlers. We evaluate and fortify the technical foundation needed for seamless RAG extraction and verified citations.',
            icon: 'technical',
          },
          {
            id: 'authority-citations',
            title: 'Citation Authority and Trust Signals',
            desc: 'AI systems prioritize sources recognized as authoritative and reliable. We cultivate verified trust signals, industry cross-references, and authoritative citations that elevate your probability of being recommended.',
            icon: 'authority',
          },
        ],
      },
      aboutService: {
        id: 'about-service',
        title: 'About AI Search, GEO, and AEO: Modern Search Visibility',
        tocTitle: 'TABLE OF CONTENTS',
        sections: [
          {
            id: 'definisi-ai-search',
            tocLabel: 'AI Search Definition',
            title: 'What Is AI Search and Why It Matters for Business',
            paragraphs: [
              'AI Search represents the next evolution of digital information retrieval, utilizing advanced artificial intelligence to understand user intent rather than merely matching keyword strings. These systems process conversational context, map underlying business entities, and synthesize answers semantically, often delivering solutions without requiring a user to click through multiple links.',
              'How decision makers and consumers discover solutions has changed permanently. Search engines powered by AI no longer simply return ten blue links; they synthesize verified answers directly from trusted sources. For enterprise organizations and growing companies, relying exclusively on legacy SEO methods is no longer sufficient to secure leadership mindshare.',
              'Unlike traditional search engines that rank pages based on backlinks and keyword density, AI search systems aggregate information across disparate channels and generate unified responses with specific source citations. Key operational pillars in this ecosystem include:',
            ],
            bullets: [
              {
                label: 'Answer Engine Optimization (AEO)',
                text: 'Optimizing structured data and direct answers so AI systems quote your brand directly in synthesized responses.',
              },
              {
                label: 'Generative Engine Optimization (GEO)',
                text: 'Aligning technical metadata and content depth to influence how generative models summarize industry topics.',
              },
              {
                label: 'Entity and Brand Signal Optimization',
                text: 'Strengthening your digital knowledge graph footprint so AI systems consistently recognize your brand as an industry authority.',
              },
            ],
            trailingParagraphs: [
              'Emerging architectures like Retrieval-Augmented Generation (RAG) allow AI platforms to pull fresh external data in real time, making content veracity, structured markup, and verified authority decisive factors for commercial discoverability.',
            ],
          },
          {
            id: 'manfaat-ai-search',
            tocLabel: 'Business Benefits',
            title: 'Measurable Strategic Returns for Enterprises and Growing Businesses',
            paragraphs: [
              'Optimizing your brand presence in AI search environments is an imperative investment for forward-looking organizations. Concrete advantages include:',
            ],
            bullets: [
              {
                label: 'Expanded brand visibility',
                text: 'Higher prominence across conversational platforms and AI answer engines increasingly utilized by corporate decision makers.',
              },
              {
                label: 'Higher-quality lead generation',
                text: 'Content cited by AI answer engines enjoys higher perceived credibility, converting high-intent searchers into qualified sales inquiries.',
              },
              {
                label: 'Reinforced industry authority',
                text: 'Repeated presence in synthesized answers establishes persistent topical authority within your vertical market.',
              },
              {
                label: 'Superior customer experience',
                text: 'Prospective clients receive prompt, accurate, and validated answers to their evaluation criteria immediately.',
              },
              {
                label: 'Future-proof algorithm resilience',
                text: 'Strategic alignment with semantic understanding protects your brand from algorithmic shifts toward AI-driven search models.',
              },
            ],
          },
          {
            id: 'komponen-layanan',
            tocLabel: 'Service Components',
            title: 'Core Components of Teknalogi AI Search Services',
            paragraphs: [
              'Our methodology encompasses the complete spectrum required for modern search visibility, from executive strategy to technical readiness and ongoing telemetry:',
              'AI Search Visibility Strategy serves as the strategic starting point. We audit how current digital assets are perceived by AI engines, then craft a tailored plan to expand qualified citations across leading platforms.',
              'AEO and GEO operate in synergy: AEO structures modular answers for direct factual quotation, while GEO ensures comprehensive topical depth so generative models incorporate your brand when formulating multi-faceted overviews.',
              'Entity and brand signal enrichment aligns corporate knowledge across registries, directories, and verified web sources, ensuring AI models possess a unified and accurate understanding of your offerings.',
              'AI-readable content architecture and technical infrastructure ensure web pages can be rapidly crawled, parsed, and ingested by specialized AI bots without indexing barriers.',
              'Continuous visibility monitoring and SEO synthesis complete our ongoing engagement, benchmarking your brand citations over time and adapting proactively as underlying AI models evolve.',
            ],
          },
          {
            id: 'integrasi-strategi',
            tocLabel: 'Digital Strategy Integration',
            title: 'Harmonizing AI Search with Traditional SEO and Growth Strategy',
            paragraphs: [
              'AI Search and conventional SEO are complementary disciplines that reinforce one another when orchestrated effectively.',
              'Signals cultivated through classic SEO, such as domain authority, technical hygiene, and high-quality editorial content, provide essential inputs for AI search algorithms. However, AI engines evaluate additional criteria: semantic clarity, structured schemas, entity consistency, and the speed with which facts can be verified.',
              'Our holistic framework ensures that established organic rankings are preserved and enhanced, while systematically expanding your reach into conversational platforms. Continuous telemetry keeps your organization proactive in the face of ongoing AI model iterations.',
            ],
          },
          {
            id: 'langkah-selanjutnya',
            tocLabel: 'Next Steps',
            title: 'Next Steps: AI Search Readiness Evaluation and Consultation',
            paragraphs: [
              'The most dependable route to AI search leadership begins with an objective baseline evaluation: measuring your current visibility across ChatGPT, Gemini, Perplexity, and Google AI Overviews, while identifying technical gaps in entity recognition.',
              'Our specialized engineering team is ready to conduct a comprehensive readiness assessment and outline a tailored roadmap to position your brand at the forefront of modern AI search, with zero upfront obligation.',
            ],
          },
        ],
      },
      faq: {
        headline: 'FAQ About AI Search, GEO, and AEO',
        subheadline: 'Clear answers to essential questions regarding AI search platforms, generative engine optimization, answer engine strategies, and ongoing monitoring.',
        trustedLabel: 'Trusted by',
        trustedSub: 'Enterprises and growing businesses across Indonesia',
        askButton: 'Consult AI Search Needs',
        items: [
          {
            question: 'What is AI Search and how does it work?',
            answer: 'AI Search uses large language models and semantic understanding to interpret user questions directly, generating synthesized answers by retrieving and citing verified information from authoritative web sources in real time.',
          },
          {
            question: 'What is the primary difference between AI Search and traditional search engines?',
            answer: 'Traditional search engines display a ranked list of links based on keywords and backlinks, requiring users to open multiple pages. AI Search synthesizes contextual answers directly, citing authoritative references without requiring users to browse multiple sites.',
          },
          {
            question: 'How do users access and experience Google AI Search?',
            answer: 'Google AI Search operates through AI Overviews and conversational features directly within Google Search results, summarizing complex topics at the top of the search engine results page with linked citations.',
          },
          {
            question: 'Is Google AI Search free for users?',
            answer: 'Yes, Google AI Overviews and standard AI search features are integrated directly into public Google Search without additional fees for general users.',
          },
          {
            question: 'How does AI Search help businesses capture high-quality leads?',
            answer: 'When an organization is cited as a trusted source in an AI answer, it reaches buyers at the exact moment of decision-making. Users who click through from an AI citation arrive with high purchase intent and validated trust.',
          },
          {
            question: 'What is Answer Engine Optimization (AEO)?',
            answer: 'Answer Engine Optimization (AEO) is the discipline of structuring content, schemas, and concise factual answers so that AI answer engines easily select and quote your information as the primary response.',
          },
          {
            question: 'What is Generative Engine Optimization (GEO)?',
            answer: 'Generative Engine Optimization (GEO) focuses on optimizing topical depth, entity relationships, and content credibility so that generative AI models include your brand and perspectives when creating synthesized overviews.',
          },
          {
            question: 'How do you ensure website content is easily readable by AI Search?',
            answer: 'We optimize website architecture with clear semantic HTML, structured JSON-LD schemas, concise answer summaries, authoritative citations, and fast crawlable technical infrastructure that AI bots can parse without friction.',
          },
          {
            question: 'Does Teknalogi provide ongoing AI Search visibility monitoring?',
            answer: 'Yes. We provide continuous tracking and reporting on how frequently your brand and products are cited across major AI platforms, including ChatGPT, Perplexity, Gemini, and Google AI Overviews, with proactive recommendations.',
          },
        ],
      },
    },
    seoService: {
      meta: {
        title: 'Search Engine Optimization (SEO) Services | PT Teknalogi Transformasi Digital',
        description: 'Enterprise SEO services engineered for measurable organic growth. Demand analysis, technical optimization, authoritative content strategy, and ongoing monitoring.',
      },
      breadcrumbs: {
        home: 'Home',
        homeHref: '/',
        services: 'Services',
        servicesHref: '/services',
        current: 'Search Engine Optimization',
      },
      trustBadge: {
        label: 'Trusted by',
        sublabel: 'Enterprises and growing businesses across Indonesia',
      },
      hero: {
        headline: 'SEO Services for Measurable Organic Website Growth',
        description: 'Teknalogi delivers enterprise SEO services designed to drive tangible business outcomes. Through search demand analysis, technical optimization, content strategy, and continuous performance tracking, we empower businesses across Indonesia to expand high-intent organic visibility and achieve sustainable commercial growth.',
        primaryCta: 'Request SEO Consultation',
        primaryCtaHref: '/contact',
        secondaryCta: 'Explore Capabilities',
        secondaryCtaHref: '#what-we-deliver',
      },
      quickLinks: {
        links: [
          { label: 'What We Deliver?', href: '#what-we-deliver' },
          { label: 'About This Service', href: '#about-service' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      features: {
        title: 'Core Capabilities of Teknalogi SEO Services',
        subtitle: 'Our SEO services encompass every optimization dimension required to foster conversion-focused organic growth and measurable enterprise value.',
        items: [
          {
            id: 'strategy',
            title: 'SEO Strategy Aligned with Business Objectives',
            desc: 'Every optimization initiative stems from a rigorous understanding of your commercial priorities. Our strategy accelerates meaningful business outcomes rather than pursuing meaningless traffic spikes devoid of commercial intent.',
            icon: 'strategy',
          },
          {
            id: 'content',
            title: 'Content Strategy Driving Authority and Topical Relevance',
            desc: 'Relevant, high-caliber content represents the cornerstone of modern search performance. We architect content programs that address user intent, build topical authority, and nurture prospective buyers from discovery to conversion.',
            icon: 'content',
          },
          {
            id: 'ai-readiness',
            title: 'Readiness for Evolving Search Technology and AI',
            desc: 'Search technology is transforming with the rapid adoption of artificial intelligence in query synthesis. Our SEO methodology is inherently adaptive, ensuring your brand remains prominent across both traditional and AI-driven search engines.',
            icon: 'ai-readiness',
          },
          {
            id: 'research',
            title: 'Data-Driven Demand Analysis and Keyword Research',
            desc: 'We leverage comprehensive search intelligence to uncover high-value search demand across Indonesia. Our research evaluates query volumes, competitive density, and commercial intent so resources focus on high-impact opportunities.',
            icon: 'research',
          },
          {
            id: 'authority',
            title: 'Authority Building Through Link Acquisition and Digital Reputation',
            desc: 'A commanding domain authority confers decisive advantages in competitive search landscapes. We cultivate high-trust editorial link profiles and elevate your brand reputation across the broader digital ecosystem.',
            icon: 'authority',
          },
          {
            id: 'conversion',
            title: 'Conversion-Focused Organic Growth',
            desc: 'Raw visitor counts mean little without qualified interest. We engineer SEO strategies that attract decision-makers and high-intent audiences, systematically optimizing conversion paths to turn search visibility into tangible pipeline.',
            icon: 'conversion',
          },
          {
            id: 'technical',
            title: 'Technical Optimization for Speed and User Experience',
            desc: 'A robust technical infrastructure forms the bedrock of search excellence. We optimize site architecture, Core Web Vitals, crawl efficiency, structured data, and mobile responsiveness to satisfy search engines and delight human visitors.',
            icon: 'technical',
          },
          {
            id: 'monitoring',
            title: 'Continuous Monitoring and Agile Optimization',
            desc: 'Search is a dynamic ecosystem, not a one-off project. We continuously monitor search signals, analyze algorithmic shifts, and execute agile adjustments to defend and advance your search footprint over time.',
            icon: 'monitoring',
          },
          {
            id: 'solutions',
            title: 'Tailored Solutions for Corporate, Enterprise, and Mid-Market',
            desc: 'SEO requirements vary by operational scale and technical complexity. We provide agile delivery models tailored for enterprises with massive digital footprints as well as mid-market organizations targeting regional authority.',
            icon: 'solutions',
          },
        ],
      },
      aboutService: {
        title: 'About Teknalogi SEO Services',
        tocTitle: 'TABLE OF CONTENTS',
        sections: [
          {
            id: 'definisi-manfaat-seo',
            title: 'What Is SEO and How Does It Benefit Your Business',
            paragraphs: [
              'Search Engine Optimization (SEO) is a systematic methodology to optimize digital assets so they are easily discovered by target audiences via search engines such as Google. The discipline spans technical site architecture, content quality, and digital reputation earned through authoritative industry references.',
              'Professional SEO services elevate organic search presence. Teknalogi adopts an approach that moves past vanity rankings to concentrate on commercial relevance and verified conversion impact for our enterprise clients.',
              'For modern organizations, SEO benefits extend far beyond aggregate website traffic. A structured SEO strategy yields highly relevant organic visitors actively searching for solutions your business provides. This produces higher quality leads, reduced customer acquisition costs compared to paid media, and long-term sustainable growth.',
            ],
            bullets: [
              'Expanding search visibility for commercially relevant transactional and informational queries',
              'Capturing qualified organic traffic with higher propensity for sales conversion',
              'Establishing digital market authority and enduring brand trust',
              'Fueling consistent, inbound pipeline growth across all operational seasons',
              'Securing a defensible competitive moat within Indonesian and regional digital markets',
            ],
          },
          {
            id: 'komponen-utama-seo',
            title: 'Core Pillars of Teknalogi SEO Services',
            paragraphs: [
              'Our comprehensive SEO engagements integrate all vital dimensions required to build and sustain superior organic performance. Each component reinforces the other to deliver compounding commercial results.',
              'Search Demand Analysis and Keyword Research provide the strategic blueprint. We uncover search intent and query patterns across Indonesian and regional markets, ensuring every technical and content resource targets high-value opportunities.',
              'Technical Optimization ensures your website is impeccably structured, fast, and accessible to search crawler bots. This covers Core Web Vitals performance, crawl budgets, clean semantic schemas, indexation hygiene, and resilient site hierarchies.',
              'Content Strategy focuses on crafting and refining authoritative, insightful content that directly answers search queries while establishing brand expertise. Exceptional content drives rankings while cultivating trust with prospect decision-makers.',
              'Authority Building develops authoritative editorial backlink networks and digital PR presence. Major search engines evaluate domain authority as a foundational trust metric, making proactive reputation building essential for sustained leadership.',
              'Continuous Performance Monitoring ensures your strategy evolves alongside market dynamics. Search algorithms and audience search behaviors change constantly. We conduct rigorous performance telemetry and tactical refinements so momentum never stalls.',
              'AI Search Readiness prepares your digital assets for next-generation AI discovery. As generative engines synthesize answers, our hybrid methodology ensures your content is authoritative, structured, and cited across AI-driven environments.',
            ],
          },
          {
            id: 'pendekatan-strategis',
            title: 'Strategic Methodology Aligned with Business Goals',
            paragraphs: [
              'Many agencies fixate on isolated technical metrics without connecting them to tangible revenue outcomes. At Teknalogi, every optimization decision is anchored in a comprehensive understanding of your commercial objectives and market dynamics.',
              'We deliver our SEO services through the Teknalogi SENSE framework, an integrated operational discipline uniting market research, technical refinement, content production, authority development, and continuous telemetry into one structured workflow. This framework empowers us to manage search complexity systematically while keeping commercial outcomes front and center.',
              'SEO with Teknalogi is an ongoing strategic partnership. We maintain iterative collaboration with our clients, evaluating data points, market shifts, and algorithmic updates to refine execution continuously. This continuous approach builds lasting market advantage that one-time campaigns cannot match.',
            ],
          },
          {
            id: 'pentingnya-seo-indonesia',
            title: 'Why SEO Is Critical for Businesses in Indonesia',
            paragraphs: [
              'Indonesia represents one of the fastest-growing digital economies in Southeast Asia. Millions of enterprise buyers and consumers turn to search engines every day to discover products, evaluate services, and make informed purchasing decisions. For forward-looking businesses, this presents an extraordinary channel to reach audiences with active purchase intent.',
              'Digital competition across key Indonesian sectors is intensifying rapidly. Organizations that neglect their organic footprint risk conceding prime market visibility to proactive competitors. Conversely, businesses that invest in solid SEO foundations capture enduring digital real estate that compounds over time.',
              'The Indonesian market exhibits unique characteristics: local search phrasing, vernacular nuances, local business search intents, and diverse segment behaviors. Effective SEO in this market demands nuanced local adaptation rather than generic templates that ignore cultural and geographic context.',
            ],
          },
          {
            id: 'langkah-selanjutnya',
            title: 'Next Steps: Technical Discovery and SEO Evaluation',
            paragraphs: [
              'The most effective starting point is a comprehensive SEO health evaluation: assessing technical website performance, indexation status, content topical depth, backlink authority, and competitive visibility gaps.',
              'Our solutions engineering team is prepared to guide your technical discovery session, identify high-impact organic growth vectors, and formulate a transparent execution roadmap tailored to your organizational targets with zero upfront obligation.',
            ],
          },
        ],
      },
      faq: {
        title: 'FAQ on SEO Services',
        subtitle: 'Comprehensive answers regarding search engine optimization, our delivery methodology, timelines, and AI search integration.',
        ctaButton: 'Consult SEO Requirements',
        ctaButtonHref: 'https://wa.me/6281234567890?text=Hello%20Teknalogi,%20I%20would%20like%20to%20consult%20regarding%20SEO%20services',
        questions: [
          {
            question: 'What is SEO and how does it work?',
            answer: 'Search Engine Optimization (SEO) is the professional practice of improving a website to enhance its visibility and rankings on search engines such as Google. The process involves technical code audits, strategic keyword research, on-page content architecture, site speed optimization, and building authoritative backlink profiles from trusted industry sources.',
          },
          {
            question: 'What are the primary business benefits of professional SEO?',
            answer: 'Key benefits include sustainable high-intent organic traffic, higher sales lead conversion rates, significantly lower customer acquisition costs compared to paid advertising over time, and strengthened brand authority across digital markets.',
          },
          {
            question: 'How long does it take to see measurable SEO results?',
            answer: 'SEO is a medium to long-term compounding growth channel. Typically, initial technical improvements and ranking improvements for target keywords become noticeable within 3 to 6 months, with substantial traffic and conversion acceleration achieved between 6 to 12 months of sustained execution.',
          },
          {
            question: 'What are the main components of Teknalogi SEO services?',
            answer: 'Our services encompass six core pillars: Search Demand Analysis and Keyword Research, Technical SEO and Core Web Vitals, Authoritative Content Strategy, Authority and Digital PR Link Building, AI Search Readiness (AEO and GEO), and Continuous Analytics and Performance Reporting.',
          },
          {
            question: 'How is ongoing monitoring and optimization managed?',
            answer: 'We deploy analytics platforms and monitoring dashboards to track keyword rankings, organic traffic, indexation health, and conversion paths. Comprehensive monthly reports provide actionable insights and strategic adjustments responsive to algorithmic developments.',
          },
          {
            question: 'Are Teknalogi SEO services prepared for AI search technologies?',
            answer: 'Yes. Our SEO strategies integrate AI Search Readiness, Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO). We structure your digital content and schema markup to be accurately recognized, indexed, and cited by AI engines like ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
          },
          {
            question: 'Do you guarantee specific search engine rankings?',
            answer: 'In the professional SEO industry, no reputable firm guarantees immediate number-one rankings because search algorithms are controlled by independent third parties such as Google. However, we guarantee adherence to technical best practices, complete operational transparency, and measurable performance growth aligned with your agreed KPIs.',
          },
          {
            question: 'Is your SEO service suitable for businesses of all sizes, including growing companies?',
            answer: 'Yes. We provide agile delivery models that serve large-scale enterprises requiring multi-domain optimization as well as ambitious growing businesses and mid-market organizations seeking to dominate targeted regional or vertical markets with capital efficiency.',
          },
          {
            question: 'How do we get started or request an initial consultation?',
            answer: 'You can initiate contact via our direct WhatsApp consultation button or submit an inquiry through our contact form. Our SEO solutions team will schedule a technical discovery session and conduct an initial diagnostic evaluation of your digital presence at no cost.',
          },
        ],
      },
    },
    seoAuditService: {
      meta: {
        title: 'SEO & AI-Search Audit Services | PT Teknalogi Transformasi Digital',
        description: 'Comprehensive SEO and AI-Search Audit evaluating technical health, E-E-A-T content authority, generative AI readiness, and prioritized engineering roadmaps.',
      },
      breadcrumbs: {
        home: 'Home',
        homeHref: '/',
        services: 'Services',
        servicesHref: '/services',
        current: 'SEO & AI-Search Audit',
      },
      trustBadge: {
        label: 'Enterprise-Grade Digital Audits',
        sublabel: 'Trusted by engineering and growth leaders',
      },
      hero: {
        headline: 'SEO & AI-Search Audit for Measurable Digital Visibility',
        description: 'Teknalogi delivers comprehensive diagnostic audits evaluating technical infrastructure, content authority, user experience, and generative AI search readiness. We uncover architectural bottlenecks and produce prioritized, impact-driven optimization roadmaps for enterprises and ambitious businesses across Indonesia.',
        primaryCta: 'Request Technical Audit',
        primaryCtaHref: '/contact',
        secondaryCta: 'Learn More',
        secondaryCtaHref: '#what-we-deliver',
      },
      quickLinks: {
        title: 'Quick Navigation',
        links: [
          { label: 'What We Deliver?', href: '#what-we-deliver' },
          { label: 'About This Service', href: '#about-service' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      features: {
        title: 'Comprehensive Diagnostic Capabilities',
        subtitle: 'Our rigorous audit methodology investigates technical integrity, search demand alignment, generative engine citations, and conversion friction.',
        items: [
          {
            title: 'Technical Health & Indexation',
            desc: 'Deep inspection of crawlability, XML sitemaps, robots.txt directives, canonicalization, server status codes, and multi-domain routing structures.',
            icon: 'technical-health',
          },
          {
            title: 'Content Depth & E-E-A-T Alignment',
            desc: 'Comprehensive evaluation of topical depth, search intent satisfaction, duplicate content risks, and verified Experience, Expertise, Authoritativeness, and Trustworthiness signals.',
            icon: 'content-depth',
          },
          {
            title: 'AI Search, GEO & AEO Readiness',
            desc: 'Assessment of entity recognition and factual extractability for generative search engines, Google AI Overviews, Perplexity, and conversational answer engines.',
            icon: 'ai-readiness',
          },
          {
            title: 'Core Web Vitals & Performance',
            desc: 'Rigorous measurement of Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS), and mobile asset delivery pipelines.',
            icon: 'core-web-vitals',
          },
          {
            title: 'Backlink Profile & Domain Authority',
            desc: 'Granular toxicity analysis, referring domain quality assessment, toxic link detection, and competitive link velocity benchmarking.',
            icon: 'backlink-profile',
          },
          {
            title: 'Competitor Gap & Benchmark Analysis',
            desc: 'Systematic comparison against top industry contenders across keyword ownership, organic share of voice, content velocity, and search visibility.',
            icon: 'competitor-benchmarking',
          },
          {
            title: 'Structured Data & Entity Graph',
            desc: 'Verification of JSON-LD schemas, Knowledge Graph entity relationships, organization markup, and breadcrumb microdata compliance.',
            icon: 'schema-entities',
          },
          {
            title: 'UX, Mobile Usability & Conversion Path',
            desc: 'Evaluation of responsive viewport performance, touch target accessibility, navigation hierarchy, and friction points across conversion journeys.',
            icon: 'conversion-ux',
          },
          {
            title: 'Prioritized Engineering Roadmap',
            desc: 'Actionable diagnostic report with issues categorized by business impact, technical complexity, and clear developer-ready implementation guidance.',
            icon: 'roadmap-prioritas',
          },
        ],
      },
      aboutService: {
        title: 'About SEO & AI-Search Audit Services',
        tocTitle: 'Table of Contents',
        sections: [
          {
            id: 'definisi-dan-tujuan-audit',
            title: 'What Is an SEO & AI-Search Audit and Why Is It Crucial?',
            tocLabel: 'Definition & Core Purpose',
            paragraphs: [
              'An SEO and AI-Search Audit is an exhaustive technical and strategic evaluation of your digital platform to determine how effectively it can be discovered, indexed, and cited by search engines and generative AI systems. Rather than relying on superficial automated checklists, an enterprise-grade audit dissects server response behavior, crawl efficiency, content relevance, and brand entity recognition.',
              'In today’s multi-engine search ecosystem, visibility extends beyond traditional ten blue links. Modern search relies heavily on neural matching, knowledge graphs, and generative answers powered by Google AI Overviews, Perplexity, and ChatGPT Search. Conducting a periodic diagnostic audit ensures your business identifies hidden technical deficits, protects organic revenue, and capitalizes on high-value organic search demand.',
            ],
          },
          {
            id: 'komponen-evaluasi-menyeluruh',
            title: 'Comprehensive Evaluation Components of Our Audit',
            tocLabel: 'Evaluation Components',
            paragraphs: [
              'Teknalogi conducts deep-dive diagnostic evaluations across five essential architectural dimensions, ensuring no critical performance barrier remains undetected:',
            ],
            bullets: [
              {
                label: 'Technical Infrastructure & Crawl Architecture',
                text: 'Analyzing server response times, index bloat, redirect chains, canonical integrity, internationalization hreflang tags, and mobile JavaScript hydration bottlenecks.',
              },
              {
                label: 'On-Page Content & E-E-A-T signals',
                text: 'Reviewing topical authority, heading hierarchies, semantic keyword alignment, internal linking graph equity, and authorship credibility proof points.',
              },
              {
                label: 'AI-Search Readiness (GEO & AEO)',
                text: 'Auditing brand entity salience, structured JSON-LD schemas, conversational query answers, and knowledge repository presence across authoritative knowledge bases.',
              },
              {
                label: 'Off-Page Authority & Risk Assessment',
                text: 'Investigating backlink acquisition history, anchor text naturalness, toxic link distribution, and domain authority indicators.',
              },
              {
                label: 'User Experience & Conversion Architecture',
                text: 'Inspecting Core Web Vitals field data, mobile responsiveness, page speed budgets, call-to-action discoverability, and conversion tracking integrity.',
              },
            ],
          },
          {
            id: 'metodologi-dan-tahapan-audit',
            title: 'Our Rigorous Diagnostic Methodology and Deliverables',
            tocLabel: 'Diagnostic Methodology',
            paragraphs: [
              'We employ a structured four-stage audit lifecycle that turns raw diagnostic telemetry into clear, revenue-aligned engineering actions:',
            ],
            bullets: [
              {
                label: '1. Discovery & Technical Telemetry Intake',
                text: 'We connect Google Search Console, Google Analytics 4, log files, and crawl datasets to establish baseline performance metrics and crawl behavior history.',
              },
              {
                label: '2. Deep Multi-Vector Analysis',
                text: 'Our technical specialists conduct code-level inspections, schema validation, backlink profiling, and generative search citation testing across target query categories.',
              },
              {
                label: '3. Impact versus Effort Matrix',
                text: 'Identified findings are categorized into critical blockers, high-impact growth opportunities, and medium-term optimizations with precise engineering effort estimates.',
              },
              {
                label: '4. Executive Debrief & Developer Implementation Brief',
                text: 'We deliver an executive presentation summarizing business opportunities alongside a granular, developer-friendly ticket backlog for immediate sprint planning.',
              },
            ],
          },
          {
            id: 'urgensi-pasar-indonesia',
            title: 'The Strategic Imperative for Indonesian Businesses',
            tocLabel: 'Indonesian Market Imperative',
            paragraphs: [
              'The Indonesian digital market is overwhelmingly mobile-first, with over 80 percent of online search sessions occurring on smartphones across diverse cellular network qualities. Websites with sluggish Core Web Vitals or heavy JavaScript bundles suffer immediate bounce rates and algorithm ranking penalties in local search results.',
              'Furthermore, consumer search behaviors across Jabodetabek and regional economic hubs increasingly leverage natural language queries and generative AI summaries. Companies that proactively audit and optimize their technical foundations secure dominant digital visibility, lower customer acquisition costs, and build durable competitive moats against market rivals.',
            ],
          },
          {
            id: 'langkah-selanjutnya',
            title: 'Next Steps: Technical Discovery and Optimization Roadmap',
            tocLabel: 'Next Steps',
            paragraphs: [
              'A successful digital presence starts with diagnostic clarity. Understanding exactly where your website stands technically, structurally, and strategically is the single most cost-effective first step toward sustainable organic search leadership.',
              'Our senior solutions engineering and SEO specialists are ready to guide your discovery phase, evaluate your technical integration points, and formulate a transparent audit roadmap tailored to your organizational KPIs with zero upfront obligation.',
            ],
          },
        ],
      },
      faq: {
        headline: 'Frequently Asked Questions',
        subheadline: 'Common questions about our comprehensive SEO and AI-Search Audit services.',
        askButton: 'Consult Audit Requirements',
        trustedLabel: 'Trusted by',
        trustedSub: 'Enterprises and growing businesses across Indonesia',
        items: [
          {
            question: 'What is an SEO & AI-Search Audit and what deliverables do we receive?',
            answer: 'An SEO & AI-Search Audit is an in-depth diagnostic evaluation of your platform covering technical architecture, content quality, backlink profile, and generative AI search readiness. You receive an executive summary report, an impact-versus-effort matrix, and a developer-ready implementation checklist with prioritized technical fixes.',
          },
          {
            question: 'How does an enterprise audit differ from free automated online SEO checkers?',
            answer: 'Free online tools typically run superficial regex checks on meta tags and return generic scores. Our audit combines specialized enterprise crawling tools, real user telemetry from Search Console and analytics, server log examination, manual code inspection, and practical generative engine testing conducted by senior engineers.',
          },
          {
            question: 'How long does a comprehensive SEO and AI-Search Audit take to complete?',
            answer: 'Depending on the domain size and architectural complexity, a comprehensive audit typically takes 5 to 10 business days. This timeframe allows our team to gather deep crawl data, analyze edge cases, perform competitor gap research, and synthesize actionable engineering documentation.',
          },
          {
            question: 'What access permissions are required from our team to begin the audit?',
            answer: 'To provide the most accurate diagnostic findings, read-only access to Google Search Console and Google Analytics 4 is recommended. For deeper technical architectural audits, server log files or staging environment access may also be reviewed under a strict non-disclosure agreement.',
          },
          {
            question: 'How does the audit evaluate readiness for AI search engines like ChatGPT and Perplexity?',
            answer: 'We evaluate how effectively your brand entities, key facts, and authoritative answers can be parsed by Large Language Models. This includes testing schema structured data, conversational query extraction, knowledge graph entity presence, and citation occurrences across generative answer engines.',
          },
          {
            question: 'Do you help our engineering team implement the audit recommendations?',
            answer: 'Yes. Beyond providing developer-ready specifications, Teknalogi offers implementation support where our engineering team can directly execute code fixes, Core Web Vitals refactoring, schema markup integration, and server configuration adjustments.',
          },
          {
            question: 'How frequently should an enterprise conduct a comprehensive digital audit?',
            answer: 'We recommend conducting a full diagnostic audit at least once a year, or immediately prior to major platform redesigns, CMS migrations, or when unexplained drops in organic search traffic occur.',
          },
          {
            question: 'Is this audit service suitable for emerging companies and mid-market businesses?',
            answer: 'Yes. We calibrate the audit scope to match your organizational scale, whether you manage an enterprise domain with hundreds of thousands of dynamic pages or a focused business website seeking high-conversion market dominance.',
          },
          {
            question: 'How do we schedule an initial discovery consultation for an audit?',
            answer: 'You can initiate an inquiry via our WhatsApp consultation button or submit a request through our contact page. Our solutions team will review your domain and schedule an initial diagnostic alignment session at no cost.',
          },
        ],
      },
    },
    webMaintenanceService: {
      meta: {
        title: 'Website Maintenance Services | PT Teknalogi Transformasi Digital',
        description: 'Proactive website maintenance services in Indonesia: 24/7 uptime monitoring, security patching, automated backups, bug fixing, and technical SEO hygiene.',
      },
      breadcrumbs: {
        home: 'Home',
        services: 'Services',
        current: 'Website Maintenance',
      },
      trustBadge: {
        highlight: 'Enterprise-Grade Support',
        subtitle: 'Trusted by engineering and growth leaders',
      },
      hero: {
        title: 'Website Maintenance for Peak Reliability and Digital Security',
        description: 'Teknalogi delivers comprehensive, proactive website maintenance services for corporate enterprises, growing companies, and organizations across Indonesia. From round-the-clock monitoring and security patches to performance optimization, automated backups, bug resolution, and technical SEO hygiene, we keep your digital platform secure, resilient, and business-ready at all times.',
        primaryCta: 'Request Maintenance Consultation',
        secondaryCta: 'Learn More',
        secondaryHref: '#what-we-deliver',
      },
      quickLinks: {
        title: 'Jump to Section',
        links: [
          { label: 'What We Deliver?', href: '#what-we-deliver' },
          { label: 'About This Service', href: '#about-service' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      features: {
        title: 'Core Capabilities of Teknalogi Website Maintenance Services',
        subtitle: 'Our website maintenance services cover every mission-critical dimension required to maintain security, high performance, and continuous uptime across modern web infrastructures.',
        items: [
          {
            icon: 'proactive-monitoring',
            title: 'Proactive Website Monitoring',
            desc: 'Continuous 24/7 uptime surveillance and synthetic health checks detecting performance anomalies and server disruptions before they impact end users.',
          },
          {
            icon: 'backup-recovery',
            title: 'Automated Backups & Rapid Recovery',
            desc: 'Scheduled offsite database snapshots, file mirroring, and validated disaster recovery procedures ensuring rapid restoration during critical system events.',
          },
          {
            icon: 'incident-response',
            title: 'Rapid Incident Response & Support',
            desc: 'SLA-backed engineering response and coordinated technical triage during unexpected disruptions to restore production operations promptly.',
          },
          {
            icon: 'security-patching',
            title: 'Security Hardening & Patch Management',
            desc: 'Rigorous vulnerability scanning, WAF rule tuning, and timely security patches safeguarding enterprise web assets against evolving zero-day exploits.',
          },
          {
            icon: 'bug-resolution',
            title: 'Bug Fixing & Technical Issue Resolution',
            desc: 'Structured root-cause diagnosis and code-level remediation to resolve functional defects, broken checkout flows, and layout regressions.',
          },
          {
            icon: 'continuous-modernization',
            title: 'Continuous Modernization & Refinement',
            desc: 'Iterative code refactoring, UX enhancements, and API modernizations aligning your web property with changing business requirements and browser standards.',
          },
          {
            icon: 'performance-optimization',
            title: 'Performance Optimization & Core Web Vitals',
            desc: 'Persistent profiling of Largest Contentful Paint (LCP), asset payload reduction, and caching policy adjustments delivering fast, reliable loading speeds.',
          },
          {
            icon: 'technical-seo',
            title: 'Technical SEO Maintenance',
            desc: 'Systematic crawl error resolution, sitemap validation, broken link audits, and structured data monitoring preserving organic search rankings.',
          },
          {
            icon: 'software-updates',
            title: 'Software & Dependency Lifecycle Updates',
            desc: 'Controlled staging updates for runtime frameworks, CMS modules, libraries, and runtime environments preventing regression conflicts.',
          },
        ],
      },
      aboutService: {
        title: 'Understanding Website Maintenance and Strategic Value for Enterprise Growth',
        tocTitle: 'Table of Contents',
        sections: [
          {
            id: 'definisi-pemeliharaan-web',
            tocLabel: 'Definition & Scope',
            heading: 'What is Website Maintenance? Definition and Scope',
            paragraphs: [
              'Website maintenance is an organized discipline of continuous technical workflows designed to preserve digital infrastructure security, software currency, and peak operational availability. It is not an occasional emergency fix, but rather an ongoing lifecycle management process that encompasses scheduled software updates, proactive security hardening, persistent performance tuning, redundant offsite backups, structured code remediation, technical SEO audits, and rapid incident response.',
              'The operational scope of enterprise maintenance spans uptime surveillance, synthetic transaction testing, zero-day patch deployments, server caching policy adjustments, scheduled database snapshots, rapid disaster recovery drills, frontend bug triage, and continuous web modernization. Distinguishing routine preventative maintenance from specialized bespoke development projects is essential: preventative maintenance establishes the resilient foundation that protects ongoing digital investments.',
            ],
          },
          {
            id: 'pentingnya-pemeliharaan-web',
            tocLabel: 'Strategic Business Value',
            heading: 'Why Routine Website Maintenance is Critical for Your Business',
            paragraphs: [
              'An unmaintained digital asset quickly degrades into a costly operational liability. Unpatched software dependencies expose enterprise infrastructure to malicious exploitation and ransomware risks. Gradual frontend latency regressions degrade buyer experiences and depress conversion funnels, while unmonitored server downtime damages brand credibility and customer loyalty.',
              'For enterprise organizations and corporations, dependable uptime directly protects commercial revenues, contractual service commitments, and corporate governance standards. For mid-market companies and ambitious businesses, structured maintenance provides a cost-effective safeguard, eliminating unpredictable disaster recovery expenses. A proactive preventative strategy remains dramatically more economical than emergency crisis remediation.',
            ],
          },
          {
            id: 'pendekatan-teknalogi',
            tocLabel: "Teknalogi's Comprehensive Approach",
            heading: "Comprehensive Website Maintenance Approach by Teknalogi",
            paragraphs: [
              'Teknalogi delivers holistic maintenance frameworks engineered for high-availability enterprise portals, web applications, and corporate platforms. We organize our ongoing support across eight dedicated operational pillars:',
            ],
            list: [
              'Proactive Website Monitoring: Synthetic transaction monitoring, DNS health tracking, and latency threshold alerts detecting anomalies before users experience service friction.',
              'Security Hardening and Patch Management: Periodic vulnerability scanning, SSL/TLS certificate rotation, WAF rule tuning, and timely core dependency upgrades.',
              'Performance Optimization: Continuous tracking of Core Web Vitals (LCP, INP, CLS), database index optimization, and edge CDN caching refinement.',
              'Backup and Disaster Recovery Support: Multi-region offsite storage replication, incremental database snapshots, and scheduled recovery point validation.',
              'Bug Resolution and Code Remediation: Rapid ticketing triage addressing functional regressions, script conflicts, and browser compatibility bugs.',
              'Technical SEO Maintenance: Continuous crawl error checks, canonical tag validation, XML sitemap updates, and schema integrity audits.',
              'Rapid Incident Response: Dedicated engineering standby with clear escalation tiers and coordinated technical communication during critical outages.',
              'Continuous Modernization: Scheduled code refactoring, accessibility compliance improvements, and technical debt reduction keeping platforms ahead of industry shifts.',
            ],
          },
          {
            id: 'risiko-pemeliharaan',
            tocLabel: 'Risks of Neglected Maintenance',
            heading: 'Common Risks of Neglected Website Maintenance',
            paragraphs: [
              'Organizations that postpone routine web maintenance expose their operations to predictable yet severe technical vulnerabilities:',
            ],
            list: [
              'Unaddressed security holes in outdated plugins and frameworks can be weaponized by automated exploit bots, risking severe data leaks and regulatory penalties.',
              'Degrading page load speeds increase user bounce rates, reduce search engine crawl efficiency, and lower commercial conversion rates across all traffic channels.',
              'Data corruption or hardware failures without tested offsite backups can lead to catastrophic, irreversible loss of proprietary transaction history and corporate records.',
              'Unplanned server and service downtime interrupts client communications, halts digital revenue streams, and erodes stakeholder trust.',
              'Accumulated technical SEO errors, including broken redirects and expired XML sitemaps, gradually erode earned search visibility and keyword authority.',
            ],
          },
          {
            id: 'checklist-pemeliharaan',
            tocLabel: 'Effective Maintenance Checklist',
            heading: 'Checklist for Effective Website Maintenance Operations',
            paragraphs: [
              'A structured maintenance operational model relies on rigorous, recurring execution schedules. Key tasks executed systematically across our client rosters include:',
            ],
            list: [
              'Continuous real-time uptime monitoring and synthetic user flow status checks.',
              'Staging-environment regression verification before rolling out CMS and library updates.',
              'Daily automated offsite database backups paired with monthly restoration rehearsal drills.',
              'Weekly vulnerability scanning, log file review, and perimeter security hardening.',
              'Bi-weekly Core Web Vitals profiling, asset compression audits, and cache invalidation testing.',
              'Monthly technical SEO error sweeps and Google Search Console indexation reconciliation.',
              'Quarterly architecture reviews, third-party API integration audits, and technical debt assessments.',
            ],
          },
          {
            id: 'manfaat-proaktif',
            tocLabel: 'Benefits of Proactive Care',
            heading: 'Benefits of Proactive Monitoring and Routine Lifecycle Updates',
            paragraphs: [
              'Transitioning from reactive panic-fixing to disciplined proactive maintenance yields tangible commercial and engineering advantages:',
            ],
            list: [
              'Minimized unplanned downtime as emerging anomalies are isolated and mitigated before service interruption occurs.',
              'Resilient security posture defended by regular dependency patching against documented CVE exposures.',
              'Enhanced user engagement and conversion rates driven by consistently fast, smooth page delivery.',
              'Protected data integrity and operational continuity backed by multi-point encrypted backup storage.',
              'Defended organic search rankings and continuous technical alignment with evolving search engine standards.',
            ],
          },
          {
            id: 'backup-dan-pemulihan',
            tocLabel: 'Backups & Disaster Recovery',
            heading: 'The Role of Backups and Disaster Recovery in Business Resilience',
            paragraphs: [
              'Automated, redundant backups serve as the baseline insurance policy for modern digital operations. In the absence of structured snapshots and practiced recovery steps, data corruption, cloud provider outages, or human operational errors can cause permanent business loss. A reliable disaster recovery architecture ensures systems can be brought back to a verified healthy state with minimal Recovery Time Objective (RTO) and Recovery Point Objective (RPO).',
              'Our incident management protocols integrate directly with backup infrastructure. When unexpected disruptions occur, engineering teams follow pre-established, rehearsed restoration runbooks rather than improvising under pressure, preserving client confidence and operational stability.',
            ],
          },
          {
            id: 'seo-teknis-dan-perbaikan',
            tocLabel: 'Technical SEO & Continuous Improvement',
            heading: 'Technical SEO Maintenance and Continuous Modernization for Search Visibility',
            paragraphs: [
              'Technical SEO factors are frequently overlooked in conventional website maintenance, yet their commercial impact on discoverability is immediate. Issues such as creeping script bloat, broken internal links, redirect loops, unindexed sitemap assets, or missing schema microdata degrade crawl efficiency and organic positioning over time.',
              'Routine technical SEO care systematically audits and rectifies these bottlenecks while keeping your platform aligned with search engine algorithm updates. Coupled with iterative frontend modernizations, ongoing maintenance enables web platforms to not merely survive, but consistently expand their digital market footprint.',
            ],
          },
          {
            id: 'langkah-selanjutnya',
            tocLabel: 'Next Steps',
            heading: 'Connect with Us for Dependable Website Maintenance Solutions',
            paragraphs: [
              'Every organization operates with distinctive infrastructure complexities, traffic volumes, and digital objectives. Our engineering team is prepared to evaluate your current web health and formulate a tailored maintenance SLA that protects your operational continuity without unnecessary overhead.',
              'We invite enterprise decision-makers, product managers, and digital leaders to initiate a discovery dialogue with zero upfront obligation. Let us handle security patching, uptime reliability, and technical performance so your internal teams can focus on strategic business growth.',
            ],
          },
        ],
      },
      faq: {
        headline: 'FAQ About Website Maintenance Services',
        subheadline: 'Essential answers regarding our maintenance SLAs, incident response times, security patching, and technical upkeep protocols.',
        trustedLabel: 'Trusted by',
        trustedSub: 'Corporations and growing enterprises across Indonesia',
        askButton: 'Consult Maintenance Requirements',
        items: [
          {
            question: 'What is website maintenance and why is it essential?',
            answer: 'Website maintenance is a disciplined regimen of continuous technical workflows including 24/7 uptime monitoring, security patching, performance tuning, automated backups, and bug remediation. It is vital because modern web platforms operate in dynamic environments where unpatched dependencies invite cyber threats and accumulated code latency reduces conversions and search rankings.',
          },
          {
            question: 'How do you handle maintenance mode during major updates?',
            answer: 'We utilize staging environments to thoroughly test code upgrades, database schema changes, and plugin updates before deployment. For updates requiring brief service pauses, we schedule them during low-traffic maintenance windows and display a branded, search-engine-friendly HTTP 503 maintenance page with zero impact on SEO or end-user sessions.',
          },
          {
            question: 'How are website maintenance service fees typically structured?',
            answer: 'Maintenance agreements are structured as monthly or quarterly SLAs calibrated to your infrastructure scale, platform complexity, required response times, and monthly support hours. We provide transparent, predictable pricing with no hidden charges, ensuring budget certainty for your organization.',
          },
          {
            question: 'How much time is required for routine maintenance tasks?',
            answer: 'Continuous monitoring and automated security scans run 24/7 in the background. Structured human audits, patch deployments, and performance profiling are conducted on scheduled weekly or bi-weekly cycles, requiring zero disruption to your daily business operations.',
          },
          {
            question: 'What are the main business risks if a website is not maintained regularly?',
            answer: 'Neglecting routine maintenance exposes your business to critical vulnerabilities including unauthorized data breaches, unannounced server outages, degraded page loading speeds, damaged search engine rankings, and potential total data loss in the absence of verified backups.',
          },
          {
            question: 'How does Teknalogi handle unexpected incidents and urgent outages?',
            answer: 'Our incident response framework provides multi-tiered engineering standby with defined SLA response times. When an anomaly is detected, our on-call engineers initiate triage immediately, isolate the root cause, and deploy remediation following rehearsed recovery runbooks.',
          },
          {
            question: 'What role does technical SEO play in website maintenance services?',
            answer: 'Technical SEO hygiene is an integral pillar of our maintenance service. We regularly audit crawl errors, validate XML sitemaps, inspect structured data schemas, check redirect chains, and optimize Core Web Vitals to maintain search engine crawl efficiency and organic visibility.',
          },
          {
            question: 'Are automated backups and disaster recovery included in the service?',
            answer: 'Yes. Every maintenance SLA incorporates scheduled database snapshots and file backups mirrored to secure offsite storage, combined with periodic restoration rehearsals ensuring rapid recovery in the event of hardware failure or human error.',
          },
          {
            question: 'How can our organization get started with Teknalogi website maintenance?',
            answer: 'You can initiate an inquiry via our WhatsApp consultation button or submit a request through our contact page. Our solutions team will conduct an initial platform health check and propose a tailored maintenance roadmap designed for your operational needs.',
          },
        ],
      },
    },
    caseStudiesPage: {
      meta: {
        title: 'Case Studies | Real Results and Real Transformation | PT Teknalogi Transformasi Digital',
        description: 'Explore our track record of enterprise digital solutions, cloud workflows, monitoring systems, and government digital platforms.',
      },
      hero: {
        title: 'Real results. Real transformation.',
        subtitle: 'See how forward-thinking organizations collaborate with Teknalogi to solve business challenges through web development, software engineering, SEO, and digital transformation.',
        industryLabel: 'Industry',
      },
      filters: [
        { id: 'all', label: 'All' },
        { id: 'enterprise', label: 'Enterprise' },
        { id: 'government', label: 'Government' },
        { id: 'operations', label: 'Operations' },
        { id: 'community', label: 'Community' },
      ],
      items: [
        {
          id: 'kelolaaja',
          title: 'KelolaAja - CMS-Powered Product Experience',
          subtitle: 'Product Landing Page & Content Management Platform',
          category: 'enterprise',
          industry: 'SaaS & Product',
          image: '/segera_hadir.png',
          webp: '/segera_hadir.webp',
          alt: 'KelolaAja - CMS-Powered Product Experience',
        },
        {
          id: 'nikawa-teknika-indonesia',
          title: 'PT Nikawa Teknika Indonesia - Corporate Digital Presence',
          subtitle: 'Corporate Website & Company Profile Experience',
          category: 'enterprise',
          industry: 'Manufacturing',
          image: '/segera_hadir.png',
          webp: '/segera_hadir.webp',
          alt: 'PT Nikawa Teknika Indonesia - Corporate Digital Presence',
        },
        {
          id: 'anytime-fitness',
          title: 'Anytime Fitness - Digital Fitness Management Platform',
          subtitle: 'Website & Flutter-Based Member Management Application',
          category: 'community',
          industry: 'Fitness & Health',
          image: '/segera_hadir.png',
          webp: '/segera_hadir.webp',
          alt: 'Anytime Fitness - Digital Fitness Management Platform',
        },
        {
          id: 'enterprise-operations-platform',
          title: 'Enterprise Operations Platform',
          subtitle: 'Custom Business Management System & Workflow Automation',
          category: 'operations',
          industry: 'Operations',
          image: '/segera_hadir.png',
          webp: '/segera_hadir.webp',
          alt: 'Enterprise Operations Platform - Custom Business Management System & Workflow Automation',
        },
      ],
      blueprint: {
        badge: 'Implementation Track Record',
        title: 'Enterprise Engineering Portfolio & System Blueprint',
        subtitle: 'Architectural track record and production implementations deployed across enterprise institutions and high-demand digital platforms.',
        mobileHint: 'Swipe horizontally to inspect diagram details',
      },
    },
  },
  id: {
    meta: {
      defaultTitle: 'PT Teknalogi Transformasi Digital | Rekayasa Software Enterprise',
      defaultDescription: 'Partner rekayasa software skala besar, integrasi sistem, dan cloud modern untuk bisnis Anda.',
      portfolioTitle: 'Portofolio Proyek | PT Teknalogi Transformasi Digital',
      portfolioDescription: 'Rekam jejak software misi-kritis dan sistem industri yang kami bangun.',
      servicesTitle: 'Layanan & Kapabilitas | PT Teknalogi Transformasi Digital',
      servicesDescription: 'Solusi lengkap dari arsitektur backend hingga cloud modern.'
    },
    nav: {
      about: 'Tentang Kami',
      industries: 'Industri',
      services: 'Layanan',
      resources: 'Resources',
      caseStudy: 'Case Study',
      portfolio: 'Portofolio',
      contact: 'Hubungi Kami',
      languageSelectAria: 'Pilih bahasa antarmuka',
      industriesDropdown: [
        { title: 'Perbankan & Jasa Keuangan', desc: 'Arsitektur fintech aman, patuh regulasi, dan berkecepatan tinggi.', href: '/id/layanan' },
        { title: 'Teknologi & SaaS', desc: 'Sistem multi-tenant berskala besar dan platform cloud modern.', href: '/id/layanan' },
        { title: 'Manufaktur & Industri', desc: 'Telemetri IoT real-time, monitoring mesin, dan otomasi rantai pasok.', href: '/id/layanan' },
        { title: 'Kesehatan & Life Sciences', desc: 'Platform data medis terenkripsi dan ekosistem telemedicine.', href: '/id/layanan' },
        { title: 'Layanan Profesional & Bisnis', desc: 'Otomasi alur kerja korporat dan portal manajemen bisnis terpusat.', href: '/id/layanan' },
      ],
      industriesMega: {
        title: 'Sektor Industri',
        subtitle: 'Kami telah menyelesaikan 1250+ proyek di 130+ sektor. Berpengalaman di industri Anda? Kami sudah pernah menanganinya.',
        items: [
          {
            id: 'banking',
            title: 'Perbankan & Jasa Keuangan',
            desc: 'Arsitektur fintech aman, gateway pembayaran, dan kepatuhan regulasi.',
            image: '/industry/perbankan.webp',
            fallback: '/industry/perbankan.png',
            href: '/id/industri/banking'
          },
          {
            id: 'tech-saas',
            title: 'Teknologi & SaaS',
            desc: 'Sistem microservices konkurensi tinggi, cloud multi-tenant, dan API.',
            image: '/industry/teknologi_and_saas.webp',
            fallback: '/industry/teknologi_and_saas.png',
            href: '/id/industri/tech-saas'
          },
          {
            id: 'manufacturing',
            title: 'Manufaktur & Industri',
            desc: 'Telemetri IoT real-time, monitoring mesin pabrik, dan otomasi rantai pasok.',
            image: '/industry/manufaktur.webp',
            fallback: '/industry/manufaktur.png',
            href: '/id/industri/manufacturing'
          },
          {
            id: 'healthcare',
            title: 'Kesehatan & Life Sciences',
            desc: 'Platform rekam medis terenkripsi, telemedicine, dan sistem data klinis.',
            image: '/industry/kesehatan.webp',
            fallback: '/industry/kesehatan.png',
            href: '/id/industri/healthcare'
          },
          {
            id: 'business-services',
            title: 'Layanan Profesional & Bisnis',
            desc: 'Otomasi alur kerja korporat, ERP terintegrasi, dan portal manajemen bisnis.',
            image: '/industry/layananprofesional.webp',
            fallback: '/industry/layananprofesional.png',
            href: '/id/industri/business-services'
          },
          {
            id: 'insurance',
            title: 'Asuransi',
            desc: 'Administrasi polis digital, otomasi klaim asuransi, dan manajemen risiko.',
            image: '/industry/asuransi.jpg',
            fallback: '/industry/asuransi.jpg',
            href: '/id/industri/insurance'
          },
          {
            id: 'education',
            title: 'Pendidikan',
            desc: 'Platform pembelajaran digital berskala besar, portal akademik, dan LMS.',
            image: '/industry/pendidikan.jpg',
            fallback: '/industry/pendidikan.jpg',
            href: '/id/industri/education'
          },
          {
            id: 'telecom',
            title: 'Telekomunikasi',
            desc: 'Dashboard telemetri jaringan, portal pelanggan, dan infrastruktur OSS/BSS.',
            image: '/industry/telekomunikasi.jpg',
            fallback: '/industry/telekomunikasi.jpg',
            href: '/id/industri/telecom'
          },
          {
            id: 'retail',
            title: 'Retail & E-Commerce',
            desc: 'Ekosistem e-commerce omnichannel, sinkronisasi inventaris, dan integrasi POS.',
            image: '/industry/retail.jpg',
            fallback: '/industry/retail.jpg',
            href: '/id/industri/retail'
          },
          {
            id: 'logistics',
            title: 'Logistik & Rantai Pasok',
            desc: 'Pelacakan armada logistik real-time, otomasi gudang, dan rute kargo.',
            image: '/industry/logistik.jpg',
            fallback: '/industry/logistik.jpg',
            href: '/id/industri/logistics'
          }
        ]
      },
      servicesDropdown: [
        { title: 'Pengembangan Web Modern', desc: 'Website performa tinggi, aplikasi web dinamis, dan portal SaaS.', href: '/id/services/website-development' },
        { title: 'Software Enterprise & Aplikasi Mobile', desc: 'Aplikasi mobile iOS/Android dan backend microservices tangguh.', href: '/id/services/software-development' },
        { title: 'Integrasi AI & Optimasi Pencarian', desc: 'Optimasi mesin pencari tradisional, GEO, dan integrasi AI discovery.', href: '/id/services/seo' },
        { title: 'Pemeliharaan Sistem & SLA', desc: 'Dukungan sistem 24/7, audit keamanan berkala, dan jaminan uptime.', href: '/id/services/web-maintenance' },
      ],
      servicesMega: {
        title: 'Layanan & Kapabilitas',
        subtitle: 'Bangun, optimalkan, dan kelola ekosistem digital organisasi Anda bersama kami.',
        ctaLabel: 'Jelajahi Semua Layanan',
        ctaHref: '/id/layanan',
        items: [
          {
            title: 'Website Development',
            desc: 'Website dan aplikasi web custom yang disesuaikan dengan kebutuhan bisnis Anda.',
            icon: 'globe',
            href: '/id/layanan/website-development'
          },
          {
            title: 'Software Development',
            desc: 'Aplikasi enterprise dan sistem bisnis sesuai kebutuhan perusahaan.',
            icon: 'code',
            href: '/id/layanan/software-development'
          },
          {
            title: 'Mobile App Development',
            desc: 'Aplikasi berbasis Android, iOS, dan cross-platform.',
            icon: 'mobile',
            href: '/id/layanan/mobile-app-development'
          },
          {
            title: 'Workflow Automation',
            desc: 'Integrasi dan otomatisasi proses bisnis anda dengan teknologi AI.',
            icon: 'workflow',
            href: '/id/layanan/workflow-automation'
          },
          {
            title: 'Optimasi Search Engine (SEO)',
            desc: 'Tingkatkan ranking dan visibilitas website di mesin pencari.',
            icon: 'search',
            href: '/id/layanan/seo'
          },
          {
            title: 'Optimasi Pencarian Berbasis AI',
            desc: 'Tingkatkan visibilitas di platform pencarian berbasis AI.',
            icon: 'ai-search',
            href: '/id/layanan/ai-search'
          },
          {
            title: 'SEO & AI-Search Audit',
            desc: 'Penilaian menyeluruh kesiapan SEO, AEO, dan GEO website Anda.',
            icon: 'audit',
            href: '/id/layanan/seo-audit'
          },
          {
            title: 'Website Maintenance',
            desc: 'Pastikan website Anda selalu berjalan optimal dan performa terjaga.',
            icon: 'maintenance',
            href: '/id/layanan/web-maintenance'
          }
        ],
        featuredSolutions: {
          title: 'Solusi Unggulan',
          desc: 'Solusi populer yang dibangun di atas layanan utama kami.',
          ctaLabel: 'Jelajahi Semua Solusi',
          ctaHref: '/id/layanan',
          solutions: [
            { label: 'Website Company Profile', href: '/id/layanan' },
            { label: 'Software Custom', href: '/id/layanan' },
            { label: 'Technical SEO', href: '/id/layanan' },
            { label: 'SEO untuk Website Perusahaan', href: '/id/layanan' },
            { label: 'SEO B2B', href: '/id/layanan' },
            { label: 'Generative Engine Optimization (GEO)', href: '/id/layanan' }
          ]
        }
      },
      resourcesDropdown: [
        { title: 'Tech Stack & Tools', desc: 'Teknologi dan stack modern yang menjadi standar rekayasa kami.', href: '#tech-stack' },
        { title: 'Arsitektur Enterprise', desc: 'Cetak biru arsitektur sistem berskala besar dan blueprint solusi.', href: '/id/layanan' },
        { title: 'Metodologi & Proses', desc: 'Standar delivery sprint, review kode ketat, dan jaminan kualitas.', href: '#ai-disciplines' },
      ],
      resourcesMega: {
        title: 'Pusat Sumber Daya',
        subtitle: 'Panduan, wawasan, framework, dan update perusahaan untuk keputusan digital yang lebih baik.',
        quickLinks: [
          { label: 'Insights', href: '#ai-disciplines', icon: 'lightbulb' },
          { label: 'Berita', href: '#partners', icon: 'newspaper' },
          { label: 'Siaran Pers', href: '#partners', icon: 'press' },
          { label: 'FAQ', href: '#lets-talk-cta', icon: 'faq' },
          { label: 'Legal & Kepatuhan', href: '#footer-legal', icon: 'legal' },
        ],
        featured: [
          {
            brand: 'Tekna',
            name: 'Workspace',
            tag: 'Workspace',
            desc: 'Ruang kerja digital kolaboratif dan platform produktivitas enterprise terpadu.',
            image: '/resource_workspace.png',
            webp: '/resource_workspace.webp',
            href: '/id/resources/workspace'
          },
          {
            brand: 'Tekna',
            name: 'Ticketing',
            tag: 'Helpdesk',
            desc: 'Sistem manajemen tiket layanan, helpdesk, dan alur kerja insiden korporat.',
            image: '/resource_ticketing.png',
            webp: '/resource_ticketing.webp',
            href: '/id/resources/ticketing'
          },
          {
            brand: 'Tekna',
            name: 'LIMS',
            tag: 'Enterprise',
            desc: 'Sistem informasi manajemen laboratorium untuk otomatisasi pengujian dan pelacakan data.',
            image: '/resource_LIMS.png',
            webp: '/resource_LIMS.webp',
            href: '/id/resources/lims'
          },
          {
            brand: 'Tekna',
            name: 'TraKerja',
            tag: 'HR Tech',
            desc: 'Platform terintegrasi manajemen tenaga kerja, pelacakan produktivitas, dan operasional enterprise.',
            image: '/resource_trakerja.png',
            webp: '/resource_trakerja.webp',
            href: '/id/resources/trakerja'
          },
          {
            brand: 'Tekna',
            name: 'PixelPlay!',
            tag: 'Creative',
            desc: 'Eksplorasi pengalaman digital interaktif, visual web kreatif, dan modul gamifikasi enterprise.',
            image: '/resource_pixelplay.png',
            webp: '/resource_pixelplay.webp',
            href: '/id/resources/pixelplay'
          }
        ],
        knowledgeHub: {
          title: 'Knowledge Hub',
          desc: 'Pelajari dasar-dasar di balik website modern, software, visibilitas pencarian, dan pertumbuhan digital.',
          topics: [
            { label: 'Pengembangan Website', href: '/id/layanan/website-development' },
            { label: 'Fundamental SEO', href: '/id/layanan/seo' },
            { label: 'AI Search, GEO, AEO', href: '/id/layanan/ai-search' },
            { label: 'AI & Implementasinya', href: '/id/layanan/software-development' }
          ],
          ctaLabel: 'Jelajahi Knowledge Hub',
          ctaHref: '/id/knowledge-hub'
        }
      }
    },
    hero: {
      headlinePart1: 'We engineer',
      headlinePart2: 'your growth.',
      subtitle: 'Bangun software skala besar yang cepat, stabil, dan siap tumbuh tanpa beban utang teknis.'
    },
    partners: {
      heading: 'Dipercaya oleh berbagai perusahaan dan institusi terkemuka'
    },
    companyOverview: {
      title: "Rekayasa menyeluruh, dari arsitektur hingga operasional.",
      description: "PT Teknalogi Transformasi Digital adalah perusahaan penyedia rekayasa perangkat lunak enterprise dan integrasi sistem yang berbasis di Jakarta, Indonesia. Kami membantu perusahaan merancang, membangun, dan mengelola ekosistem digital yang andal, scalable, sekaligus mempercepat adopsi AI dan modernisasi platform cloud.",
      stats: [
        { value: "2+", label: "Tahun pengalaman" },
        { value: "15+", label: "Proyek diselesaikan" }
      ],
      audience: "Untuk scaleup, UMKM, korporasi, BUMN, dan instansi pemerintah.",
      imageAlt: "Tim software engineer berkolaborasi di ruang engineering enterprise modern di Jakarta"
    },
    aiDisciplines: {
      headline: 'Solusi Presisi, Hasil Terbukti.',
      description: 'Kami membantu organisasi merancang, membangun, dan mengoptimalkan platform digital terintegrasi melalui rekayasa web berkecepatan tinggi, aplikasi mobile, software enterprise skala besar, serta sistem pencarian cerdas. Setiap solusi kami bangun secara kustom dari fondasi, selaras dengan kebutuhan spesifik, tantangan operasional, dan target bisnis Anda. Pelajari layanan rekayasa kami untuk mengakselerasi pertumbuhan bisnis yang terukur.',
      titlePart1: 'Solusi Presisi,',
      titlePart2: 'Hasil Terbukti',
      viewAllCta: 'Lihat semua layanan',
      items: [
        {
          id: 'web-dev',
          title: 'Website Development',
          description: 'Website korporat berkinerja tinggi, aplikasi web modern, dan frontend responsif yang dirancang untuk performa maksimal.',
          image: '/services/web_dev_v2.webp',
          fallback: '/services/web_dev_v2.jpg',
          tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
          href: '/id/services/website-development'
        },
        {
          id: 'software-app',
          title: 'Software & App Development',
          description: 'Aplikasi mobile iOS dan Android yang stabil dan cepat, didukung arsitektur backend andal dan integrasi API yang aman.',
          image: '/services/software_app_v2.webp',
          fallback: '/services/software_app_v2.jpg',
          tags: ['iOS & Android', 'Flutter', 'Arsitektur Cloud', 'API'],
          href: '/id/services/software-development'
        },
        {
          id: 'seo-ai',
          title: 'SEO & AI Search Optimization',
          description: 'Optimasi visibilitas website di Google Search serta mesin pencari AI generasi baru seperti ChatGPT dan Perplexity.',
          image: '/services/seo_ai_v2.webp',
          fallback: '/services/seo_ai_v2.jpg',
          tags: ['Technical SEO', 'GEO & AEO', 'Pencarian AI', 'Audit'],
          href: '/id/services/seo'
        },
        {
          id: 'maintenance',
          title: 'Maintenance & Enhancement Services',
          description: 'Pemeliharaan sistem bergaransi SLA, audit keamanan berkala, optimasi database, dan penambahan fitur berkelanjutan.',
          image: '/services/maintenance_v2.webp',
          fallback: '/services/maintenance_v2.jpg',
          tags: ['Dukungan SLA', 'Audit Keamanan', 'Cloud Ops', 'CI/CD'],
          href: '/id/services/web-maintenance'
        }
      ]
    },
    industries: {
      headline: 'Melayani Berbagai Sektor & Industri',
      description: 'Setiap industri memiliki kebutuhan digital yang berbeda. Di Teknalogi, kami melakukan riset secara berkala terhadap tren ekosistem digital di setiap sektor industri klien kami. Hal ini kami lakukan untuk memahami tantangan serta peluang yang unik dan dinamis di masing-masing sektor industri. Pendekatan ini memungkinkan kami menghadirkan solusi yang tidak hanya memenuhi kebutuhan Anda, tetapi juga membantu organisasi beradaptasi, berakselerasi, dan memenangkan persaingan di sektor industri masing-masing. Jelajahi industri yang kami layani dan temukan bagaimana keahlian kami dapat membantu organisasi Anda.',
      exploreLabel: 'Jelajahi',
      comingSoonLabel: 'Segera hadir',
      items: [
        {
          id: 'banking',
          title: 'Perbankan',
          image: '/industry/perbankan.webp',
          fallback: '/industry/perbankan.png',
          status: 'available',
          colSpan: 'col-span-12 md:col-span-6'
        },
        {
          id: 'tech-saas',
          title: 'Teknologi & SaaS',
          image: '/industry/teknologi_and_saas.webp',
          fallback: '/industry/teknologi_and_saas.png',
          status: 'coming_soon',
          colSpan: 'col-span-12 md:col-span-6'
        },
        {
          id: 'manufacturing',
          title: 'Manufaktur & Industri',
          image: '/industry/manufaktur.webp',
          fallback: '/industry/manufaktur.png',
          status: 'coming_soon',
          colSpan: 'col-span-12 md:col-span-4'
        },
        {
          id: 'health',
          title: 'Kesehatan & Life Sciences',
          image: '/industry/kesehatan.webp',
          fallback: '/industry/kesehatan.png',
          status: 'coming_soon',
          colSpan: 'col-span-12 md:col-span-4'
        },
        {
          id: 'business-services',
          title: 'Layanan Profesional & Bisnis',
          image: '/industry/layananprofesional.webp',
          fallback: '/industry/layananprofesional.png',
          status: 'coming_soon',
          colSpan: 'col-span-12 md:col-span-4'
        }
      ]
    },
    worksShowcase: {
      headlinePart1: 'Partner Tepercaya',
      headlinePart2: 'untuk Solusi IT Kustom Anda',
      description: 'Bantu akselerasi performa bisnis Anda lewat rekayasa website dan aplikasi mobile berstandar tinggi.',
      ctaButton: 'Lihat Karya Kami',
      projects: [
        {
          id: 'kelolaaja',
          title: 'KelolaAja',
          category: 'Enterprise ERP & Cloud Finance',
          tag: 'Multi-tenant SaaS',
          image: '/works/kelolaaja.webp',
          fallback: '/works/kelolaaja.png'
        },
        {
          id: 'nikawa',
          title: 'Nikawa Teknika Indonesia',
          category: 'Industrial IoT & Otomasi',
          tag: 'Manufaktur & Presisi',
          image: '/works/nikawa.webp',
          fallback: '/works/nikawa.png'
        },
        {
          id: 'pixelplay',
          title: 'PixelPlay',
          category: 'Ekosistem Hiburan Digital & Gaming',
          tag: 'Platform Interaktif',
          image: '/works/pixelplay.webp',
          fallback: '/works/pixelplay.png'
        },
        {
          id: 'trakerja',
          title: 'TraKerja',
          category: 'Infrastruktur & Ekosistem Talenta Kerja',
          tag: 'Platform Nasional',
          image: '/works/trakerja.webp',
          fallback: '/works/trakerja.png'
        }
      ]
    },
    techStack: {
      badge: 'TEKNOLOGI KAMI',
      title: 'Tumpukan teknologi modern dan AI tools yang Anda butuhkan.',
      description: 'Kami menguasai 100+ teknologi teruji untuk memastikan sistem Anda andal dan siap scale-up.'
    },
    footer: {
      tagline: 'Partner rekayasa software dan arsitektur sistem untuk percepat langkah bisnis Anda.',
      navTitle: 'Navigasi',
      home: 'Beranda',
      portfolio: 'Portofolio',
      services: 'Layanan',
      virtualOfficeTitle: 'Virtual Office',
      contactTitle: 'Kontak',
      copyright: '© 2026 PT Teknalogi Transformasi Digital. Hak cipta dilindungi.'
    },
    contactModal: {
      badge: 'DISKUSI PROYEK',
      title: 'Mulai Ngobrol dengan Tim Kami',
      subtitle: 'Ceritakan ide, kebutuhan sistem, atau tantangan teknis yang sedang Anda hadapi.',
      nameLabel: 'Nama Lengkap',
      namePlaceholder: 'Nama Anda',
      emailLabel: 'Email',
      emailPlaceholder: 'nama@email.com',
      phoneLabel: 'Nomor WhatsApp / Telepon',
      phonePlaceholder: '+62 812-3456-7890',
      messageLabel: 'Kebutuhan Proyek',
      messagePlaceholder: 'Jelaskan kebutuhan sistem atau target yang ingin dicapai...',
      submit: 'Kirim Pesan',
      submitting: 'Mengirim...',
      successTitle: 'Pesan Terkirim',
      successMessage: 'Terima kasih! Tim kami akan segera menghubungi Anda dalam 1x24 jam.',
      close: 'Tutup'
    },
    servicesPage: {
      badge: 'KAPABILITAS UTAMA',
      heroTitle: 'Layanan Rekayasa Software & Sistem',
      heroSubtitle: 'Solusi lengkap dari arsitektur backend, aplikasi kustom, hingga cloud modern untuk bisnis Anda.',
      ctaButton: 'Konsultasikan Kebutuhan Anda',
      capabilityBadge: 'Cakupan Teknis',
      deliverablesLabel: 'Hasil yang Anda Dapatkan:',
      items: [
        {
          number: '01',
          title: 'Arsitektur Sistem Skala Besar',
          category: 'System Architecture',
          description: 'Rancang fondasi sistem yang stabil, modular, dan siap menangani jutaan transaksi tanpa lemot.',
          capabilities: [
            'Arsitektur Microservices & Event-Driven (Kafka / RabbitMQ)',
            'Strategi Sharding Database & Caching Cepat',
            'High Availability & Disaster Recovery Lintas Region',
            'Desain API Gateway Terpadu & Proteksi Beban'
          ],
          deliverables: 'Blueprint arsitektur sistem, uji performa latensi, dan dokumentasi lengkap.'
        },
        {
          number: '02',
          title: 'Pembuatan Software Kustom',
          category: 'Software Engineering',
          description: 'Kembangkan platform bisnis inti dengan kode bersih, keamanan ketat, dan performa tinggi.',
          capabilities: [
            'Pengembangan Core Engine Skala Nasional',
            'Aplikasi Web & Mobile Cepat dan Responsif',
            'Pengujian Otomatis (Unit, Integrasi, End-to-End)',
            'Pipeline CI/CD untuk Rilis Cepat & Aman'
          ],
          deliverables: 'Source code berstandar tinggi, pipeline deployment otomatis, dan transfer pengetahuan.'
        },
        {
          number: '03',
          title: 'Modernisasi Cloud & Infrastruktur',
          category: 'Cloud Governance',
          description: 'Kelola cloud dan container Kubernetes yang hemat biaya, aman, dan siap scale-up kapan saja.',
          capabilities: [
            'Infrastruktur Berbasis Kode (Terraform / OpenTofu)',
            'Manajemen Cluster Kubernetes',
            'Kepatuhan Data & Standar Keamanan',
            'Monitoring & Observabilitas Sistem 24/7'
          ],
          deliverables: 'Infrastruktur zero-downtime, dashboard monitoring, dan panduan efisiensi biaya.'
        },
        {
          number: '04',
          title: 'Audit Kode & Bereskan Utang Teknis',
          category: 'Technical Debt Elimination',
          description: 'Perbaiki sistem lama yang lambat dan rapuh agar kembali cepat, aman, dan mudah dikembangkan.',
          capabilities: [
            'Pemeriksaan Kesehatan Kode & Celah Keamanan',
            'Pecah Monolith Jadi Layanan Lebih Ringan',
            'Optimasi Query Database & Performa Memori',
            'Update Library & Framework yang Usang'
          ],
          deliverables: 'Laporan temuan teknis, rencana perbaikan bertahap, dan peningkatan performa teruji.'
        }
      ]
    },
    portfolioPage: {
      badge: 'REKAM JEJAK',
      heroTitle: 'Hasil Karya & Proyek Kami',
      heroSubtitle: 'Beberapa sistem penting yang kami rancang dan bangun bersama para partner bisnis.',
      impactLabel: 'Dampak Nyata:',
      techLabel: 'Teknologi:',
      items: [
        {
          id: 'trakerja',
          title: 'TraKerja',
          category: 'Talent Infrastructure & Ecosystem',
          badge: 'Platform Nasional',
          description: 'Sistem ketenagakerjaan terdistribusi yang hubungkan talenta dengan verifikasi identitas instan.',
          metrics: [
            { label: 'Pengguna Aktif', value: '500.000+' },
            { label: 'Uptime Sistem', value: '99.98%' },
            { label: 'Respon API', value: '< 75ms' }
          ],
          technologies: ['Golang', 'TypeScript', 'PostgreSQL', 'Redis', 'Kubernetes'],
          impact: 'Proses rekrutmen dipersingkat dari 14 hari jadi 48 jam dengan akurasi tinggi.'
        },
        {
          id: 'kelolaaja',
          title: 'KelolaAja',
          category: 'Enterprise ERP & Cloud Finance',
          badge: 'SaaS Multi-tenant',
          description: 'Aplikasi ERP keuangan cloud untuk kelola buku kas, laporan multi-cabang, dan integrasi bank otomatis.',
          metrics: [
            { label: 'Transaksi Bulanan', value: 'Rp120M+' },
            { label: 'Perusahaan', value: '1.200+' },
            { label: 'Akurasi Rekonsiliasi', value: '100%' }
          ],
          technologies: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
          impact: 'Bebas selisih pencatatan manual dan pelaporan pajak jadi jauh lebih cepat.'
        },
        {
          id: 'nikawa',
          title: 'PT Nikawa Teknika Indonesia',
          category: 'Industrial IoT & Automation',
          badge: 'IoT Manufaktur',
          description: 'Monitoring sensor IoT real-time di pabrik untuk pantau mesin dan cegah kerusakan lebih awal.',
          metrics: [
            { label: 'Turunkan Downtime', value: '35%' },
            { label: 'Sensor Terpasang', value: '250+ Unit' },
            { label: 'Deteksi Masalah', value: 'Real-time' }
          ],
          technologies: ['Rust', 'Python', 'MQTT', 'TimescaleDB', 'Grafana'],
          impact: 'Turunkan downtime mesin produksi hingga 35% lewat deteksi dini.'
        },
        {
          id: 'hris',
          title: 'Enterprise HRIS & People Analytics',
          category: 'Corporate Human Capital',
          badge: 'Skala Korporat',
          description: 'Platform HR terpusat untuk gaji puluhan ribu karyawan, hitung pajak otomatis, dan kelola data aman.',
          metrics: [
            { label: 'Karyawan Terkelola', value: '15.000+' },
            { label: 'Waktu Payroll', value: '-70%' },
            { label: 'Kepatuhan Regulasi', value: '100%' }
          ],
          technologies: ['TypeScript', 'NestJS', 'React', 'PostgreSQL', 'HashiCorp Vault'],
          impact: 'Waktu proses payroll terpangkas 70%, hemat ratusan jam kerja tiap bulan.'
        }
      ]
    },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      subtitle: "Ini adalah pertanyaan yang sering muncul saat diskusi dengan klien. Kami kumpulkan di sini agar cara kerja, kapabilitas rekayasa, dan pendekatan kami lebih mudah dipahami.",
      trustedLabel: "Dipercaya oleh",
      trustedSub: "Klien enterprise lintas industri",
      askButton: "Masih punya pertanyaan?",
      items: [
        {
          id: "about-teknalogi",
          question: "Apa itu PT Teknalogi Transformasi Digital?",
          answer: "PT Teknalogi Transformasi Digital adalah perusahaan rekayasa perangkat lunak enterprise, integrasi sistem terpusat, dan arsitektur cloud berdaulat (sovereign cloud) yang berbasis di Jakarta, Indonesia. Kami membantu korporasi, BUMN, perbankan, dan institusi modern merancang, membangun, serta mengoperasikan sistem digital mission-critical yang andal, scalable, dan selaras dengan objektif bisnis."
        },
        {
          id: "services",
          question: "Layanan apa saja yang disediakan oleh Teknalogi?",
          answer: "Kami menyediakan layanan rekayasa perangkat lunak end-to-end: arsitektur sistem terdistribusi & microservices, core banking & financial technology, sistem otomatisasi manufaktur & IoT real-time, modernisasi aplikasi legacy, arsitektur AI terapan, serta implementasi cloud berdaulat dan tata kelola data enterprise."
        },
        {
          id: "clients",
          question: "Perusahaan atau organisasi seperti apa yang biasa bekerja sama dengan Teknalogi?",
          answer: "Klien kami mencakup institusi perbankan & fintech, korporasi manufaktur multinasional, penyedia telekomunikasi, logistik, hingga instansi pemerintah dan layanan publik yang memerlukan standar ketat dalam hal reliabilitas tinggi, performa konkurensi, dan keamanan data enterprise."
        },
        {
          id: "geography",
          question: "Apakah Teknalogi hanya melayani klien di Indonesia?",
          answer: "Fokus operasional utama kami adalah korporasi dan institusi di Indonesia, namun tim rekayasa kami juga menangani proyek integrasi sistem lintas batas di kawasan Asia Tenggara dan bekerja sama secara intensif dengan mitra teknologi global."
        },
        {
          id: "approach",
          question: "Bagaimana pendekatan tim Teknalogi saat memulai sebuah proyek?",
          answer: "Kami mengawali setiap inisiatif melalui Deep Architectural Discovery: audit arsitektur sistem eksisting, mitigasi risiko teknis, dan validasi requirement performa. Selanjutnya kami merumuskan technical blueprint, membangun proof-of-concept (PoC) terukur, dan mengeksekusi pembangunan secara modular melalui sprint agile dengan pipeline CI/CD serta compliance check berkelanjutan."
        },
        {
          id: "legacy",
          question: "Bisakah Teknalogi menangani atau memodernisasi sistem legacy yang sudah berjalan?",
          answer: "Tentu, ini adalah salah satu spesialisasi utama kami. Kami menerapkan metodologi migrasi sistem bertahap (seperti Strangler Fig pattern) untuk mentransformasi sistem monolitik atau sistem perbankan/manufaktur lama menuju arsitektur modern berbasis microservices & API tanpa menyebabkan downtime atau gangguan pada operasional harian."
        },
        {
          id: "security",
          question: "Bagaimana jaminan keamanan data, SLA performa, dan kepatuhan regulasi?",
          answer: "Seluruh arsitektur yang kami bangun mengacu pada standar keamanan enterprise (zero-trust architecture, enkripsi end-to-end, dan kesesuaian ISO 27001 serta UU Perlindungan Data Pribadi). Kami juga menyediakan SLA performa hingga 99.9% uptime, failover redundansi multi-region, dan dokumentasi audit kepatuhan lengkap."
        },
        {
          id: "consultation",
          question: "Bagaimana cara mendiskusikan kebutuhan proyek dengan tim Teknalogi?",
          answer: "Anda dapat langsung menjadwalkan konsultasi arsitektur melalui tombol 'Masih punya pertanyaan?' atau tombol kontak di halaman ini. Tim principal engineer dan solusi arsitek kami akan menjadwalkan sesi technical briefing dalam 1x24 jam kerja untuk meninjau kebutuhan spesifik sistem Anda."
        }
      ]
    },
    letsTalk: {
      headline: "Mari berdiskusi.",
      subtitle: "Kami siap membantu Anda menghadirkan website berkinerja tinggi, meningkatkan visibilitas bisnis di mesin pencari, dan mengembangkan platform digital yang disesuaikan dengan kebutuhan Anda.",
      cta: "Hubungi Kami"
    },
    businessNeed: {
      eyebrow: "MULAI LANGKAH BERIKUTNYA",
      headlinePart1: "Mari mulai dari",
      headlinePart2: "kebutuhan bisnis Anda.",
      description: "Diskusikan arsitektur sistem, modernisasi platform, atau integrasi solusi digital perusahaan Anda bersama tim rekayasa kami. Kami siap membantu merumuskan arah teknis yang tepat dan terukur.",
      cta: "Talk to Teknalogi",
      note: "Konsultasi langsung via WhatsApp bersama tim solusi kami"
    },
    webDevService: {
      meta: {
        title: "Website Development | PT Teknalogi Transformasi Digital",
        description: "Jasa web development custom untuk pertumbuhan bisnis. Website korporat dan aplikasi web kustom yang dirancang sesuai kebutuhan spesifik Anda.",
      },
      breadcrumbs: {
        home: "Beranda",
        homeHref: "/id",
        services: "Layanan",
        servicesHref: "/id/layanan",
        current: "Web Development",
      },
      trustBadge: {
        label: "Trusted by",
        sublabel: "Corporations and growing enterprises across Indonesia",
      },
      hero: {
        headline: "Jasa Web Development Custom untuk Pertumbuhan Bisnis",
        description: "Teknalogi menghadirkan layanan web development yang dirancang sesuai kebutuhan bisnis korporat, enterprise, dan UKM di Indonesia. Setiap website dibangun dengan pendekatan SEO-first, desain mobile-first, arsitektur informasi yang terstruktur, dan CMS custom, dilengkapi garansi fungsional, keamanan, performa tinggi, serta dukungan training dan maintenance.",
        primaryCta: "Konsultasi Kebutuhan Web Development",
        primaryCtaHref: "/id/contact",
        secondaryCta: "Pelajari Selengkapnya",
        secondaryCtaHref: "#what-we-deliver",
      },
      quickLinks: {
        title: "Navigasi Cepat",
        links: [
          { label: "What We Deliver?", href: "#what-we-deliver" },
          { label: "About This Service", href: "#about-service" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      features: {
        headline: "Fitur Utama Layanan Web Development Teknalogi",
        subheadline: "Setiap aspek layanan web development kami dirancang untuk mendukung kebutuhan bisnis yang nyata, dari desain hingga keamanan dan dukungan pasca peluncuran.",
        items: [
          {
            id: "custom-design",
            title: "Desain dan Fitur Custom",
            desc: "Setiap website dikembangkan dengan desain dan fitur yang disesuaikan secara spesifik dengan kebutuhan bisnis klien, memastikan relevansi dan diferensiasi yang nyata di pasar digital.",
            icon: "cube",
            glowColor: "from-blue-100/60",
          },
          {
            id: "seo-first",
            title: "Pengembangan SEO-First",
            desc: "Struktur teknis dan konten website dirancang sejak awal dengan mempertimbangkan optimasi mesin pencari, memberikan fondasi yang kuat untuk visibilitas organik jangka panjang.",
            icon: "search",
            glowColor: "from-sky-100/60",
          },
          {
            id: "info-architecture",
            title: "Arsitektur Informasi yang Terstruktur",
            desc: "Struktur informasi yang terorganisir memudahkan navigasi pengunjung dan membantu mesin pencari memahami hierarki konten website secara efisien.",
            icon: "hierarchy",
            glowColor: "from-indigo-100/60",
          },
          {
            id: "custom-cms",
            title: "CMS Custom yang Mudah Digunakan",
            desc: "Sistem pengelolaan konten yang dirancang khusus sesuai kebutuhan bisnis klien, memungkinkan tim internal memperbarui dan mengelola konten secara mandiri tanpa ketergantungan teknis berlebihan.",
            icon: "cms",
            glowColor: "from-amber-100/60",
          },
          {
            id: "functional-warranty",
            title: "Garansi Fungsionalitas",
            desc: "Setiap website yang diserahkan telah melalui pengujian menyeluruh dan dijamin berfungsi sesuai spesifikasi yang telah disepakati, mengurangi risiko kegagalan fungsi yang dapat merugikan bisnis.",
            icon: "shield-check",
            glowColor: "from-emerald-100/60",
          },
          {
            id: "website-security",
            title: "Keamanan Website Terjamin",
            desc: "Perlindungan terhadap ancaman keamanan diterapkan untuk menjaga integritas data, kepercayaan pengguna, dan keberlangsungan operasional bisnis online.",
            icon: "lock",
            glowColor: "from-violet-100/60",
          },
          {
            id: "high-performance",
            title: "Performa Tinggi dan Responsif",
            desc: "Website yang cepat dan responsif di berbagai kondisi jaringan mendukung pengalaman pengguna yang positif dan berkontribusi pada peringkat yang lebih baik di mesin pencari.",
            icon: "speed",
            glowColor: "from-cyan-100/60",
          },
          {
            id: "internal-training",
            title: "Layanan Training untuk Tim Internal",
            desc: "Pelatihan yang disesuaikan dengan sistem dan fitur website yang dikembangkan, membekali tim internal klien dengan kemampuan untuk mengelola website secara mandiri dan efisien.",
            icon: "training",
            glowColor: "from-blue-100/60",
          },
          {
            id: "maintenance-support",
            title: "Layanan Maintenance dan Support",
            desc: "Pemeliharaan rutin dan dukungan teknis berkelanjutan untuk memastikan website tetap aman, berkinerja tinggi, dan relevan seiring perkembangan bisnis klien.",
            icon: "support",
            glowColor: "from-purple-100/60",
          },
        ],
      },
      aboutService: {
        id: "about-service",
        title: "Tentang Layanan Web Development Teknalogi",
        tocTitle: "TABLE OF CONTENTS",
        sections: [
          {
            id: "definisi-web-development",
            tocLabel: "Definisi Web Development",
            title: "Apa Itu Web Development dan Manfaatnya untuk Bisnis",
            paragraphs: [
              "Web development adalah proses perancangan, pembangunan, dan pengelolaan website yang mencakup seluruh aspek teknis dan visual agar sebuah situs dapat berfungsi secara optimal di internet. Bagi bisnis modern, website bukan sekadar kehadiran digital. Website adalah aset strategis yang mendukung pertumbuhan, memperluas jangkauan pasar, dan membangun kepercayaan calon pelanggan.",
              "Website yang efektif harus mampu menjalankan fungsinya dengan baik, mudah dikelola oleh tim internal, aman dari ancaman siber, dan cukup cepat untuk mempertahankan perhatian pengunjung. Fungsionalitas, kemudahan pengelolaan, dan performa menjadi fondasi dari setiap proyek web development yang Teknalogi kerjakan.",
            ],
          },
          {
            id: "desain-fitur-custom",
            tocLabel: "Desain dan Fitur Custom",
            title: "Keunggulan Desain dan Fitur Custom dalam Pengembangan Website",
            paragraphs: [
              "Tidak ada dua bisnis yang memiliki kebutuhan yang persis sama, dan pendekatan template generik sering kali tidak cukup untuk mewakili identitas serta tujuan bisnis secara akurat. Teknalogi mengembangkan setiap website dengan desain dan fitur yang disesuaikan secara spesifik dengan kebutuhan klien, mulai dari tampilan visual yang mencerminkan identitas merek hingga fitur fungsional yang mendukung proses operasional.",
            ],
            bullets: [
              {
                label: "Desain yang mencerminkan identitas bisnis",
                text: "tampilan yang konsisten dengan nilai dan karakter merek klien.",
              },
              {
                label: "Fitur yang relevan dengan alur kerja bisnis",
                text: "solusi yang benar-benar dibutuhkan, bukan fitur standar yang dipaksakan.",
              },
              {
                label: "Pengalaman pengguna yang optimal",
                text: "navigasi yang intuitif dan antarmuka yang memudahkan pengunjung mencapai tujuan mereka.",
              },
            ],
            closingParagraph: "Pendekatan custom ini memastikan bahwa website tidak hanya terlihat profesional, tetapi juga bekerja secara efektif sebagai alat bisnis.",
          },
          {
            id: "seo-mobile-first",
            tocLabel: "SEO dan Mobile-First",
            title: "Pendekatan SEO-First dan Mobile-First untuk Visibilitas dan Aksesibilitas",
            paragraphs: [
              "Sebuah website yang tidak mudah ditemukan di mesin pencari akan kehilangan sebagian besar potensinya. Teknalogi menerapkan pendekatan SEO-first sejak tahap perencanaan dan pengembangan, bukan sebagai tambahan di akhir proyek. Struktur halaman, hierarki konten, kecepatan muat, dan aspek teknis lainnya dirancang agar website memiliki fondasi yang kuat untuk visibilitas organik jangka panjang.",
              "Mayoritas pengguna internet di Indonesia mengakses web melalui perangkat mobile. Desain mobile-first yang kami terapkan memastikan pengalaman pengguna tetap optimal di berbagai ukuran layar, dari smartphone hingga desktop. Kombinasi SEO-first dan mobile-first adalah investasi dalam keterjangkauan dan relevansi bisnis di pasar digital.",
            ],
          },
          {
            id: "arsitektur-cms",
            tocLabel: "Arsitektur dan CMS",
            title: "Arsitektur Informasi dan CMS Custom untuk Kemudahan Pengelolaan dan Skalabilitas",
            paragraphs: [
              "Arsitektur informasi yang baik menentukan bagaimana konten diorganisir, ditemukan, dan dipahami oleh pengunjung. Teknalogi merancang struktur informasi yang logis sehingga pengunjung dapat menavigasi website dengan mudah, sementara mesin pencari dapat memahami hierarki konten secara efisien.",
            ],
            bullets: [
              {
                label: "Struktur navigasi yang jelas",
                text: "memudahkan pengunjung menemukan informasi yang mereka butuhkan tanpa kebingungan.",
              },
              {
                label: "Hierarki konten yang terencana",
                text: "mendukung keterbacaan dan relevansi di mesin pencari.",
              },
              {
                label: "CMS custom yang intuitif",
                text: "sistem pengelolaan konten yang dirancang sesuai kebutuhan bisnis, bukan solusi generik yang memerlukan adaptasi berlebihan.",
              },
            ],
            closingParagraph: "CMS custom yang kami kembangkan memungkinkan tim internal klien untuk memperbarui konten, menambahkan halaman baru, atau mengelola informasi produk tanpa harus bergantung pada bantuan teknis eksternal setiap saat. Ini penting bagi bisnis yang terus berkembang dan membutuhkan fleksibilitas dalam pengelolaan konten.",
          },
          {
            id: "garansi-keamanan",
            tocLabel: "Garansi dan Keamanan",
            title: "Garansi Fungsional, Keamanan, dan Performa Tinggi untuk Keandalan Website",
            paragraphs: [
              "Setiap proyek web development yang Teknalogi selesaikan dilengkapi dengan garansi fungsionalitas. Website yang diserahkan kepada klien telah melalui pengujian menyeluruh dan berfungsi sesuai spesifikasi yang telah disepakati. Ini adalah komitmen terhadap kualitas yang dapat dipegang oleh klien.",
              "Keamanan website menjadi prioritas yang tidak dapat dikompromikan, terutama bagi bisnis yang mengelola data pelanggan atau transaksi online. Kami memastikan setiap website yang dikembangkan memiliki lapisan perlindungan yang memadai untuk menjaga integritas data dan keberlangsungan operasional bisnis.",
              "Website yang lambat tidak hanya membuat pengunjung frustrasi, tetapi juga berdampak negatif pada peringkat di mesin pencari. Standar performa tinggi kami pastikan sejak awal pengembangan, sehingga setiap website memuat dengan cepat dan responsif di berbagai kondisi jaringan.",
            ],
          },
          {
            id: "training-maintenance",
            tocLabel: "Training dan Maintenance",
            title: "Layanan Training dan Maintenance untuk Dukungan Berkelanjutan",
            paragraphs: [
              "Peluncuran website adalah awal dari perjalanan digital bisnis, bukan akhirnya. Teknalogi menyediakan layanan training bagi tim internal klien agar mereka dapat mengelola website secara mandiri setelah proyek selesai. Pelatihan ini disesuaikan dengan sistem dan fitur yang telah dikembangkan sehingga langsung dapat diterapkan.",
              "Layanan maintenance yang kami tawarkan memastikan website tetap berjalan optimal seiring berjalannya waktu. Pembaruan keamanan, penyesuaian performa, dan dukungan teknis tersedia untuk menjaga website tetap andal dan relevan. Dengan dukungan berkelanjutan ini, klien dapat fokus pada pertumbuhan bisnis tanpa perlu khawatir tentang kondisi teknis website mereka.",
            ],
          },
        ],
      },
      faq: {
        badge: "FAQ",
        headline: "FAQ tentang Web Development",
        subheadline: "Jawaban terperinci seputar metodologi rekayasa web, teknologi modern, dan keunggulan layanan Teknalogi.",
        trustedLabel: "Trusted by",
        trustedSub: "Corporations and growing enterprises across Indonesia",
        askButton: "Tanyakan Kebutuhan Web Anda",
        items: [
          {
            id: "faq-ui-ux-vs-dev",
            question: "Apa perbedaan antara UI/UX dan web development?",
            answer: "UI/UX design berfokus pada riset pengguna, perancangan tata letak visual, wireframe, serta kenyamanan alur interaksi pengguna sebelum kode ditulis. Sementara itu, web development adalah proses rekayasa teknis yang menerjemahkan rancangan tersebut menjadi aplikasi web nyata yang berfungsi, mencakup pengkodean antarmuka (frontend), arsitektur database, integrasi logika bisnis (backend), serta konfigurasi server.",
          },
          {
            id: "faq-learning-curve",
            question: "Apakah web development sulit dipelajari?",
            answer: "Tingkat kesulitan bergantung pada kedalaman teknis yang ingin dicapai. Fondasi dasar seperti HTML, CSS, dan JavaScript dasar relatif mudah dipelajari oleh pemula. Namun, membangun arsitektur web enterprise yang skalabel, mengamankan data pengguna, mengintegrasikan sistem kompleks, serta mengoptimalkan Core Web Vitals membutuhkan pemahaman rekayasa perangkat lunak yang komprehensif dan jam terbang tinggi.",
          },
          {
            id: "faq-relevance-2026",
            question: "Apakah web development masih relevan di tahun 2026?",
            answer: "Sangat relevan dan semakin esensial. Di tahun 2026, website bukan sekadar brosur online, melainkan fondasi ekosistem bisnis digital, pusat kendali data mandiri, gerbang transaksi terenkripsi, serta integrasi layanan cerdas yang menjaga kedaulatan bisnis Anda tanpa ketergantungan sepihak pada algoritma platform pihak ketiga.",
          },
          {
            id: "faq-cpp-usage",
            question: "Apakah C++ digunakan untuk web development?",
            answer: "Secara umum, C++ bukan bahasa utama untuk pembuatan halaman web sehari-hari karena ekosistem aplikasi web modern didominasi oleh TypeScript, JavaScript, Python, Go, dan PHP. Meski demikian, C++ memegang peranan krusial pada infrastruktur web berkinerja tinggi, seperti mesin peramban web (browser engine), web server ultra cepat, serta modul WebAssembly (Wasm) untuk komputasi berat di sisi klien.",
          },
          {
            id: "faq-mobile-first",
            question: "Mengapa penting menggunakan desain mobile-first dalam web development?",
            answer: "Mayoritas trafik internet di Indonesia dan dunia saat ini diakses melalui perangkat seluler. Pendekatan mobile-first memastikan struktur halaman, rasio tipografi, dan navigasi dirancang secara efisien untuk layar smartphone terlebih dahulu sebelum diskalakan ke layar desktop. Pendekatan ini juga merupakan parameter mutlak dalam algoritma pengindeksan Google (Mobile-First Indexing).",
          },
          {
            id: "faq-custom-cms",
            question: "Apa keuntungan menggunakan CMS custom dibanding CMS standar?",
            answer: "CMS standar kerap dibebani plugin pihak ketiga yang berlebihan, rentan terhadap celah keamanan, dan memperlambat waktu muat situs. Sebaliknya, CMS custom dirancang khusus mengikuti alur kerja editorial tim internal Anda, sangat ringan, memiliki kontrol akses berbasis peran (RBAC) yang ketat, dan meminimalkan biaya pemeliharaan teknis jangka panjang.",
          },
          {
            id: "faq-security-assurance",
            question: "Bagaimana Teknalogi menjamin keamanan website yang dikembangkan?",
            answer: "Teknalogi menerapkan prinsip zero-trust security sejak baris kode pertama. Kami melengkapi setiap website dengan sertifikat SSL/TLS, mitigasi menyeluruh terhadap kerentanan OWASP Top 10 (seperti SQL Injection dan XSS), sanitasi input yang ketat, pencegahan serangan brute-force, serta konfigurasi server dengan header keamanan standar enterprise.",
          },
          {
            id: "faq-maintenance-services",
            question: "Apa saja layanan maintenance yang disediakan setelah website diluncurkan?",
            answer: "Layanan pemeliharaan berkala kami mencakup pemantauan waktu aktif (uptime) server, pembaruan keamanan sistem dan dependensi, pencadangan (backup) database otomatis terenkripsi, penanganan kendala teknis (bug fix), optimasi performa berkelanjutan, serta dukungan teknis responsif melalui saluran komunikasi langsung.",
          },
          {
            id: "faq-consultation-process",
            question: "Bagaimana proses konsultasi kebutuhan web development di Teknalogi?",
            answer: "Anda dapat menghubungi tim solusi kami melalui tombol konsultasi WhatsApp atau formulir kontak. Kami akan mengagendakan sesi technical discovery untuk mengkaji kebutuhan bisnis, arsitektur sistem, dan ruang lingkup proyek, kemudian menyusun rencana kerja teknis yang transparan sebelum proyek dimulai.",
          },
          {
            id: "faq-internal-training",
            question: "Apakah layanan training disediakan untuk tim internal klien?",
            answer: "Ya, setiap proyek web development yang diserahkan selalu dilengkapi sesi pelatihan langsung bagi tim internal Anda. Kami membekali staf Anda dengan pemahaman operasional CMS, pengelolaan konten artikel dan media, administrasi hak akses, serta panduan dokumentasi tertulis yang mudah dipahami.",
          },
        ],
      },
    },
    softwareDevService: {
      meta: {
        title: "Software Development | PT Teknalogi Transformasi Digital",
        description: "Software house untuk solusi perangkat lunak bisnis Anda. Dari arsitektur scalable hingga integrasi enterprise dan keamanan by design.",
      },
      breadcrumbs: {
        home: "Beranda",
        homeHref: "/id",
        services: "Layanan",
        servicesHref: "/id/layanan",
        current: "Software Development",
      },
      trustBadge: {
        label: "Trusted by",
        sublabel: "Corporations and growing enterprises across Indonesia",
      },
      hero: {
        headline: "Software House untuk Solusi Perangkat Lunak Bisnis Anda",
        description: "Teknalogi menyediakan layanan software house yang dirancang berdasarkan kebutuhan dan alur kerja bisnis Anda. Dari arsitektur scalable hingga integrasi sistem enterprise dan keamanan by design, kami membangun perangkat lunak yang siap mendukung pertumbuhan perusahaan Anda.",
        primaryCta: "Ajukan Konsultasi Kebutuhan Perangkat Lunak",
        primaryCtaHref: "/id/contact",
        secondaryCta: "Pelajari Selengkapnya",
        secondaryCtaHref: "#what-we-deliver",
      },
      quickLinks: {
        title: "Navigasi Cepat",
        links: [
          { label: "What We Deliver?", href: "#what-we-deliver" },
          { label: "About This Service", href: "#about-service" },
          { label: "Explore Solutions", href: "#what-we-deliver" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      features: {
        headline: "Fitur Utama Layanan Software Development",
        subheadline: "Layanan software house kami dibangun di atas kapabilitas yang dirancang untuk memberikan nilai bisnis nyata, dari tahap perancangan hingga dukungan jangka panjang.",
        items: [
          {
            id: "business-driven-design",
            title: "Desain Perangkat Lunak Berbasis Bisnis",
            desc: "Setiap solusi dikembangkan berdasarkan pemahaman mendalam tentang kebutuhan dan alur kerja spesifik bisnis klien. Hasilnya adalah perangkat lunak yang mendukung tujuan operasional secara nyata, bukan sekadar memenuhi spesifikasi teknis.",
            icon: "business",
            glowColor: "from-teal-100/60",
          },
          {
            id: "security-by-design",
            title: "Keamanan By Design",
            desc: "Keamanan diterapkan sejak tahap perancangan, bukan sebagai lapisan tambahan setelah pengembangan selesai. Pendekatan ini memastikan sistem terlindungi dari risiko keamanan yang umum maupun yang spesifik terhadap proses bisnis klien.",
            icon: "shield",
            glowColor: "from-cyan-100/60",
          },
          {
            id: "long-term-warranty",
            title: "Dukungan dan Garansi Jangka Panjang",
            desc: "Kami berkomitmen untuk memberikan dukungan teknis dan pemeliharaan berkelanjutan setelah perangkat lunak diluncurkan, memastikan sistem tetap stabil, aman, dan relevan seiring perkembangan kebutuhan bisnis.",
            icon: "support",
            glowColor: "from-emerald-100/60",
          },
          {
            id: "scalable-architecture",
            title: "Arsitektur Scalable Sesuai Skala Bisnis",
            desc: "Arsitektur sistem dirancang berdasarkan skala serta ruang lingkup kebutuhan bisnis saat ini dan ke depan. Solusi dapat berkembang seiring pertumbuhan organisasi tanpa memerlukan perombakan menyeluruh.",
            icon: "scale",
            glowColor: "from-blue-100/60",
          },
          {
            id: "rbac-access-control",
            title: "Kontrol Akses Berbasis Peran dan Izin",
            desc: "Sistem dilengkapi dengan mekanisme pengaturan akses yang memastikan setiap pengguna hanya dapat mengakses data dan fungsi sesuai peran dan tanggung jawabnya, menjaga keamanan operasional dan kepatuhan internal perusahaan.",
            icon: "lock",
            glowColor: "from-indigo-100/60",
          },
          {
            id: "custom-workflows",
            title: "Alur Kerja Kustom yang Terintegrasi",
            desc: "Setiap alur kerja dalam perangkat lunak dirancang untuk mencerminkan proses bisnis nyata klien, menghasilkan sistem yang terasa intuitif bagi pengguna karena mengikuti cara kerja yang sudah mereka kenal.",
            icon: "workflow",
            glowColor: "from-sky-100/60",
          },
          {
            id: "enterprise-integration",
            title: "Integrasi Sistem Enterprise",
            desc: "Perangkat lunak yang kami bangun dirancang untuk terhubung dengan sistem enterprise yang sudah berjalan di perusahaan Anda, memastikan data dan proses tetap sinkron di seluruh ekosistem TI organisasi.",
            icon: "integration",
            glowColor: "from-violet-100/60",
          },
          {
            id: "maintainable-codebase",
            title: "Arsitektur yang Mudah Dipelihara",
            desc: "Solusi dibangun dengan standar engineering yang memudahkan pemeliharaan, modifikasi, dan pengembangan lanjutan. Kode yang terstruktur dengan baik mengurangi risiko dan biaya dalam siklus hidup perangkat lunak jangka panjang.",
            icon: "code",
            glowColor: "from-purple-100/60",
          },
          {
            id: "modular-systems",
            title: "Arsitektur Sistem Modular dan Terhubung",
            desc: "Pendekatan modular memungkinkan setiap komponen sistem dikembangkan, diperbarui, atau diganti secara independen tanpa mengganggu keseluruhan sistem, memberikan fleksibilitas tinggi dalam pengembangan dan pemeliharaan jangka panjang.",
            icon: "module",
            glowColor: "from-teal-100/60",
          },
        ],
      },
      aboutService: {
        id: "about-service",
        title: "Tentang Layanan Software Development Teknalogi",
        tocTitle: "TABLE OF CONTENTS",
        sections: [
          {
            id: "definisi-software-house",
            tocLabel: "Definisi Software House",
            title: "Apa Itu Software House dan Perannya dalam Bisnis",
            paragraphs: [
              "Software house adalah perusahaan yang berspesialisasi dalam pengembangan perangkat lunak kustom untuk kebutuhan bisnis yang spesifik. Berbeda dengan solusi siap pakai yang dirancang untuk kebutuhan umum, software house membangun sistem yang disesuaikan langsung dengan proses, struktur, dan tujuan bisnis kliennya.",
              "Perusahaan dari berbagai skala, mulai dari UKM hingga enterprise, membutuhkan perangkat lunak yang tidak hanya berfungsi secara teknis, tetapi juga mendukung cara mereka bekerja. Solusi yang tidak sesuai dengan alur kerja nyata cenderung menghambat produktivitas. Di sinilah software house berperan: memastikan teknologi yang dibangun relevan, dapat diintegrasikan, dan mampu berkembang bersama bisnis."
            ],
          },
          {
            id: "manfaat-software-kustom",
            tocLabel: "Manfaat Software Kustom",
            title: "Manfaat Pengembangan Perangkat Lunak Kustom untuk Perusahaan",
            paragraphs: [
              "Perangkat lunak kustom memberikan keunggulan yang tidak bisa diperoleh dari solusi siap pakai. Ketika sistem dibangun berdasarkan kebutuhan spesifik perusahaan, hasilnya adalah alat kerja yang benar-benar mendukung operasional, bukan kompromi dari fitur yang tersedia."
            ],
            bullets: [
              {
                label: "Kesesuaian dengan proses bisnis unik",
                text: "setiap perusahaan memiliki alur kerja yang berbeda. Perangkat lunak kustom dirancang untuk mencerminkan proses tersebut, bukan memaksa tim menyesuaikan diri dengan sistem yang kaku.",
              },
              {
                label: "Integrasi dengan sistem yang sudah ada",
                text: "solusi kustom dapat dibangun untuk terhubung dengan sistem enterprise yang sudah berjalan, sehingga data dan proses tetap sinkron tanpa duplikasi kerja.",
              },
              {
                label: "Skalabilitas sesuai pertumbuhan bisnis",
                text: "arsitektur yang dirancang dengan baik memungkinkan sistem berkembang seiring bertambahnya pengguna, volume transaksi, atau kompleksitas operasional.",
              },
              {
                label: "Efisiensi operasional yang terukur",
                text: "dengan otomatisasi proses yang tepat sasaran, perusahaan dapat mengurangi pekerjaan manual, meminimalkan kesalahan, dan mengalokasikan sumber daya secara lebih efektif.",
              },
            ],
          },
          {
            id: "pilar-layanan",
            tocLabel: "Pilar Layanan",
            title: "Pilar Utama Layanan Software Development Teknalogi",
            paragraphs: [
              "Pendekatan kami dalam pengembangan perangkat lunak didasarkan pada prinsip-prinsip yang memastikan solusi yang dihasilkan tidak hanya berfungsi hari ini, tetapi juga dapat diandalkan dalam jangka panjang."
            ],
            bullets: [
              {
                label: "Desain berbasis kebutuhan bisnis",
                text: "setiap solusi dimulai dari pemahaman mendalam tentang tujuan bisnis dan alur kerja klien. Kami merancang sistem yang menjawab tantangan bisnis yang nyata, bukan sekadar memenuhi daftar fitur.",
              },
              {
                label: "Arsitektur scalable dan pemilihan teknologi yang tepat",
                text: "arsitektur sistem dipilih berdasarkan skala dan ruang lingkup kebutuhan bisnis. Pendekatan ini memastikan solusi tidak over-engineered untuk kebutuhan saat ini, namun tetap siap mengakomodasi pertumbuhan di masa mendatang.",
              },
              {
                label: "Integrasi sistem enterprise",
                text: "banyak perusahaan sudah memiliki ekosistem sistem yang berjalan. Kami membangun perangkat lunak yang dapat terhubung dengan sistem tersebut, sehingga data mengalir secara konsisten di seluruh organisasi.",
              },
              {
                label: "Keamanan by design dan kontrol akses berbasis peran",
                text: "keamanan bukan tambahan di akhir pengembangan. Kami menerapkan prinsip keamanan sejak tahap perancangan, termasuk mekanisme kontrol akses yang memastikan setiap pengguna hanya dapat mengakses informasi dan fungsi sesuai peran dan tanggung jawabnya.",
              },
              {
                label: "Engineering yang mudah dipelihara dan dukungan jangka panjang",
                text: "kode yang baik dapat dipahami, dimodifikasi, dan dikembangkan oleh tim di masa depan. Kami membangun solusi dengan standar engineering yang memudahkan pemeliharaan, dan mendukung klien dengan komitmen dukungan teknis berkelanjutan.",
              },
            ],
          },
          {
            id: "konteks-pasar-indonesia",
            tocLabel: "Konteks Pasar Indonesia",
            title: "Relevansi Layanan Software Development untuk Pasar Indonesia",
            paragraphs: [
              "Bisnis di Indonesia menghadapi tantangan yang khas: regulasi lokal yang terus berkembang, kebutuhan untuk mendukung tim yang tersebar di berbagai lokasi, serta tekanan untuk meningkatkan efisiensi di tengah persaingan yang semakin ketat. Solusi perangkat lunak yang efektif harus mempertimbangkan konteks ini.",
              "Kebutuhan perusahaan korporat, enterprise, dan UKM di Indonesia berbeda satu sama lain. Perusahaan besar membutuhkan sistem yang dapat menangani kompleksitas organisasi dan volume data yang tinggi, sementara UKM memerlukan solusi yang efisien dan mudah diadopsi tanpa infrastruktur yang berlebihan. Pendekatan kami yang fleksibel memungkinkan penyesuaian solusi dengan skala dan kebutuhan spesifik setiap klien."
            ],
          },
        ],
      },
      faq: {
        headline: "FAQ tentang Layanan Software Development",
        subheadline: "Pertanyaan umum mengenai proses pengembangan, arsitektur sistem, dan layanan software house Teknalogi.",
        trustedLabel: "Trusted by",
        trustedSub: "Corporations and growing enterprises across Indonesia",
        askButton: "Konsultasi Kebutuhan Software",
        items: [
          {
            question: "Apa itu software house?",
            answer: "Software house adalah perusahaan yang berspesialisasi dalam merancang dan mengembangkan perangkat lunak kustom sesuai kebutuhan bisnis klien. Berbeda dengan produk perangkat lunak siap pakai, software house membangun solusi yang disesuaikan dengan proses, struktur organisasi, dan tujuan spesifik setiap perusahaan.",
          },
          {
            question: "Bagaimana cara kerja software house dalam mengembangkan perangkat lunak?",
            answer: "Proses kerja dimulai dari tahap discovery dan analisis alur kerja bisnis, perancangan arsitektur dan UI/UX sistem, pengembangan dengan sprint berkala, pengujian komprehensif (QA), hingga peluncuran sistem dan pelatihan tim operasional klien.",
          },
          {
            question: "Apa manfaat menggunakan layanan software house untuk perusahaan saya?",
            answer: "Perusahaan Anda mendapatkan solusi yang presisi terhadap proses kerja internal, efisiensi operasional tanpa batasan template, kepemilikan aset digital penuh, serta kemudahan integrasi dengan sistem enterprise yang sudah ada.",
          },
          {
            question: "Layanan apa saja yang biasanya disediakan oleh software house?",
            answer: "Layanan mencakup perancangan arsitektur enterprise, pengembangan aplikasi web & mobile, modernisasi sistem warisan (legacy systems), integrasi API & ERP, audit keamanan perangkat lunak, serta pemeliharaan dan dukungan teknis SLA berkelanjutan.",
          },
          {
            question: "Bagaimana Teknalogi memastikan keamanan perangkat lunak yang dikembangkan?",
            answer: "Kami menerapkan prinsip keamanan by design sejak perancangan awal, termasuk kontrol akses berbasis peran (RBAC), enkripsi data in-transit dan at-rest, mitigasi kerentanan OWASP Top 10, dan pengujian penetrasi berkala.",
          },
          {
            question: "Apakah solusi perangkat lunak yang dibangun dapat berkembang sesuai pertumbuhan bisnis saya?",
            answer: "Ya, setiap sistem dibangun dengan arsitektur modular dan scalable. Komponen backend, basis data, dan antarmuka dirancang agar dapat menangani peningkatan volume transaksi, data, dan pengguna tanpa harus merombak fondasi sistem.",
          },
          {
            question: "Bagaimana dukungan jangka panjang diberikan setelah perangkat lunak diluncurkan?",
            answer: "Kami menyediakan paket garansi fungsionalitas, pemantauan performa sistem, update dependensi keamanan rutin, perbaikan bug, dan dukungan teknis responsif melalui service level agreement (SLA).",
          },
          {
            question: "Apakah layanan software house cocok untuk UKM maupun perusahaan besar?",
            answer: "Sangat cocok. Untuk UKM kami merancang solusi yang terfokus, efisien, dan cepat diimplementasikan. Untuk enterprise kami menyediakan arsitektur terdistribusi yang mampu menangani tata kelola multi-entitas, volume data besar, dan regulasi ketat.",
          },
          {
            question: "Apa perbedaan antara perangkat lunak kustom dan solusi perangkat lunak siap pakai?",
            answer: "Solusi siap pakai dirancang untuk kebutuhan umum sehingga sering memaksakan alur kerja yang kaku dan biaya langganan berulang. Perangkat lunak kustom dirancang tepat mengikuti proses bisnis Anda, memberikan keunggulan kompetitif, dan asetnya menjadi milik perusahaan sepenuhnya.",
          },
          {
            question: "Bagaimana cara memulai konsultasi kebutuhan perangkat lunak dengan Teknalogi?",
            answer: "Anda dapat menghubungi tim solusi kami melalui tombol konsultasi WhatsApp atau formulir kontak. Kami akan menjadwalkan sesi discovery teknis untuk memahami proses bisnis dan kebutuhan arsitektur Anda tanpa komitmen awal.",
          },
        ],
      },
    },
    mobileDevService: {
        meta: {
          title: 'Pengembangan Aplikasi Mobile | PT Teknalogi Transformasi Digital',
          description: 'Jasa development aplikasi mobile iOS dan Android untuk solusi bisnis yang aman dan scalable. Arsitektur modular, keamanan by design, dan pengujian menyeluruh.',
        },
        breadcrumbs: {
          home: 'Beranda',
          homeHref: '/id',
          services: 'Layanan',
          servicesHref: '/id/layanan',
          current: 'Pengembangan Aplikasi Mobile',
        },
        trustBadge: {
          label: 'Dipercaya oleh',
          sublabel: 'Perusahaan dan korporasi di seluruh Indonesia',
        },
        hero: {
          headline: 'Jasa Development Aplikasi Mobile untuk Solusi Bisnis yang Aman dan Scalable',
          description: 'Teknalogi membantu perusahaan dan UMKM menghadirkan aplikasi mobile yang berpusat pada pengguna, dibangun dengan teknologi yang sesuai kebutuhan, dan didukung arsitektur yang aman serta scalable. Dari pengembangan native hingga cross-platform, kami merancang solusi yang selaras dengan tujuan bisnis dan siap berkembang bersama organisasi Anda.',
          primaryCta: 'Minta Konsultasi',
          primaryCtaHref: '/id/contact',
          secondaryCta: 'Pelajari Selengkapnya',
          secondaryCtaHref: '#what-we-deliver',
        },
        quickLinks: {
          links: [
            { label: 'What We Deliver?', href: '#what-we-deliver' },
            { label: 'About This Service', href: '#about-service' },
            { label: 'Explore Solutions', href: '#what-we-deliver' },
            { label: 'FAQ', href: '#faq' },
          ],
        },
        features: {
          headline: 'Fitur Utama Layanan Mobile App Development',
          subheadline: 'Setiap kapabilitas dirancang untuk menghasilkan aplikasi mobile yang fungsional, aman, dan memberikan nilai nyata bagi operasional maupun pertumbuhan bisnis Anda.',
          items: [
            {
              id: 'user-centric',
              title: 'Desain Berpusat pada Pengguna',
              desc: 'Kami merancang antarmuka dan pengalaman pengguna yang intuitif, relevan dengan kebutuhan audiens, dan mendukung konversi serta retensi pengguna yang optimal.',
              icon: 'user-centric',
              glowColor: 'from-blue-100/60',
            },
            {
              id: 'security-by-design',
              title: 'Keamanan Sejak Awal Perancangan',
              desc: 'Prinsip keamanan diterapkan dari tahap arsitektur, termasuk perlindungan data pengguna, enkripsi komunikasi jaringan, dan kepatuhan terhadap standar keamanan yang relevan.',
              icon: 'shield',
              glowColor: 'from-indigo-100/60',
            },
            {
              id: 'performance-optimization',
              title: 'Optimalisasi Performa dan Perangkat',
              desc: 'Aplikasi dioptimalkan agar responsif, hemat konsumsi baterai, dan berjalan stabil di berbagai tipe perangkat serta kondisi jaringan yang dinamis.',
              icon: 'performance',
              glowColor: 'from-sky-100/60',
            },
            {
              id: 'native-cross-platform',
              title: 'Pengembangan Native dan Cross-Platform',
              desc: 'Kami menyediakan fleksibilitas pendekatan pengembangan, baik native (iOS dan Android) untuk performa optimal maupun cross-platform (seperti Flutter atau React Native) untuk efisiensi biaya dan waktu.',
              icon: 'cross-platform',
              glowColor: 'from-cyan-100/60',
            },
            {
              id: 'backend-api-integration',
              title: 'Integrasi Sistem dan Backend',
              desc: 'Aplikasi mobile kami dirancang untuk terhubung lancar dengan sistem backend yang sudah ada, database internal, payment gateway, maupun API pihak ketiga.',
              icon: 'api',
              glowColor: 'from-teal-100/60',
            },
            {
              id: 'quality-assurance',
              title: 'Pengujian Komprehensif dan Device Lab',
              desc: 'Setiap build melewati serangkaian pengujian fungsional, kompatibilitas perangkat nyata, performa, dan keamanan sebelum dirilis ke publik.',
              icon: 'qa',
              glowColor: 'from-sky-100/60',
            },
            {
              id: 'purpose-fit-tech',
              title: 'Teknologi Sesuai Kebutuhan Nyata',
              desc: 'Kami tidak memaksakan satu teknologi untuk semua proyek. Pemilihan stack didasarkan pada skala aplikasi, target pengguna, dan rencana pengembangan jangka panjang.',
              icon: 'architecture',
              glowColor: 'from-violet-100/60',
            },
            {
              id: 'scalable-architecture',
              title: 'Arsitektur Scalable untuk Masa Depan',
              desc: 'Fondasi kode dan infrastruktur dirancang modular agar aplikasi mudah dikembangkan dengan fitur baru seiring pertumbuhan basis pengguna Anda.',
              icon: 'scale',
              glowColor: 'from-indigo-100/60',
            },
            {
              id: 'continuous-maintenance',
              title: 'Pemeliharaan dan Dukungan Berkelanjutan',
              desc: 'Dukungan kami berlanjut setelah peluncuran, mencakup pembaruan sistem operasi berkala, perbaikan bug, pemantauan performa, dan rilis fitur lanjutan.',
              icon: 'maintenance',
              glowColor: 'from-blue-100/60',
            },
          ],
        },
        aboutService: {
          id: 'about-service',
          title: 'Tentang Layanan Mobile App Development Teknalogi',
          tocTitle: 'DAFTAR ISI',
          sections: [
            {
              id: 'definisi-pengembangan-aplikasi-mobile',
              tocLabel: 'Definisi Mobile App',
              title: 'Apa Itu Mobile App Development dan Manfaatnya untuk Bisnis',
              paragraphs: [
                'Pengembangan aplikasi mobile adalah proses perancangan, pembangunan, pengujian, dan peluncuran perangkat lunak yang dirancang khusus untuk berjalan pada perangkat bergerak seperti smartphone dan tablet. Proses ini mencakup seluruh siklus pengembangan, mulai dari riset kebutuhan pengguna, perancangan antarmuka (UI/UX), penulisan kode pada sisi klien dan integrasi server, hingga distribusi melalui toko aplikasi resmi.',
                'Bagi organisasi modern, aplikasi mobile bukan sekadar kanal digital tambahan. Aplikasi mobile adalah media langsung untuk berinteraksi dengan pelanggan, menyederhanakan operasional harian, dan membangun loyalitas brand yang kuat. Di tengah pertumbuhan pengguna ponsel pintar yang masif, kehadiran aplikasi mobile yang andal menjadi keunggulan strategis yang nyata.',
              ],
            },
            {
              id: 'pendekatan-pengembangan',
              tocLabel: 'Pendekatan Pengembangan',
              title: 'Pendekatan Pengembangan: Native, Cross-Platform, dan Hybrid',
              paragraphs: [
                'Memilih pendekatan teknis yang tepat sangat menentukan kecepatan respons aplikasi, efisiensi anggaran, dan kemudahan pemeliharaan jangka panjang. Terdapat tiga pendekatan utama dalam rekayasa mobile modern:',
              ],
              bullets: [
                {
                  label: 'Pengembangan native',
                  text: 'aplikasi dibangun khusus untuk sistem operasi tertentu menggunakan Swift untuk iOS atau Kotlin untuk Android, memberikan kinerja runtime maksimal dan akses penuh ke fitur perangkat keras.',
                },
                {
                  label: 'Pengembangan cross-platform',
                  text: 'menggunakan satu basis kode bersama seperti Flutter atau React Native untuk menghasilkan aplikasi Android dan iOS secara simultan, mempercepat waktu peluncuran ke pasar dan efisiensi biaya.',
                },
                {
                  label: 'Pendekatan hybrid',
                  text: 'memadukan elemen web di dalam kontainer native, cocok untuk aplikasi berbasis konten yang membutuhkan waktu implementasi cepat dengan kebutuhan sensor perangkat keras yang sederhana.',
                },
              ],
            },
            {
              id: 'nilai-utama-layanan',
              tocLabel: 'Nilai Utama Layanan',
              title: 'Nilai Utama Layanan Mobile App Development Teknalogi',
              paragraphs: [
                'Layanan pengembangan mobile kami dibangun untuk menjawab tantangan operasional nyata perusahaan, bukan sekadar menghasilkan aplikasi yang berfungsi. Setiap proyek berakar pada delapan nilai utama:',
              ],
              bullets: [
                {
                  label: 'Desain berpusat pada pengguna',
                  text: 'antarmuka dan alur interaksi dirancang berdasarkan perilaku pengguna nyata untuk mendorong adopsi cepat dan retensi tinggi.',
                },
                {
                  label: 'Teknologi sesuai kebutuhan',
                  text: 'pemilihan framework dan arsitektur dilakukan secara objektif sesuai kapasitas bisnis tanpa kompleksitas berlebih.',
                },
                {
                  label: 'Keamanan sejak awal',
                  text: 'proteksi data kredensial, enkripsi sesi, dan validasi komunikasi jaringan diintegrasikan langsung ke fondasi sistem.',
                },
                {
                  label: 'Integrasi sistem yang andal',
                  text: 'konektivitas stabil ke database enterprise, payment gateway, dan sistem backend internal organisasi.',
                },
                {
                  label: 'Arsitektur modular yang scalable',
                  text: 'struktur kode yang rapi memungkinkan penambahan modul baru tanpa risiko merusak stabilitas sistem utama.',
                },
                {
                  label: 'Optimalisasi performa perangkat',
                  text: 'penyesuaian ukuran paket aplikasi, efisiensi memori, dan caching cerdas agar aplikasi tetap responsif di jaringan terbatas.',
                },
                {
                  label: 'Pengujian perangkat komprehensif',
                  text: 'quality assurance terstruktur pada perangkat fisik nyata untuk memastikan konsistensi tampilan dan performa.',
                },
                {
                  label: 'Pemeliharaan dan dukungan berkelanjutan',
                  text: 'pendampingan teknis jangka panjang untuk pembaruan OS berkala, mitigasi bug, dan kepatuhan toko aplikasi.',
                },
              ],
            },
            {
              id: 'proses-dan-dukungan',
              tocLabel: 'Proses dan Dukungan',
              title: 'Siklus Pengembangan Terstruktur dan Dukungan Purna Jual',
              paragraphs: [
                'Keberhasilan peluncuran aplikasi mobile memerlukan proses rekayasa yang transparan dan terukur. Pendekatan kami mencakup enam tahapan terkoordinasi:',
              ],
              bullets: [
                {
                  label: 'Discovery dan analisis kebutuhan',
                  text: 'memetakan tujuan bisnis, profil target pengguna, dan batasan infrastruktur teknis sebelum penulisan kode dimulai.',
                },
                {
                  label: 'Perancangan UI/UX interaktif',
                  text: 'membuat wireframe detail dan sistem desain interaktif yang divalidasi langsung terhadap kebutuhan pengguna.',
                },
                {
                  label: 'Pengembangan berbasis sprint',
                  text: 'penulisan kode modular dan integrasi API yang dipantau melalui checkpoint sprint dua mingguan secara transparan.',
                },
                {
                  label: 'Pengujian kualitas menyeluruh',
                  text: 'validasi stabilitas, kebocoran memori, dan ketahanan koneksi pada berbagai perangkat Android dan iOS fisik.',
                },
                {
                  label: 'Penerbitan ke app store',
                  text: 'pengelolaan seluruh proses verifikasi, kepatuhan privasi, dan deployment ke Google Play Store serta Apple App Store.',
                },
                {
                  label: 'Dukungan teknis dan evolusi fitur',
                  text: 'penyediaan SLA pemeliharaan berkala untuk adaptasi OS baru, update keamanan, dan penambahan kapabilitas aplikasi.',
                },
              ],
            },
          ],
        },
        faq: {
          headline: 'FAQ tentang Pengembangan Aplikasi Mobile',
          subheadline: 'Jawaban lengkap seputar arsitektur mobile, pendekatan native vs cross-platform, keamanan aplikasi, hingga penerbitan ke toko aplikasi.',
          trustedLabel: 'Dipercaya oleh',
          trustedSub: 'Perusahaan dan korporasi di seluruh Indonesia',
          askButton: 'Konsultasi Kebutuhan Mobile App',
          items: [
            {
              question: 'Apa itu pengembangan aplikasi mobile?',
              answer: 'Pengembangan aplikasi mobile adalah proses menyeluruh yang mencakup perancangan antarmuka, penulisan kode klien native atau cross-platform, integrasi backend API, pengujian pada perangkat fisik, hingga penerbitan ke toko aplikasi resmi seperti Google Play Store dan Apple App Store.',
            },
            {
              question: 'Apa perbedaan antara aplikasi native dan cross-platform?',
              answer: 'Aplikasi native dibangun khusus untuk satu sistem operasi (Swift untuk iOS, Kotlin untuk Android) untuk kinerja optimal dan integrasi perangkat keras mendalam. Aplikasi cross-platform menggunakan satu basis kode (seperti Flutter atau React Native) untuk berjalan di iOS dan Android sekaligus, menghemat biaya dan waktu peluncuran.',
            },
            {
              question: 'Berapa estimasi biaya pembuatan aplikasi mobile?',
              answer: 'Biaya pengembangan dihitung berdasarkan kompleksitas fitur, pilihan platform (iOS, Android, atau keduanya), kebutuhan integrasi backend/API, serta standar keamanan yang diperlukan. Kami memberikan estimasi transparan dan bertahap setelah sesi discovery awal.',
            },
            {
              question: 'Bagaimana alur kerja pengembangan mobile di Teknalogi?',
              answer: 'Kami menggunakan metodologi agile terstruktur: discovery kebutuhan, perancangan UI/UX interaktif, pengembangan berbasis sprint dua mingguan, pengujian komprehensif pada perangkat fisik, penerbitan ke toko aplikasi, serta dukungan pemeliharaan berkelanjutan.',
            },
            {
              question: 'Mengapa aspek keamanan sangat penting dalam aplikasi mobile?',
              answer: 'Aplikasi mobile berjalan di lingkungan perangkat pengguna yang rentan terhadap jaringan publik dan risiko kehilangan fisik. Kami menerapkan enkripsi data lokal, certificate pinning, otentikasi token aman, dan proteksi dari reverse-engineering untuk melindungi data sensitif perusahaan.',
            },
            {
              question: 'Apakah Teknalogi menyediakan layanan pemeliharaan setelah aplikasi diluncurkan?',
              answer: 'Ya. Kami menyediakan paket pemeliharaan berkelanjutan dengan SLA terukur yang mencakup pembaruan kompatibilitas OS tahunan, perbaikan bug darurat, pemantauan performa runtime, dan penambahan fitur baru.',
            },
            {
              question: 'Bagaimana cara Teknalogi mengoptimalkan performa aplikasi mobile?',
              answer: 'Kami meminimalkan ukuran build aplikasi, menerapkan manajemen memori yang efisien, kompresi aset grafis, dan caching data offline agar aplikasi tetap cepat dan hemat baterai di berbagai kondisi jaringan.',
            },
            {
              question: 'Apa yang dimaksud dengan integrasi backend dan API pada aplikasi mobile?',
              answer: 'Integrasi backend dan API adalah proses menghubungkan aplikasi pada perangkat pengguna dengan server cloud, database perusahaan, gateway pembayaran, serta sistem internal seperti ERP dan CRM agar pertukaran data berjalan secara real-time dan aman.',
            },
            {
              question: 'Apakah Teknalogi membantu proses penerbitan ke Google Play Store dan Apple App Store?',
              answer: 'Ya. Tim kami mendampingi seluruh proses pendaftaran akun pengembang, penyiapan aset pemasaran, pemenuhan pedoman privasi platform, penanganan review penolakan (jika ada), hingga aplikasi berhasil dirilis ke publik.',
            },
            {
              question: 'Bagaimana cara memulai konsultasi kebutuhan aplikasi mobile dengan Teknalogi?',
              answer: 'Anda dapat menghubungi tim solusi kami melalui tombol konsultasi WhatsApp atau formulir kontak. Kami akan mengatur sesi diskusi teknis awal untuk memahami kebutuhan produk dan rencana pengembangan Anda tanpa komitmen di muka.',
            },
          ],
        },
      },
    workflowAutoService: {
      meta: {
        title: 'Solusi Otomatisasi Workflow | PT Teknalogi Transformasi Digital',
        description: 'Layanan workflow automation dan integrasi sistem untuk optimasi proses bisnis. Desain alur kerja kustom, dukungan AI, dan monitoring performa berkelanjutan.',
      },
      breadcrumbs: {
        home: 'Beranda',
        homeHref: '/id',
        services: 'Layanan',
        servicesHref: '/id/layanan',
        current: 'Workflow Automation',
      },
      trustBadge: {
        label: 'Dipercaya oleh',
        sublabel: 'Pelanggan di seluruh dunia',
      },
      hero: {
        headline: 'Solusi Otomatisasi Workflow untuk Optimasi Proses Bisnis',
        description: 'Teknalogi menyediakan layanan Workflow Automation yang membantu bisnis mengotomatisasi proses, mengintegrasikan sistem dan API, serta meningkatkan efisiensi operasional. Dengan desain workflow kustom, dukungan AI, dan monitoring berkelanjutan, solusi ini dirancang untuk kebutuhan korporasi, enterprise, maupun UMKM di Indonesia.',
        primaryCta: 'Ajukan Konsultasi Gratis',
        primaryCtaHref: '/id/contact',
        secondaryCta: 'Pelajari Selengkapnya',
        secondaryCtaHref: '#what-we-deliver',
      },
      quickLinks: {
        links: [
          { label: 'What We Deliver?', href: '#what-we-deliver' },
          { label: 'About This Service', href: '#about-service' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      features: {
        headline: 'Kapabilitas Utama Layanan Workflow Automation',
        subheadline: 'Setiap fitur dirancang untuk menjawab tantangan operasional nyata yang dihadapi bisnis korporasi, enterprise, dan UMKM di Indonesia.',
        items: [
          {
            id: 'custom-process',
            title: 'Otomasi Proses Bisnis Kustom',
            desc: 'Kami merancang workflow yang disesuaikan dengan kebutuhan spesifik bisnis Anda, bukan template generik. Setiap proses dianalisis dan diotomatisasi sesuai logika operasional yang sudah berjalan, sehingga transisi ke otomasi berjalan lebih lancar dan hasilnya lebih relevan.',
            icon: 'workflow',
          },
          {
            id: 'ai-driven',
            title: 'Otomasi Berbasis AI',
            desc: 'Untuk proses yang membutuhkan kemampuan adaptif lebih dari sekadar aturan tetap, kami mengintegrasikan komponen AI yang dapat mengenali pola, mengklasifikasikan data, dan merespons kondisi yang berubah secara lebih dinamis.',
            icon: 'ai',
          },
          {
            id: 'flexible-deployment',
            title: 'Opsi Deployment Fleksibel',
            desc: 'Kami menyesuaikan implementasi dengan infrastruktur TI yang sudah ada, baik di lingkungan cloud, on-premise, maupun hybrid. Fleksibilitas ini memungkinkan bisnis untuk memulai otomasi tanpa harus melakukan perombakan sistem yang besar terlebih dahulu.',
            icon: 'deployment',
          },
          {
            id: 'modular-design',
            title: 'Desain Workflow Modular dan Terstruktur',
            desc: 'Pendekatan modular dalam desain workflow memudahkan pengelolaan, pengujian, dan pengembangan proses secara bertahap. Setiap modul dapat diperbarui atau diperluas secara independen tanpa harus membangun ulang seluruh alur kerja dari awal.',
            icon: 'modular',
          },
          {
            id: 'system-api-integration',
            title: 'Integrasi Sistem dan API',
            desc: 'Workflow yang efektif membutuhkan sistem yang dapat saling berkomunikasi. Kami menyediakan integrasi antar berbagai sistem dan API sehingga data mengalir dengan benar, proses tidak terputus, dan informasi selalu tersinkronisasi di seluruh platform bisnis Anda.',
            icon: 'api',
          },
          {
            id: 'data-transformation',
            title: 'Transformasi dan Sinkronisasi Data',
            desc: 'Data dari berbagai sumber sering kali hadir dalam format yang berbeda. Kami mengelola transformasi dan sinkronisasi data secara otomatis sehingga setiap sistem menerima informasi dalam format yang tepat dan selalu diperbarui sesuai kondisi terkini.',
            icon: 'database',
          },
          {
            id: 'continuous-monitoring',
            title: 'Monitoring dan Optimasi Berkelanjutan',
            desc: 'Performa workflow dipantau secara berkelanjutan untuk mendeteksi anomali, keterlambatan, atau penurunan efisiensi sejak dini. Berdasarkan data aktual, kami melakukan penyesuaian berkala agar proses bisnis Anda selalu berjalan pada kondisi optimal.',
            icon: 'monitoring',
          },
          {
            id: 'human-in-the-loop',
            title: 'Human-in-the-Loop Automation',
            desc: 'Tidak semua keputusan dapat diserahkan sepenuhnya kepada sistem. Kami membangun titik intervensi manusia ke dalam alur kerja otomatis untuk proses yang memerlukan validasi, persetujuan, atau penilaian kritis, tanpa mengorbankan efisiensi keseluruhan workflow.',
            icon: 'governance',
          },
          {
            id: 'error-handling',
            title: 'Penanganan Error dan Keandalan',
            desc: 'Setiap workflow yang kami bangun dilengkapi dengan mekanisme deteksi dan penanganan error. Ketika terjadi kondisi tidak terduga, sistem dapat merespons secara otomatis, memberikan notifikasi, atau mengambil jalur alternatif untuk menjaga proses tetap berjalan.',
            icon: 'shield',
          },
        ],
      },
      aboutService: {
        id: 'about-service',
        title: 'Workflow Automation: Konsep, Manfaat, dan Penerapannya',
        tocTitle: 'DAFTAR ISI',
        sections: [
          {
            id: 'definisi-workflow-automation',
            tocLabel: 'Definisi Workflow Automation',
            title: 'Apa Itu Workflow Automation?',
            paragraphs: [
              'Workflow automation adalah pendekatan untuk mengotomatisasi serangkaian tugas atau proses bisnis yang sebelumnya dikerjakan secara manual. Dengan mendefinisikan aturan, urutan langkah, dan kondisi tertentu, sistem dapat menjalankan proses tersebut secara otomatis, konsisten, dan lebih cepat tanpa memerlukan intervensi manusia di setiap tahapnya.',
              'Berbeda dari otomasi yang hanya menyentuh satu tugas tunggal, workflow automation mencakup rangkaian proses yang saling berkaitan, mulai dari pemicu awal hingga hasil akhir. Beberapa sistem, tim, atau sumber data dapat terhubung dalam satu alur kerja yang terkoordinasi. Bagi bisnis korporasi, enterprise, maupun UMKM di Indonesia, pendekatan ini memberikan fondasi yang lebih kuat untuk efisiensi operasional dan skalabilitas jangka panjang.',
            ],
          },
          {
            id: 'manfaat-bisnis',
            tocLabel: 'Manfaat Bisnis',
            title: 'Manfaat Bisnis dari Workflow Automation',
            paragraphs: [
              'Penerapan workflow automation membawa dampak nyata pada cara bisnis beroperasi sehari-hari. Beberapa manfaat utama yang dapat dirasakan antara lain:',
            ],
            bullets: [
              {
                label: 'Efisiensi operasional yang lebih tinggi',
                text: 'Proses yang sebelumnya membutuhkan banyak langkah manual dapat diselesaikan secara otomatis, membebaskan tim untuk fokus pada pekerjaan bernilai lebih tinggi.',
              },
              {
                label: 'Pengurangan kesalahan',
                text: 'Otomasi mengurangi risiko human error yang umum terjadi dalam proses berulang, seperti entri data, persetujuan dokumen, atau pengiriman notifikasi.',
              },
              {
                label: 'Kecepatan proses yang meningkat',
                text: 'Alur kerja otomatis berjalan tanpa jeda yang tidak perlu, sehingga respons terhadap permintaan internal maupun eksternal menjadi lebih cepat.',
              },
              {
                label: 'Pengambilan keputusan yang lebih baik',
                text: 'Data yang dikumpulkan dan disinkronkan secara otomatis memberikan gambaran yang lebih akurat dan terkini untuk mendukung keputusan bisnis.',
              },
              {
                label: 'Skalabilitas yang lebih mudah',
                text: 'Workflow yang sudah terstruktur dapat diperluas seiring pertumbuhan bisnis tanpa harus membangun ulang proses dari awal.',
              },
            ],
            closingParagraph: 'Bagi bisnis di Indonesia yang sedang menjalani transformasi digital, workflow automation menjadi salah satu langkah praktis yang dapat memberikan hasil terukur dalam waktu relatif singkat.',
          },
          {
            id: 'fitur-utama',
            tocLabel: 'Fitur Utama',
            title: 'Fitur Utama Layanan Workflow Automation Teknalogi',
            paragraphs: [
              'Kami merancang layanan workflow automation dengan mempertimbangkan kebutuhan bisnis yang beragam. Setiap komponen dirancang untuk saling melengkapi dan dapat disesuaikan dengan kondisi operasional masing-masing klien:',
            ],
            bullets: [
              {
                label: 'Otomasi proses bisnis kustom',
                text: 'Kami membantu merancang dan mengimplementasikan workflow yang sesuai dengan kebutuhan unik bisnis Anda, bukan solusi generik yang dipaksakan.',
              },
              {
                label: 'Integrasi sistem dan API',
                text: 'Workflow yang efektif membutuhkan konektivitas antar sistem. Kami menyediakan integrasi yang memastikan data mengalir dengan benar di antara berbagai platform yang digunakan bisnis Anda.',
              },
              {
                label: 'Desain workflow kustom dan human-in-the-loop',
                text: 'Tidak semua proses dapat sepenuhnya diotomatisasi. Kami mendukung titik-titik intervensi manusia dalam alur kerja untuk validasi, persetujuan, atau pengambilan keputusan kritis.',
              },
              {
                label: 'Otomasi berbasis AI',
                text: 'Untuk proses yang membutuhkan kemampuan adaptif, kami mengintegrasikan komponen AI yang dapat membantu sistem mengenali pola data dan merespons kondisi yang berubah.',
              },
              {
                label: 'Transformasi dan sinkronisasi data',
                text: 'Data dari berbagai sumber dapat diubah formatnya dan disinkronkan secara otomatis, memastikan konsistensi informasi di seluruh sistem bisnis.',
              },
              {
                label: 'Penanganan error dan keandalan',
                text: 'Kami membangun mekanisme deteksi dan penanganan error ke dalam setiap workflow untuk meminimalkan gangguan dan menjaga proses tetap berjalan meski terjadi kondisi tidak terduga.',
              },
              {
                label: 'Opsi deployment fleksibel',
                text: 'Layanan dapat diimplementasikan sesuai infrastruktur TI yang sudah ada, baik di lingkungan cloud, on-premise, maupun hybrid.',
              },
              {
                label: 'Monitoring dan optimasi berkelanjutan',
                text: 'Kami menyediakan pemantauan performa workflow secara berkelanjutan dan melakukan penyesuaian untuk menjaga efisiensi proses seiring waktu.',
              },
            ],
          },
          {
            id: 'fleksibilitas-solusi',
            tocLabel: 'Fleksibilitas Solusi',
            title: 'Fleksibilitas untuk Berbagai Tipe Bisnis',
            paragraphs: [
              'Kebutuhan workflow automation berbeda-beda tergantung pada skala, kompleksitas, dan industri bisnis. Perusahaan besar dengan ratusan proses lintas departemen menghadapi tantangan yang berbeda dibandingkan UMKM yang baru mulai mengotomatisasi operasional intinya.',
              'Untuk korporasi dan enterprise, kami dapat menangani workflow yang kompleks dengan banyak dependensi sistem dan kebutuhan integrasi yang luas. Untuk UMKM, kami membantu mengidentifikasi proses mana yang paling berdampak jika diotomatisasi, sehingga investasi memberikan hasil yang optimal sejak awal.',
              'Dukungan human-in-the-loop menjadi elemen penting dalam konteks ini. Banyak proses bisnis, terutama yang menyangkut persetujuan keuangan, kepatuhan regulasi, atau keputusan strategis, tetap memerlukan keterlibatan manusia. Kami memastikan titik-titik tersebut dapat diintegrasikan dengan mulus ke dalam alur kerja otomatis tanpa mengorbankan efisiensi keseluruhan. Opsi deployment yang fleksibel juga berarti bisnis tidak perlu melakukan perombakan infrastruktur TI yang besar hanya untuk memulai.',
            ],
          },
          {
            id: 'integrasi-dan-ai',
            tocLabel: 'Integrasi dan AI',
            title: 'Integrasi Sistem, AI, dan Monitoring dalam Workflow Automation',
            paragraphs: [
              'Integrasi sistem dan API adalah fondasi dari workflow automation yang efektif. Tanpa konektivitas yang andal antar sistem, alur kerja otomatis tidak dapat berjalan dengan baik karena data tidak mengalir dengan benar. Kami membangun lapisan integrasi yang memastikan setiap sistem yang terlibat dapat berkomunikasi dan berbagi data secara akurat dan tepat waktu.',
              'Peran AI dalam workflow automation semakin relevan, terutama untuk proses yang membutuhkan kemampuan lebih dari sekadar mengikuti aturan tetap. Dengan komponen AI, workflow dapat mengenali pola, mengklasifikasikan data, atau membuat keputusan berdasarkan konteks yang lebih kompleks. Perlu dipahami bahwa tidak semua workflow automation harus berbasis AI. Banyak proses bisnis dapat diotomatisasi secara efektif dengan logika berbasis aturan yang sederhana dan terstruktur.',
              'Human-in-the-loop berfungsi sebagai mekanisme kontrol kualitas dalam proses otomatis. Ketika sistem mendeteksi kondisi yang memerlukan penilaian manusia, alur kerja akan berhenti sejenak, mengirimkan notifikasi kepada pihak yang berwenang, dan melanjutkan setelah keputusan diberikan. Ini memastikan bahwa otomasi tidak mengorbankan akurasi atau kepatuhan.',
              'Monitoring berkelanjutan memungkinkan tim kami dan tim Anda untuk memantau performa setiap workflow secara real-time. Jika terjadi anomali, keterlambatan, atau kegagalan, sistem dapat memberikan peringatan dini sehingga tindakan korektif dapat diambil sebelum masalah berkembang lebih jauh. Optimasi dilakukan secara berkala berdasarkan data performa aktual, bukan asumsi.',
            ],
          },
          {
            id: 'langkah-selanjutnya',
            tocLabel: 'Langkah Selanjutnya',
            title: 'Langkah Selanjutnya: Konsultasi dan Implementasi',
            paragraphs: [
              'Langkah pertama yang paling efektif adalah memahami proses bisnis mana yang paling membutuhkan otomasi dan bagaimana sistem yang ada dapat dihubungkan untuk mendukungnya.',
              'Tim kami siap membantu melalui konsultasi awal untuk menilai kebutuhan, mengidentifikasi peluang otomasi, dan merancang pendekatan yang sesuai dengan kondisi bisnis Anda. Tidak ada komitmen yang diperlukan di tahap ini, hanya diskusi yang fokus pada kebutuhan nyata Anda.',
            ],
          },
        ],
      },
      faq: {
        headline: 'FAQ tentang Workflow Automation',
        subheadline: 'Jawaban lengkap seputar alur kerja otomatis, integrasi API, kecerdasan buatan (AI), hingga opsi deployment untuk korporasi dan UKM.',
        trustedLabel: 'Dipercaya oleh',
        trustedSub: 'Pelanggan di seluruh dunia',
        askButton: 'Konsultasi Kebutuhan Workflow',
        items: [
          {
            question: 'Apa itu workflow automation?',
            answer: 'Workflow automation adalah pendekatan untuk mengotomatisasi serangkaian tugas atau proses bisnis yang sebelumnya dikerjakan secara manual berdasarkan aturan dan logika terstruktur, sehingga proses berjalan lebih cepat, konsisten, dan minim intervensi berulang.',
          },
          {
            question: 'Bagaimana cara membuat workflow automation?',
            answer: 'Pembuatan dimulai dari discovery dan pemetaan alur operasional, identifikasi titik integrasi API, perancangan modul alur kerja dengan validasi human-in-the-loop, pengujian menyeluruh pada berbagai kondisi data, hingga deployment dan monitoring berkelanjutan.',
          },
          {
            question: 'Apa perbedaan antara workflow automation dan otomasi proses bisnis secara umum?',
            answer: 'Workflow automation berfokus pada alur perpindahan data, dokumen, dan approval antar sistem atau peran secara spesifik, sedangkan otomasi proses bisnis (BPA) sering kali mencakup transformasi proses organisasi yang lebih luas secara menyeluruh.',
          },
          {
            question: 'Apakah workflow automation harus berbasis AI?',
            answer: 'Tidak. Sebagian besar alur kerja bisnis dapat berjalan optimal dengan logika aturan (rule-based) deterministik yang cepat dan stabil. Komponen AI diintegrasikan secara selektif untuk tugas adaptif seperti pemrosesan dokumen tak terstruktur dan pengenalan pola data.',
          },
          {
            question: 'Bagaimana integrasi sistem dan API mendukung workflow automation?',
            answer: 'Integrasi sistem dan API menjadi fondasi penghubung antar platform (ERP, CRM, database, dan payment gateway), memastikan pertukaran informasi berlangsung akurat tanpa jeda dan mencegah terjadinya silo data antar departemen.',
          },
          {
            question: 'Apa itu human-in-the-loop dalam workflow automation?',
            answer: 'Human-in-the-loop adalah mekanisme kontrol di mana alur kerja otomatis menyertakan titik intervensi bagi personel berwenang untuk memberikan validasi, persetujuan keuangan, atau penilaian kritis sebelum sistem melanjutkan tahapan berikutnya.',
          },
          {
            question: 'Apa saja opsi deployment yang tersedia untuk workflow automation?',
            answer: 'Kami menyediakan opsi deployment yang fleksibel sesuai kebutuhan keamanan TI perusahaan: cloud terkelola, server on-premise di pusat data internal, maupun arsitektur hybrid yang menggabungkan keunggulan keduanya.',
          },
          {
            question: 'Bagaimana monitoring dan optimasi berkelanjutan dilakukan dalam workflow automation?',
            answer: 'Sistem dilengkapi telemetri real-time yang memantau performa alur kerja, mendeteksi potensi hambatan atau error sejak dini, serta memberikan data aktual untuk penyesuaian berkala demi menjaga efisiensi operasional.',
          },
          {
            question: 'Bagaimana workflow automation dapat membantu bisnis UMKM di Indonesia?',
            answer: 'Untuk UMKM, otomasi membebaskan tim kecil dari tugas administratif berulang, mengurangi kesalahan input data, mempercepat respon ke pelanggan, dan memungkinkan operasional berkembang tanpa beban biaya overhead yang besar.',
          },
        ],
      },
    },
    aiSearchService: {
      meta: {
        title: 'Jasa AI Search, GEO, dan AEO | PT Teknalogi Transformasi Digital',
        description: 'Layanan optimasi AI Search, Generative Engine Optimization (GEO), dan Answer Engine Optimization (AEO) untuk meningkatkan visibilitas dan otoritas merek di mesin pencari AI.',
      },
      breadcrumbs: {
        home: 'Beranda',
        homeHref: '/id',
        services: 'Layanan',
        servicesHref: '/id/layanan',
        current: 'AI Search, GEO, dan AEO',
      },
      trustBadge: {
        label: 'Dipercaya oleh',
        sublabel: 'Perusahaan dan bisnis berkembang di seluruh Indonesia',
      },
      hero: {
        headline: 'Optimalkan Visibilitas Digital dengan GEO, AEO, dan Optimasi AI Search',
        description: 'Teknalogi membantu perusahaan dan UKM di Indonesia meningkatkan keterlihatan merek dan menghasilkan lead berkualitas melalui strategi AI Search yang terintegrasi. Kami menggabungkan Answer Engine Optimization, Generative Engine Optimization, optimasi sinyal entitas, dan pemantauan visibilitas berkelanjutan agar bisnis Anda relevan dan mudah ditemukan di lingkungan pencarian berbasis kecerdasan buatan.',
        primaryCta: 'Minta Konsultasi',
        primaryCtaHref: '/id/contact',
        secondaryCta: 'Pelajari Selengkapnya',
        secondaryCtaHref: '#what-we-deliver',
      },
      quickLinks: {
        links: [
          { label: 'What We Deliver?', href: '#what-we-deliver' },
          { label: 'About This Service', href: '#about-service' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      features: {
        headline: 'Fitur Utama Layanan AI Search, GEO, dan AEO',
        subheadline: 'Setiap komponen layanan kami dirancang untuk memperkuat posisi bisnis Anda di lingkungan pencarian berbasis kecerdasan buatan, dari strategi visibilitas hingga kesiapan teknis dan pemantauan berkelanjutan.',
        items: [
          {
            id: 'strategi-visibilitas',
            title: 'Strategi Visibilitas AI Search',
            desc: 'Kami merancang pendekatan strategis yang meningkatkan keterlihatan bisnis Anda di mesin pencari dan platform jawaban berbasis AI, disesuaikan dengan profil merek, audiens target, dan lanskap kompetitif yang relevan.',
            icon: 'strategy',
          },
          {
            id: 'sinyal-entitas',
            title: 'Optimasi Sinyal Entitas dan Merek',
            desc: 'Kami memperkuat sinyal digital yang mendefinisikan dan membedakan merek Anda dalam sistem AI Search, mencakup konsistensi informasi entitas, penguatan profil merek, dan penyelarasan data yang digunakan AI untuk mengenali bisnis Anda.',
            icon: 'entity',
          },
          {
            id: 'pemantauan-visibilitas',
            title: 'Pemantauan Visibilitas AI',
            desc: 'Visibilitas di lingkungan AI Search bukan kondisi statis. Kami menyediakan pemantauan berkelanjutan untuk melacak bagaimana merek dan konten Anda muncul di platform AI Search, sehingga strategi dapat disesuaikan secara proaktif berdasarkan data aktual.',
            icon: 'monitoring',
          },
          {
            id: 'aeo',
            title: 'Answer Engine Optimization (AEO)',
            desc: 'Kami mengoptimalkan konten dan sinyal teknis agar bisnis Anda muncul sebagai sumber jawaban yang dikutip oleh mesin jawaban berbasis AI, membangun kepercayaan dan meningkatkan engagement dengan audiens yang mencari informasi relevan.',
            icon: 'aeo',
          },
          {
            id: 'struktur-konten',
            title: 'Struktur Konten yang Mudah Dibaca AI',
            desc: 'Konten yang tidak terstruktur dengan baik sulit diinterpretasikan oleh sistem AI Search. Kami menyusun dan menyesuaikan konten Anda agar mudah dipahami, diekstrak, dan diprioritaskan oleh mesin pencari dan answer engine berbasis AI.',
            icon: 'content',
          },
          {
            id: 'integrasi-seo',
            title: 'Integrasi SEO dan AI Search',
            desc: 'Investasi SEO yang sudah ada tidak perlu ditinggalkan. Kami mengintegrasikan praktik SEO tradisional dengan optimasi AI Search untuk menciptakan strategi digital yang kohesif dan mampu menjangkau audiens di berbagai platform pencarian.',
            icon: 'synthesis',
          },
          {
            id: 'geo',
            title: 'Generative Engine Optimization (GEO)',
            desc: 'GEO memastikan konten dan sinyal digital Anda selaras dengan cara AI generatif memilih dan menyajikan informasi, sehingga bisnis Anda lebih berpeluang menjadi referensi dalam respons yang dihasilkan oleh teknologi AI generatif.',
            icon: 'geo',
          },
          {
            id: 'kesiapan-teknis',
            title: 'Kesiapan Teknis AI Search',
            desc: 'Aspek teknis situs dan infrastruktur konten Anda harus kompatibel dengan cara sistem AI mengindeks dan memproses informasi. Kami mengevaluasi dan menyiapkan fondasi teknis yang diperlukan agar bisnis Anda siap untuk lingkungan AI Search.',
            icon: 'technical',
          },
          {
            id: 'otoritas-sitasi',
            title: 'Otoritas dan Kesiapan Sitasi',
            desc: 'Sistem AI Search cenderung mengutip sumber yang dianggap otoritatif dan terpercaya. Kami membantu bisnis Anda membangun dan memperkuat sinyal otoritas yang meningkatkan peluang konten Anda dijadikan referensi dalam hasil pencarian AI.',
            icon: 'authority',
          },
        ],
      },
      aboutService: {
        id: 'about-service',
        title: 'Tentang AI Search, GEO, dan AEO',
        tocTitle: 'DAFTAR ISI',
        sections: [
          {
            id: 'definisi-ai-search',
            tocLabel: 'Definisi AI Search',
            title: 'Apa Itu AI Search dan Mengapa Penting untuk Bisnis',
            paragraphs: [
              'AI Search adalah teknologi pencarian yang menggunakan kecerdasan buatan untuk memahami maksud di balik sebuah pertanyaan, bukan sekadar mencocokkan kata kunci. Sistem ini memproses konteks, mengidentifikasi entitas yang relevan, dan menghasilkan jawaban secara semantik, sering kali tanpa mengharuskan pengguna mengklik tautan apa pun.',
              'Cara orang menemukan informasi dan membuat keputusan bisnis berubah secara mendasar. Mesin pencari berbasis kecerdasan buatan kini tidak hanya menampilkan daftar tautan, tetapi langsung menjawab pertanyaan pengguna dengan respons yang kontekstual, akurat, dan bersumber dari konten yang dianggap otoritatif. Bagi perusahaan dan UKM, strategi digital yang hanya mengandalkan SEO tradisional tidak lagi cukup untuk mempertahankan visibilitas dan relevansi.',
              'Perbedaan mendasar dengan mesin pencari tradisional terletak pada cara hasil disajikan. Mesin pencari konvensional menampilkan halaman berperingkat berdasarkan sinyal seperti backlink dan kata kunci. AI Search mensintesis informasi dari berbagai sumber dan menyajikannya sebagai jawaban langsung, sering kali dengan kutipan dari sumber yang dianggap terpercaya. Komponen utama yang membentuk ekosistem ini meliputi:',
            ],
            bullets: [
              {
                label: 'Answer Engine Optimization (AEO)',
                text: 'Optimasi konten agar muncul sebagai jawaban yang dikutip oleh mesin jawaban berbasis AI.',
              },
              {
                label: 'Generative Engine Optimization (GEO)',
                text: 'Pendekatan untuk memastikan konten dan sinyal teknis mendukung cara AI generatif memilih dan menyajikan informasi.',
              },
              {
                label: 'Optimasi sinyal entitas dan merek',
                text: 'Memperkuat identitas digital bisnis agar dikenali dan dipercaya oleh sistem AI Search.',
              },
            ],
            trailingParagraphs: [
              'Teknologi seperti retrieval-augmented generation (RAG) memungkinkan sistem AI mengambil informasi dari sumber eksternal secara real-time, menjadikan kualitas, struktur, dan otoritas konten sebagai faktor penentu visibilitas yang semakin kritis.',
            ],
          },
          {
            id: 'manfaat-ai-search',
            tocLabel: 'Manfaat AI Search',
            title: 'Manfaat AI Search untuk Perusahaan dan UKM',
            paragraphs: [
              'Mengoptimalkan kehadiran di lingkungan AI Search kini menjadi kebutuhan strategis bagi organisasi yang ingin tetap kompetitif. Beberapa manfaat konkret yang dapat diperoleh bisnis meliputi:',
            ],
            bullets: [
              {
                label: 'Peningkatan visibilitas merek',
                text: 'Keterlihatan yang lebih tinggi di platform pencarian dan answer engine berbasis AI yang semakin banyak digunakan pengambil keputusan.',
              },
              {
                label: 'Generasi lead berkualitas',
                text: 'Prospek yang lebih terarah karena konten yang muncul sebagai jawaban AI cenderung dipersepsikan lebih terpercaya dan relevan.',
              },
              {
                label: 'Penguatan otoritas merek',
                text: 'Reputasi digital yang kokoh melalui kutipan dan referensi yang konsisten di hasil pencarian AI.',
              },
              {
                label: 'Pengalaman pengguna yang lebih baik',
                text: 'Calon pelanggan mendapatkan jawaban yang tepat dan ringkas atas pertanyaan mereka.',
              },
              {
                label: 'Kemampuan adaptasi algoritma',
                text: 'Kesiapan menghadapi perubahan algoritma pencarian yang semakin bergantung pada pemahaman konteks dan entitas.',
              },
            ],
          },
          {
            id: 'komponen-layanan',
            tocLabel: 'Komponen Layanan',
            title: 'Komponen Utama Layanan AI Search Teknalogi',
            paragraphs: [
              'Pendekatan kami mencakup seluruh spektrum yang dibutuhkan bisnis untuk tampil relevan di lingkungan AI Search, mulai dari strategi hingga kesiapan teknis dan pemantauan berkelanjutan.',
              'Strategi Visibilitas AI Search menjadi fondasi dari setiap keterlibatan kami. Kami menganalisis bagaimana merek dan konten bisnis saat ini dipersepsikan oleh sistem AI Search, lalu merancang pendekatan yang meningkatkan keterlihatan secara terukur di mesin jawaban dan platform pencarian berbasis AI.',
              'AEO dan GEO bekerja secara sinergis. AEO memastikan konten distrukturkan sedemikian rupa sehingga mudah dikutip sebagai jawaban langsung, sementara GEO memastikan sinyal teknis dan konten mendukung cara AI generatif memilih sumber yang akan disertakan dalam responsnya.',
              'Optimasi sinyal entitas dan merek memperkuat cara sistem AI mengenali dan mengklasifikasikan bisnis Anda. Ini mencakup konsistensi informasi di berbagai platform, penguatan profil entitas, dan penyelarasan sinyal merek yang digunakan AI untuk membangun pemahaman tentang siapa Anda dan apa yang Anda tawarkan.',
              'Struktur konten yang mudah dibaca AI dan kesiapan teknis memastikan bahwa informasi bisnis dapat diakses, dipahami, dan diprioritaskan oleh sistem AI Search. Ini melibatkan penataan konten secara semantik, penggunaan markup yang tepat, dan memastikan aspek teknis situs mendukung indeksasi oleh teknologi AI terbaru.',
              'Pemantauan visibilitas AI dan integrasi SEO dengan AI Search melengkapi layanan ini sebagai upaya yang berkelanjutan. Kami melacak bagaimana visibilitas bisnis Anda berkembang di lingkungan AI Search dan menyesuaikan strategi secara proaktif, sambil memastikan investasi SEO yang sudah ada tetap relevan dan saling memperkuat dengan pendekatan AI Search.',
            ],
          },
          {
            id: 'integrasi-strategi',
            tocLabel: 'Integrasi Strategi',
            title: 'Integrasi AI Search dengan Strategi Digital dan SEO',
            paragraphs: [
              'AI Search dan SEO tradisional bukan dua hal yang terpisah atau bertentangan. Keduanya saling melengkapi ketika dikelola dengan pendekatan yang tepat.',
              'Sinyal yang selama ini dibangun melalui SEO, seperti otoritas domain, relevansi konten, dan struktur tautan, tetap menjadi input penting bagi sistem AI Search. Namun, AI Search juga mempertimbangkan dimensi tambahan: seberapa jelas konten menjawab pertanyaan spesifik, seberapa kuat sinyal entitas merek, dan seberapa mudah sistem AI dapat mengekstrak serta memverifikasi informasi dari situs Anda.',
              'Pendekatan holistik yang kami terapkan memastikan strategi SEO yang sudah berjalan tidak ditinggalkan, melainkan diperkuat dan diperluas untuk mencakup dimensi AI Search. Hasilnya adalah strategi digital yang lebih tangguh, mampu menjangkau audiens baik melalui pencarian konvensional maupun melalui platform jawaban berbasis AI.',
              'Pemantauan dan penyesuaian berkelanjutan menjadi kunci karena lanskap AI Search bergerak cepat. Algoritma berubah, platform baru muncul, dan perilaku pengguna terus berevolusi. Dengan pemantauan yang sistematis, bisnis dapat merespons perubahan ini secara proaktif.',
            ],
          },
          {
            id: 'langkah-selanjutnya',
            tocLabel: 'Langkah Selanjutnya',
            title: 'Langkah Selanjutnya: Konsultasi dan Evaluasi Kesiapan AI Search',
            paragraphs: [
              'Langkah pertama yang paling efektif adalah melakukan audit kesiapan menyeluruh: menilai bagaimana merek Anda saat ini dikutip di platform seperti ChatGPT, Perplexity, Gemini, dan Google AI Overviews, serta mengidentifikasi peluang optimasi entitas.',
              'Tim engineering kami siap membantu Anda melakukan evaluasi awal dan menyusun peta jalan AI Search yang sesuai dengan kebutuhan dan target bisnis Anda, tanpa komitmen apa pun di tahap awal.',
            ],
          },
        ],
      },
      faq: {
        headline: 'FAQ tentang AI Search, GEO, dan AEO',
        subheadline: 'Jawaban lengkap seputar pencarian AI, optimasi answer engine, generative engine optimization, dan pemantauan visibilitas.',
        trustedLabel: 'Dipercaya oleh',
        trustedSub: 'Perusahaan dan bisnis berkembang di seluruh Indonesia',
        askButton: 'Konsultasi Kebutuhan AI Search',
        items: [
          {
            question: 'Apa itu AI Search dan bagaimana cara kerjanya?',
            answer: 'AI Search adalah teknologi pencarian yang menggunakan model kecerdasan buatan untuk memahami konteks dan maksud pertanyaan secara mendalam, lalu menyajikan jawaban langsung yang disintesis dari sumber-sumber web terpercaya dan otoritatif.',
          },
          {
            question: 'Apa perbedaan utama antara AI Search dan mesin pencari tradisional?',
            answer: 'Mesin pencari tradisional menampilkan daftar tautan berdasarkan kata kunci dan backlink, sedangkan AI Search langsung merangkum jawaban kontekstual dari berbagai referensi terpercaya dan menyertakan sitasi sumber secara langsung.',
          },
          {
            question: 'Bagaimana cara menggunakan Google AI Search?',
            answer: 'Google AI Search dapat diakses langsung melalui fitur AI Overviews di halaman pencarian Google, yang secara otomatis menampilkan rangkuman jawaban berbasis AI di bagian paling atas untuk berbagai jenis pertanyaan pengguna.',
          },
          {
            question: 'Apakah Google AI Search gratis digunakan?',
            answer: 'Ya, fitur rangkuman AI Overviews dan pencarian berbasis AI pada Google Search dapat digunakan secara gratis oleh pengguna umum langsung melalui peramban.',
          },
          {
            question: 'Bagaimana AI Search dapat membantu bisnis saya mendapatkan lead berkualitas?',
            answer: 'Saat bisnis Anda dikutip sebagai referensi atau jawaban oleh mesin AI, audiens yang membaca jawaban tersebut telah memiliki minat dan niat beli yang tinggi. Kunjungan yang datang dari sitasi AI memiliki tingkat konversi yang jauh lebih potensial.',
          },
          {
            question: 'Apa itu Answer Engine Optimization (AEO)?',
            answer: 'Answer Engine Optimization (AEO) adalah praktik optimasi konten dan data terstruktur agar informasi bisnis Anda dipilih dan dikutip secara langsung sebagai jawaban utama oleh mesin pencari berbasis AI dan asisten virtual.',
          },
          {
            question: 'Apa itu Generative Engine Optimization (GEO)?',
            answer: 'Generative Engine Optimization (GEO) adalah pendekatan untuk mengoptimalkan sinyal teknis, reputasi entitas, dan kedalaman konten agar model AI generatif menyertakan dan merekomendasikan bisnis Anda dalam ringkasan yang dibuatnya.',
          },
          {
            question: 'Bagaimana cara memastikan konten saya mudah dibaca oleh AI Search?',
            answer: 'Dengan menerapkan arsitektur semantik yang rapi, schema markup terstruktur (JSON-LD), jawaban langsung yang faktual dan jelas, serta memastikan situs web memiliki performa crawling yang cepat dan bebas hambatan teknis.',
          },
          {
            question: 'Apakah layanan Teknalogi menyediakan monitoring visibilitas AI Search secara berkelanjutan?',
            answer: 'Ya, kami menyediakan pelacakan berkala untuk memantau seberapa sering merek, produk, dan konten Anda dikutip di platform AI terkemuka seperti ChatGPT, Perplexity, Gemini, dan Google AI Overviews, lengkap dengan analisis performanya.',
          },
        ],
      },
    },
    seoService: {
      meta: {
        title: 'Jasa SEO untuk Pertumbuhan Organik Website yang Terukur | PT Teknalogi Transformasi Digital',
        description: 'Layanan SEO enterprise untuk pertumbuhan organik website yang terukur. Analisis permintaan pencarian, optimasi teknis, strategi konten, dan pemantauan berkelanjutan.',
      },
      breadcrumbs: {
        home: 'Beranda',
        homeHref: '/id',
        services: 'Layanan',
        servicesHref: '/id/layanan',
        current: 'Jasa SEO',
      },
      trustBadge: {
        label: 'Dipercaya oleh',
        sublabel: 'Perusahaan dan bisnis berkembang di seluruh Indonesia',
      },
      hero: {
        headline: 'Jasa SEO untuk Pertumbuhan Organik Website yang Terukur',
        description: 'Teknalogi menghadirkan layanan SEO yang dirancang untuk mendukung tujuan bisnis secara nyata. Melalui analisis permintaan pencarian, optimasi teknis, strategi konten, dan pemantauan berkelanjutan, kami membantu bisnis di Indonesia meningkatkan visibilitas organik yang menghasilkan prospek berkualitas dan pertumbuhan yang konsisten.',
        primaryCta: 'Ajukan Konsultasi SEO',
        primaryCtaHref: '/contact',
        secondaryCta: 'Pelajari Selengkapnya',
        secondaryCtaHref: '#what-we-deliver',
      },
      quickLinks: {
        links: [
          { label: 'What We Deliver?', href: '#what-we-deliver' },
          { label: 'About This Service', href: '#about-service' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      features: {
        title: 'Kapabilitas Utama Jasa SEO Teknalogi',
        subtitle: 'Layanan SEO kami mencakup seluruh dimensi optimasi yang diperlukan untuk mendukung pertumbuhan organik yang berfokus pada konversi dan hasil bisnis yang terukur.',
        items: [
          {
            id: 'strategy',
            title: 'Strategi SEO yang Selaras dengan Tujuan Bisnis',
            desc: 'Setiap langkah optimasi yang kami lakukan didasarkan pada pemahaman tentang tujuan dan prioritas bisnis klien. Strategi kami dirancang untuk mendukung pertumbuhan yang relevan, bukan sekadar meningkatkan angka trafik tanpa konteks bisnis yang jelas.',
            icon: 'strategy',
          },
          {
            id: 'content',
            title: 'Strategi Konten yang Mendukung Otoritas dan Relevansi',
            desc: 'Konten yang relevan dan berkualitas adalah salah satu faktor terpenting dalam SEO modern. Kami mengembangkan strategi konten yang menjawab kebutuhan audiens target, membangun otoritas topik, dan mendukung perjalanan pengunjung dari pencarian awal hingga konversi.',
            icon: 'content',
          },
          {
            id: 'ai-readiness',
            title: 'Kesiapan Menghadapi Perubahan Teknologi Pencarian dan AI',
            desc: 'Teknologi pencarian terus berkembang, termasuk integrasi kecerdasan buatan dalam cara mesin pencari memproses dan menyajikan informasi. Strategi SEO kami dirancang untuk adaptif terhadap perubahan ini, membantu bisnis tetap relevan dan mudah ditemukan di era pencarian modern.',
            icon: 'ai-readiness',
          },
          {
            id: 'research',
            title: 'Analisis Permintaan dan Riset Kata Kunci Berbasis Data',
            desc: 'Kami menggunakan pendekatan berbasis data untuk mengidentifikasi peluang pencarian yang paling relevan di pasar Indonesia. Riset kata kunci kami mencakup analisis volume pencarian, tingkat persaingan, dan relevansi terhadap audiens target, sehingga setiap upaya optimasi diarahkan pada peluang yang bernilai.',
            icon: 'research',
          },
          {
            id: 'authority',
            title: 'Pengembangan Otoritas Melalui Link Building dan Reputasi Digital',
            desc: 'Otoritas domain yang kuat memberikan keunggulan kompetitif yang signifikan di hasil pencarian. Kami membangun jaringan tautan berkualitas dari sumber yang relevan dan terpercaya, sekaligus memperkuat reputasi digital bisnis klien di ekosistem online.',
            icon: 'authority',
          },
          {
            id: 'conversion',
            title: 'Pertumbuhan Organik yang Berfokus pada Konversi',
            desc: 'Trafik organik yang tinggi tidak selalu berarti prospek yang berkualitas. Kami merancang strategi SEO yang tidak hanya meningkatkan jumlah pengunjung, tetapi juga memastikan pengunjung tersebut adalah audiens yang tepat dengan potensi konversi yang lebih tinggi bagi bisnis.',
            icon: 'conversion',
          },
          {
            id: 'technical',
            title: 'Optimasi Teknis untuk Performa dan Pengalaman Pengguna',
            desc: 'Fondasi teknis website yang kuat adalah prasyarat untuk performa SEO yang baik. Kami mengoptimalkan struktur website, kecepatan halaman, aksesibilitas konten oleh mesin pencari, dan berbagai faktor teknis lain yang memengaruhi peringkat dan pengalaman pengguna secara bersamaan.',
            icon: 'technical',
          },
          {
            id: 'monitoring',
            title: 'Pemantauan dan Optimasi Berkelanjutan',
            desc: 'SEO adalah proses yang dinamis, bukan proyek satu kali. Kami memantau performa secara rutin, menganalisis perubahan algoritma, dan melakukan penyesuaian strategi yang diperlukan untuk menjaga dan meningkatkan hasil SEO secara konsisten dari waktu ke waktu.',
            icon: 'monitoring',
          },
          {
            id: 'solutions',
            title: 'Solusi yang Disesuaikan untuk Korporat, Enterprise, dan UMKM',
            desc: 'Kebutuhan SEO berbeda-beda tergantung pada skala dan kompleksitas bisnis. Kami menyediakan pendekatan yang fleksibel untuk segmen korporat, enterprise, maupun usaha kecil dan menengah, memastikan layanan yang relevan dengan konteks dan kapasitas bisnis klien.',
            icon: 'solutions',
          },
        ],
      },
      aboutService: {
        title: 'Tentang Jasa SEO Teknalogi',
        tocTitle: 'DAFTAR ISI',
        sections: [
          {
            id: 'definisi-manfaat-seo',
            title: 'Apa Itu Jasa SEO dan Manfaatnya untuk Bisnis',
            paragraphs: [
              'Search Engine Optimization (SEO) adalah proses sistematis untuk mengoptimalkan website agar lebih mudah ditemukan oleh audiens yang tepat melalui mesin pencari seperti Google. Prosesnya mencakup berbagai aspek: struktur teknis website, kualitas konten, dan reputasi digital yang dibangun melalui tautan dari sumber terpercaya.',
              'Jasa SEO adalah layanan optimasi website yang meningkatkan visibilitas bisnis di hasil pencarian organik. Teknalogi mengembangkan pendekatan SEO yang tidak berhenti pada peringkat semata, melainkan berfokus pada trafik yang relevan dan konversi yang memberikan dampak nyata bagi bisnis klien.',
              'Bagi bisnis, manfaat SEO melampaui sekadar peningkatan jumlah pengunjung. Strategi SEO yang tepat menghasilkan trafik organik yang lebih relevan, yaitu pengunjung yang memang sedang mencari produk, layanan, atau informasi yang ditawarkan. Hasilnya adalah prospek yang lebih berkualitas, biaya akuisisi yang lebih efisien dibandingkan iklan berbayar, dan pertumbuhan yang lebih berkelanjutan dalam jangka panjang.',
            ],
            bullets: [
              'Meningkatkan visibilitas di hasil pencarian untuk kata kunci yang relevan dengan bisnis',
              'Mendatangkan trafik organik dengan potensi konversi yang lebih tinggi',
              'Membangun kredibilitas dan otoritas digital di pasar',
              'Mendukung pertumbuhan prospek berkualitas secara konsisten',
              'Memberikan keunggulan kompetitif yang berkelanjutan di pasar digital Indonesia',
            ],
          },
          {
            id: 'komponen-utama-seo',
            title: 'Komponen Utama Layanan SEO Teknalogi',
            paragraphs: [
              'Layanan SEO kami mencakup seluruh elemen yang diperlukan untuk membangun dan mempertahankan performa pencarian organik yang kuat. Setiap komponen dirancang untuk saling mendukung dan memberikan hasil yang terukur.',
              'Analisis Permintaan Pencarian dan Riset Kata Kunci menjadi fondasi dari setiap strategi yang kami kembangkan. Kami mengidentifikasi kata kunci dan topik yang benar-benar dicari oleh audiens target di pasar Indonesia, sehingga setiap upaya optimasi diarahkan pada peluang yang paling relevan dan bernilai bagi bisnis.',
              'Optimasi Teknis memastikan website memiliki struktur yang dapat dibaca dan diindeks dengan baik oleh mesin pencari. Ini mencakup kecepatan halaman, arsitektur informasi, penggunaan data terstruktur, serta berbagai faktor teknis lain yang memengaruhi performa di hasil pencarian.',
              'Strategi Konten yang kami kembangkan berfokus pada pembuatan dan pengoptimalan konten yang relevan, informatif, dan selaras dengan kebutuhan audiens. Konten yang baik tidak hanya mendukung peringkat di mesin pencari, tetapi juga membangun kepercayaan dan mendorong pengunjung untuk mengambil tindakan.',
              'Pengembangan Otoritas dilakukan melalui pembangunan tautan berkualitas dan penguatan reputasi digital. Mesin pencari mempertimbangkan otoritas domain sebagai salah satu faktor penting dalam menentukan peringkat, sehingga aspek ini menjadi bagian integral dari strategi SEO jangka panjang.',
              'Pemantauan dan Optimasi Berkelanjutan memastikan performa SEO tetap optimal seiring waktu. Algoritma mesin pencari terus berkembang, dan perilaku pencarian audiens pun berubah. Kami memantau performa secara rutin dan melakukan penyesuaian strategi yang diperlukan agar hasil tidak stagnan.',
              'Kesiapan AI Search menjadi pertimbangan penting dalam strategi SEO modern. Teknologi pencarian berbasis kecerdasan buatan mengubah cara informasi ditemukan dan disajikan. Pendekatan kami memperhitungkan perkembangan ini agar bisnis tetap relevan dan mudah ditemukan seiring perubahan teknologi pencarian ke depan.',
            ],
          },
          {
            id: 'pendekatan-strategis',
            title: 'Pendekatan Strategis yang Selaras dengan Tujuan Bisnis',
            paragraphs: [
              'Banyak layanan SEO berfokus pada metrik teknis tanpa menghubungkannya dengan tujuan bisnis yang sesungguhnya. Di Teknalogi, setiap keputusan optimasi didasarkan pada pemahaman tentang kebutuhan, prioritas, dan target bisnis klien. Pendekatan ini memastikan investasi SEO berkontribusi langsung pada pertumbuhan yang dikejar.',
              'Kami menjalankan layanan SEO menggunakan framework Teknalogi SENSE, sebuah kerangka kerja operasional yang mengintegrasikan proses analisis, riset pencarian, optimasi teknis, pengembangan konten, pembangunan otoritas, dan pemantauan performa dalam satu proses yang terstruktur dan berkelanjutan. Framework ini memungkinkan kami mengelola kompleksitas SEO secara sistematis sambil tetap fokus pada hasil yang relevan bagi bisnis klien.',
              'SEO di Teknalogi bukan layanan sekali jalan. Kami membangun hubungan kerja yang berkelanjutan dengan klien, di mana strategi terus dievaluasi dan disesuaikan berdasarkan data performa, perubahan pasar, dan perkembangan algoritma mesin pencari. Pendekatan ini memberikan keunggulan yang lebih tahan lama dibandingkan optimasi yang dilakukan hanya sekali.',
            ],
          },
          {
            id: 'pentingnya-seo-indonesia',
            title: 'Mengapa SEO Penting untuk Bisnis di Indonesia',
            paragraphs: [
              'Indonesia adalah salah satu pasar digital dengan pertumbuhan tercepat di Asia Tenggara. Jutaan pengguna internet melakukan pencarian setiap hari untuk menemukan produk, layanan, dan informasi yang mereka butuhkan. Bagi bisnis, ini adalah peluang nyata untuk menjangkau audiens yang sudah memiliki niat membeli atau mencari solusi.',
              'Persaingan digital di berbagai sektor bisnis di Indonesia semakin ketat. Bisnis yang tidak mengoptimalkan kehadiran organiknya berisiko kehilangan visibilitas kepada kompetitor yang lebih aktif dalam strategi SEO. Sebaliknya, bisnis yang membangun fondasi SEO yang kuat akan menikmati keunggulan kompetitif yang terus berkembang seiring waktu.',
              'Karakteristik pasar Indonesia juga memiliki keunikan tersendiri: pola pencarian dalam bahasa Indonesia, preferensi konten lokal, dan perilaku pengguna yang berbeda di berbagai segmen. Strategi SEO yang efektif di pasar ini harus mempertimbangkan nuansa lokal tersebut, bukan sekadar menerapkan pendekatan generik yang tidak disesuaikan dengan konteks pasar.',
            ],
          },
          {
            id: 'langkah-selanjutnya',
            title: 'Langkah Selanjutnya: Konsultasi dan Evaluasi Kesiapan SEO',
            paragraphs: [
              'Langkah awal yang paling efektif adalah melakukan audit dan asesmen komprehensif terhadap kondisi SEO website Anda saat ini: mengevaluasi kesehatan teknis, struktur konten, profil backlink, serta posisi visibilitas Anda dibanding kompetitor.',
              'Tim solutions engineering kami siap memandu sesi technical discovery, menganalisis peluang pertumbuhan organik terbaik bagi perusahaan Anda, dan merumuskan roadmap implementasi SEO terukur yang selaras dengan tujuan bisnis Anda tanpa komitmen di awal.',
            ],
          },
        ],
      },
      faq: {
        title: 'FAQ tentang Jasa SEO',
        subtitle: 'Jawaban lengkap seputar jasa SEO, proses kerja, waktu hasil, hingga integrasi dengan teknologi pencarian modern.',
        ctaButton: 'Konsultasi Kebutuhan SEO',
        ctaButtonHref: 'https://wa.me/6281234567890?text=Halo%20Teknalogi,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20SEO',
        questions: [
          {
            question: 'Apa itu jasa SEO dan bagaimana cara kerjanya?',
            answer: 'Jasa SEO adalah layanan profesional untuk meningkatkan visibilitas dan peringkat website di hasil pencarian organik mesin pencari seperti Google. Cara kerjanya meliputi audit teknis, riset kata kunci strategis, optimasi on-page dan struktur konten, perbaikan kecepatan dan arsitektur website, serta pembangunan otoritas domain melalui link building berkualitas tinggi.',
          },
          {
            question: 'Apa manfaat utama menggunakan jasa SEO profesional untuk bisnis?',
            answer: 'Manfaat utamanya mencakup peningkatan trafik organik yang relevan dan berkelanjutan, perolehan prospek atau lead dengan niat beli lebih tinggi, biaya akuisisi pelanggan yang jauh lebih hemat dibanding iklan berbayar dalam jangka panjang, serta penguatan kredibilitas dan otoritas digital bisnis Anda di pasar.',
          },
          {
            question: 'Berapa lama waktu yang dibutuhkan untuk melihat hasil dari SEO?',
            answer: 'SEO merupakan investasi pertumbuhan jangka menengah hingga panjang. Pada umumnya, perbaikan teknis awal dan pergerakan peringkat untuk kata kunci bernilai mulai terlihat dalam 3 hingga 6 bulan pertama, dengan peningkatan trafik dan konversi yang signifikan serta konsisten tercapai dalam 6 hingga 12 bulan optimasi berkelanjutan.',
          },
          {
            question: 'Apa saja komponen utama dalam layanan jasa SEO Teknalogi?',
            answer: 'Layanan kami mencakup 6 pilar utama: Analisis Permintaan & Riset Kata Kunci, Optimasi Teknis Website (Core Web Vitals & arsitektur data), Strategi & Pembuatan Konten Berkualitas, Pembangunan Otoritas & Digital PR, Kesiapan AI Search & AEO/GEO, serta Pemantauan & Pelaporan Performa Berkelanjutan.',
          },
          {
            question: 'Bagaimana proses pemantauan dan optimasi berkelanjutan dilakukan?',
            answer: 'Kami melakukan pemantauan berkala menggunakan platform analitik dan dashboard terintegrasi untuk melacak peringkat kata kunci, performa trafik organik, indeksasi halaman, dan konversi. Laporan transparan kami sajikan setiap bulan disertai rekomendasi penyesuaian strategi berdasarkan pembaruan algoritma mesin pencari.',
          },
          {
            question: 'Apakah jasa SEO Teknalogi siap menghadapi perubahan teknologi pencarian seperti AI?',
            answer: 'Ya. Strategi SEO kami mengintegrasikan kesiapan AI Search, Generative Engine Optimization (GEO), dan Answer Engine Optimization (AEO). Kami memastikan konten dan struktur data website Anda dioptimalkan tidak hanya untuk mesin pencari konvensional, tetapi juga untuk dikutip secara akurat oleh mesin pencari berbasis kecerdasan buatan.',
          },
          {
            question: 'Apakah ada garansi hasil dari jasa SEO Teknalogi?',
            answer: 'Dalam standar industri SEO profesional, tidak ada pihak yang dapat menjamin peringkat nomor satu secara instan karena algoritma mesin pencari sepenuhnya dikendalikan oleh pihak ketiga seperti Google. Namun, kami menjamin penerapan metodologi best practice teknis terbaik, transparansi pekerjaan menyeluruh, dan komitmen pertumbuhan performa terukur sesuai kesepakatan target bisnis Anda.',
          },
          {
            question: 'Apakah jasa SEO Teknalogi cocok untuk semua jenis bisnis, termasuk UMKM?',
            answer: 'Ya. Kami menyediakan pendekatan yang fleksibel dan terukur untuk berbagai skala bisnis, mulai dari korporat enterprise dengan ribuan halaman website, hingga perusahaan berkembang dan UMKM yang ingin mendominasi pencarian lokal atau segmen pasar spesifik dengan alokasi investasi yang efisien.',
          },
          {
            question: 'Bagaimana cara memulai konsultasi atau mendapatkan informasi lebih lanjut tentang jasa SEO Teknalogi?',
            answer: 'Anda dapat menghubungi kami melalui tombol konsultasi WhatsApp langsung di halaman ini atau mengisi formulir kontak. Tim spesialis SEO kami akan segera menjadwalkan sesi technical discovery awal dan memberikan evaluasi awal kondisi website Anda secara gratis.',
          },
        ],
      },
    },
    seoAuditService: {
      meta: {
        title: 'Audit SEO dan AI Search untuk Website | PT Teknalogi Transformasi Digital',
        description: 'Layanan audit SEO dan AI Search komprehensif untuk mengevaluasi kesehatan teknis, konten, otoritas, pengalaman pengguna, dan kesiapan AI Search di Indonesia.',
      },
      breadcrumbs: {
        home: 'Beranda',
        homeHref: '/id',
        services: 'Layanan',
        servicesHref: '/id/layanan',
        current: 'Audit SEO dan AI Search',
      },
      trustBadge: {
        label: 'Audit Digital Skala Enterprise',
        sublabel: 'Dipercaya oleh pemimpin teknologi dan bisnis',
      },
      hero: {
        headline: 'Audit SEO dan AI Search untuk Meningkatkan Performa Website Anda',
        description: 'Teknalogi menyediakan layanan audit SEO menyeluruh yang mencakup evaluasi teknis, konten, otoritas, pengalaman pengguna, dan kesiapan AI Search. Hasilnya adalah pemahaman yang jelas tentang kondisi website Anda beserta roadmap optimasi berdasarkan prioritas dampak bisnis, dirancang untuk kebutuhan korporasi, enterprise, dan UKM di Indonesia.',
        primaryCta: 'Ajukan Konsultasi',
        primaryCtaHref: '/contact',
        secondaryCta: 'Pelajari Selengkapnya',
        secondaryCtaHref: '#what-we-deliver',
      },
      quickLinks: {
        title: 'Navigasi Cepat',
        links: [
          { label: 'What We Deliver?', href: '#what-we-deliver' },
          { label: 'About This Service', href: '#about-service' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      features: {
        title: 'Kapabilitas Diagnostik Menyeluruh',
        subtitle: 'Metodologi audit komprehensif kami menganalisis integritas teknis, relevansi pencarian, kutipan mesin generatif, dan hambatan konversi.',
        items: [
          {
            title: 'Kesehatan Teknis & Indeksasi',
            desc: 'Inspeksi mendalam terhadap crawlability, sitemap XML, direktif robots.txt, kanonikalisasi, status kode server, dan arsitektur perutean multi-domain.',
            icon: 'technical-health',
          },
          {
            title: 'Kedalaman Konten & Prinsip E-E-A-T',
            desc: 'Evaluasi menyeluruh terhadap relevansi topik, pemenuhan niat pencarian pengguna, pencegahan kanibalisasi kata kunci, dan penguatan sinyal kredibilitas E-E-A-T.',
            icon: 'content-depth',
          },
          {
            title: 'Kesiapan AI Search, GEO & AEO',
            desc: 'Penilaian keterbacaan entitas merek dan kemudahan ekstraksi informasi oleh mesin pencari AI seperti Google AI Overviews, Perplexity, dan ChatGPT.',
            icon: 'ai-readiness',
          },
          {
            title: 'Core Web Vitals & Kecepatan Akses',
            desc: 'Pengukuran terperinci metrik performa web modern: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS), dan optimasi aset seluler.',
            icon: 'core-web-vitals',
          },
          {
            title: 'Profil Backlink & Otoritas Domain',
            desc: 'Analisis profil tautan eksternal, identifikasi potensi tautan beracun atau spam, serta evaluasi kekuatan otoritas domain terhadap standar industri.',
            icon: 'backlink-profile',
          },
          {
            title: 'Tolok Ukur & Analisis Celah Kompetitor',
            desc: 'Komparasi sistematis performa visibilitas organik terhadap kompetitor utama untuk mengidentifikasi peluang kata kunci bernilai tinggi yang belum tergarap.',
            icon: 'competitor-benchmarking',
          },
          {
            title: 'Schema Markup & Entitas Terstruktur',
            desc: 'Validasi penerapan microdata JSON-LD, relasi entitas Knowledge Graph, schema organisasi, dan kelengkapan navigasi breadcrumb sesuai standar mesin pencari.',
            icon: 'schema-entities',
          },
          {
            title: 'Pengalaman Pengguna & Jalur Konversi',
            desc: 'Evaluasi navigasi responsif pada layar ponsel, ukuran target sentuh interaktif, alur penjelajahan halaman, dan eliminasi gesekan pada corong konversi prospek.',
            icon: 'conversion-ux',
          },
          {
            title: 'Roadmap Rekayasa Berbasis Prioritas',
            desc: 'Laporan diagnostik terstruktur dengan pemetaan masalah berdasarkan dampak bisnis dan tingkat kompleksitas teknis yang siap dieksekusi tim developer.',
            icon: 'roadmap-prioritas',
          },
        ],
      },
      aboutService: {
        title: 'Tentang Layanan Audit SEO dan AI Search',
        tocTitle: 'Daftar Isi',
        sections: [
          {
            id: 'definisi-dan-tujuan-audit',
            title: 'Apa Itu Audit SEO & AI Search dan Mengapa Sangat Krusial?',
            tocLabel: 'Definisi & Tujuan Utama',
            paragraphs: [
              'Audit SEO dan AI Search adalah evaluasi menyeluruh terhadap infrastruktur teknis, kualitas konten, profil otoritas, dan arsitektur informasi website Anda. Tujuannya adalah memetakan kesehatan digital website secara objektif guna mengetahui seberapa efektif website Anda ditemukan, dirayapi, diindeks, dan direkomendasikan oleh mesin pencari konvensional maupun sistem kecerdasan buatan modern.',
              'Di era perkembangan mesin pencari generatif saat ini, visibilitas website tidak lagi terbatas pada peringkat halaman pencarian biasa. Platform seperti Google AI Overviews, Perplexity, dan ChatGPT mengandalkan entitas terstruktur dan konten berbobot tinggi untuk menjawab pertanyaan pengguna. Melakukan audit berkala memastikan website Anda bebas dari hambatan teknis yang merugikan trafik dan siap memimpin visibilitas di ekosistem pencarian masa depan.',
            ],
          },
          {
            id: 'komponen-evaluasi-menyeluruh',
            title: 'Komponen Evaluasi Menyeluruh dalam Layanan Audit Kami',
            tocLabel: 'Komponen Evaluasi',
            paragraphs: [
              'Teknalogi menerapkan pendekatan audit multi-dimensi yang meninjau lima pilar penting kesehatan digital platform Anda secara mendalam:',
            ],
            bullets: [
              {
                label: 'Infrastruktur Teknis & Efisiensi Perayapan',
                text: 'Memeriksa kecepatan respon server, efisiensi crawl budget, arsitektur tautan internal, rantai pengalihan URL, dan mitigasi render JavaScript.',
              },
              {
                label: 'Kualitas Konten & Kredibilitas E-E-A-T',
                text: 'Mengevaluasi kedalaman konten, relevansi semantik, struktur penjudulan dokumen, pencegahan duplikasi halaman, dan bukti keahlian industri.',
              },
              {
                label: 'Kesiapan Pencarian Generatif (GEO & AEO)',
                text: 'Menilai kejelasan entitas merek, implementasi schema data terstruktur, format jawaban langsung, dan keberadaan profil entitas di repositori tepercaya.',
              },
              {
                label: 'Otoritas Domain & Manajemen Risiko Backlink',
                text: 'Meneliti profil tautan masuk, variasi teks jangkar, deteksi tautan beracun yang berpotensi memicu penalti algoritma, serta strategi reputasi digital.',
              },
              {
                label: 'Pengalaman Pengguna & Fondasi Konversi',
                text: 'Menganalisis performa Core Web Vitals pada jaringan seluler lokal, kejelasan tombol tindakan, dan kesesuaian pelacakan analitik konversi bisnis.',
              },
            ],
          },
          {
            id: 'metodologi-dan-tahapan-audit',
            title: 'Metodologi Diagnostik dan Tahapan Pelaksanaan Audit',
            tocLabel: 'Metodologi Diagnostik',
            paragraphs: [
              'Kami menerapkan alur kerja terstandarisasi yang mengubah data diagnostik teknis menjadi langkah eksekusi yang praktis dan berorientasi pada hasil bisnis:',
            ],
            bullets: [
              {
                label: '1. Pengumpulan Data & Integrasi Telemetri',
                text: 'Kami mengumpulkan data historis melalui Google Search Console, Google Analytics 4, log server, dan perayapan mandiri untuk memetakan kondisi dasar website.',
              },
              {
                label: '2. Analisis Diagnostik Mendalam',
                text: 'Spesialis teknis kami memeriksa baris kode, validasi schema markup, profil tautan luar, serta simulasi kutipan pada mesin pencari berbasis kecerdasan buatan.',
              },
              {
                label: '3. Penyusunan Matriks Dampak vs Usaha',
                text: 'Temuan masalah dikelompokkan ke dalam kategori urgensi kritis, peluang pertumbuhan berbobot tinggi, dan optimasi jangka menengah dengan estimasi upaya implementasi.',
              },
              {
                label: '4. Presentasi Eksekutif & Panduan Implementasi Developer',
                text: 'Kami menyajikan ringkasan temuan bagi para pengambil keputusan serta dokumentasi teknis mendetail yang siap dikerjakan langsung oleh tim engineering Anda.',
              },
            ],
          },
          {
            id: 'urgensi-pasar-indonesia',
            title: 'Urgensi Strategis bagi Pertumbuhan Bisnis di Indonesia',
            tocLabel: 'Urgensi Pasar Indonesia',
            paragraphs: [
              'Lanskap pengguna internet di Indonesia didominasi oleh perangkat seluler, di mana lebih dari 80 persen sesi pencarian daring berlangsung melalui smartphone dengan kondisi jaringan yang bervariasi. Website yang memiliki performa lambat atau tata letak yang tidak ramah ponsel langsung mengalami lonjakan rasio pentalan dan penurunan peringkat di hasil pencarian.',
              'Selain itu, tren pencarian konsumen di berbagai kota besar Indonesia semakin sering memanfaatkan bahasa natural dan asisten pencarian cerdas. Bisnis yang secara proaktif membenahi arsitektur teknis website akan memperoleh keuntungan kompetitif yang berkelanjutan, menghasilkan prospek berkualitas dengan biaya akuisisi yang jauh lebih efisien.',
            ],
          },
          {
            id: 'langkah-selanjutnya',
            title: 'Langkah Selanjutnya: Sesi Discovery Teknis dan Roadmap Optimasi',
            tocLabel: 'Langkah Selanjutnya',
            paragraphs: [
              'Keberhasilan transformasi digital diawali dengan pemahaman diagnostik yang akurat. Mengetahui posisi kekuatan dan kelemahan teknis website Anda merupakan langkah awal paling hemat biaya untuk meraih kepemimpinan pencarian organik jangka panjang.',
              'Tim solutions engineering dan spesialis SEO kami siap memandu sesi technical discovery, menganalisis titik integrasi sistem Anda, dan merumuskan roadmap audit terukur yang selaras dengan sasaran bisnis Anda tanpa komitmen awal.',
            ],
          },
        ],
      },
      faq: {
        headline: 'Pertanyaan yang Sering Diajukan',
        subheadline: 'Jawaban atas pertanyaan umum mengenai layanan audit SEO dan AI Search profesional kami.',
        askButton: 'Konsultasi Kebutuhan Audit',
        trustedLabel: 'Dipercaya oleh',
        trustedSub: 'Perusahaan dan bisnis berkembang di seluruh Indonesia',
        items: [
          {
            question: 'Apa itu Audit SEO dan AI Search serta apa saja laporan yang kami terima?',
            answer: 'Audit SEO dan AI Search adalah evaluasi diagnostik komprehensif yang mencakup arsitektur teknis, konten, backlink, dan kesiapan kutipan AI. Anda akan menerima laporan ringkasan eksekutif, matriks prioritas dampak vs usaha, serta dokumen panduan teknis yang siap diimplementasikan langsung oleh developer Anda.',
          },
          {
            question: 'Apa perbedaan audit profesional ini dengan alat cek SEO otomatis gratis di internet?',
            answer: 'Alat otomatis gratis umumnya hanya memindai tag meta secara permukaan dan memberikan skor generik. Audit kami menggabungkan crawler skala enterprise, data telemetri riil dari Search Console dan analytics, analisis log server, inspeksi kode manual, serta pengujian kutipan mesin generatif oleh insinyur senior.',
          },
          {
            question: 'Berapa lama proses audit SEO dan AI Search berlangsung hingga laporan selesai?',
            answer: 'Tergantung pada ukuran dan kompleksitas website Anda, proses audit menyeluruh biasanya memakan waktu antara 5 hingga 10 hari kerja. Waktu ini diperlukan untuk mengumpulkan data perayapan mendalam, menganalisis celah kompetitor, dan menyusun panduan teknis yang presisi.',
          },
          {
            question: 'Akses apa saja yang dibutuhkan dari tim kami untuk memulai proses audit?',
            answer: 'Untuk mendapatkan hasil analisis yang akurat, kami merekomendasikan akses baca (read-only) ke Google Search Console dan Google Analytics 4. Untuk evaluasi teknis yang lebih mendalam, data log server atau akses staging dapat disediakan di bawah perjanjian kerahasiaan (NDA).',
          },
          {
            question: 'Bagaimana audit ini mengukur kesiapan website terhadap AI search seperti ChatGPT dan Perplexity?',
            answer: 'Kami menguji seberapa efektif entitas merek, data penting, dan jawaban konten Anda dapat diekstraksi oleh Large Language Models. Ini mencakup evaluasi schema markup, format konten tanya-jawab, kehadiran entitas pada grafik pengetahuan, dan frekuensi kemunculan kutipan pada mesin generatif.',
          },
          {
            question: 'Apakah Teknalogi dapat membantu tim kami mengimplementasikan rekomendasi audit?',
            answer: 'Tentu saja. Selain memberikan panduan teknis yang terperinci untuk tim internal Anda, tim engineering Teknalogi juga dapat membantu mengeksekusi langsung perbaikan kode, optimasi Core Web Vitals, pemasangan schema markup, maupun konfigurasi server.',
          },
          {
            question: 'Seberapa sering perusahaan sebaiknya melakukan audit SEO dan AI Search menyeluruh?',
            answer: 'Kami menyarankan pelaksanaan audit komprehensif minimal satu kali dalam setahun, atau setiap kali sebelum melakukan migrasi platform besar, pembaruan CMS, ataupun ketika terjadi penurunan performa trafik organik yang tidak wajar.',
          },
          {
            question: 'Apakah layanan audit ini cocok untuk bisnis berkembang atau UMKM?',
            answer: 'Ya. Kami menyesuaikan cakupan audit dengan skala dan kebutuhan bisnis Anda, baik untuk korporat enterprise dengan ratusan ribu halaman dinamis, maupun perusahaan berkembang yang ingin mendominasi segmen pasar spesifik dengan efisiensi modal tinggi.',
          },
          {
            question: 'Bagaimana cara memulai atau menjadwalkan konsultasi awal untuk audit website kami?',
            answer: 'Anda dapat menghubungi kami melalui tombol konsultasi WhatsApp di halaman ini atau mengisi formulir pada halaman kontak. Tim kami akan segera meninjau domain Anda dan menjadwalkan sesi konsultasi diagnostik awal tanpa biaya.',
          },
        ],
      },
    },
    webMaintenanceService: {
      meta: {
        title: 'Layanan Pemeliharaan Web | PT Teknalogi Transformasi Digital',
        description: 'Layanan pemeliharaan web proaktif di Indonesia: pemantauan uptime 24/7, manajemen patch keamanan, backup otomatis, perbaikan bug, dan optimasi performa.',
      },
      breadcrumbs: {
        home: 'Beranda',
        services: 'Layanan',
        current: 'Pemeliharaan Web',
      },
      trustBadge: {
        highlight: '99+ Klien Terpercaya',
        subtitle: 'Dipercaya oleh perusahaan dan bisnis di seluruh Indonesia',
      },
      hero: {
        title: 'Pemeliharaan Web untuk Keandalan dan Keamanan Situs Anda',
        description: 'Teknalogi menyediakan layanan pemeliharaan web yang proaktif dan menyeluruh untuk bisnis korporat, enterprise, dan UKM di Indonesia. Dari pemantauan dan keamanan hingga optimasi performa, backup, perbaikan bug, dan pemeliharaan SEO teknis, kami menjaga situs Anda tetap aman, optimal, dan siap mendukung operasional bisnis setiap saat.',
        primaryCta: 'Minta Konsultasi',
        secondaryCta: 'Pelajari Selengkapnya',
        secondaryHref: '#what-we-deliver',
      },
      quickLinks: {
        title: 'Navigasi Cepat',
        links: [
          { label: 'What We Deliver?', href: '#what-we-deliver' },
          { label: 'About This Service', href: '#about-service' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      features: {
        title: 'Fitur Utama Layanan Pemeliharaan Web Teknalogi',
        subtitle: 'Layanan pemeliharaan web kami mencakup seluruh aspek penting yang dibutuhkan bisnis untuk menjaga situs tetap aman, optimal, dan andal. Setiap area layanan dirancang dengan fokus pada kelangsungan operasional dan kepercayaan digital bisnis Anda.',
        items: [
          {
            icon: 'proactive-monitoring',
            title: 'Pemantauan Situs Web Proaktif',
            desc: 'Kami memantau situs Anda secara berkelanjutan untuk mendeteksi gangguan uptime, anomali performa, dan potensi masalah sebelum berdampak pada pengguna. Pendekatan ini meminimalkan downtime dan menjaga kelangsungan operasional bisnis tanpa interupsi yang tidak terduga.',
          },
          {
            icon: 'backup-recovery',
            title: 'Backup dan Dukungan Pemulihan',
            desc: 'Pencadangan data dilakukan secara terjadwal dengan prosedur pemulihan yang telah diuji dan siap dijalankan. Layanan ini memastikan data bisnis Anda terlindungi dan situs dapat kembali beroperasi dengan cepat saat terjadi gangguan atau kegagalan sistem.',
          },
          {
            icon: 'incident-response',
            title: 'Respons Insiden dan Dukungan Cepat',
            desc: 'Saat terjadi gangguan atau insiden kritis, tim kami memberikan respons yang cepat dan terkoordinasi untuk meminimalkan dampak pada bisnis. Layanan ini memastikan setiap masalah ditangani secara efisien dengan prioritas pada pemulihan operasional yang segera.',
          },
          {
            icon: 'security-patching',
            title: 'Pemeliharaan Keamanan dan Manajemen Patch',
            desc: 'Pemeriksaan keamanan rutin dan penerapan patch terbaru dilakukan secara konsisten untuk melindungi situs dari kerentanan yang terus berkembang. Langkah ini mengurangi risiko pelanggaran keamanan dan menjaga reputasi bisnis Anda.',
          },
          {
            icon: 'bug-resolution',
            title: 'Perbaikan Bug dan Resolusi Masalah',
            desc: 'Setiap bug dan masalah teknis yang teridentifikasi ditangani secara cepat dan terstruktur. Proses ini menjaga stabilitas situs, mencegah gangguan pada pengalaman pengguna, dan memastikan fungsi-fungsi penting situs berjalan sebagaimana mestinya.',
          },
          {
            icon: 'continuous-modernization',
            title: 'Perbaikan dan Peningkatan Berkelanjutan',
            desc: 'Pemeliharaan yang baik tidak berhenti pada rutinitas. Kami melakukan evaluasi dan peningkatan situs secara berkala agar selalu sesuai dengan kebutuhan bisnis yang berkembang, perubahan teknologi, dan ekspektasi pengguna.',
          },
          {
            icon: 'performance-optimization',
            title: 'Optimasi Performa Situs',
            desc: 'Kami melakukan penyesuaian performa secara berkala untuk memastikan situs Anda memuat dengan cepat dan berjalan stabil di berbagai kondisi. Performa yang konsisten mendukung kepuasan pengguna dan efisiensi operasional bisnis secara keseluruhan.',
          },
          {
            icon: 'technical-seo',
            title: 'Pemeliharaan SEO Teknis',
            desc: 'Kami memantau dan memperbaiki aspek teknis SEO secara rutin, termasuk kecepatan halaman, struktur tautan, sitemap, dan elemen teknis lainnya yang mempengaruhi visibilitas situs di mesin pencari. Pemeliharaan ini membantu mempertahankan peringkat pencarian dan efektivitas digital bisnis Anda.',
          },
          {
            icon: 'software-updates',
            title: 'Pembaruan Perangkat Lunak dan Komponen',
            desc: 'Pembaruan sistem, plugin, tema, dan komponen situs dilakukan secara terjadwal untuk memastikan kompatibilitas dan stabilitas. Pengelolaan pembaruan yang terstruktur mencegah konflik teknis dan menjaga situs berjalan pada versi yang aman dan optimal.',
          },
        ],
      },
      aboutService: {
        title: 'Memahami Pemeliharaan Web dan Manfaatnya untuk Bisnis Anda',
        tocTitle: 'Table of Contents',
        sections: [
          {
            id: 'definisi-pemeliharaan-web',
            tocLabel: 'Definisi Pemeliharaan Web',
            heading: 'Apa Itu Pemeliharaan Web? Definisi dan Ruang Lingkup',
            paragraphs: [
              'Pemeliharaan web adalah serangkaian aktivitas berkelanjutan untuk memastikan sebuah situs tetap aman, mutakhir, dan berfungsi secara optimal. Ini bukan perbaikan sesekali, melainkan proses terencana yang mencakup pemantauan rutin, pembaruan perangkat lunak, pengelolaan keamanan, optimasi performa, pencadangan data, perbaikan bug, pemeliharaan SEO teknis, dan penanganan insiden.',
              'Ruang lingkupnya meliputi: pemantauan uptime dan performa, pemeriksaan serta penerapan patch keamanan, pembaruan sistem dan plugin, optimasi kecepatan halaman, pencadangan data berkala, prosedur pemulihan, identifikasi dan perbaikan bug, audit teknis SEO, dan perbaikan berkelanjutan. Penting untuk membedakan pemeliharaan rutin yang bersifat preventif dari solusi teknis khusus yang menangani permasalahan kompleks secara mendalam.',
            ],
          },
          {
            id: 'pentingnya-pemeliharaan-web',
            tocLabel: 'Pentingnya Pemeliharaan Web',
            heading: 'Mengapa Pemeliharaan Web Rutin Penting untuk Bisnis Anda',
            paragraphs: [
              'Situs yang tidak dirawat secara konsisten dapat menjadi beban operasional yang nyata. Kerentanan keamanan yang dibiarkan membuka celah bagi serangan siber. Performa yang menurun mengikis pengalaman pengguna dan berpotensi mengurangi konversi. Downtime yang tidak terduga mengganggu layanan dan merusak kepercayaan pelanggan.',
              'Bagi perusahaan korporat dan enterprise, keandalan situs berdampak langsung pada reputasi dan kelangsungan operasional. Bagi UKM, menjaga situs tetap optimal berarti mempertahankan daya saing digital tanpa harus menanggung biaya pemulihan yang jauh lebih besar akibat kelalaian. Pendekatan yang terencana dan berkelanjutan jauh lebih efisien dibandingkan penanganan darurat setelah masalah terjadi.',
            ],
          },
          {
            id: 'pendekatan-teknalogi',
            tocLabel: 'Pendekatan Teknalogi',
            heading: 'Pendekatan Komprehensif Pemeliharaan Web oleh Teknalogi',
            paragraphs: [
              'Kami menangani pemeliharaan web sebagai layanan menyeluruh yang mencakup setiap aspek penting dari kesehatan situs. Berikut area utama yang kami kelola:',
            ],
            list: [
              'Pemantauan Situs Proaktif: Deteksi dini terhadap gangguan uptime, anomali performa, dan potensi masalah sebelum berdampak pada pengguna atau operasional bisnis.',
              'Pemeliharaan Keamanan dan Manajemen Patch: Pemeriksaan keamanan rutin, penerapan pembaruan, dan pengelolaan patch untuk melindungi situs dari kerentanan yang terus berkembang.',
              'Optimasi Performa: Penyesuaian berkelanjutan untuk memastikan kecepatan loading dan stabilitas situs yang konsisten bagi setiap pengguna.',
              'Backup dan Dukungan Pemulihan: Pencadangan data secara terjadwal dan prosedur pemulihan yang siap dijalankan saat dibutuhkan.',
              'Perbaikan Bug dan Resolusi Masalah: Identifikasi dan penanganan bug secara cepat untuk menjaga stabilitas dan fungsi situs.',
              'Pemeliharaan SEO Teknis: Pemantauan dan perbaikan aspek teknis yang mempengaruhi visibilitas situs di mesin pencari.',
              'Respons Insiden dan Dukungan Cepat: Penanganan sigap terhadap gangguan atau insiden kritis untuk meminimalkan dampak pada bisnis.',
              'Perbaikan dan Peningkatan Berkelanjutan: Evaluasi dan peningkatan situs secara berkala agar selalu sesuai dengan kebutuhan bisnis yang berkembang.',
            ],
          },
          {
            id: 'risiko-pemeliharaan',
            tocLabel: 'Risiko Pemeliharaan',
            heading: 'Risiko Umum dari Pemeliharaan Web yang Diabaikan',
            paragraphs: [
              'Mengabaikan pemeliharaan web secara rutin dapat menimbulkan berbagai risiko yang berdampak langsung pada bisnis:',
            ],
            list: [
              'Kerentanan keamanan yang tidak ditangani dapat dieksploitasi, berpotensi menyebabkan kebocoran data atau serangan yang merusak reputasi.',
              'Performa situs yang menurun mempengaruhi pengalaman pengguna, meningkatkan bounce rate, dan mengurangi efektivitas konversi.',
              'Kehilangan data penting akibat tidak adanya backup yang memadai dapat mengganggu operasional dalam jangka panjang.',
              'Downtime yang tidak terencana menghentikan layanan digital dan mengurangi kepercayaan pelanggan.',
              'Masalah teknis SEO yang dibiarkan dapat menurunkan peringkat pencarian dan mengurangi visibilitas online bisnis secara bertahap.',
            ],
          },
          {
            id: 'checklist-pemeliharaan',
            tocLabel: 'Checklist Pemeliharaan',
            heading: 'Checklist Tugas Pemeliharaan Web yang Efektif',
            paragraphs: [
              'Pemeliharaan web yang terstruktur membutuhkan daftar tugas yang jelas dan terjadwal. Berikut tugas utama yang perlu dilakukan secara rutin:',
            ],
            list: [
              'Pemantauan uptime dan performa situs secara berkelanjutan.',
              'Pembaruan perangkat lunak, plugin, tema, dan penerapan patch keamanan terbaru.',
              'Pemeriksaan dan perbaikan bug yang ditemukan selama pemantauan atau pengujian.',
              'Pencadangan data secara terjadwal dan pengujian prosedur pemulihan.',
              'Optimasi kecepatan halaman dan pengalaman pengguna secara berkala.',
              'Audit teknis SEO dan penanganan masalah yang teridentifikasi.',
              'Persiapan rencana respons insiden dan pengujian kesiapan penanganan gangguan.',
            ],
          },
          {
            id: 'manfaat-proaktif',
            tocLabel: 'Manfaat Proaktif',
            heading: 'Manfaat Pemantauan Proaktif dan Pembaruan Berkala',
            paragraphs: [
              'Pendekatan proaktif dalam pemeliharaan web memberikan keunggulan yang terasa langsung dalam operasional bisnis:',
            ],
            list: [
              'Risiko downtime berkurang karena masalah terdeteksi dan ditangani sebelum berkembang menjadi gangguan serius.',
              'Keamanan situs terjaga dari ancaman terbaru melalui pembaruan dan patch yang diterapkan secara konsisten.',
              'Kecepatan dan pengalaman pengguna meningkat berkat optimasi yang dilakukan secara berkelanjutan.',
              'Data bisnis terlindungi dan dapat dipulihkan dengan cepat berkat backup yang teratur.',
              'Peringkat SEO dan visibilitas online terjaga melalui pemeliharaan teknis yang rutin.',
            ],
          },
          {
            id: 'backup-dan-pemulihan',
            tocLabel: 'Backup dan Pemulihan',
            heading: 'Peran Backup dan Pemulihan dalam Mendukung Ketahanan Bisnis',
            paragraphs: [
              'Backup rutin adalah fondasi dari ketahanan digital bisnis. Tanpa pencadangan yang terjadwal dan teruji, kehilangan data akibat kegagalan sistem, serangan, atau kesalahan manusia dapat berdampak permanen. Prosedur pemulihan yang telah dipersiapkan dengan baik memungkinkan situs kembali beroperasi dalam waktu singkat saat insiden terjadi.',
              'Dukungan respons insiden yang terintegrasi dengan sistem backup memastikan bahwa setiap gangguan ditangani secara terstruktur. Ini bukan hanya soal pemulihan teknis, tetapi juga soal menjaga kepercayaan pelanggan dan reputasi bisnis di tengah situasi yang tidak terduga.',
            ],
          },
          {
            id: 'seo-teknis-dan-perbaikan',
            tocLabel: 'SEO Teknis dan Perbaikan',
            heading: 'Pemeliharaan SEO Teknis dan Perbaikan Berkelanjutan untuk Visibilitas Situs',
            paragraphs: [
              'Aspek teknis SEO sering luput dari perhatian dalam pemeliharaan web konvensional, padahal dampaknya terhadap visibilitas situs sangat nyata. Masalah seperti halaman yang lambat dimuat, tautan rusak, struktur URL yang tidak konsisten, atau kesalahan pada file sitemap dapat menurunkan peringkat pencarian secara perlahan.',
              'Pemeliharaan SEO teknis yang rutin mencakup pemantauan dan perbaikan masalah tersebut, sekaligus memastikan situs tetap selaras dengan perubahan algoritma mesin pencari. Perbaikan berkelanjutan sebagai bagian dari layanan pemeliharaan menyeluruh memungkinkan situs untuk tidak hanya bertahan, tetapi juga berkembang sesuai dengan kebutuhan bisnis yang terus berubah.',
            ],
          },
          {
            id: 'langkah-selanjutnya',
            tocLabel: 'Hubungi Kami',
            heading: 'Hubungi Kami untuk Solusi Pemeliharaan Web yang Andal',
            paragraphs: [
              'Setiap bisnis memiliki kebutuhan pemeliharaan yang berbeda, bergantung pada skala, kompleksitas situs, dan tujuan digitalnya. Kami siap membantu Anda menentukan cakupan layanan yang paling sesuai melalui konsultasi awal tanpa kewajiban.',
              'Selain konsultasi langsung, tim kami siap membagikan panduan teknis pemeliharaan web sebagai referensi awal untuk memahami kebutuhan arsitektur digital bisnis Anda. Layanan kami dirancang untuk mendukung bisnis korporat, enterprise, maupun UKM yang ingin memastikan keandalan dan keamanan digital mereka secara berkelanjutan.',
            ],
          },
        ],
      },
      faq: {
        headline: 'FAQ tentang Pemeliharaan Web',
        subheadline: 'Pertanyaan umum seputar layanan pemeliharaan web, respons insiden, dan jaminan keandalan dari Teknalogi.',
        trustedLabel: 'Dipercaya oleh',
        trustedSub: 'Perusahaan dan bisnis berkembang di seluruh Indonesia',
        askButton: 'Konsultasi Kebutuhan Pemeliharaan',
        items: [
          {
            question: 'Apa itu pemeliharaan web dan mengapa penting?',
            answer: 'Pemeliharaan web adalah serangkaian aktivitas teknis berkelanjutan yang mencakup pemantauan uptime, pembaruan perangkat lunak, pengelolaan keamanan, optimasi performa, dan pencadangan data. Layanan ini sangat penting untuk mencegah downtime yang merugikan, melindungi data dari serangan siber, dan memastikan pengalaman pengguna tetap optimal untuk mendukung konversi bisnis.',
          },
          {
            question: 'Bagaimana cara membuat mode pemeliharaan pada website?',
            answer: 'Mode pemeliharaan dapat diaktifkan menggunakan halaman landing maintenance khusus yang mengembalikan status kode HTTP 503 (Service Unavailable). Hal ini memberitahukan mesin pencari bahwa situs sedang dalam pemeliharaan sementara tanpa menurunkan ranking SEO. Pada platform modern, kami mengonfigurasinya melalui server web, reverse proxy, atau plugin khusus dengan akses bypass untuk administrator.',
          },
          {
            question: 'Berapa biaya pemeliharaan web biasanya?',
            answer: 'Biaya pemeliharaan web disesuaikan dengan skala dan kompleksitas situs, volume trafik, kebutuhan SLA respons, serta frekuensi pencadangan data. Kami menyediakan skema paket bulanan maupun tahunan yang transparan dan fleksibel, baik untuk website profil perusahaan, portal e-commerce, maupun aplikasi web enterprise.',
          },
          {
            question: 'Berapa lama waktu yang dibutuhkan untuk melakukan pemeliharaan web?',
            answer: 'Pemantauan proaktif dan proteksi keamanan berjalan secara otomatis selama 24/7. Untuk pembaruan rutin seperti update plugin dan patch keamanan, proses pengerjaan biasanya memakan waktu beberapa jam dan dijadwalkan pada jam-jam dengan trafik terendah agar tidak mengganggu aktivitas pengunjung.',
          },
          {
            question: 'Apa saja risiko jika website tidak dipelihara secara rutin?',
            answer: 'Website yang diabaikan rentan terhadap peretasan akibat celah keamanan yang tidak ditambal, penurunan kecepatan akses yang meningkatkan bounce rate pengunjung, hilangnya data penting saat server bermasalah, serta penurunan peringkat di Google akibat kesalahan teknis SEO yang tidak terdeteksi.',
          },
          {
            question: 'Bagaimana Teknalogi menangani respons insiden pada website?',
            answer: 'Tim engineering Teknalogi menerapkan protokol respons insiden terkoordinasi dengan tingkat SLA yang jelas. Kami melakukan triase masalah dengan cepat, mendiagnosis akar penyebab gangguan, menerapkan perbaikan darurat, dan memulihkan operasional situs dalam waktu sesingkat mungkin.',
          },
          {
            question: 'Apa peran pemeliharaan SEO teknis dalam layanan pemeliharaan web?',
            answer: 'Pemeliharaan SEO teknis memastikan seluruh aspek fondasi situs tetap optimal untuk perayapan mesin pencari. Kami memantau kecepatan halaman, memperbaiki tautan rusak (404), memvalidasi file sitemap dan robots.txt, serta memastikan metadata dan structured data tetap terbaca sempurna oleh Google dan AI search engine.',
          },
          {
            question: 'Apakah backup dan pemulihan termasuk dalam layanan pemeliharaan web?',
            answer: 'Ya, seluruh paket pemeliharaan kami mencakup pencadangan data otomatis (database dan file) yang disimpan di lokasi offsite terenkripsi. Kami juga melakukan pengujian pemulihan berkala untuk memastikan data dapat direstorasi dengan cepat kapan pun dibutuhkan.',
          },
          {
            question: 'Bagaimana cara memulai layanan pemeliharaan web dengan Teknalogi?',
            answer: 'Anda dapat memulai dengan menghubungi tim kami melalui tombol WhatsApp atau formulir kontak di situs ini. Kami akan melakukan audit awal kondisi situs Anda secara gratis dan merekomendasikan cakupan pemeliharaan yang paling sesuai dengan kebutuhan bisnis Anda.',
          },
        ],
      },
    },
    caseStudiesPage: {
      meta: {
        title: 'Case Studies | Hasil Nyata & Transformasi Nyata | PT Teknalogi Transformasi Digital',
        description: 'Lihat rekam jejak solusi digital enterprise, alur kerja cloud, sistem monitoring, dan platform digital pemerintahan dari Teknalogi.',
      },
      hero: {
        title: 'Hasil nyata. Transformasi nyata.',
        subtitle: 'Lihat kolaborasi strategis bersama Teknalogi dalam menjawab tantangan bisnis lewat software engineering, web, SEO, dan transformasi digital.',
        industryLabel: 'Industri',
      },
      filters: [
        { id: 'all', label: 'Semua' },
        { id: 'enterprise', label: 'Enterprise' },
        { id: 'government', label: 'Pemerintahan' },
        { id: 'operations', label: 'Operasional' },
        { id: 'community', label: 'Komunitas' },
      ],
      items: [
        {
          id: 'kelolaaja',
          title: 'KelolaAja - CMS-Powered Product Experience',
          subtitle: 'Product Landing Page & Content Management Platform',
          category: 'enterprise',
          industry: 'Produk & SaaS',
          image: '/segera_hadir.png',
          webp: '/segera_hadir.webp',
          alt: 'KelolaAja - CMS-Powered Product Experience',
        },
        {
          id: 'nikawa-teknika-indonesia',
          title: 'PT Nikawa Teknika Indonesia - Corporate Digital Presence',
          subtitle: 'Corporate Website & Company Profile Experience',
          category: 'enterprise',
          industry: 'Manufaktur',
          image: '/segera_hadir.png',
          webp: '/segera_hadir.webp',
          alt: 'PT Nikawa Teknika Indonesia - Corporate Digital Presence',
        },
        {
          id: 'anytime-fitness',
          title: 'Anytime Fitness - Digital Fitness Management Platform',
          subtitle: 'Website & Flutter-Based Member Management Application',
          category: 'community',
          industry: 'Kebugaran',
          image: '/segera_hadir.png',
          webp: '/segera_hadir.webp',
          alt: 'Anytime Fitness - Digital Fitness Management Platform',
        },
        {
          id: 'enterprise-operations-platform',
          title: 'Enterprise Operations Platform',
          subtitle: 'Custom Business Management System & Workflow Automation',
          category: 'operations',
          industry: 'Operasional',
          image: '/segera_hadir.png',
          webp: '/segera_hadir.webp',
          alt: 'Enterprise Operations Platform - Custom Business Management System & Workflow Automation',
        },
      ],
      blueprint: {
        badge: 'Rekam Jejak Implementasi',
        title: 'Portofolio Proyek & Arsitektur Solusi',
        subtitle: 'Rekam jejak implementasi rekayasa perangkat lunak skala enterprise dan integrasi sistem di berbagai sektor industri.',
        mobileHint: 'Geser ke samping untuk melihat detail diagram',
      },
    },
  },
} as const;

export function getTranslations(lang: Locale = 'en') {
  return translations[lang] || translations.en;
}

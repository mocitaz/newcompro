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
            image: '/industry/perbankan.webp',
            fallback: '/industry/perbankan.png',
            href: '/layanan'
          },
          {
            id: 'tech-saas',
            title: 'Technology & SaaS',
            image: '/industry/teknologi_and_saas.webp',
            fallback: '/industry/teknologi_and_saas.png',
            href: '/layanan'
          },
          {
            id: 'manufacturing',
            title: 'Manufacturing & Industry',
            image: '/industry/manufaktur.webp',
            fallback: '/industry/manufaktur.png',
            href: '/layanan'
          },
          {
            id: 'healthcare',
            title: 'Healthcare & Life Sciences',
            image: '/industry/kesehatan.webp',
            fallback: '/industry/kesehatan.png',
            href: '/layanan'
          },
          {
            id: 'business-services',
            title: 'Professional & Business Services',
            image: '/industry/layananprofesional.webp',
            fallback: '/industry/layananprofesional.png',
            href: '/layanan'
          },
          {
            id: 'insurance',
            title: 'Insurance',
            image: '/industry/asuransi.jpg',
            fallback: '/industry/asuransi.jpg',
            href: '/layanan'
          },
          {
            id: 'education',
            title: 'Education',
            image: '/industry/pendidikan.jpg',
            fallback: '/industry/pendidikan.jpg',
            href: '/layanan'
          },
          {
            id: 'telecom',
            title: 'Telecommunications',
            image: '/industry/telekomunikasi.jpg',
            fallback: '/industry/telekomunikasi.jpg',
            href: '/layanan'
          },
          {
            id: 'retail',
            title: 'Retail & E-Commerce',
            image: '/industry/retail.jpg',
            fallback: '/industry/retail.jpg',
            href: '/layanan'
          }
        ]
      },
      servicesDropdown: [
        { title: 'Website Development', desc: 'High-performance web applications and responsive corporate portals.', href: '/layanan' },
        { title: 'Software & App Development', desc: 'Mission-critical iOS, Android, and distributed backend systems.', href: '/layanan' },
        { title: 'SEO & AI Search Optimization', desc: 'Advanced search engine optimization, GEO, and AI answer discovery.', href: '/layanan' },
        { title: 'System Maintenance & SLA', desc: '24/7 reliability engineering, security audits, and system uptime.', href: '/layanan' },
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
            href: '/layanan'
          },
          {
            title: 'Mobile App Development',
            desc: 'Android, iOS, and cross-platform mobile applications.',
            icon: 'mobile',
            href: '/layanan'
          },
          {
            title: 'Workflow Automation',
            desc: 'Integrate and automate your business processes with AI technology.',
            icon: 'workflow',
            href: '/layanan'
          },
          {
            title: 'Search Engine Optimization (SEO)',
            desc: 'Increase website ranking and visibility in search engines.',
            icon: 'search',
            href: '/layanan'
          },
          {
            title: 'AI-Powered Search Optimization',
            desc: 'Enhance visibility across next-generation AI search platforms.',
            icon: 'ai-search',
            href: '/layanan'
          },
          {
            title: 'SEO & AI-Search Audit',
            desc: 'Comprehensive assessment of your website’s SEO, AEO, and GEO readiness.',
            icon: 'audit',
            href: '/layanan'
          },
          {
            title: 'Website Maintenance',
            desc: 'Ensure your website always runs optimally with peak performance.',
            icon: 'maintenance',
            href: '/layanan'
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
            name: 'PixelPlay!',
            desc: 'Interactive digital experiences, creative web applications, and gamified enterprise portals.',
            image: '/resource_pixelplay.png',
            href: '/layanan'
          },
          {
            brand: 'Tekna',
            name: 'TraKerja',
            desc: 'Integrated workforce tracking platform, operational productivity, and enterprise talent solutions.',
            image: '/resource_trakerja.png',
            href: '/layanan'
          }
        ],
        knowledgeHub: {
          title: 'Knowledge Hub',
          desc: 'Learn the fundamentals behind modern websites, software, search visibility, and digital growth.',
          topics: [
            { label: 'Website Development', href: '/layanan#web-dev' },
            { label: 'Fundamental SEO', href: '/layanan#seo-ai' },
            { label: 'AI Search, GEO, AEO', href: '/layanan#seo-ai' },
            { label: 'AI & Implementation', href: '/layanan#software-app' }
          ],
          ctaLabel: 'Explore Knowledge Hub',
          ctaHref: '/layanan'
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
          tags: ['Next.js', 'React', 'TypeScript', 'Tailwind']
        },
        {
          id: 'software-app',
          title: 'Software & App Development',
          description: 'Robust iOS and Android applications backed by high-throughput enterprise backends and scalable microservices.',
          image: '/services/software_app_v2.webp',
          fallback: '/services/software_app_v2.jpg',
          tags: ['iOS & Android', 'Flutter', 'Cloud Architecture', 'APIs']
        },
        {
          id: 'seo-ai',
          title: 'SEO & AI Search Optimization',
          description: 'Accelerate brand visibility across traditional search engines and next-generation AI answer engines.',
          image: '/services/seo_ai_v2.webp',
          fallback: '/services/seo_ai_v2.jpg',
          tags: ['Technical SEO', 'GEO & AEO', 'AI Search', 'Audits']
        },
        {
          id: 'maintenance',
          title: 'Maintenance & Enhancement Services',
          description: 'Proactive SLA-backed maintenance, security audits, database tuning, and continuous infrastructure evolution.',
          image: '/services/maintenance_v2.webp',
          fallback: '/services/maintenance_v2.jpg',
          tags: ['SLA Support', 'Security Audits', 'Cloud Ops', 'CI/CD']
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
    }
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
            image: '/industry/perbankan.webp',
            fallback: '/industry/perbankan.png',
            href: '/id/layanan'
          },
          {
            id: 'tech-saas',
            title: 'Teknologi & SaaS',
            image: '/industry/teknologi_and_saas.webp',
            fallback: '/industry/teknologi_and_saas.png',
            href: '/id/layanan'
          },
          {
            id: 'manufacturing',
            title: 'Manufaktur & Industri',
            image: '/industry/manufaktur.webp',
            fallback: '/industry/manufaktur.png',
            href: '/id/layanan'
          },
          {
            id: 'healthcare',
            title: 'Kesehatan & Life Sciences',
            image: '/industry/kesehatan.webp',
            fallback: '/industry/kesehatan.png',
            href: '/id/layanan'
          },
          {
            id: 'business-services',
            title: 'Layanan Profesional & Bisnis',
            image: '/industry/layananprofesional.webp',
            fallback: '/industry/layananprofesional.png',
            href: '/id/layanan'
          },
          {
            id: 'insurance',
            title: 'Asuransi',
            image: '/industry/asuransi.jpg',
            fallback: '/industry/asuransi.jpg',
            href: '/id/layanan'
          },
          {
            id: 'education',
            title: 'Pendidikan',
            image: '/industry/pendidikan.jpg',
            fallback: '/industry/pendidikan.jpg',
            href: '/id/layanan'
          },
          {
            id: 'telecom',
            title: 'Telekomunikasi',
            image: '/industry/telekomunikasi.jpg',
            fallback: '/industry/telekomunikasi.jpg',
            href: '/id/layanan'
          },
          {
            id: 'retail',
            title: 'Retail & E-Commerce',
            image: '/industry/retail.jpg',
            fallback: '/industry/retail.jpg',
            href: '/id/layanan'
          }
        ]
      },
      servicesDropdown: [
        { title: 'Pengembangan Web Modern', desc: 'Website performa tinggi, aplikasi web dinamis, dan portal SaaS.', href: '/id/layanan' },
        { title: 'Software Enterprise & Aplikasi Mobile', desc: 'Aplikasi mobile iOS/Android dan backend microservices tangguh.', href: '/id/layanan' },
        { title: 'Integrasi AI & Optimasi Pencarian', desc: 'Optimasi mesin pencari tradisional, GEO, dan integrasi AI discovery.', href: '/id/layanan' },
        { title: 'Pemeliharaan Sistem & SLA', desc: 'Dukungan sistem 24/7, audit keamanan berkala, dan jaminan uptime.', href: '/id/layanan' },
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
            href: '/id/layanan'
          },
          {
            title: 'Mobile App Development',
            desc: 'Aplikasi berbasis Android, iOS, dan cross-platform.',
            icon: 'mobile',
            href: '/id/layanan'
          },
          {
            title: 'Workflow Automation',
            desc: 'Integrasi dan otomatisasi proses bisnis anda dengan teknologi AI.',
            icon: 'workflow',
            href: '/id/layanan'
          },
          {
            title: 'Optimasi Search Engine (SEO)',
            desc: 'Tingkatkan ranking dan visibilitas website di mesin pencari.',
            icon: 'search',
            href: '/id/layanan'
          },
          {
            title: 'Optimasi Pencarian Berbasis AI',
            desc: 'Tingkatkan visibilitas di platform pencarian berbasis AI.',
            icon: 'ai-search',
            href: '/id/layanan'
          },
          {
            title: 'SEO & AI-Search Audit',
            desc: 'Penilaian menyeluruh kesiapan SEO, AEO, dan GEO website Anda.',
            icon: 'audit',
            href: '/id/layanan'
          },
          {
            title: 'Website Maintenance',
            desc: 'Pastikan website Anda selalu berjalan optimal dan performa terjaga.',
            icon: 'maintenance',
            href: '/id/layanan'
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
            name: 'PixelPlay!',
            desc: 'Eksplorasi pengalaman digital interaktif, visual web kreatif, dan modul gamifikasi enterprise.',
            image: '/resource_pixelplay.png',
            href: '/id/layanan'
          },
          {
            brand: 'Tekna',
            name: 'TraKerja',
            desc: 'Platform terintegrasi manajemen tenaga kerja, pelacakan produktivitas, dan operasional enterprise.',
            image: '/resource_trakerja.png',
            href: '/id/layanan'
          }
        ],
        knowledgeHub: {
          title: 'Knowledge Hub',
          desc: 'Pelajari dasar-dasar di balik website modern, software, visibilitas pencarian, dan pertumbuhan digital.',
          topics: [
            { label: 'Pengembangan Website', href: '/id/layanan#web-dev' },
            { label: 'Fundamental SEO', href: '/id/layanan#seo-ai' },
            { label: 'AI Search, GEO, AEO', href: '/id/layanan#seo-ai' },
            { label: 'AI & Implementasinya', href: '/id/layanan#software-app' }
          ],
          ctaLabel: 'Jelajahi Knowledge Hub',
          ctaHref: '/id/layanan'
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
          tags: ['Next.js', 'React', 'TypeScript', 'Tailwind']
        },
        {
          id: 'software-app',
          title: 'Software & App Development',
          description: 'Aplikasi mobile iOS dan Android yang stabil dan cepat, didukung arsitektur backend andal dan integrasi API yang aman.',
          image: '/services/software_app_v2.webp',
          fallback: '/services/software_app_v2.jpg',
          tags: ['iOS & Android', 'Flutter', 'Arsitektur Cloud', 'API']
        },
        {
          id: 'seo-ai',
          title: 'SEO & AI Search Optimization',
          description: 'Optimasi visibilitas website di Google Search serta mesin pencari AI generasi baru seperti ChatGPT dan Perplexity.',
          image: '/services/seo_ai_v2.webp',
          fallback: '/services/seo_ai_v2.jpg',
          tags: ['Technical SEO', 'GEO & AEO', 'Pencarian AI', 'Audit']
        },
        {
          id: 'maintenance',
          title: 'Maintenance & Enhancement Services',
          description: 'Pemeliharaan sistem bergaransi SLA, audit keamanan berkala, optimasi database, dan penambahan fitur berkelanjutan.',
          image: '/services/maintenance_v2.webp',
          fallback: '/services/maintenance_v2.jpg',
          tags: ['Dukungan SLA', 'Audit Keamanan', 'Cloud Ops', 'CI/CD']
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
    }
  }
} as const;

export function getTranslations(lang: Locale = 'en') {
  return translations[lang] || translations.en;
}

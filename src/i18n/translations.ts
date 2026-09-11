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
            href: '/layanan'
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
      description: "PT Teknalogi Transformasi Digital is an enterprise software engineering and system integration firm based in Jakarta, Indonesia. We help corporations and institutions architect, build, and operate resilient, scalable, and secure digital ecosystems, accelerating AI adoption and modernizing core cloud infrastructure.",
      card1: {
        stat: "2+",
        label: "Years of Experience."
      },
      card2: {
        title: "End to End Solutions",
        description: "From architectural discovery, frontend and backend development, to cloud maintenance and long-term system scaling. Handled by an integrated engineering team."
      },
      card3: {
        title: "Solutions for Every Business Scale",
        description: "From tech scaleups and SMEs to state-owned enterprises, government institutions, and multinational corporations."
      },
      card4: {
        stat: "15+",
        label: "Projects Completed"
      }
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
          image: '/services/web_dev.webp',
          fallback: '/services/web_dev.jpg',
          tags: ['Next.js', 'React', 'TypeScript', 'Tailwind']
        },
        {
          id: 'software-app',
          title: 'Software & App Development',
          description: 'Robust iOS and Android applications backed by high-throughput enterprise backends and scalable microservices.',
          image: '/services/software_app.webp',
          fallback: '/services/software_app.jpg',
          tags: ['iOS & Android', 'Flutter', 'Cloud Architecture', 'APIs']
        },
        {
          id: 'seo-ai',
          title: 'SEO & AI Search Optimization',
          description: 'Accelerate brand visibility across traditional search engines and next-generation AI answer engines.',
          image: '/services/seo_ai.webp',
          fallback: '/services/seo_ai.jpg',
          tags: ['Technical SEO', 'GEO & AEO', 'AI Search', 'Audits']
        },
        {
          id: 'maintenance',
          title: 'Maintenance & Enhancement Services',
          description: 'Proactive SLA-backed maintenance, security audits, database tuning, and continuous infrastructure evolution.',
          image: '/services/maintenance.webp',
          fallback: '/services/maintenance.jpg',
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
            href: '/id/layanan'
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
      description: "PT Teknalogi Transformasi Digital adalah perusahaan penyedia rekayasa perangkat lunak enterprise dan integrasi sistem yang berbasis di Jakarta, Indonesia. Kami membantu perusahaan merancang, membangun, dan mengelola ekosistem digital yang andal, scalable, sekaligus mempercepat adopsi AI dan modernisasi platform cloud.",
      card1: {
        stat: "2+",
        label: "Tahun Pengalaman."
      },
      card2: {
        title: "Solusi End to End",
        description: "Mulai dari strategi, arsitektur, development, integrasi sistem, hingga maintenance dan pengembangan jangka panjang. Semua ditangani oleh satu tim yang terintegrasi."
      },
      card3: {
        title: "Solusi untuk Semua Skala Bisnis",
        description: "Mulai dari startup dan UMKM, BUMN, instansi pemerintah, hingga korporasi multinasional."
      },
      card4: {
        stat: "15+",
        label: "Proyek diselesaikan"
      }
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
          image: '/services/web_dev.webp',
          fallback: '/services/web_dev.jpg',
          tags: ['Next.js', 'React', 'TypeScript', 'Tailwind']
        },
        {
          id: 'software-app',
          title: 'Software & App Development',
          description: 'Aplikasi mobile iOS dan Android yang stabil dan cepat, didukung arsitektur backend andal dan integrasi API yang aman.',
          image: '/services/software_app.webp',
          fallback: '/services/software_app.jpg',
          tags: ['iOS & Android', 'Flutter', 'Arsitektur Cloud', 'API']
        },
        {
          id: 'seo-ai',
          title: 'SEO & AI Search Optimization',
          description: 'Optimasi visibilitas website di Google Search serta mesin pencari AI generasi baru seperti ChatGPT dan Perplexity.',
          image: '/services/seo_ai.webp',
          fallback: '/services/seo_ai.jpg',
          tags: ['Technical SEO', 'GEO & AEO', 'Pencarian AI', 'Audit']
        },
        {
          id: 'maintenance',
          title: 'Maintenance & Enhancement Services',
          description: 'Pemeliharaan sistem bergaransi SLA, audit keamanan berkala, optimasi database, dan penambahan fitur berkelanjutan.',
          image: '/services/maintenance.webp',
          fallback: '/services/maintenance.jpg',
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
    }
  }
} as const;

export function getTranslations(lang: Locale = 'en') {
  return translations[lang] || translations.en;
}

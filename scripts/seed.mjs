import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 't47dk984',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
})

const ls = (nl, en, de) => ({ nl, en, de })

const docs = [
  {
    _type: 'navigation',
    _id: 'navigation-singleton',
    home: ls('Home', 'Home', 'Home'),
    services: ls('Diensten', 'Services', 'Leistungen'),
    products: ls('Producten', 'Products', 'Produkte'),
    sectors: ls('Sectoren', 'Sectors', 'Branchen'),
    technology: ls('Technologie', 'Technology', 'Technologie'),
    about: ls('Over Ons', 'About Us', 'Über Uns'),
    contact: ls('Contact', 'Contact', 'Kontakt'),
    footerTagline: ls(
      'Van AI-adoptie naar AI-driven organisatie',
      'From AI adoption to AI-driven organisation',
      'Von der KI-Adoption zur KI-gesteuerten Organisation'
    ),
    footerPrivacy: ls('Privacybeleid', 'Privacy Policy', 'Datenschutz')
  },
  {
    _type: 'homePage',
    _id: 'home-singleton',
    heroTagline: ls(
      'Van AI-adoptie naar AI-driven organisatie',
      'From AI adoption to AI-driven organisation',
      'Von der KI-Adoption zur KI-gesteuerten Organisation'
    ),
    heroSubtitle: ls(
      'VitalSail begeleidt organisaties bij de praktische adoptie en strategische inzet van Artificial Intelligence. Hands-on, sectorspecifiek en gericht op duurzame resultaten.',
      'VitalSail guides organisations in the practical adoption and strategic deployment of Artificial Intelligence. Hands-on, sector-specific and focused on lasting results.',
      'VitalSail begleitet Organisationen bei der praktischen Einführung und dem strategischen Einsatz von Künstlicher Intelligenz. Praxisnah, branchenspezifisch und auf nachhaltige Ergebnisse ausgerichtet.'
    ),
    heroCTAPrimary: ls('Neem contact op', 'Get in touch', 'Kontakt aufnehmen'),
    heroCTASecondary: ls('Ontdek onze diensten', 'Discover our services', 'Unsere Leistungen entdecken'),
    propositionTitle: ls('Waarom VitalSail?', 'Why VitalSail?', 'Warum VitalSail?'),
    propositionItems: [
      {
        title: ls('Strategisch AI-partner', 'Strategic AI partner', 'Strategischer KI-Partner'),
        body: ls(
          'Wij denken mee op strategisch niveau en helpen de organisatie een duurzame koers te varen in het AI-landschap.',
          'We think along at a strategic level and help the organisation chart a sustainable course in the AI landscape.',
          'Wir denken auf strategischer Ebene mit und helfen der Organisation, einen nachhaltigen Kurs in der KI-Landschaft zu finden.'
        )
      },
      {
        title: ls('Technisch ontwikkelaar', 'Technical developer', 'Technischer Entwickler'),
        body: ls(
          'Van concept naar werkende oplossing. Wij bouwen de technische infrastructuur die uw AI-ambities realiteit maakt.',
          'From concept to working solution. We build the technical infrastructure that makes your AI ambitions a reality.',
          'Vom Konzept zur funktionierenden Lösung. Wir bauen die technische Infrastruktur, die Ihre KI-Ambitionen Wirklichkeit werden lässt.'
        )
      },
      {
        title: ls('Kennispartner & Trainer', 'Knowledge partner & Trainer', 'Wissenspartner & Trainer'),
        body: ls(
          'Praktische, direct toepasbare kennis. Leren door te doen in de eigen werkomgeving.',
          'Practical, directly applicable knowledge. Learning by doing in your own work environment.',
          'Praktisches, direkt anwendbares Wissen. Lernen durch Tun in der eigenen Arbeitsumgebung.'
        )
      },
      {
        title: ls('Data-ethiek & Compliance', 'Data ethics & Compliance', 'Datenethik & Compliance'),
        body: ls(
          "AI inzetten zonder risico's. Wij zorgen dat juridische, ethische en technische randvoorwaarden altijd kloppen.",
          "Deploying AI without risks. We ensure that legal, ethical and technical requirements are always met.",
          "KI einsetzen ohne Risiken. Wir stellen sicher, dass rechtliche, ethische und technische Rahmenbedingungen stets erfüllt sind."
        )
      }
    ],
    sectorsTitle: ls('Onze doelmarkten', 'Our target markets', 'Unsere Zielmärkte'),
    sectorsSubtitle: ls(
      'Sectorspecifieke expertise gecombineerd met brede AI-kennis.',
      'Sector-specific expertise combined with broad AI knowledge.',
      'Branchenspezifische Expertise kombiniert mit umfassendem KI-Wissen.'
    ),
    maturityTitle: ls('Het AI-volwassenheidsmodel', 'The AI maturity model', 'Das KI-Reifemodell'),
    maturitySubtitle: ls(
      'Elke organisatie start op een ander punt. Wij begeleiden de volledige reis — van eerste bewustwording tot volledig AI-gedreven organisatie.',
      'Every organisation starts at a different point. We guide the full journey — from initial awareness to a fully AI-driven organisation.',
      'Jede Organisation startet an einem anderen Punkt. Wir begleiten den gesamten Weg — von der ersten Bewusstseinsbildung bis zur vollständig KI-gesteuerten Organisation.'
    ),
    maturityPhases: [
      { nr: '01', name: ls('AI-adoptie', 'AI adoption', 'KI-Adoption'), desc: ls('Bewustwording, basisbegrip en veilig starten', 'Awareness, basic understanding and safe start', 'Bewusstsein, Grundverständnis und sicherer Start') },
      { nr: '02', name: ls('Operationalisatie', 'Operationalisation', 'Operationalisierung'), desc: ls('AI inbedden in werkprocessen en workflows', 'Embedding AI in work processes and workflows', 'KI in Arbeitsprozesse und Workflows einbetten') },
      { nr: '03', name: ls('Integratie & Governance', 'Integration & Governance', 'Integration & Governance'), desc: ls('AI-beleid, data-governance en compliance', 'AI policy, data governance and compliance', 'KI-Richtlinien, Data-Governance und Compliance') },
      { nr: '04', name: ls('Opschaling', 'Scaling', 'Skalierung'), desc: ls('AI-infrastructuur, agents en multi-team workflows', 'AI infrastructure, agents and multi-team workflows', 'KI-Infrastruktur, Agenten und Team-übergreifende Workflows') },
      { nr: '05', name: ls('AI-driven Organisatie', 'AI-driven Organisation', 'KI-gesteuerte Organisation'), desc: ls('Strategische waarde en forecasting', 'Strategic value and forecasting', 'Strategischer Mehrwert und Forecasting') }
    ],
    ctaTitle: ls('Klaar om te starten?', 'Ready to get started?', 'Bereit anzufangen?'),
    ctaBody: ls(
      'Ontdek waar uw organisatie staat en wat de volgende stap is.',
      'Discover where your organisation stands and what the next step is.',
      'Entdecken Sie, wo Ihre Organisation steht und was der nächste Schritt ist.'
    ),
    ctaButton: ls('Vraag een AI-quickscan aan', 'Request an AI quick scan', 'KI-Schnellscan anfordern')
  },
  {
    _type: 'servicesPage',
    _id: 'services-singleton',
    title: ls('Diensten', 'Services', 'Leistungen'),
    subtitle: ls(
      'Een gelaagd dienstenpakket. Instappen op elk niveau, afhankelijk van uw AI-volwassenheid en ambitie.',
      'A layered service offering. Enter at any level, depending on your AI maturity and ambition.',
      'Ein gestaffeltes Leistungsangebot. Einstieg auf jeder Ebene, abhängig von Ihrer KI-Reife und Ihren Ambitionen.'
    ),
    services: [
      {
        nr: '01',
        title: ls('Training & Workshops', 'Training & Workshops', 'Training & Workshops'),
        desc: ls('Bewustwording, basisbegrip en praktische vaardigheden', 'Awareness, basic understanding and practical skills', 'Bewusstsein, Grundverständnis und praktische Fähigkeiten'),
        items: [
          { label: ls('Introductie generatieve AI', 'Introduction to generative AI', 'Einführung in generative KI') },
          { label: ls('Veilig en verantwoord AI-gebruik (AVG/privacy)', 'Safe and responsible AI use (GDPR/privacy)', 'Sicherer und verantwortungsvoller KI-Einsatz (DSGVO/Datenschutz)') },
          { label: ls('Prompting basisvaardigheden', 'Basic prompting skills', 'Grundlegende Prompting-Fähigkeiten') },
          { label: ls('AI in dagelijkse werkzaamheden', 'AI in daily work', 'KI in der täglichen Arbeit') },
          { label: ls('Werken met Copilot / MS365', 'Working with Copilot / MS365', 'Arbeiten mit Copilot / MS365') },
          { label: ls('Geavanceerd prompting', 'Advanced prompting', 'Erweitertes Prompting') },
          { label: ls('AI als strategisch denkpartner', 'AI as strategic thinking partner', 'KI als strategischer Denkpartner') },
          { label: ls('Sectorspecifieke toepassingen', 'Sector-specific applications', 'Branchenspezifische Anwendungen') }
        ]
      },
      {
        nr: '02',
        title: ls('Coaching & Begeleiding', 'Coaching & Guidance', 'Coaching & Begleitung'),
        desc: ls('Individuele en teamcoaching on-the-job', 'Individual and team coaching on the job', 'Individuelle und Team-Coaching on-the-job'),
        items: [
          { label: ls('1-op-1 AI-coaching', '1-on-1 AI coaching', '1-zu-1 KI-Coaching') },
          { label: ls('Team AI-coaching on-the-job', 'Team AI coaching on the job', 'Team-KI-Coaching on-the-job') },
          { label: ls('AI-ambassadeurs opleiden', 'Training AI ambassadors', 'KI-Botschafter ausbilden') },
          { label: ls('Vraagbaak en sparringpartner', 'Helpdesk and sparring partner', 'Anlaufstelle und Sparringspartner') },
          { label: ls('Promptbibliotheek opbouwen', 'Building a prompt library', 'Aufbau einer Prompt-Bibliothek') },
          { label: ls('Begeleiding bij use-case-experimenten', 'Guidance on use case experiments', 'Begleitung bei Use-Case-Experimenten') }
        ]
      },
      {
        nr: '03',
        title: ls('Strategie & Consultancy', 'Strategy & Consultancy', 'Strategie & Beratung'),
        desc: ls('AI-strategie, governance en roadmap', 'AI strategy, governance and roadmap', 'KI-Strategie, Governance und Roadmap'),
        items: [
          { label: ls('AI-quickscan en volwassenheidsanalyse', 'AI quick scan and maturity analysis', 'KI-Schnellscan und Reifeanalyse') },
          { label: ls('AI-strategie en roadmap', 'AI strategy and roadmap', 'KI-Strategie und Roadmap') },
          { label: ls('Business case', 'Business case', 'Business Case') },
          { label: ls('AI-governance model', 'AI governance model', 'KI-Governance-Modell') },
          { label: ls('Data-governance advies', 'Data governance advice', 'Data-Governance-Beratung') },
          { label: ls('Risicobeheer en ethiek', 'Risk management and ethics', 'Risikomanagement und Ethik') },
          { label: ls('Communicatieplan AI-adoptie', 'AI adoption communication plan', 'Kommunikationsplan KI-Adoption') }
        ]
      },
      {
        nr: '04',
        title: ls('Implementatie & Tooling', 'Implementation & Tooling', 'Implementierung & Tooling'),
        desc: ls('Van pilot naar productie', 'From pilot to production', 'Vom Piloten zur Produktion'),
        items: [
          { label: ls('Use-case selectie en prioritering', 'Use case selection and prioritisation', 'Use-Case-Auswahl und Priorisierung') },
          { label: ls('Tool-selectie en benchmarking', 'Tool selection and benchmarking', 'Tool-Auswahl und Benchmarking') },
          { label: ls('Copilot & MS365 implementatie', 'Copilot & MS365 implementation', 'Copilot & MS365-Implementierung') },
          { label: ls('Chatbot en AI-assistent bouwen', 'Building chatbot and AI assistant', 'Chatbot und KI-Assistent aufbauen') },
          { label: ls('Workflow-automatisering (n8n)', 'Workflow automation (n8n)', 'Workflow-Automatisierung (n8n)') },
          { label: ls('Agentic AI-oplossingen', 'Agentic AI solutions', 'Agentische KI-Lösungen') },
          { label: ls('Kennisbank/RAG-systeem', 'Knowledge base / RAG system', 'Wissensdatenbank / RAG-System') },
          { label: ls('API-integraties', 'API integrations', 'API-Integrationen') }
        ]
      },
      {
        nr: '05',
        title: ls('AI as a Service', 'AI as a Service', 'AI as a Service'),
        desc: ls('Managed AI-infrastructuur als volledig ontzorgd pakket', 'Managed AI infrastructure as a fully carefree package', 'Verwaltete KI-Infrastruktur als vollständig sorglosespaket'),
        items: [
          { label: ls('Complete AI tech stack (LLM + GenAI + agents)', 'Complete AI tech stack (LLM + GenAI + agents)', 'Kompletter KI-Tech-Stack (LLM + GenAI + Agenten)') },
          { label: ls('MCP-server inrichting', 'MCP server setup', 'MCP-Server-Einrichtung') },
          { label: ls('Vector database beheer', 'Vector database management', 'Vektordatenbank-Verwaltung') },
          { label: ls('Knowledge graph', 'Knowledge graph', 'Wissensgraph') },
          { label: ls('AI-workflow management', 'AI workflow management', 'KI-Workflow-Management') },
          { label: ls('Maandelijks beheer en optimalisatie', 'Monthly management and optimisation', 'Monatliche Verwaltung und Optimierung') }
        ]
      }
    ]
  },
  {
    _type: 'productsPage',
    _id: 'products-singleton',
    title: ls('Producten', 'Products', 'Produkte'),
    subtitle: ls(
      'VitalSail ontwikkelt generieke AI-producten die wij zelf bouwen, produceren en als product exploiteren — schaalbaar en direct inzetbaar.',
      'VitalSail develops generic AI products that we build, produce and exploit as a product ourselves — scalable and immediately deployable.',
      'VitalSail entwickelt generische KI-Produkte, die wir selbst bauen, produzieren und als Produkt betreiben — skalierbar und sofort einsetzbar.'
    ),
    intro: ls(
      'Naast maatwerkopdrachten investeert VitalSail in eigen AI-producten: digitale medewerkers, sectorspecifieke AI-assistenten en geautomatiseerde workflows die als standalone dienst worden aangeboden.',
      'In addition to custom projects, VitalSail invests in its own AI products: digital employees, sector-specific AI assistants and automated workflows offered as standalone services.',
      'Neben Maßanfertigungen investiert VitalSail in eigene KI-Produkte: digitale Mitarbeiter, branchenspezifische KI-Assistenten und automatisierte Workflows, die als eigenständige Dienste angeboten werden.'
    ),
    categories: [
      {
        title: ls('AI-assistenten & Digitale Medewerkers', 'AI Assistants & Digital Employees', 'KI-Assistenten & Digitale Mitarbeiter'),
        desc: ls(
          'Autonome AI-agents die repetitieve kennisprocessen overnemen en schaalbaar inzetbaar zijn binnen sectoren.',
          'Autonomous AI agents that take over repetitive knowledge processes and can be deployed scalably within sectors.',
          'Autonome KI-Agenten, die repetitive Wissensprozesse übernehmen und skalierbar in Branchen eingesetzt werden können.'
        )
      },
      {
        title: ls('Sectorproducten', 'Sector products', 'Branchenprodukte'),
        desc: ls(
          'Kant-en-klare AI-oplossingen voor zorg, vastgoed en zakelijke dienstverlening — geconfigureerd voor directe inzet.',
          'Ready-to-use AI solutions for healthcare, real estate and professional services — configured for immediate deployment.',
          'Sofort einsetzbare KI-Lösungen für das Gesundheitswesen, Immobilien und professionelle Dienstleistungen — konfiguriert für den direkten Einsatz.'
        )
      },
      {
        title: ls('Workflow Automatisering', 'Workflow Automation', 'Workflow-Automatisierung'),
        desc: ls(
          'Gestandaardiseerde automatiseringspakketten op basis van n8n en agentic AI voor terugkerende bedrijfsprocessen.',
          'Standardised automation packages based on n8n and agentic AI for recurring business processes.',
          'Standardisierte Automatisierungspakete auf Basis von n8n und agentischer KI für wiederkehrende Geschäftsprozesse.'
        )
      }
    ],
    ctaLabel: ls(
      'Neem contact op voor meer informatie over onze producten',
      'Contact us for more information about our products',
      'Kontaktieren Sie uns für weitere Informationen zu unseren Produkten'
    )
  },
  {
    _type: 'sectorsPage',
    _id: 'sectors-singleton',
    title: ls('Sectoren', 'Sectors', 'Branchen'),
    subtitle: ls(
      'Sectorspecifieke kennis gecombineerd met brede AI-expertise. Wij kennen de taal, de pijnpunten en de kansen in uw sector.',
      'Sector-specific knowledge combined with broad AI expertise. We know the language, pain points and opportunities in your sector.',
      'Branchenspezifisches Wissen kombiniert mit breiter KI-Expertise. Wir kennen die Sprache, die Schmerzpunkte und die Chancen in Ihrer Branche.'
    ),
    sectors: [
      {
        title: ls('Zorg', 'Healthcare', 'Gesundheitswesen'),
        sub: ls('Ziekenhuizen · GGZ · Huisartsenzorg · VVT · GGD · Zorgnetwerken', 'Hospitals · Mental health · GP care · Elderly care · Public health · Care networks', 'Krankenhäuser · Psychiatrie · Hausarztpraxen · Altenpflege · Gesundheitsamt · Versorgungsnetze'),
        pain: ls('Documentatielast, administratiedruk, ketensamenwerking, personeelstekort.', 'Documentation burden, administrative pressure, chain collaboration, staff shortages.', 'Dokumentationslast, Verwaltungsdruck, Kettenkooperation, Personalmangel.'),
        opportunities: [
          { label: ls('Automatische verslaglegging', 'Automatic documentation', 'Automatische Dokumentation') },
          { label: ls('Kennisdeling en triage-ondersteuning', 'Knowledge sharing and triage support', 'Wissensaustausch und Triage-Unterstützung') },
          { label: ls('Dossiercheck en compliance', 'File check and compliance', 'Aktenprüfung und Compliance') },
          { label: ls('Roosteroptimalisatie', 'Schedule optimisation', 'Dienstplanoptimierung') },
          { label: ls('MIC/VIC-rapportages versnellen', 'Accelerating MIC/VIC reports', 'Beschleunigung von Vorfallberichten') }
        ],
        note: ls('Bijzondere aandacht voor AVG en NEN7510.', 'Special attention to GDPR and NEN7510.', 'Besondere Beachtung der DSGVO und NEN7510.')
      },
      {
        title: ls('Zakelijke Dienstverlening', 'Professional Services', 'Professionelle Dienstleistungen'),
        sub: ls('Accountancy · Legal · Consultancy · HR · Financiële diensten', 'Accountancy · Legal · Consultancy · HR · Financial services', 'Wirtschaftsprüfung · Recht · Beratung · HR · Finanzdienstleistungen'),
        pain: ls('Kennisbeheer, rapportagedruk, klantcommunicatie, concurrentiedruk.', 'Knowledge management, reporting pressure, client communication, competitive pressure.', 'Wissensmanagement, Berichtsdruck, Kundenkommunikation, Wettbewerbsdruck.'),
        opportunities: [
          { label: ls('Contractanalyse en -samenvatting', 'Contract analysis and summarisation', 'Vertragsanalyse und -zusammenfassung') },
          { label: ls('Automatische klantrapportages', 'Automatic client reports', 'Automatische Kundenberichte') },
          { label: ls('Offerteproductie', 'Proposal generation', 'Angebotserstellung') },
          { label: ls('Research-automatisering', 'Research automation', 'Forschungsautomatisierung') },
          { label: ls('Compliance-checks en due diligence', 'Compliance checks and due diligence', 'Compliance-Prüfungen und Due Diligence') }
        ],
        note: ls('', '', '')
      },
      {
        title: ls('Real Estate', 'Real Estate', 'Immobilien'),
        sub: ls('Makelaardijen · Vastgoedbeheer · Projectontwikkeling · Woningcorporaties', 'Estate agencies · Property management · Project development · Housing associations', 'Immobilienmakler · Immobilienverwaltung · Projektentwicklung · Wohnungsbaugesellschaften'),
        pain: ls('Documentatievolume, marktanalyse, klantverwachtingen, vergunningstrajecten.', 'Documentation volume, market analysis, client expectations, permit processes.', 'Dokumentationsvolumen, Marktanalyse, Kundenerwartungen, Genehmigungsverfahren.'),
        opportunities: [
          { label: ls('Automatische vastgoedbeschrijvingen', 'Automatic property descriptions', 'Automatische Immobilienbeschreibungen') },
          { label: ls('Marktrapportages en waarde-analyses', 'Market reports and value analyses', 'Marktberichte und Wertanalysen') },
          { label: ls('Huurder-/koperscommunicatie op schaal', 'Tenant/buyer communication at scale', 'Mieter-/Käuferkommunikation in großem Maßstab') },
          { label: ls('Due diligence dossiers', 'Due diligence files', 'Due-Diligence-Dossiers') },
          { label: ls('Portefeuille-analyse en forecasting', 'Portfolio analysis and forecasting', 'Portfolioanalyse und Forecasting') }
        ],
        note: ls('', '', '')
      }
    ]
  },
  {
    _type: 'technologyPage',
    _id: 'technology-singleton',
    title: ls('Technologie', 'Technology', 'Technologie'),
    subtitle: ls(
      'VitalSail beschikt over diepgaande technische expertise in het volledige AI-stack. Van fundamentele taalmodellen tot productie-klare agent-architecturen.',
      'VitalSail has in-depth technical expertise across the full AI stack. From fundamental language models to production-ready agent architectures.',
      'VitalSail verfügt über tiefgreifende technische Expertise im gesamten KI-Stack. Von grundlegenden Sprachmodellen bis hin zu produktionsreifen Agenten-Architekturen.'
    ),
    areas: [
      {
        title: ls('Large Language Models', 'Large Language Models', 'Large Language Models'),
        desc: ls(
          'Diepgaande kennis van de leidende LLMs — GPT, Claude, Gemini, Llama en open-source varianten. Wij selecteren het juiste model per use-case op basis van prestatie, kosten en privacy-vereisten.',
          'In-depth knowledge of the leading LLMs — GPT, Claude, Gemini, Llama and open-source variants. We select the right model per use case based on performance, cost and privacy requirements.',
          'Tiefgreifende Kenntnisse der führenden LLMs — GPT, Claude, Gemini, Llama und Open-Source-Varianten. Wir wählen das richtige Modell pro Use-Case basierend auf Leistung, Kosten und Datenschutzanforderungen.'
        )
      },
      {
        title: ls('AI Agents & Agentic Architecturen', 'AI Agents & Agentic Architectures', 'KI-Agenten & Agentische Architekturen'),
        desc: ls(
          'Ontwerp en implementatie van autonome AI-agents die complexe meertraps-taken zelfstandig uitvoeren. Van enkelvoudige agents tot multi-agent systemen met gedeeld geheugen en orkestratie.',
          'Design and implementation of autonomous AI agents that independently execute complex multi-step tasks. From single agents to multi-agent systems with shared memory and orchestration.',
          'Entwurf und Implementierung autonomer KI-Agenten, die komplexe mehrstufige Aufgaben selbstständig ausführen. Von einzelnen Agenten bis hin zu Multi-Agenten-Systemen mit gemeinsamem Speicher und Orchestrierung.'
        )
      },
      {
        title: ls('RAG & Vector Databases', 'RAG & Vector Databases', 'RAG & Vektordatenbanken'),
        desc: ls(
          'Retrieval-Augmented Generation-systemen die organisatiekennis doorzoekbaar en bruikbaar maken voor AI. Implementatie van vector databases (Pinecone, Weaviate, pgvector) en kennisgrafen.',
          'Retrieval-Augmented Generation systems that make organisational knowledge searchable and usable for AI. Implementation of vector databases (Pinecone, Weaviate, pgvector) and knowledge graphs.',
          'Retrieval-Augmented-Generation-Systeme, die Organisationswissen für KI durchsuchbar und nutzbar machen. Implementierung von Vektordatenbanken (Pinecone, Weaviate, pgvector) und Wissensgraphen.'
        )
      },
      {
        title: ls('MCP & Integraties', 'MCP & Integrations', 'MCP & Integrationen'),
        desc: ls(
          'Model Context Protocol (MCP) voor veilige, gestandaardiseerde koppelingen tussen AI-modellen en bedrijfssystemen. API-integraties met ERP, CRM, EPD en sectorspecifieke platformen.',
          'Model Context Protocol (MCP) for secure, standardised connections between AI models and business systems. API integrations with ERP, CRM, EPD and sector-specific platforms.',
          'Model Context Protocol (MCP) für sichere, standardisierte Verbindungen zwischen KI-Modellen und Geschäftssystemen. API-Integrationen mit ERP, CRM, EPD und branchenspezifischen Plattformen.'
        )
      },
      {
        title: ls('GPU-hosting & Inferentie', 'GPU hosting & Inference', 'GPU-Hosting & Inferenz'),
        desc: ls(
          "Beheer van dedicated GPU-infrastructuur voor privé inferentie. Volledige controle over data, latency en kosten — zonder afhankelijkheid van publieke cloud-API's.",
          "Management of dedicated GPU infrastructure for private inference. Full control over data, latency and costs — without dependency on public cloud APIs.",
          "Verwaltung dedizierter GPU-Infrastruktur für private Inferenz. Vollständige Kontrolle über Daten, Latenz und Kosten — ohne Abhängigkeit von öffentlichen Cloud-APIs."
        )
      },
      {
        title: ls('Workflow Automatisering', 'Workflow Automation', 'Workflow-Automatisierung'),
        desc: ls(
          'Bouw en beheer van geautomatiseerde AI-workflows via n8n, Make en custom pipelines. Van eenvoudige triggers tot complexe bedrijfsprocessen volledig zonder handmatige tussenkomst.',
          'Building and managing automated AI workflows via n8n, Make and custom pipelines. From simple triggers to complex business processes entirely without manual intervention.',
          'Aufbau und Verwaltung automatisierter KI-Workflows über n8n, Make und benutzerdefinierte Pipelines. Von einfachen Triggern bis hin zu komplexen Geschäftsprozessen vollständig ohne manuellen Eingriff.'
        )
      },
      {
        title: ls('Vibe Coding & Rapid Development', 'Vibe Coding & Rapid Development', 'Vibe Coding & Rapid Development'),
        desc: ls(
          'AI-gedreven softwareontwikkeling waarbij wij in hoog tempo werkende applicaties en integraties bouwen — met AI als co-developer door het hele development-proces.',
          'AI-driven software development in which we build working applications and integrations at high speed — with AI as co-developer throughout the entire development process.',
          'KI-gestützte Softwareentwicklung, bei der wir in hohem Tempo funktionierende Anwendungen und Integrationen bauen — mit KI als Co-Entwickler durch den gesamten Entwicklungsprozess.'
        )
      },
      {
        title: ls('Data & Compliance', 'Data & Compliance', 'Daten & Compliance'),
        desc: ls(
          'Data-architectuur, privacy-by-design en AVG/NEN7510-compliance als fundament onder alle technische oplossingen. Geen compromissen op beveiliging of ethiek.',
          'Data architecture, privacy by design and GDPR/NEN7510 compliance as the foundation of all technical solutions. No compromises on security or ethics.',
          'Datenarchitektur, Privacy by Design und DSGVO/NEN7510-Compliance als Fundament aller technischen Lösungen. Keine Kompromisse bei Sicherheit oder Ethik.'
        )
      }
    ]
  },
  {
    _type: 'aboutPage',
    _id: 'about-singleton',
    title: ls('Over VitalSail', 'About VitalSail', 'Über VitalSail'),
    mission: ls(
      'Elke organisatie in staat stellen om AI verantwoord, effectief en met meetbare resultaten in te zetten — op eigen tempo, in eigen taal, passend bij eigen cultuur.',
      'To enable every organisation to deploy AI responsibly, effectively and with measurable results — at its own pace, in its own language, fitting its own culture.',
      'Jede Organisation in die Lage zu versetzen, KI verantwortungsvoll, effektiv und mit messbaren Ergebnissen einzusetzen — im eigenen Tempo, in der eigenen Sprache, passend zur eigenen Kultur.'
    ),
    vision: ls(
      'Organisaties die AI omarmen als strategisch gereedschap, zullen de standaard zetten in hun sector. VitalSail wil de partner zijn die hen daarheen brengt: van eerste verkenning tot volledig AI-gedreven organisatie inclusief de technische voorzieningen.',
      'Organisations that embrace AI as a strategic tool will set the standard in their sector. VitalSail wants to be the partner that takes them there: from initial exploration to a fully AI-driven organisation including technical infrastructure.',
      'Organisationen, die KI als strategisches Werkzeug einsetzen, werden den Standard in ihrer Branche setzen. VitalSail möchte der Partner sein, der sie dorthin führt: von der ersten Erkundung bis zur vollständig KI-gesteuerten Organisation einschließlich der technischen Infrastruktur.'
    ),
    story: ls(
      'VitalSail BV is opgericht vanuit de overtuiging dat AI-adoptie geen technologisch, maar een menselijk en organisatorisch vraagstuk is. Wij overbruggen de kloof tussen de technologische mogelijkheden van AI en de dagelijkse werkpraktijk van professionals.\n\nOnze aanpak is altijd hands-on, sectorspecifiek en gericht op duurzame verandering — niet op eenmalige pilots die verdampen na de kick-off. Wij begrijpen dat echte transformatie vraagt om begeleiding op maat, continue verbetering en een partner die meegaat op de reis.',
      'VitalSail BV was founded with the conviction that AI adoption is not a technological but a human and organisational challenge. We bridge the gap between the technological capabilities of AI and the daily work practice of professionals.\n\nOur approach is always hands-on, sector-specific and focused on lasting change — not on one-off pilots that evaporate after the kick-off. We understand that real transformation requires tailored guidance, continuous improvement and a partner who goes along on the journey.',
      'VitalSail BV wurde in der Überzeugung gegründet, dass die KI-Adoption keine technologische, sondern eine menschliche und organisatorische Herausforderung ist. Wir überbrücken die Kluft zwischen den technologischen Möglichkeiten der KI und der täglichen Arbeitspraxis von Fachleuten.\n\nUnser Ansatz ist immer praxisnah, branchenspezifisch und auf nachhaltige Veränderungen ausgerichtet — nicht auf einmalige Piloten, die nach dem Kick-off verpuffen. Wir verstehen, dass echte Transformation maßgeschneiderte Begleitung, kontinuierliche Verbesserung und einen Partner erfordert, der den Weg mitgeht.'
    ),
    values: [
      { title: ls('Sectorkennis', 'Sector knowledge', 'Branchenwissen'), desc: ls('Wij spreken de taal van zorg, vastgoed en zakelijke dienstverlening.', 'We speak the language of healthcare, real estate and professional services.', 'Wir sprechen die Sprache des Gesundheitswesens, der Immobilien und der professionellen Dienstleistungen.') },
      { title: ls('Van strategie tot executie', 'From strategy to execution', 'Von der Strategie zur Umsetzung'), desc: ls('Geen advies zonder implementatie.', 'No advice without implementation.', 'Keine Beratung ohne Umsetzung.') },
      { title: ls('Verantwoord en AVG-proof', 'Responsible and GDPR-compliant', 'Verantwortungsvoll und DSGVO-konform'), desc: ls('Privacy, ethiek en compliance zijn geen bijzaak.', 'Privacy, ethics and compliance are not an afterthought.', 'Datenschutz, Ethik und Compliance sind keine Nebensache.') },
      { title: ls('Doorlopend partnerschap', 'Ongoing partnership', 'Fortlaufende Partnerschaft'), desc: ls('Van eerste workshop tot borging en opschaling.', 'From first workshop to consolidation and scaling.', 'Vom ersten Workshop bis zur Verankerung und Skalierung.') },
      { title: ls('Pragmatisch', 'Pragmatic', 'Pragmatisch'), desc: ls('Tastbare resultaten vóór theoretische perfectie.', 'Tangible results before theoretical perfection.', 'Greifbare Ergebnisse vor theoretischer Perfektion.') },
      { title: ls('Technisch leidend', 'Technically leading', 'Technisch führend'), desc: ls('State of the art AI stacks, van hergebruik tot maatwerk.', 'State of the art AI stacks, from reuse to custom solutions.', 'State-of-the-art KI-Stacks, von der Wiederverwendung bis zur Maßanfertigung.') }
    ]
  },
  {
    _type: 'contactPage',
    _id: 'contact-singleton',
    title: ls('Contact', 'Contact', 'Kontakt'),
    subtitle: ls(
      'Wilt u meer weten, een kennismaking plannen of direct een offerte ontvangen?',
      'Would you like to know more, plan an introduction or receive a quote directly?',
      'Möchten Sie mehr erfahren, ein Kennenlernen planen oder direkt ein Angebot erhalten?'
    ),
    formNameLabel: ls('Naam', 'Name', 'Name'),
    formEmailLabel: ls('E-mailadres', 'Email address', 'E-Mail-Adresse'),
    formOrgLabel: ls('Organisatie', 'Organisation', 'Organisation'),
    formMessageLabel: ls('Bericht', 'Message', 'Nachricht'),
    formSubmitLabel: ls('Verstuur', 'Send', 'Absenden'),
    formSuccessMessage: ls(
      'Uw bericht is verzonden. Wij nemen spoedig contact met u op.',
      'Your message has been sent. We will contact you shortly.',
      'Ihre Nachricht wurde gesendet. Wir werden uns in Kürze bei Ihnen melden.'
    )
  }
]

async function seed() {
  console.log('Seeding Sanity...')
  for (const doc of docs) {
    const { _id, ...rest } = doc
    await client.createOrReplace({ _id, ...rest })
    console.log(`✓ ${doc._type}`)
  }
  console.log('Done!')
}

seed().catch(err => { console.error(err); process.exit(1) })

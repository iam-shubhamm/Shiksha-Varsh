import type { UpperSubject } from "@/data/upper/curriculum";
import { applySemesterPlan } from "@/data/advanced/semester-plan";
export type AdvancedSubject = UpperSubject & { semester: number };
export type AdvancedTrack = { id: string; name: string; motion: string; subjects: AdvancedSubject[] };
export type AdvancedCourse = { id: string; name: string; level: number; kind: "senior" | "college"; tracks: AdvancedTrack[] };
const ADVANCED_COURSE_DATA: AdvancedCourse[] = [
  {
    "id": "class11",
    "name": "Class 11",
    "level": 11,
    "kind": "senior",
    "tracks": [
      {
        "id": "science",
        "name": "Science",
        "subjects": [
          {
            "id": "english11",
            "name": "English",
            "emoji": "",
            "book": "Hornbill & Snapshots",
            "chapters": [
              "The Portrait of a Lady",
              "We’re Not Afraid to Die… if We Can All Be Together",
              "Discovering Tut: The Saga Continues",
              "The Adventure",
              "Silk Road",
              "A Photograph",
              "The Laburnum Top",
              "The Voice of the Rain",
              "Childhood",
              "Father to Son",
              "The Summer of the Beautiful White Horse",
              "The Address",
              "Mother’s Day",
              "Birth",
              "The Tale of Melon City"
            ],
            "semester": 1
          },
          {
            "id": "physics11",
            "name": "Physics",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Units and Measurements",
              "Motion in a Straight Line",
              "Motion in a Plane",
              "Laws of Motion",
              "Work, Energy and Power",
              "System of Particles and Rotational Motion",
              "Gravitation",
              "Mechanical Properties of Solids",
              "Mechanical Properties of Fluids",
              "Thermal Properties of Matter",
              "Thermodynamics",
              "Kinetic Theory",
              "Oscillations",
              "Waves"
            ],
            "semester": 1
          },
          {
            "id": "chemistry11",
            "name": "Chemistry",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Some Basic Concepts of Chemistry",
              "Structure of Atom",
              "Classification of Elements and Periodicity in Properties",
              "Chemical Bonding and Molecular Structure",
              "Thermodynamics",
              "Equilibrium",
              "Redox Reactions",
              "Organic Chemistry: Some Basic Principles and Techniques",
              "Hydrocarbons"
            ],
            "semester": 1
          },
          {
            "id": "maths11",
            "name": "Mathematics",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Sets",
              "Relations and Functions",
              "Trigonometric Functions",
              "Complex Numbers and Quadratic Equations",
              "Linear Inequalities",
              "Permutations and Combinations",
              "Binomial Theorem",
              "Sequences and Series",
              "Straight Lines",
              "Conic Sections",
              "Introduction to Three Dimensional Geometry",
              "Limits and Derivatives",
              "Statistics",
              "Probability"
            ],
            "semester": 2
          },
          {
            "id": "biology11",
            "name": "Biology",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "The Living World",
              "Biological Classification",
              "Plant Kingdom",
              "Animal Kingdom",
              "Morphology of Flowering Plants",
              "Anatomy of Flowering Plants",
              "Structural Organisation in Animals",
              "Cell: The Unit of Life",
              "Biomolecules",
              "Cell Cycle and Cell Division",
              "Photosynthesis in Higher Plants",
              "Respiration in Plants",
              "Plant Growth and Development",
              "Breathing and Exchange of Gases",
              "Body Fluids and Circulation",
              "Excretory Products and their Elimination",
              "Locomotion and Movement",
              "Neural Control and Coordination",
              "Chemical Coordination and Integration"
            ],
            "semester": 2
          },
          {
            "id": "computer11",
            "name": "Computer Science",
            "emoji": "",
            "book": "Computer Science practice units",
            "chapters": [
              "Computer System",
              "Encoding Schemes and Number System",
              "Emerging Trends",
              "Introduction to Problem Solving",
              "Getting Started with Python",
              "Flow of Control",
              "Functions",
              "Strings",
              "Lists",
              "Tuples and Dictionaries",
              "Societal Impact"
            ],
            "semester": 2
          }
        ],
        "motion": "science"
      },
      {
        "id": "commerce",
        "name": "Commerce",
        "subjects": [
          {
            "id": "english11",
            "name": "English",
            "emoji": "",
            "book": "Hornbill & Snapshots",
            "chapters": [
              "The Portrait of a Lady",
              "We’re Not Afraid to Die… if We Can All Be Together",
              "Discovering Tut: The Saga Continues",
              "The Adventure",
              "Silk Road",
              "A Photograph",
              "The Laburnum Top",
              "The Voice of the Rain",
              "Childhood",
              "Father to Son",
              "The Summer of the Beautiful White Horse",
              "The Address",
              "Mother’s Day",
              "Birth",
              "The Tale of Melon City"
            ],
            "semester": 1
          },
          {
            "id": "accountancy11",
            "name": "Accountancy",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Introduction to Accounting",
              "Theory Base of Accounting",
              "Recording of Transactions I",
              "Recording of Transactions II",
              "Bank Reconciliation Statement",
              "Trial Balance and Rectification of Errors",
              "Depreciation, Provisions and Reserves",
              "Financial Statements I",
              "Financial Statements II",
              "Accounts from Incomplete Records"
            ],
            "semester": 1
          },
          {
            "id": "business11",
            "name": "Business Studies",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Business, Trade and Commerce",
              "Forms of Business Organisation",
              "Private, Public and Global Enterprises",
              "Business Services",
              "Emerging Modes of Business",
              "Social Responsibilities of Business and Business Ethics",
              "Formation of a Company",
              "Sources of Business Finance",
              "Small Business and Entrepreneurship",
              "Internal Trade",
              "International Business"
            ],
            "semester": 1
          },
          {
            "id": "economics11",
            "name": "Economics",
            "emoji": "",
            "book": "Introductory Microeconomics & Statistics for Economics",
            "chapters": [
              "Introduction to Microeconomics",
              "Theory of Consumer Behaviour",
              "Production and Costs",
              "The Theory of the Firm under Perfect Competition",
              "Market Equilibrium",
              "Introduction to Statistics for Economics",
              "Collection of Data",
              "Organisation of Data",
              "Presentation of Data",
              "Measures of Central Tendency",
              "Correlation",
              "Index Numbers"
            ],
            "semester": 2
          },
          {
            "id": "maths11",
            "name": "Mathematics",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Sets",
              "Relations and Functions",
              "Trigonometric Functions",
              "Complex Numbers and Quadratic Equations",
              "Linear Inequalities",
              "Permutations and Combinations",
              "Binomial Theorem",
              "Sequences and Series",
              "Straight Lines",
              "Conic Sections",
              "Introduction to Three Dimensional Geometry",
              "Limits and Derivatives",
              "Statistics",
              "Probability"
            ],
            "semester": 2
          }
        ],
        "motion": "finance"
      },
      {
        "id": "arts",
        "name": "Arts / Humanities",
        "subjects": [
          {
            "id": "english11",
            "name": "English",
            "emoji": "",
            "book": "Hornbill & Snapshots",
            "chapters": [
              "The Portrait of a Lady",
              "We’re Not Afraid to Die… if We Can All Be Together",
              "Discovering Tut: The Saga Continues",
              "The Adventure",
              "Silk Road",
              "A Photograph",
              "The Laburnum Top",
              "The Voice of the Rain",
              "Childhood",
              "Father to Son",
              "The Summer of the Beautiful White Horse",
              "The Address",
              "Mother’s Day",
              "Birth",
              "The Tale of Melon City"
            ],
            "semester": 1
          },
          {
            "id": "history11",
            "name": "History",
            "emoji": "",
            "book": "Themes in World History",
            "chapters": [
              "Writing and City Life",
              "An Empire Across Three Continents",
              "Nomadic Empires",
              "The Three Orders",
              "Changing Cultural Traditions",
              "Displacing Indigenous Peoples",
              "Paths to Modernisation"
            ],
            "semester": 1
          },
          {
            "id": "politics11",
            "name": "Political Science",
            "emoji": "",
            "book": "Indian Constitution at Work & Political Theory",
            "chapters": [
              "Constitution: Why and How?",
              "Rights in the Indian Constitution",
              "Election and Representation",
              "Executive",
              "Legislature",
              "Judiciary",
              "Federalism",
              "Local Governments",
              "Constitution as a Living Document",
              "The Philosophy of the Constitution",
              "Political Theory: An Introduction",
              "Freedom",
              "Equality",
              "Social Justice",
              "Rights",
              "Citizenship",
              "Nationalism",
              "Secularism"
            ],
            "semester": 1
          },
          {
            "id": "geography11",
            "name": "Geography",
            "emoji": "",
            "book": "Fundamentals of Physical Geography & India: Physical Environment",
            "chapters": [
              "Geography as a Discipline",
              "The Origin and Evolution of the Earth",
              "Interior of the Earth",
              "Distribution of Oceans and Continents",
              "Geomorphic Processes",
              "Landforms and their Evolution",
              "Composition and Structure of Atmosphere",
              "Solar Radiation, Heat Balance and Temperature",
              "Atmospheric Circulation and Weather Systems",
              "Water in the Atmosphere",
              "World Climate and Climate Change",
              "Water (Oceans)",
              "Movements of Ocean Water",
              "Biodiversity and Conservation",
              "India: Location",
              "Structure and Physiography",
              "Drainage System",
              "Climate",
              "Natural Vegetation",
              "Natural Hazards and Disasters"
            ],
            "semester": 2
          },
          {
            "id": "psychology11",
            "name": "Psychology",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "What is Psychology?",
              "Methods of Enquiry in Psychology",
              "Human Development",
              "Sensory, Attentional and Perceptual Processes",
              "Learning",
              "Human Memory",
              "Thinking",
              "Motivation and Emotion"
            ],
            "semester": 2
          },
          {
            "id": "sociology11",
            "name": "Sociology",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Sociology and Society",
              "Terms, Concepts and their Use in Sociology",
              "Understanding Social Institutions",
              "Culture and Socialisation",
              "Social Structure, Stratification and Social Processes in Society",
              "Social Change and Social Order in Rural and Urban Society",
              "Environment and Society",
              "Introducing Western Sociologists",
              "Indian Sociologists"
            ],
            "semester": 2
          },
          {
            "id": "economics11",
            "name": "Economics",
            "emoji": "",
            "book": "Introductory Microeconomics & Statistics for Economics",
            "chapters": [
              "Introduction to Microeconomics",
              "Theory of Consumer Behaviour",
              "Production and Costs",
              "The Theory of the Firm under Perfect Competition",
              "Market Equilibrium",
              "Introduction to Statistics for Economics",
              "Collection of Data",
              "Organisation of Data",
              "Presentation of Data",
              "Measures of Central Tendency",
              "Correlation",
              "Index Numbers"
            ],
            "semester": 3
          }
        ],
        "motion": "humanities"
      }
    ]
  },
  {
    "id": "class12",
    "name": "Class 12",
    "level": 12,
    "kind": "senior",
    "tracks": [
      {
        "id": "science",
        "name": "Science",
        "subjects": [
          {
            "id": "english12",
            "name": "English",
            "emoji": "",
            "book": "Flamingo & Vistas",
            "chapters": [
              "The Last Lesson",
              "Lost Spring",
              "Deep Water",
              "The Rattrap",
              "Indigo",
              "Poets and Pancakes",
              "The Interview",
              "Going Places",
              "My Mother at Sixty-six",
              "Keeping Quiet",
              "A Thing of Beauty",
              "A Roadside Stand",
              "Aunt Jennifer’s Tigers",
              "The Third Level",
              "The Tiger King",
              "Journey to the End of the Earth",
              "The Enemy",
              "On the Face of It",
              "Memories of Childhood"
            ],
            "semester": 1
          },
          {
            "id": "physics12",
            "name": "Physics",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Electric Charges and Fields",
              "Electrostatic Potential and Capacitance",
              "Current Electricity",
              "Moving Charges and Magnetism",
              "Magnetism and Matter",
              "Electromagnetic Induction",
              "Alternating Current",
              "Electromagnetic Waves",
              "Ray Optics and Optical Instruments",
              "Wave Optics",
              "Dual Nature of Radiation and Matter",
              "Atoms",
              "Nuclei",
              "Semiconductor Electronics"
            ],
            "semester": 1
          },
          {
            "id": "chemistry12",
            "name": "Chemistry",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Solutions",
              "Electrochemistry",
              "Chemical Kinetics",
              "The d- and f-Block Elements",
              "Coordination Compounds",
              "Haloalkanes and Haloarenes",
              "Alcohols, Phenols and Ethers",
              "Aldehydes, Ketones and Carboxylic Acids",
              "Amines",
              "Biomolecules"
            ],
            "semester": 1
          },
          {
            "id": "maths12",
            "name": "Mathematics",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Relations and Functions",
              "Inverse Trigonometric Functions",
              "Matrices",
              "Determinants",
              "Continuity and Differentiability",
              "Application of Derivatives",
              "Integrals",
              "Application of Integrals",
              "Differential Equations",
              "Vector Algebra",
              "Three Dimensional Geometry",
              "Linear Programming",
              "Probability"
            ],
            "semester": 2
          },
          {
            "id": "biology12",
            "name": "Biology",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Sexual Reproduction in Flowering Plants",
              "Human Reproduction",
              "Reproductive Health",
              "Principles of Inheritance and Variation",
              "Molecular Basis of Inheritance",
              "Evolution",
              "Human Health and Disease",
              "Microbes in Human Welfare",
              "Biotechnology: Principles and Processes",
              "Biotechnology and its Applications",
              "Organisms and Populations",
              "Ecosystem",
              "Biodiversity and Conservation"
            ],
            "semester": 2
          },
          {
            "id": "computer12",
            "name": "Computer Science",
            "emoji": "",
            "book": "Computer Science practice units",
            "chapters": [
              "Python Revision",
              "Functions and Recursion",
              "Exception Handling",
              "Text and Binary Files",
              "CSV Files",
              "Stacks",
              "Computer Networks",
              "Relational Databases",
              "SQL Queries",
              "Python Database Connectivity"
            ],
            "semester": 2
          }
        ],
        "motion": "science"
      },
      {
        "id": "commerce",
        "name": "Commerce",
        "subjects": [
          {
            "id": "english12",
            "name": "English",
            "emoji": "",
            "book": "Flamingo & Vistas",
            "chapters": [
              "The Last Lesson",
              "Lost Spring",
              "Deep Water",
              "The Rattrap",
              "Indigo",
              "Poets and Pancakes",
              "The Interview",
              "Going Places",
              "My Mother at Sixty-six",
              "Keeping Quiet",
              "A Thing of Beauty",
              "A Roadside Stand",
              "Aunt Jennifer’s Tigers",
              "The Third Level",
              "The Tiger King",
              "Journey to the End of the Earth",
              "The Enemy",
              "On the Face of It",
              "Memories of Childhood"
            ],
            "semester": 1
          },
          {
            "id": "accountancy12",
            "name": "Accountancy",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Accounting for Partnership: Basic Concepts",
              "Reconstitution: Admission of a Partner",
              "Reconstitution: Retirement or Death of a Partner",
              "Dissolution of Partnership Firm",
              "Accounting for Share Capital",
              "Issue and Redemption of Debentures",
              "Financial Statements of a Company",
              "Analysis of Financial Statements",
              "Accounting Ratios",
              "Cash Flow Statement"
            ],
            "semester": 1
          },
          {
            "id": "business12",
            "name": "Business Studies",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Nature and Significance of Management",
              "Principles of Management",
              "Business Environment",
              "Planning",
              "Organising",
              "Staffing",
              "Directing",
              "Controlling",
              "Financial Management",
              "Financial Markets",
              "Marketing",
              "Consumer Protection"
            ],
            "semester": 1
          },
          {
            "id": "economics12",
            "name": "Economics",
            "emoji": "",
            "book": "Introductory Macroeconomics & Indian Economic Development",
            "chapters": [
              "Introduction to Macroeconomics",
              "National Income Accounting",
              "Money and Banking",
              "Determination of Income and Employment",
              "Government Budget and the Economy",
              "Open Economy Macroeconomics",
              "Indian Economy on the Eve of Independence",
              "Indian Economy 1950–1990",
              "Liberalisation, Privatisation and Globalisation",
              "Human Capital Formation in India",
              "Rural Development",
              "Employment: Growth, Informalisation and Other Issues",
              "Environment and Sustainable Development",
              "Comparative Development Experiences of India and its Neighbours"
            ],
            "semester": 2
          },
          {
            "id": "maths12",
            "name": "Mathematics",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Relations and Functions",
              "Inverse Trigonometric Functions",
              "Matrices",
              "Determinants",
              "Continuity and Differentiability",
              "Application of Derivatives",
              "Integrals",
              "Application of Integrals",
              "Differential Equations",
              "Vector Algebra",
              "Three Dimensional Geometry",
              "Linear Programming",
              "Probability"
            ],
            "semester": 2
          }
        ],
        "motion": "finance"
      },
      {
        "id": "arts",
        "name": "Arts / Humanities",
        "subjects": [
          {
            "id": "english12",
            "name": "English",
            "emoji": "",
            "book": "Flamingo & Vistas",
            "chapters": [
              "The Last Lesson",
              "Lost Spring",
              "Deep Water",
              "The Rattrap",
              "Indigo",
              "Poets and Pancakes",
              "The Interview",
              "Going Places",
              "My Mother at Sixty-six",
              "Keeping Quiet",
              "A Thing of Beauty",
              "A Roadside Stand",
              "Aunt Jennifer’s Tigers",
              "The Third Level",
              "The Tiger King",
              "Journey to the End of the Earth",
              "The Enemy",
              "On the Face of It",
              "Memories of Childhood"
            ],
            "semester": 1
          },
          {
            "id": "history12",
            "name": "History",
            "emoji": "",
            "book": "Themes in Indian History",
            "chapters": [
              "Bricks, Beads and Bones",
              "Kings, Farmers and Towns",
              "Kinship, Caste and Class",
              "Thinkers, Beliefs and Buildings",
              "Through the Eyes of Travellers",
              "Bhakti-Sufi Traditions",
              "An Imperial Capital: Vijayanagara",
              "Peasants, Zamindars and the State",
              "Colonialism and the Countryside",
              "Rebels and the Raj",
              "Mahatma Gandhi and the Nationalist Movement",
              "Framing the Constitution"
            ],
            "semester": 1
          },
          {
            "id": "politics12",
            "name": "Political Science",
            "emoji": "",
            "book": "Contemporary World Politics & Politics in India Since Independence",
            "chapters": [
              "The End of Bipolarity",
              "Contemporary Centres of Power",
              "Contemporary South Asia",
              "International Organisations",
              "Security in the Contemporary World",
              "Environment and Natural Resources",
              "Globalisation",
              "Challenges of Nation Building",
              "Era of One-Party Dominance",
              "Politics of Planned Development",
              "India’s External Relations",
              "Challenges to and Restoration of the Congress System",
              "The Crisis of Democratic Order",
              "Regional Aspirations",
              "Recent Developments in Indian Politics"
            ],
            "semester": 1
          },
          {
            "id": "geography12",
            "name": "Geography",
            "emoji": "",
            "book": "Fundamentals of Human Geography & India: People and Economy",
            "chapters": [
              "Human Geography: Nature and Scope",
              "The World Population: Distribution, Density and Growth",
              "Human Development",
              "Primary Activities",
              "Secondary Activities",
              "Tertiary and Quaternary Activities",
              "Transport and Communication",
              "International Trade",
              "Population: Distribution, Density, Growth and Composition",
              "Human Settlements",
              "Land Resources and Agriculture",
              "Water Resources",
              "Mineral and Energy Resources",
              "Planning and Sustainable Development in Indian Context",
              "Transport and Communication in India",
              "International Trade in India",
              "Geographical Perspective on Selected Issues and Problems"
            ],
            "semester": 2
          },
          {
            "id": "psychology12",
            "name": "Psychology",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "Variations in Psychological Attributes",
              "Self and Personality",
              "Meeting Life Challenges",
              "Psychological Disorders",
              "Therapeutic Approaches",
              "Attitude and Social Cognition",
              "Social Influence and Group Processes"
            ],
            "semester": 2
          },
          {
            "id": "sociology12",
            "name": "Sociology",
            "emoji": "",
            "book": "NCERT study track",
            "chapters": [
              "The Demographic Structure of the Indian Society",
              "Social Institutions: Continuity and Change",
              "Patterns of Social Inequality and Exclusion",
              "The Challenges of Cultural Diversity",
              "Structural Change",
              "Cultural Change",
              "Change and Development in Rural Society",
              "Change and Development in Industrial Society",
              "Social Movements"
            ],
            "semester": 2
          },
          {
            "id": "economics12",
            "name": "Economics",
            "emoji": "",
            "book": "Introductory Macroeconomics & Indian Economic Development",
            "chapters": [
              "Introduction to Macroeconomics",
              "National Income Accounting",
              "Money and Banking",
              "Determination of Income and Employment",
              "Government Budget and the Economy",
              "Open Economy Macroeconomics",
              "Indian Economy on the Eve of Independence",
              "Indian Economy 1950–1990",
              "Liberalisation, Privatisation and Globalisation",
              "Human Capital Formation in India",
              "Rural Development",
              "Employment: Growth, Informalisation and Other Issues",
              "Environment and Sustainable Development",
              "Comparative Development Experiences of India and its Neighbours"
            ],
            "semester": 3
          }
        ],
        "motion": "humanities"
      }
    ]
  },
  {
    "id": "btech",
    "name": "B.Tech",
    "level": 20,
    "kind": "college",
    "tracks": [
      {
        "id": "cse",
        "name": "Computer Science",
        "subjects": [
          {
            "id": "programming",
            "name": "Programming Fundamentals",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Algorithms and Flowcharts",
              "Variables, Types and Operators",
              "Control Flow",
              "Functions and Recursion",
              "Arrays, Strings and Pointers"
            ],
            "semester": 1
          },
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "digital",
            "name": "Digital Electronics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Number Systems",
              "Boolean Algebra",
              "Combinational Circuits",
              "Sequential Circuits",
              "Memory and Converters"
            ],
            "semester": 1
          },
          {
            "id": "dsa",
            "name": "Data Structures & Algorithms",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Complexity and Analysis",
              "Lists, Stacks and Queues",
              "Trees and Search",
              "Graphs and Traversal",
              "Sorting and Hashing"
            ],
            "semester": 2
          },
          {
            "id": "oop",
            "name": "Object-Oriented Programming",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Classes and Objects",
              "Encapsulation and Abstraction",
              "Inheritance",
              "Polymorphism",
              "Design Principles"
            ],
            "semester": 2
          },
          {
            "id": "dbms",
            "name": "Database Management Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Relational Model",
              "SQL Queries and Joins",
              "Normalisation",
              "Transactions and Concurrency",
              "Indexing and Query Optimisation"
            ],
            "semester": 2
          },
          {
            "id": "os",
            "name": "Operating Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Processes and Threads",
              "CPU Scheduling",
              "Synchronisation and Deadlocks",
              "Memory Management",
              "File Systems"
            ],
            "semester": 3
          },
          {
            "id": "networks",
            "name": "Computer Networks",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Network Models",
              "Data Link Layer",
              "IP and Routing",
              "TCP and UDP",
              "Application Protocols and Security"
            ],
            "semester": 3
          },
          {
            "id": "software",
            "name": "Software Engineering",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Requirements Engineering",
              "Software Design",
              "Development Life Cycles",
              "Software Testing",
              "Project Delivery"
            ],
            "semester": 3
          },
          {
            "id": "ai",
            "name": "Artificial Intelligence",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Intelligent Agents",
              "Search Algorithms",
              "Knowledge Representation",
              "Machine Learning Foundations",
              "Evaluation and Responsible AI"
            ],
            "semester": 4
          },
          {
            "id": "cloud",
            "name": "Cloud Computing",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Virtualisation",
              "Cloud Service Models",
              "Containers",
              "Distributed Storage",
              "Reliability and Cloud Security"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "code"
      },
      {
        "id": "it",
        "name": "Information Technology",
        "subjects": [
          {
            "id": "programming",
            "name": "Programming Fundamentals",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Algorithms and Flowcharts",
              "Variables, Types and Operators",
              "Control Flow",
              "Functions and Recursion",
              "Arrays, Strings and Pointers"
            ],
            "semester": 1
          },
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "web",
            "name": "Web Development",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "HTML and Accessibility",
              "CSS Layouts",
              "JavaScript and DOM",
              "HTTP and APIs",
              "Web Security and Deployment"
            ],
            "semester": 1
          },
          {
            "id": "dsa",
            "name": "Data Structures & Algorithms",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Complexity and Analysis",
              "Lists, Stacks and Queues",
              "Trees and Search",
              "Graphs and Traversal",
              "Sorting and Hashing"
            ],
            "semester": 2
          },
          {
            "id": "dbms",
            "name": "Database Management Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Relational Model",
              "SQL Queries and Joins",
              "Normalisation",
              "Transactions and Concurrency",
              "Indexing and Query Optimisation"
            ],
            "semester": 2
          },
          {
            "id": "os",
            "name": "Operating Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Processes and Threads",
              "CPU Scheduling",
              "Synchronisation and Deadlocks",
              "Memory Management",
              "File Systems"
            ],
            "semester": 2
          },
          {
            "id": "networks",
            "name": "Computer Networks",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Network Models",
              "Data Link Layer",
              "IP and Routing",
              "TCP and UDP",
              "Application Protocols and Security"
            ],
            "semester": 3
          },
          {
            "id": "software",
            "name": "Software Engineering",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Requirements Engineering",
              "Software Design",
              "Development Life Cycles",
              "Software Testing",
              "Project Delivery"
            ],
            "semester": 3
          },
          {
            "id": "cyber",
            "name": "Cybersecurity",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Security Principles",
              "Cryptography",
              "Network Security",
              "Application Security",
              "Risk and Incident Response"
            ],
            "semester": 3
          },
          {
            "id": "cloud",
            "name": "Cloud Computing",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Virtualisation",
              "Cloud Service Models",
              "Containers",
              "Distributed Storage",
              "Reliability and Cloud Security"
            ],
            "semester": 4
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "code"
      },
      {
        "id": "ai-data",
        "name": "AI & Data Science",
        "subjects": [
          {
            "id": "python",
            "name": "Python Programming",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Python Types and Collections",
              "Control Flow and Functions",
              "Modules and File Handling",
              "Object-Oriented Python",
              "Testing and Exceptions"
            ],
            "semester": 1
          },
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "statistics",
            "name": "Statistics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Descriptive Statistics",
              "Probability",
              "Distributions",
              "Estimation",
              "Hypothesis Testing"
            ],
            "semester": 1
          },
          {
            "id": "dsa",
            "name": "Data Structures & Algorithms",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Complexity and Analysis",
              "Lists, Stacks and Queues",
              "Trees and Search",
              "Graphs and Traversal",
              "Sorting and Hashing"
            ],
            "semester": 2
          },
          {
            "id": "dbms",
            "name": "Database Management Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Relational Model",
              "SQL Queries and Joins",
              "Normalisation",
              "Transactions and Concurrency",
              "Indexing and Query Optimisation"
            ],
            "semester": 2
          },
          {
            "id": "ai",
            "name": "Artificial Intelligence",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Intelligent Agents",
              "Search Algorithms",
              "Knowledge Representation",
              "Machine Learning Foundations",
              "Evaluation and Responsible AI"
            ],
            "semester": 2
          },
          {
            "id": "ml",
            "name": "Machine Learning",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Data Preparation",
              "Regression",
              "Classification",
              "Clustering",
              "Model Evaluation"
            ],
            "semester": 3
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 3
          },
          {
            "id": "cloud",
            "name": "Cloud Computing",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Virtualisation",
              "Cloud Service Models",
              "Containers",
              "Distributed Storage",
              "Reliability and Cloud Security"
            ],
            "semester": 3
          },
          {
            "id": "software",
            "name": "Software Engineering",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Requirements Engineering",
              "Software Design",
              "Development Life Cycles",
              "Software Testing",
              "Project Delivery"
            ],
            "semester": 4
          },
          {
            "id": "cyber",
            "name": "Cybersecurity",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Security Principles",
              "Cryptography",
              "Network Security",
              "Application Security",
              "Risk and Incident Response"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "code"
      },
      {
        "id": "ece",
        "name": "Electronics & Communication",
        "subjects": [
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "physics",
            "name": "Applied Physics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Mechanics",
              "Oscillations and Waves",
              "Optics",
              "Quantum Foundations",
              "Solid State Physics"
            ],
            "semester": 1
          },
          {
            "id": "circuits",
            "name": "Electrical Circuits",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Circuit Laws",
              "Network Theorems",
              "AC Circuits",
              "Transient Analysis",
              "Three-Phase Systems"
            ],
            "semester": 1
          },
          {
            "id": "electronics",
            "name": "Analog Electronics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Semiconductors",
              "Diodes",
              "Transistors",
              "Amplifiers",
              "Operational Amplifiers"
            ],
            "semester": 2
          },
          {
            "id": "digital",
            "name": "Digital Electronics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Number Systems",
              "Boolean Algebra",
              "Combinational Circuits",
              "Sequential Circuits",
              "Memory and Converters"
            ],
            "semester": 2
          },
          {
            "id": "signals",
            "name": "Signals & Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Signal Classification",
              "Linear Systems",
              "Fourier Analysis",
              "Laplace Transform",
              "Sampling"
            ],
            "semester": 2
          },
          {
            "id": "communication",
            "name": "Communication Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Amplitude Modulation",
              "Frequency Modulation",
              "Digital Modulation",
              "Information Theory",
              "Wireless Communication"
            ],
            "semester": 3
          },
          {
            "id": "embedded",
            "name": "Embedded Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Microcontrollers",
              "GPIO and Interrupts",
              "Timers and Communication",
              "Real-Time Systems",
              "Embedded Design"
            ],
            "semester": 3
          },
          {
            "id": "control",
            "name": "Control Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "System Modelling",
              "Transfer Functions",
              "Time Response",
              "Stability Analysis",
              "Controller Design"
            ],
            "semester": 3
          },
          {
            "id": "networks",
            "name": "Computer Networks",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Network Models",
              "Data Link Layer",
              "IP and Routing",
              "TCP and UDP",
              "Application Protocols and Security"
            ],
            "semester": 4
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "signal"
      },
      {
        "id": "electrical",
        "name": "Electrical Engineering",
        "subjects": [
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "physics",
            "name": "Applied Physics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Mechanics",
              "Oscillations and Waves",
              "Optics",
              "Quantum Foundations",
              "Solid State Physics"
            ],
            "semester": 1
          },
          {
            "id": "circuits",
            "name": "Electrical Circuits",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Circuit Laws",
              "Network Theorems",
              "AC Circuits",
              "Transient Analysis",
              "Three-Phase Systems"
            ],
            "semester": 1
          },
          {
            "id": "electronics",
            "name": "Analog Electronics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Semiconductors",
              "Diodes",
              "Transistors",
              "Amplifiers",
              "Operational Amplifiers"
            ],
            "semester": 2
          },
          {
            "id": "digital",
            "name": "Digital Electronics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Number Systems",
              "Boolean Algebra",
              "Combinational Circuits",
              "Sequential Circuits",
              "Memory and Converters"
            ],
            "semester": 2
          },
          {
            "id": "machines",
            "name": "Electrical Machines",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Transformers",
              "DC Machines",
              "Induction Motors",
              "Synchronous Machines",
              "Motor Control"
            ],
            "semester": 2
          },
          {
            "id": "power",
            "name": "Power Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Generation",
              "Transmission",
              "Distribution",
              "Fault Analysis",
              "Protection"
            ],
            "semester": 3
          },
          {
            "id": "control",
            "name": "Control Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "System Modelling",
              "Transfer Functions",
              "Time Response",
              "Stability Analysis",
              "Controller Design"
            ],
            "semester": 3
          },
          {
            "id": "signals",
            "name": "Signals & Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Signal Classification",
              "Linear Systems",
              "Fourier Analysis",
              "Laplace Transform",
              "Sampling"
            ],
            "semester": 3
          },
          {
            "id": "embedded",
            "name": "Embedded Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Microcontrollers",
              "GPIO and Interrupts",
              "Timers and Communication",
              "Real-Time Systems",
              "Embedded Design"
            ],
            "semester": 4
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "signal"
      },
      {
        "id": "mechanical",
        "name": "Mechanical Engineering",
        "subjects": [
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "physics",
            "name": "Applied Physics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Mechanics",
              "Oscillations and Waves",
              "Optics",
              "Quantum Foundations",
              "Solid State Physics"
            ],
            "semester": 1
          },
          {
            "id": "mechanics",
            "name": "Engineering Mechanics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Force Systems",
              "Equilibrium",
              "Friction",
              "Kinematics",
              "Kinetics"
            ],
            "semester": 1
          },
          {
            "id": "thermo",
            "name": "Thermodynamics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Properties and State",
              "First Law",
              "Second Law",
              "Power Cycles",
              "Refrigeration"
            ],
            "semester": 2
          },
          {
            "id": "strength",
            "name": "Strength of Materials",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Stress and Strain",
              "Bending",
              "Shear Force and Bending Moment",
              "Torsion",
              "Columns"
            ],
            "semester": 2
          },
          {
            "id": "fluids",
            "name": "Fluid Mechanics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Fluid Properties",
              "Hydrostatics",
              "Flow Conservation",
              "Pipe Flow",
              "Boundary Layers"
            ],
            "semester": 2
          },
          {
            "id": "manufacturing",
            "name": "Manufacturing Processes",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Casting",
              "Metal Forming",
              "Machining",
              "Welding",
              "Additive Manufacturing"
            ],
            "semester": 3
          },
          {
            "id": "heat",
            "name": "Heat Transfer",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Conduction",
              "Convection",
              "Radiation",
              "Heat Exchangers",
              "Thermal Design"
            ],
            "semester": 3
          },
          {
            "id": "design",
            "name": "Machine Design",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Design Criteria",
              "Shafts and Keys",
              "Bearings",
              "Gears",
              "Failure Analysis"
            ],
            "semester": 3
          },
          {
            "id": "control",
            "name": "Control Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "System Modelling",
              "Transfer Functions",
              "Time Response",
              "Stability Analysis",
              "Controller Design"
            ],
            "semester": 4
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "mechanical"
      },
      {
        "id": "civil",
        "name": "Civil Engineering",
        "subjects": [
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "physics",
            "name": "Applied Physics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Mechanics",
              "Oscillations and Waves",
              "Optics",
              "Quantum Foundations",
              "Solid State Physics"
            ],
            "semester": 1
          },
          {
            "id": "mechanics",
            "name": "Engineering Mechanics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Force Systems",
              "Equilibrium",
              "Friction",
              "Kinematics",
              "Kinetics"
            ],
            "semester": 1
          },
          {
            "id": "survey",
            "name": "Surveying",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Measurement Principles",
              "Levelling",
              "Traversing",
              "Total Stations",
              "GIS and Remote Sensing"
            ],
            "semester": 2
          },
          {
            "id": "strength",
            "name": "Strength of Materials",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Stress and Strain",
              "Bending",
              "Shear Force and Bending Moment",
              "Torsion",
              "Columns"
            ],
            "semester": 2
          },
          {
            "id": "concrete",
            "name": "Concrete Technology",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Concrete Materials",
              "Mix Design",
              "Fresh Concrete",
              "Hardened Concrete",
              "Durability"
            ],
            "semester": 2
          },
          {
            "id": "structures",
            "name": "Structural Analysis",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Determinate Structures",
              "Trusses",
              "Influence Lines",
              "Indeterminate Structures",
              "Matrix Methods"
            ],
            "semester": 3
          },
          {
            "id": "geotech",
            "name": "Geotechnical Engineering",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Soil Classification",
              "Permeability",
              "Consolidation",
              "Shear Strength",
              "Foundations"
            ],
            "semester": 3
          },
          {
            "id": "transport",
            "name": "Transportation Engineering",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Highway Planning",
              "Geometric Design",
              "Pavement Materials",
              "Traffic Engineering",
              "Pavement Design"
            ],
            "semester": 3
          },
          {
            "id": "fluids",
            "name": "Fluid Mechanics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Fluid Properties",
              "Hydrostatics",
              "Flow Conservation",
              "Pipe Flow",
              "Boundary Layers"
            ],
            "semester": 4
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "structure"
      },
      {
        "id": "chemical",
        "name": "Chemical Engineering",
        "subjects": [
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "chemistry",
            "name": "Chemistry",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Atomic Structure",
              "Chemical Bonding",
              "Thermodynamics",
              "Organic Mechanisms",
              "Analytical Methods"
            ],
            "semester": 1
          },
          {
            "id": "chemical",
            "name": "Chemical Process Principles",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Material Balances",
              "Energy Balances",
              "Phase Equilibria",
              "Reaction Stoichiometry",
              "Process Flow Diagrams"
            ],
            "semester": 1
          },
          {
            "id": "thermo",
            "name": "Thermodynamics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Properties and State",
              "First Law",
              "Second Law",
              "Power Cycles",
              "Refrigeration"
            ],
            "semester": 2
          },
          {
            "id": "fluids",
            "name": "Fluid Mechanics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Fluid Properties",
              "Hydrostatics",
              "Flow Conservation",
              "Pipe Flow",
              "Boundary Layers"
            ],
            "semester": 2
          },
          {
            "id": "heat",
            "name": "Heat Transfer",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Conduction",
              "Convection",
              "Radiation",
              "Heat Exchangers",
              "Thermal Design"
            ],
            "semester": 2
          },
          {
            "id": "mass",
            "name": "Mass Transfer",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Diffusion",
              "Absorption",
              "Distillation",
              "Extraction",
              "Drying"
            ],
            "semester": 3
          },
          {
            "id": "reaction",
            "name": "Reaction Engineering",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Reaction Kinetics",
              "Batch Reactors",
              "Continuous Reactors",
              "Non-Ideal Flow",
              "Catalysis"
            ],
            "semester": 3
          },
          {
            "id": "control",
            "name": "Control Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "System Modelling",
              "Transfer Functions",
              "Time Response",
              "Stability Analysis",
              "Controller Design"
            ],
            "semester": 3
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 4
          },
          {
            "id": "operations",
            "name": "Operations Management",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Process Design",
              "Capacity Planning",
              "Inventory",
              "Quality Management",
              "Supply Chains"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "science"
      },
      {
        "id": "biotech",
        "name": "Biotechnology",
        "subjects": [
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "chemistry",
            "name": "Chemistry",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Atomic Structure",
              "Chemical Bonding",
              "Thermodynamics",
              "Organic Mechanisms",
              "Analytical Methods"
            ],
            "semester": 1
          },
          {
            "id": "bio",
            "name": "Biotechnology Foundations",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Cell Biology",
              "Biochemistry",
              "Genetics",
              "Microbiology",
              "Bioprocess Engineering"
            ],
            "semester": 1
          },
          {
            "id": "statistics",
            "name": "Statistics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Descriptive Statistics",
              "Probability",
              "Distributions",
              "Estimation",
              "Hypothesis Testing"
            ],
            "semester": 2
          },
          {
            "id": "chemical",
            "name": "Chemical Process Principles",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Material Balances",
              "Energy Balances",
              "Phase Equilibria",
              "Reaction Stoichiometry",
              "Process Flow Diagrams"
            ],
            "semester": 2
          },
          {
            "id": "thermo",
            "name": "Thermodynamics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Properties and State",
              "First Law",
              "Second Law",
              "Power Cycles",
              "Refrigeration"
            ],
            "semester": 2
          },
          {
            "id": "mass",
            "name": "Mass Transfer",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Diffusion",
              "Absorption",
              "Distillation",
              "Extraction",
              "Drying"
            ],
            "semester": 3
          },
          {
            "id": "reaction",
            "name": "Reaction Engineering",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Reaction Kinetics",
              "Batch Reactors",
              "Continuous Reactors",
              "Non-Ideal Flow",
              "Catalysis"
            ],
            "semester": 3
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 3
          },
          {
            "id": "operations",
            "name": "Operations Management",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Process Design",
              "Capacity Planning",
              "Inventory",
              "Quality Management",
              "Supply Chains"
            ],
            "semester": 4
          },
          {
            "id": "software",
            "name": "Software Engineering",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Requirements Engineering",
              "Software Design",
              "Development Life Cycles",
              "Software Testing",
              "Project Delivery"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "science"
      },
      {
        "id": "aerospace",
        "name": "Aerospace Engineering",
        "subjects": [
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "physics",
            "name": "Applied Physics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Mechanics",
              "Oscillations and Waves",
              "Optics",
              "Quantum Foundations",
              "Solid State Physics"
            ],
            "semester": 1
          },
          {
            "id": "mechanics",
            "name": "Engineering Mechanics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Force Systems",
              "Equilibrium",
              "Friction",
              "Kinematics",
              "Kinetics"
            ],
            "semester": 1
          },
          {
            "id": "thermo",
            "name": "Thermodynamics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Properties and State",
              "First Law",
              "Second Law",
              "Power Cycles",
              "Refrigeration"
            ],
            "semester": 2
          },
          {
            "id": "fluids",
            "name": "Fluid Mechanics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Fluid Properties",
              "Hydrostatics",
              "Flow Conservation",
              "Pipe Flow",
              "Boundary Layers"
            ],
            "semester": 2
          },
          {
            "id": "aero",
            "name": "Aerodynamics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Atmosphere",
              "Airfoils",
              "Lift and Drag",
              "Compressible Flow",
              "Aircraft Performance"
            ],
            "semester": 2
          },
          {
            "id": "strength",
            "name": "Strength of Materials",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Stress and Strain",
              "Bending",
              "Shear Force and Bending Moment",
              "Torsion",
              "Columns"
            ],
            "semester": 3
          },
          {
            "id": "heat",
            "name": "Heat Transfer",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Conduction",
              "Convection",
              "Radiation",
              "Heat Exchangers",
              "Thermal Design"
            ],
            "semester": 3
          },
          {
            "id": "control",
            "name": "Control Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "System Modelling",
              "Transfer Functions",
              "Time Response",
              "Stability Analysis",
              "Controller Design"
            ],
            "semester": 3
          },
          {
            "id": "design",
            "name": "Machine Design",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Design Criteria",
              "Shafts and Keys",
              "Bearings",
              "Gears",
              "Failure Analysis"
            ],
            "semester": 4
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "mechanical"
      },
      {
        "id": "automobile",
        "name": "Automobile Engineering",
        "subjects": [
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "physics",
            "name": "Applied Physics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Mechanics",
              "Oscillations and Waves",
              "Optics",
              "Quantum Foundations",
              "Solid State Physics"
            ],
            "semester": 1
          },
          {
            "id": "mechanics",
            "name": "Engineering Mechanics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Force Systems",
              "Equilibrium",
              "Friction",
              "Kinematics",
              "Kinetics"
            ],
            "semester": 1
          },
          {
            "id": "thermo",
            "name": "Thermodynamics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Properties and State",
              "First Law",
              "Second Law",
              "Power Cycles",
              "Refrigeration"
            ],
            "semester": 2
          },
          {
            "id": "strength",
            "name": "Strength of Materials",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Stress and Strain",
              "Bending",
              "Shear Force and Bending Moment",
              "Torsion",
              "Columns"
            ],
            "semester": 2
          },
          {
            "id": "fluids",
            "name": "Fluid Mechanics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Fluid Properties",
              "Hydrostatics",
              "Flow Conservation",
              "Pipe Flow",
              "Boundary Layers"
            ],
            "semester": 2
          },
          {
            "id": "manufacturing",
            "name": "Manufacturing Processes",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Casting",
              "Metal Forming",
              "Machining",
              "Welding",
              "Additive Manufacturing"
            ],
            "semester": 3
          },
          {
            "id": "auto",
            "name": "Automobile Engineering",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Vehicle Layout",
              "Engines",
              "Transmission",
              "Braking and Suspension",
              "Electric Vehicles"
            ],
            "semester": 3
          },
          {
            "id": "design",
            "name": "Machine Design",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Design Criteria",
              "Shafts and Keys",
              "Bearings",
              "Gears",
              "Failure Analysis"
            ],
            "semester": 3
          },
          {
            "id": "control",
            "name": "Control Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "System Modelling",
              "Transfer Functions",
              "Time Response",
              "Stability Analysis",
              "Controller Design"
            ],
            "semester": 4
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "mechanical"
      },
      {
        "id": "robotics",
        "name": "Robotics & Mechatronics",
        "subjects": [
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "programming",
            "name": "Programming Fundamentals",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Algorithms and Flowcharts",
              "Variables, Types and Operators",
              "Control Flow",
              "Functions and Recursion",
              "Arrays, Strings and Pointers"
            ],
            "semester": 1
          },
          {
            "id": "circuits",
            "name": "Electrical Circuits",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Circuit Laws",
              "Network Theorems",
              "AC Circuits",
              "Transient Analysis",
              "Three-Phase Systems"
            ],
            "semester": 1
          },
          {
            "id": "mechanics",
            "name": "Engineering Mechanics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Force Systems",
              "Equilibrium",
              "Friction",
              "Kinematics",
              "Kinetics"
            ],
            "semester": 2
          },
          {
            "id": "digital",
            "name": "Digital Electronics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Number Systems",
              "Boolean Algebra",
              "Combinational Circuits",
              "Sequential Circuits",
              "Memory and Converters"
            ],
            "semester": 2
          },
          {
            "id": "electronics",
            "name": "Analog Electronics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Semiconductors",
              "Diodes",
              "Transistors",
              "Amplifiers",
              "Operational Amplifiers"
            ],
            "semester": 2
          },
          {
            "id": "embedded",
            "name": "Embedded Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Microcontrollers",
              "GPIO and Interrupts",
              "Timers and Communication",
              "Real-Time Systems",
              "Embedded Design"
            ],
            "semester": 3
          },
          {
            "id": "control",
            "name": "Control Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "System Modelling",
              "Transfer Functions",
              "Time Response",
              "Stability Analysis",
              "Controller Design"
            ],
            "semester": 3
          },
          {
            "id": "robotics",
            "name": "Robotics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Robot Kinematics",
              "Dynamics",
              "Sensors",
              "Motion Planning",
              "Robot Control"
            ],
            "semester": 3
          },
          {
            "id": "ai",
            "name": "Artificial Intelligence",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Intelligent Agents",
              "Search Algorithms",
              "Knowledge Representation",
              "Machine Learning Foundations",
              "Evaluation and Responsible AI"
            ],
            "semester": 4
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 4
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 4
          }
        ],
        "motion": "mechanical"
      }
    ]
  },
  {
    "id": "bsc",
    "name": "B.Sc",
    "level": 20,
    "kind": "college",
    "tracks": [
      {
        "id": "physics",
        "name": "Physics",
        "subjects": [
          {
            "id": "physics",
            "name": "Applied Physics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Mechanics",
              "Oscillations and Waves",
              "Optics",
              "Quantum Foundations",
              "Solid State Physics"
            ],
            "semester": 1
          },
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "electronics",
            "name": "Analog Electronics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Semiconductors",
              "Diodes",
              "Transistors",
              "Amplifiers",
              "Operational Amplifiers"
            ],
            "semester": 1
          },
          {
            "id": "signals",
            "name": "Signals & Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Signal Classification",
              "Linear Systems",
              "Fourier Analysis",
              "Laplace Transform",
              "Sampling"
            ],
            "semester": 2
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "science"
      },
      {
        "id": "chemistry",
        "name": "Chemistry",
        "subjects": [
          {
            "id": "chemistry",
            "name": "Chemistry",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Atomic Structure",
              "Chemical Bonding",
              "Thermodynamics",
              "Organic Mechanisms",
              "Analytical Methods"
            ],
            "semester": 1
          },
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "chemical",
            "name": "Chemical Process Principles",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Material Balances",
              "Energy Balances",
              "Phase Equilibria",
              "Reaction Stoichiometry",
              "Process Flow Diagrams"
            ],
            "semester": 1
          },
          {
            "id": "thermo",
            "name": "Thermodynamics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Properties and State",
              "First Law",
              "Second Law",
              "Power Cycles",
              "Refrigeration"
            ],
            "semester": 2
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "science"
      },
      {
        "id": "mathematics",
        "name": "Mathematics",
        "subjects": [
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "statistics",
            "name": "Statistics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Descriptive Statistics",
              "Probability",
              "Distributions",
              "Estimation",
              "Hypothesis Testing"
            ],
            "semester": 1
          },
          {
            "id": "programming",
            "name": "Programming Fundamentals",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Algorithms and Flowcharts",
              "Variables, Types and Operators",
              "Control Flow",
              "Functions and Recursion",
              "Arrays, Strings and Pointers"
            ],
            "semester": 1
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "software",
            "name": "Software Engineering",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Requirements Engineering",
              "Software Design",
              "Development Life Cycles",
              "Software Testing",
              "Project Delivery"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "science"
      },
      {
        "id": "computer-science",
        "name": "Computer Science",
        "subjects": [
          {
            "id": "programming",
            "name": "Programming Fundamentals",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Algorithms and Flowcharts",
              "Variables, Types and Operators",
              "Control Flow",
              "Functions and Recursion",
              "Arrays, Strings and Pointers"
            ],
            "semester": 1
          },
          {
            "id": "dsa",
            "name": "Data Structures & Algorithms",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Complexity and Analysis",
              "Lists, Stacks and Queues",
              "Trees and Search",
              "Graphs and Traversal",
              "Sorting and Hashing"
            ],
            "semester": 1
          },
          {
            "id": "dbms",
            "name": "Database Management Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Relational Model",
              "SQL Queries and Joins",
              "Normalisation",
              "Transactions and Concurrency",
              "Indexing and Query Optimisation"
            ],
            "semester": 1
          },
          {
            "id": "os",
            "name": "Operating Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Processes and Threads",
              "CPU Scheduling",
              "Synchronisation and Deadlocks",
              "Memory Management",
              "File Systems"
            ],
            "semester": 2
          },
          {
            "id": "networks",
            "name": "Computer Networks",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Network Models",
              "Data Link Layer",
              "IP and Routing",
              "TCP and UDP",
              "Application Protocols and Security"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "code"
      },
      {
        "id": "botany",
        "name": "Botany",
        "subjects": [
          {
            "id": "botany",
            "name": "Botany",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Plant Diversity",
              "Plant Anatomy",
              "Plant Physiology",
              "Genetics",
              "Ecology"
            ],
            "semester": 1
          },
          {
            "id": "chemistry",
            "name": "Chemistry",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Atomic Structure",
              "Chemical Bonding",
              "Thermodynamics",
              "Organic Mechanisms",
              "Analytical Methods"
            ],
            "semester": 1
          },
          {
            "id": "bio",
            "name": "Biotechnology Foundations",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Cell Biology",
              "Biochemistry",
              "Genetics",
              "Microbiology",
              "Bioprocess Engineering"
            ],
            "semester": 1
          },
          {
            "id": "statistics",
            "name": "Statistics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Descriptive Statistics",
              "Probability",
              "Distributions",
              "Estimation",
              "Hypothesis Testing"
            ],
            "semester": 2
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "science"
      },
      {
        "id": "zoology",
        "name": "Zoology",
        "subjects": [
          {
            "id": "zoology",
            "name": "Zoology",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Animal Diversity",
              "Animal Physiology",
              "Developmental Biology",
              "Genetics",
              "Ecology"
            ],
            "semester": 1
          },
          {
            "id": "chemistry",
            "name": "Chemistry",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Atomic Structure",
              "Chemical Bonding",
              "Thermodynamics",
              "Organic Mechanisms",
              "Analytical Methods"
            ],
            "semester": 1
          },
          {
            "id": "bio",
            "name": "Biotechnology Foundations",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Cell Biology",
              "Biochemistry",
              "Genetics",
              "Microbiology",
              "Bioprocess Engineering"
            ],
            "semester": 1
          },
          {
            "id": "statistics",
            "name": "Statistics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Descriptive Statistics",
              "Probability",
              "Distributions",
              "Estimation",
              "Hypothesis Testing"
            ],
            "semester": 2
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "science"
      },
      {
        "id": "statistics",
        "name": "Statistics",
        "subjects": [
          {
            "id": "statistics",
            "name": "Statistics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Descriptive Statistics",
              "Probability",
              "Distributions",
              "Estimation",
              "Hypothesis Testing"
            ],
            "semester": 1
          },
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "python",
            "name": "Python Programming",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Python Types and Collections",
              "Control Flow and Functions",
              "Modules and File Handling",
              "Object-Oriented Python",
              "Testing and Exceptions"
            ],
            "semester": 1
          },
          {
            "id": "dbms",
            "name": "Database Management Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Relational Model",
              "SQL Queries and Joins",
              "Normalisation",
              "Transactions and Concurrency",
              "Indexing and Query Optimisation"
            ],
            "semester": 2
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "science"
      }
    ]
  },
  {
    "id": "ba",
    "name": "B.A",
    "level": 20,
    "kind": "college",
    "tracks": [
      {
        "id": "english",
        "name": "English",
        "subjects": [
          {
            "id": "english",
            "name": "English Studies",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Poetry Analysis",
              "Drama Analysis",
              "Fiction",
              "Literary Criticism",
              "Academic Writing"
            ],
            "semester": 1
          },
          {
            "id": "history",
            "name": "History",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Historical Sources",
              "Ancient India",
              "Medieval India",
              "Modern India",
              "World History"
            ],
            "semester": 1
          },
          {
            "id": "sociology",
            "name": "Sociology",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Sociological Theory",
              "Social Institutions",
              "Social Stratification",
              "Social Change",
              "Indian Society"
            ],
            "semester": 1
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "humanities"
      },
      {
        "id": "hindi",
        "name": "Hindi",
        "subjects": [
          {
            "id": "hindi",
            "name": "Hindi Studies",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "हिंदी साहित्य का इतिहास",
              "काव्य अध्ययन",
              "कथा साहित्य",
              "नाटक और आलोचना",
              "भाषा और व्याकरण"
            ],
            "semester": 1
          },
          {
            "id": "history",
            "name": "History",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Historical Sources",
              "Ancient India",
              "Medieval India",
              "Modern India",
              "World History"
            ],
            "semester": 1
          },
          {
            "id": "sociology",
            "name": "Sociology",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Sociological Theory",
              "Social Institutions",
              "Social Stratification",
              "Social Change",
              "Indian Society"
            ],
            "semester": 1
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "humanities"
      },
      {
        "id": "history",
        "name": "History",
        "subjects": [
          {
            "id": "history",
            "name": "History",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Historical Sources",
              "Ancient India",
              "Medieval India",
              "Modern India",
              "World History"
            ],
            "semester": 1
          },
          {
            "id": "politics",
            "name": "Political Science",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Political Theory",
              "Indian Constitution",
              "Public Administration",
              "Comparative Politics",
              "International Relations"
            ],
            "semester": 1
          },
          {
            "id": "geography",
            "name": "Geography",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Physical Geography",
              "Human Geography",
              "Cartography",
              "Regional Geography",
              "GIS"
            ],
            "semester": 1
          },
          {
            "id": "sociology",
            "name": "Sociology",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Sociological Theory",
              "Social Institutions",
              "Social Stratification",
              "Social Change",
              "Indian Society"
            ],
            "semester": 2
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "humanities"
      },
      {
        "id": "political-science",
        "name": "Political Science",
        "subjects": [
          {
            "id": "politics",
            "name": "Political Science",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Political Theory",
              "Indian Constitution",
              "Public Administration",
              "Comparative Politics",
              "International Relations"
            ],
            "semester": 1
          },
          {
            "id": "history",
            "name": "History",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Historical Sources",
              "Ancient India",
              "Medieval India",
              "Modern India",
              "World History"
            ],
            "semester": 1
          },
          {
            "id": "sociology",
            "name": "Sociology",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Sociological Theory",
              "Social Institutions",
              "Social Stratification",
              "Social Change",
              "Indian Society"
            ],
            "semester": 1
          },
          {
            "id": "economics",
            "name": "Economics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Consumer Theory",
              "Production and Costs",
              "Market Structures",
              "National Income",
              "Money and Banking"
            ],
            "semester": 2
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "humanities"
      },
      {
        "id": "economics",
        "name": "Economics",
        "subjects": [
          {
            "id": "economics",
            "name": "Economics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Consumer Theory",
              "Production and Costs",
              "Market Structures",
              "National Income",
              "Money and Banking"
            ],
            "semester": 1
          },
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          },
          {
            "id": "statistics",
            "name": "Statistics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Descriptive Statistics",
              "Probability",
              "Distributions",
              "Estimation",
              "Hypothesis Testing"
            ],
            "semester": 1
          },
          {
            "id": "finance",
            "name": "Financial Management",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Time Value of Money",
              "Capital Budgeting",
              "Cost of Capital",
              "Working Capital",
              "Capital Structure"
            ],
            "semester": 2
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "humanities"
      },
      {
        "id": "psychology",
        "name": "Psychology",
        "subjects": [
          {
            "id": "psychology",
            "name": "Psychology",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Cognition",
              "Development",
              "Social Psychology",
              "Abnormal Psychology",
              "Psychological Assessment"
            ],
            "semester": 1
          },
          {
            "id": "statistics",
            "name": "Statistics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Descriptive Statistics",
              "Probability",
              "Distributions",
              "Estimation",
              "Hypothesis Testing"
            ],
            "semester": 1
          },
          {
            "id": "sociology",
            "name": "Sociology",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Sociological Theory",
              "Social Institutions",
              "Social Stratification",
              "Social Change",
              "Indian Society"
            ],
            "semester": 1
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "humanities"
      },
      {
        "id": "sociology",
        "name": "Sociology",
        "subjects": [
          {
            "id": "sociology",
            "name": "Sociology",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Sociological Theory",
              "Social Institutions",
              "Social Stratification",
              "Social Change",
              "Indian Society"
            ],
            "semester": 1
          },
          {
            "id": "politics",
            "name": "Political Science",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Political Theory",
              "Indian Constitution",
              "Public Administration",
              "Comparative Politics",
              "International Relations"
            ],
            "semester": 1
          },
          {
            "id": "history",
            "name": "History",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Historical Sources",
              "Ancient India",
              "Medieval India",
              "Modern India",
              "World History"
            ],
            "semester": 1
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "humanities"
      },
      {
        "id": "geography",
        "name": "Geography",
        "subjects": [
          {
            "id": "geography",
            "name": "Geography",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Physical Geography",
              "Human Geography",
              "Cartography",
              "Regional Geography",
              "GIS"
            ],
            "semester": 1
          },
          {
            "id": "statistics",
            "name": "Statistics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Descriptive Statistics",
              "Probability",
              "Distributions",
              "Estimation",
              "Hypothesis Testing"
            ],
            "semester": 1
          },
          {
            "id": "history",
            "name": "History",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Historical Sources",
              "Ancient India",
              "Medieval India",
              "Modern India",
              "World History"
            ],
            "semester": 1
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 2
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 2
          }
        ],
        "motion": "humanities"
      }
    ]
  },
  {
    "id": "bcom",
    "name": "B.Com",
    "level": 20,
    "kind": "college",
    "tracks": [
      {
        "id": "semester-1",
        "name": "Semester 1",
        "subjects": [
          {
            "id": "accounting",
            "name": "Financial Accounting",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Accounting Principles",
              "Journal and Ledger",
              "Trial Balance",
              "Financial Statements",
              "Depreciation"
            ],
            "semester": 1
          },
          {
            "id": "economics",
            "name": "Economics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Consumer Theory",
              "Production and Costs",
              "Market Structures",
              "National Income",
              "Money and Banking"
            ],
            "semester": 1
          }
        ],
        "motion": "finance"
      },
      {
        "id": "semester-2",
        "name": "Semester 2",
        "subjects": [
          {
            "id": "law",
            "name": "Business Law",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Contracts",
              "Sale of Goods",
              "Partnership",
              "Company Law",
              "Consumer Protection"
            ],
            "semester": 2
          },
          {
            "id": "corporate",
            "name": "Corporate Accounting",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Share Capital",
              "Debentures",
              "Company Accounts",
              "Cash Flow Statements",
              "Financial Analysis"
            ],
            "semester": 2
          }
        ],
        "motion": "finance"
      },
      {
        "id": "semester-3",
        "name": "Semester 3",
        "subjects": [
          {
            "id": "cost",
            "name": "Cost Accounting",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Cost Classification",
              "Material Costs",
              "Labour Costs",
              "Overheads",
              "Costing Methods"
            ],
            "semester": 3
          },
          {
            "id": "finance",
            "name": "Financial Management",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Time Value of Money",
              "Capital Budgeting",
              "Cost of Capital",
              "Working Capital",
              "Capital Structure"
            ],
            "semester": 3
          }
        ],
        "motion": "finance"
      },
      {
        "id": "semester-4",
        "name": "Semester 4",
        "subjects": [
          {
            "id": "statistics",
            "name": "Statistics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Descriptive Statistics",
              "Probability",
              "Distributions",
              "Estimation",
              "Hypothesis Testing"
            ],
            "semester": 4
          },
          {
            "id": "management",
            "name": "Principles of Management",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Planning",
              "Organising",
              "Staffing",
              "Directing",
              "Controlling"
            ],
            "semester": 4
          }
        ],
        "motion": "finance"
      },
      {
        "id": "semester-5",
        "name": "Semester 5",
        "subjects": [
          {
            "id": "marketing",
            "name": "Marketing Management",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Market Research",
              "Segmentation",
              "Product and Pricing",
              "Distribution",
              "Promotion"
            ],
            "semester": 5
          },
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 5
          }
        ],
        "motion": "finance"
      },
      {
        "id": "semester-6",
        "name": "Semester 6",
        "subjects": [
          {
            "id": "entrepreneur",
            "name": "Entrepreneurship",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Opportunity Discovery",
              "Business Models",
              "Customer Validation",
              "Startup Finance",
              "Growth Strategy"
            ],
            "semester": 6
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 6
          }
        ],
        "motion": "finance"
      }
    ]
  },
  {
    "id": "bca",
    "name": "BCA",
    "level": 20,
    "kind": "college",
    "tracks": [
      {
        "id": "semester-1",
        "name": "Semester 1",
        "subjects": [
          {
            "id": "programming",
            "name": "Programming Fundamentals",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Algorithms and Flowcharts",
              "Variables, Types and Operators",
              "Control Flow",
              "Functions and Recursion",
              "Arrays, Strings and Pointers"
            ],
            "semester": 1
          },
          {
            "id": "maths",
            "name": "Engineering Mathematics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Differential Calculus",
              "Integral Calculus",
              "Linear Algebra",
              "Differential Equations",
              "Probability and Statistics"
            ],
            "semester": 1
          }
        ],
        "motion": "code"
      },
      {
        "id": "semester-2",
        "name": "Semester 2",
        "subjects": [
          {
            "id": "digital",
            "name": "Digital Electronics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Number Systems",
              "Boolean Algebra",
              "Combinational Circuits",
              "Sequential Circuits",
              "Memory and Converters"
            ],
            "semester": 2
          },
          {
            "id": "dsa",
            "name": "Data Structures & Algorithms",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Complexity and Analysis",
              "Lists, Stacks and Queues",
              "Trees and Search",
              "Graphs and Traversal",
              "Sorting and Hashing"
            ],
            "semester": 2
          }
        ],
        "motion": "code"
      },
      {
        "id": "semester-3",
        "name": "Semester 3",
        "subjects": [
          {
            "id": "oop",
            "name": "Object-Oriented Programming",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Classes and Objects",
              "Encapsulation and Abstraction",
              "Inheritance",
              "Polymorphism",
              "Design Principles"
            ],
            "semester": 3
          },
          {
            "id": "dbms",
            "name": "Database Management Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Relational Model",
              "SQL Queries and Joins",
              "Normalisation",
              "Transactions and Concurrency",
              "Indexing and Query Optimisation"
            ],
            "semester": 3
          }
        ],
        "motion": "code"
      },
      {
        "id": "semester-4",
        "name": "Semester 4",
        "subjects": [
          {
            "id": "os",
            "name": "Operating Systems",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Processes and Threads",
              "CPU Scheduling",
              "Synchronisation and Deadlocks",
              "Memory Management",
              "File Systems"
            ],
            "semester": 4
          },
          {
            "id": "web",
            "name": "Web Development",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "HTML and Accessibility",
              "CSS Layouts",
              "JavaScript and DOM",
              "HTTP and APIs",
              "Web Security and Deployment"
            ],
            "semester": 4
          }
        ],
        "motion": "code"
      },
      {
        "id": "semester-5",
        "name": "Semester 5",
        "subjects": [
          {
            "id": "networks",
            "name": "Computer Networks",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Network Models",
              "Data Link Layer",
              "IP and Routing",
              "TCP and UDP",
              "Application Protocols and Security"
            ],
            "semester": 5
          },
          {
            "id": "software",
            "name": "Software Engineering",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Requirements Engineering",
              "Software Design",
              "Development Life Cycles",
              "Software Testing",
              "Project Delivery"
            ],
            "semester": 5
          }
        ],
        "motion": "code"
      },
      {
        "id": "semester-6",
        "name": "Semester 6",
        "subjects": [
          {
            "id": "cyber",
            "name": "Cybersecurity",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Security Principles",
              "Cryptography",
              "Network Security",
              "Application Security",
              "Risk and Incident Response"
            ],
            "semester": 6
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 6
          }
        ],
        "motion": "code"
      }
    ]
  },
  {
    "id": "bba",
    "name": "BBA",
    "level": 20,
    "kind": "college",
    "tracks": [
      {
        "id": "semester-1",
        "name": "Semester 1",
        "subjects": [
          {
            "id": "management",
            "name": "Principles of Management",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Planning",
              "Organising",
              "Staffing",
              "Directing",
              "Controlling"
            ],
            "semester": 1
          },
          {
            "id": "economics",
            "name": "Economics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Consumer Theory",
              "Production and Costs",
              "Market Structures",
              "National Income",
              "Money and Banking"
            ],
            "semester": 1
          }
        ],
        "motion": "finance"
      },
      {
        "id": "semester-2",
        "name": "Semester 2",
        "subjects": [
          {
            "id": "accounting",
            "name": "Financial Accounting",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Accounting Principles",
              "Journal and Ledger",
              "Trial Balance",
              "Financial Statements",
              "Depreciation"
            ],
            "semester": 2
          },
          {
            "id": "marketing",
            "name": "Marketing Management",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Market Research",
              "Segmentation",
              "Product and Pricing",
              "Distribution",
              "Promotion"
            ],
            "semester": 2
          }
        ],
        "motion": "finance"
      },
      {
        "id": "semester-3",
        "name": "Semester 3",
        "subjects": [
          {
            "id": "hr",
            "name": "Human Resource Management",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Workforce Planning",
              "Recruitment",
              "Training",
              "Performance Management",
              "Employee Relations"
            ],
            "semester": 3
          },
          {
            "id": "finance",
            "name": "Financial Management",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Time Value of Money",
              "Capital Budgeting",
              "Cost of Capital",
              "Working Capital",
              "Capital Structure"
            ],
            "semester": 3
          }
        ],
        "motion": "finance"
      },
      {
        "id": "semester-4",
        "name": "Semester 4",
        "subjects": [
          {
            "id": "statistics",
            "name": "Statistics",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Descriptive Statistics",
              "Probability",
              "Distributions",
              "Estimation",
              "Hypothesis Testing"
            ],
            "semester": 4
          },
          {
            "id": "law",
            "name": "Business Law",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Contracts",
              "Sale of Goods",
              "Partnership",
              "Company Law",
              "Consumer Protection"
            ],
            "semester": 4
          }
        ],
        "motion": "finance"
      },
      {
        "id": "semester-5",
        "name": "Semester 5",
        "subjects": [
          {
            "id": "operations",
            "name": "Operations Management",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Process Design",
              "Capacity Planning",
              "Inventory",
              "Quality Management",
              "Supply Chains"
            ],
            "semester": 5
          },
          {
            "id": "entrepreneur",
            "name": "Entrepreneurship",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Opportunity Discovery",
              "Business Models",
              "Customer Validation",
              "Startup Finance",
              "Growth Strategy"
            ],
            "semester": 5
          }
        ],
        "motion": "finance"
      },
      {
        "id": "semester-6",
        "name": "Semester 6",
        "subjects": [
          {
            "id": "research",
            "name": "Research Methods",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Research Questions",
              "Study Design",
              "Sampling",
              "Data Analysis",
              "Research Ethics"
            ],
            "semester": 6
          },
          {
            "id": "project",
            "name": "Project & Professional Practice",
            "emoji": "",
            "book": "Undergraduate core topic units",
            "chapters": [
              "Problem Definition",
              "Literature Review",
              "Design and Implementation",
              "Testing and Evaluation",
              "Report and Presentation"
            ],
            "semester": 6
          }
        ],
        "motion": "finance"
      }
    ]
  }
];
export const ADVANCED_COURSES: AdvancedCourse[] = ADVANCED_COURSE_DATA.map(applySemesterPlan);
export const ADVANCED_COURSE_LINKS: Record<string, string> = Object.fromEntries(ADVANCED_COURSES.map(c => [c.name, c.id]));
export const getAdvancedCourse = (id: string) => ADVANCED_COURSES.find(c => c.id === id);
export const getAdvancedTrack = (course: string, track: string) => getAdvancedCourse(course)?.tracks.find(t => t.id === track);
export const getAdvancedSubject = (course: string, track: string, subject: string) => getAdvancedTrack(course, track)?.subjects.find(s => s.id === subject);

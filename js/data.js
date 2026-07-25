/**
 * Expanded Online MCQ Question Bank Data (All 25 Full-Stack Questions + Special Domain Sets)
 * Categorized by Domain with detailed explanations, options, metadata, and difficulty levels.
 */

const QUESTION_BANK = {
  "fullstack": [
    {
      id: "fs_1",
      topic: "Front-End Languages",
      difficulty: "Easy",
      question: "1. Which of the following is typically used as a front-end language?",
      options: ["A) JavaScript", "B) Python", "C) Java", "D) Ruby"],
      correct: "A",
      explanation: "JavaScript is the primary programming language for creating interactive client-side logic on web pages."
    },
    {
      id: "fs_2",
      topic: "Back-End Architecture",
      difficulty: "Easy",
      question: "2. What is the main role of the back-end in full-stack development?",
      options: [
        "A) To manage user interfaces",
        "B) To handle data processing, storage, and server-side logic",
        "C) To style the website",
        "D) To provide responsive designs"
      ],
      correct: "B",
      explanation: "The back-end processes requests, manages database transactions, handles server-side logic, and enforces security authentication."
    },
    {
      id: "fs_3",
      topic: "JS Frameworks",
      difficulty: "Easy",
      question: "3. Which of the following is a popular JavaScript front-end framework/library?",
      options: ["A) Angular", "B) Django", "C) Flask", "D) Ruby on Rails"],
      correct: "A",
      explanation: "Angular (along with React and Vue) is a popular client-side JavaScript framework built by Google."
    },
    {
      id: "fs_4",
      topic: "Database Systems",
      difficulty: "Easy",
      question: "4. Which database is known as a NoSQL document database?",
      options: ["A) MySQL", "B) PostgreSQL", "C) MongoDB", "D) Oracle"],
      correct: "C",
      explanation: "MongoDB is a document-oriented NoSQL database that stores data in JSON-like BSON format."
    },
    {
      id: "fs_5",
      topic: "APIs & Web Services",
      difficulty: "Easy",
      question: "5. Which of the following is the main purpose of an API?",
      options: [
        "A) To store data on local disks",
        "B) To provide a CSS styling grid",
        "C) To allow different software systems to communicate",
        "D) To manage operating system memory"
      ],
      correct: "C",
      explanation: "API (Application Programming Interface) enables seamless communication and data exchange between heterogeneous applications."
    },
    {
      id: "fs_6",
      topic: "REST Architecture",
      difficulty: "Medium",
      question: "6. What does REST stand for in the context of web services?",
      options: [
        "A) Representational State Transfer",
        "B) Remote Execution State Transfer",
        "C) Real-time Server Transaction",
        "D) Remote State Transaction"
      ],
      correct: "A",
      explanation: "REST (Representational State Transfer) defines architectural constraints for designing stateless network applications over HTTP."
    },
    {
      id: "fs_7",
      topic: "CSS Frameworks",
      difficulty: "Easy",
      question: "7. Which of the following is a widely used CSS framework?",
      options: ["A) React", "B) Angular", "C) Bootstrap", "D) Node.js"],
      correct: "C",
      explanation: "Bootstrap is a open-source CSS framework designed for building responsive, mobile-first web front-ends."
    },
    {
      id: "fs_8",
      topic: "Node.js Ecosystem",
      difficulty: "Easy",
      question: "8. What is Node.js primarily used for?",
      options: [
        "A) Front-end styling",
        "B) Back-end server-side development",
        "C) Relational database indexing",
        "D) Vector web graphics design"
      ],
      correct: "B",
      explanation: "Node.js allows developers to execute JavaScript on the server side outside the web browser environment."
    },
    {
      id: "fs_9",
      topic: "Version Control",
      difficulty: "Easy",
      question: "9. Which of the following is a distributed version control system?",
      options: ["A) Git", "B) SQL", "C) React", "D) Node.js"],
      correct: "A",
      explanation: "Git tracks changes in source code files during software development, supporting multi-developer branching workflows."
    },
    {
      id: "fs_10",
      topic: "Responsive Web Design",
      difficulty: "Medium",
      question: "10. What does the term 'responsive design' refer to in web development?",
      options: [
        "A) Designing websites to adapt gracefully to different screen sizes and devices",
        "B) Using fixed large pixel widths for all desktop displays",
        "C) Designing static print layouts only",
        "D) Using JavaScript for all layout rendering"
      ],
      correct: "A",
      explanation: "Responsive web design uses flexible grids, fluid media, and CSS media queries to deliver optimal layout across desktop, tablet, and mobile devices."
    },
    {
      id: "fs_11",
      topic: "HTTP Methods",
      difficulty: "Easy",
      question: "11. Which HTTP method is used to retrieve data from a server without side effects?",
      options: ["A) POST", "B) GET", "C) PUT", "D) DELETE"],
      correct: "B",
      explanation: "The HTTP GET method requests a representation of the specified resource safely and idempotently."
    },
    {
      id: "fs_12",
      topic: "Package Managers",
      difficulty: "Easy",
      question: "12. What does the 'npm' CLI tool do in Node.js development?",
      options: [
        "A) It installs Node.js binary executables",
        "B) It installs and manages third-party packages from the npm registry",
        "C) It starts hardware network interface cards",
        "D) It formats HTML web documents"
      ],
      correct: "B",
      explanation: "npm (Node Package Manager) downloads, installs, updates, and manages module dependencies for Node applications."
    },
    {
      id: "fs_13",
      topic: "Web Styling",
      difficulty: "Easy",
      question: "13. Which language is specifically designed to describe the presentation and styling of a document?",
      options: ["A) HTML", "B) CSS", "C) JavaScript", "D) SQL"],
      correct: "B",
      explanation: "CSS (Cascading Style Sheets) specifies page layouts, colors, fonts, and visual transitions."
    },
    {
      id: "fs_14",
      topic: "React Tooling",
      difficulty: "Medium",
      question: "14. Which command is traditionally used to bootstrap a single-page React application?",
      options: [
        "A) react create",
        "B) npx create-react-app",
        "C) npm install react",
        "D) create-react-app"
      ],
      correct: "B",
      explanation: "npx create-react-app initializes a new React project with pre-configured Webpack and Babel tooling."
    },
    {
      id: "fs_15",
      topic: "Module Bundlers",
      difficulty: "Medium",
      question: "15. Which of the following tools is used for bundling JavaScript modules and static assets?",
      options: ["A) Webpack", "B) Babel", "C) Git", "D) npm"],
      correct: "A",
      explanation: "Webpack bundles multiple JavaScript files, stylesheets, and assets into optimized bundles for browser consumption."
    },
    {
      id: "fs_16",
      topic: "Debugging Tools",
      difficulty: "Easy",
      question: "16. What is the main purpose of the console.log() method in JavaScript?",
      options: [
        "A) To display pop-up alert dialogs to end users",
        "B) To output debugging messages directly to the browser console",
        "C) To write data permanently to server files",
        "D) To terminate program execution"
      ],
      correct: "B",
      explanation: "console.log() prints diagnostic information to the browser developer console for debugging purposes."
    },
    {
      id: "fs_17",
      topic: "Node Package Management",
      difficulty: "Easy",
      question: "17. Which command line syntax is used to install a package locally in Node.js?",
      options: ["A) node install", "B) npm install <package>", "C) npm update", "D) install npm"],
      correct: "B",
      explanation: "'npm install <package-name>' downloads the specified package into the local node_modules directory."
    },
    {
      id: "fs_18",
      topic: "JS Runtimes",
      difficulty: "Easy",
      question: "18. Which technology provides an open-source, cross-platform server JavaScript runtime?",
      options: ["A) React", "B) Angular", "C) Node.js", "D) Vue.js"],
      correct: "C",
      explanation: "Node.js allows server-side execution of JavaScript using Google Chrome's V8 engine."
    },
    {
      id: "fs_19",
      topic: "Database Operations",
      difficulty: "Easy",
      question: "19. What does the acronym 'CRUD' stand for in persistent database applications?",
      options: [
        "A) Create, Read, Update, Delete",
        "B) Control, Read, Update, Delete",
        "C) Create, Read, Use, Delete",
        "D) Control, Replace, Update, Delete"
      ],
      correct: "A",
      explanation: "CRUD represents the four fundamental operations required for persistent data storage."
    },
    {
      id: "fs_20",
      topic: "REST Frameworks",
      difficulty: "Medium",
      question: "20. Which of the following backend frameworks is used for building RESTful APIs?",
      options: ["A) Express.js", "B) Flask", "C) Django", "D) All of the above"],
      correct: "D",
      explanation: "Express.js (Node), Flask (Python), and Django (Python) are all widely used frameworks for developing REST APIs."
    },
    {
      id: "fs_21",
      topic: "JS Data Types",
      difficulty: "Medium",
      question: "21. Which of the following is NOT a valid primitive data type in JavaScript?",
      options: ["A) Number", "B) String", "C) Boolean", "D) Character"],
      correct: "D",
      explanation: "JavaScript has no distinct 'Character' data type. Single characters are strings of length 1."
    },
    {
      id: "fs_22",
      topic: "Architecture Patterns",
      difficulty: "Medium",
      question: "22. What does 'MVC' stand for in software architecture design?",
      options: [
        "A) Model-View-Controller",
        "B) Model-View-Creator",
        "C) Monitor-View-Control",
        "D) Model-Variable-Controller"
      ],
      correct: "A",
      explanation: "MVC separates software logic into Model (Data), View (UI layout), and Controller (Request handler)."
    },
    {
      id: "fs_23",
      topic: "API Security",
      difficulty: "Hard",
      question: "23. Which of the following mechanisms is commonly used to secure web APIs?",
      options: ["A) JWT (JSON Web Tokens)", "B) SSL/TLS Encryption", "C) OAuth 2.0", "D) All of the above"],
      correct: "D",
      explanation: "Modern web APIs use HTTPS (SSL), JWT tokens for authentication, and OAuth 2.0 for third-party authorization."
    },
    {
      id: "fs_24",
      topic: "Templating Engines",
      difficulty: "Medium",
      question: "24. Which of the following is a popular templating engine used in Node.js server rendering?",
      options: ["A) EJS", "B) Pug", "C) Handlebars", "D) All of the above"],
      correct: "D",
      explanation: "EJS, Pug, and Handlebars are all popular template engines that render HTML on the server with dynamic JS data."
    },
    {
      id: "fs_25",
      topic: "JS Runtime Environments",
      difficulty: "Easy",
      question: "25. Which of the following is an example of a server-side JavaScript runtime environment?",
      options: ["A) Chrome", "B) Node.js", "C) Firefox", "D) Safari"],
      correct: "B",
      explanation: "While Chrome, Firefox, and Safari are web browsers, Node.js is a dedicated server-side JavaScript runtime."
    }
  ],
  "javascript": [
    {
      id: "js_1",
      topic: "JS Fundamentals",
      difficulty: "Easy",
      question: "Which keyword declares a block-scoped variable that CANNOT be reassigned?",
      options: ["A) var", "B) let", "C) const", "D) static"],
      correct: "C",
      explanation: "'const' creates read-only block-scoped variable references that cannot be re-assigned."
    },
    {
      id: "js_2",
      topic: "Asynchronous JS",
      difficulty: "Medium",
      question: "What is returned by an 'async' function in JavaScript?",
      options: ["A) A boolean", "B) A Promise", "C) A callback function", "D) A DOM Element"],
      correct: "B",
      explanation: "Async functions automatically wrap their returned values in a resolved Promise object."
    },
    {
      id: "js_3",
      topic: "Event Loop",
      difficulty: "Hard",
      question: "In what order does the Event Loop execute callbacks?",
      options: [
        "A) Call Stack -> Microtasks Queue (Promises) -> Macrotasks Queue (setTimeout)",
        "B) Macrotasks -> Microtasks -> Call Stack",
        "C) Call Stack -> Macrotasks -> Microtasks",
        "D) Microtasks -> Call Stack -> Web API"
      ],
      correct: "A",
      explanation: "Microtasks (Promises) are emptied completely before the Event Loop moves to the next macrotask (setTimeout)."
    },
    {
      id: "js_4",
      topic: "Closures",
      difficulty: "Hard",
      question: "What is a closure in JavaScript?",
      options: [
        "A) A function bound together with its outer lexical environment",
        "B) A method that closes browser tabs",
        "C) A syntax error during parsing",
        "D) A strict-mode keyword"
      ],
      correct: "A",
      explanation: "Closures grant inner functions access to outer function variables even after the outer function has returned."
    },
    {
      id: "js_5",
      topic: "Prototypal Inheritance",
      difficulty: "Hard",
      question: "Which property points to an object's prototype link in JavaScript?",
      options: ["A) __proto__", "B) [[Scope]]", "C) prototype_parent", "D) super"],
      correct: "A",
      explanation: "The '__proto__' property (or Object.getPrototypeOf) exposes an object's prototype link."
    }
  ],
  "dsa": [
    {
      id: "dsa_1",
      topic: "Time Complexity",
      difficulty: "Easy",
      question: "What is the worst-case time complexity of Binary Search?",
      options: ["A) O(1)", "B) O(log N)", "C) O(N)", "D) O(N log N)"],
      correct: "B",
      explanation: "Binary Search halves the search space at each iteration, resulting in O(log N) complexity."
    },
    {
      id: "dsa_2",
      topic: "Stacks & Queues",
      difficulty: "Easy",
      question: "Which data structure operates on a FIFO (First In First Out) principle?",
      options: ["A) Stack", "B) Queue", "C) Array", "D) Tree"],
      correct: "B",
      explanation: "Queues operate on First-In-First-Out order, similar to real-life waiting lines."
    },
    {
      id: "dsa_3",
      topic: "Sorting Algorithms",
      difficulty: "Medium",
      question: "Which sorting algorithm has an average time complexity of O(N log N) and is in-place?",
      options: ["A) Bubble Sort", "B) QuickSort", "C) Merge Sort", "D) Counting Sort"],
      correct: "B",
      explanation: "QuickSort sorts in-place with O(N log N) average time complexity using pivot partitioning."
    },
    {
      id: "dsa_4",
      topic: "Tree Traversal",
      difficulty: "Medium",
      question: "In-order traversal of a Binary Search Tree (BST) visits nodes in which order?",
      options: ["A) Decreasing order", "B) Sorted ascending order", "C) Random order", "D) Level-by-level"],
      correct: "B",
      explanation: "In-order traversal (Left, Root, Right) of a valid BST always yields sorted ascending values."
    },
    {
      id: "dsa_5",
      topic: "Graph Algorithms",
      difficulty: "Hard",
      question: "Which algorithm finds the shortest path in a weighted graph with non-negative edge weights?",
      options: ["A) Prim's Algorithm", "B) Dijkstra's Algorithm", "C) Kruskal's Algorithm", "D) Depth First Search"],
      correct: "B",
      explanation: "Dijkstra's algorithm computes single-source shortest paths on non-negatively weighted graphs."
    }
  ],
  "backend": [
    {
      id: "db_1",
      topic: "NoSQL Databases",
      difficulty: "Easy",
      question: "Which of the following is an example of a NoSQL Key-Value store?",
      options: ["A) Redis", "B) PostgreSQL", "C) SQLite", "D) Oracle"],
      correct: "A",
      explanation: "Redis is an in-memory key-value data store used for caching and session storage."
    },
    {
      id: "db_2",
      topic: "HTTP Status Codes",
      difficulty: "Easy",
      question: "What does the 404 HTTP status code signify?",
      options: ["A) Unauthorized Access", "B) Resource Not Found", "C) Internal Server Error", "D) Bad Gateway"],
      correct: "B",
      explanation: "404 Not Found indicates that the server cannot find the requested resource endpoint."
    },
    {
      id: "db_3",
      topic: "Database Transactions",
      difficulty: "Hard",
      question: "What does the 'A' in database ACID properties stand for?",
      options: ["A) Atomicity", "B) Availability", "C) Authentication", "D) Asynchrony"],
      correct: "A",
      explanation: "Atomicity guarantees that all statements in a transaction complete successfully or all are rolled back."
    },
    {
      id: "db_4",
      topic: "REST Security",
      difficulty: "Medium",
      question: "Which HTTP header is typically used to send Bearer JWT tokens for authorization?",
      options: ["A) Content-Type", "B) Authorization", "C) Accept-Encoding", "D) User-Agent"],
      correct: "B",
      explanation: "The 'Authorization' header carries credentials, e.g., 'Authorization: Bearer <token>'."
    },
    {
      id: "db_5",
      topic: "ORM / ODM",
      difficulty: "Medium",
      question: "Which Object Data Modeling (ODM) library is popular for Node.js and MongoDB?",
      options: ["A) Sequelize", "B) Mongoose", "C) Prisma", "D) TypeORM"],
      correct: "B",
      explanation: "Mongoose provides a straight-forward schema-based solution to model MongoDB application data."
    }
  ]
};

// Return question set by domain category
function getQuestions(category = "all") {
  if (category === "all" || !QUESTION_BANK[category]) {
    return QUESTION_BANK["fullstack"];
  }
  return QUESTION_BANK[category];
}

/**
 * Comprehensive Online MCQ Question Bank Data
 * Categorized by Domain with detailed explanations, options, and metadata.
 */

const QUESTION_BANK = {
  "fullstack": [
    {
      id: "fs_1",
      topic: "Full-Stack Overview",
      difficulty: "Easy",
      question: "Which of the following is typically used as a front-end language?",
      options: ["A) JavaScript", "B) Python", "C) Java", "D) Ruby"],
      correct: "A",
      explanation: "JavaScript is the native client-side programming language supported by all web browsers for creating interactive front-end user interfaces."
    },
    {
      id: "fs_2",
      topic: "Server-Side Architecture",
      difficulty: "Medium",
      question: "What is the primary role of the back-end in full-stack web applications?",
      options: [
        "A) To render CSS styles and HTML structure",
        "B) To handle business logic, data processing, authentication, and database storage",
        "C) To format client-side browser cookies",
        "D) To adjust mobile view viewport scale"
      ],
      correct: "B",
      explanation: "The back-end server handles API routes, server-side data processing, user authentication, security rules, and database communication."
    },
    {
      id: "fs_3",
      topic: "APIs & Web Services",
      difficulty: "Medium",
      question: "What does REST stand for in modern web API architecture?",
      options: [
        "A) Representational State Transfer",
        "B) Remote Execution State Transfer",
        "C) Real-time Server Transaction",
        "D) Relational Storage System Transfer"
      ],
      correct: "A",
      explanation: "REST (Representational State Transfer) is an architectural style for designing networked applications using HTTP requests."
    },
    {
      id: "fs_4",
      topic: "Software Architecture",
      difficulty: "Hard",
      question: "What does 'MVC' stand for in software architecture design?",
      options: [
        "A) Model-View-Controller",
        "B) Model-View-Creator",
        "C) Monitor-View-Control",
        "D) Model-Variable-Controller"
      ],
      correct: "A",
      explanation: "MVC separates application logic into three interconnected components: Model (Data), View (UI), and Controller (Business logic)."
    },
    {
      id: "fs_5",
      topic: "API Security",
      difficulty: "Hard",
      question: "Which mechanism is widely used to securely transmit claims between client and server as a JSON object?",
      options: [
        "A) CORS headers",
        "B) JSON Web Tokens (JWT)",
        "C) Cross-Site Scripting (XSS)",
        "D) Server-Sent Events (SSE)"
      ],
      correct: "B",
      explanation: "JWTs (JSON Web Tokens) are digitally signed compact tokens used for secure stateless authentication and authorization."
    }
  ],
  "javascript": [
    {
      id: "js_1",
      topic: "JS Fundamentals",
      difficulty: "Easy",
      question: "Which of the following is NOT a primitive JavaScript data type?",
      options: ["A) Number", "B) String", "C) Boolean", "D) Character"],
      correct: "D",
      explanation: "JavaScript has no 'Character' primitive type. Single characters are simply strings of length 1."
    },
    {
      id: "js_2",
      topic: "Asynchronous JS",
      difficulty: "Medium",
      question: "What is returned by an 'async' function in JavaScript?",
      options: [
        "A) A raw boolean status",
        "B) A Promise",
        "C) An event listener object",
        "D) A synchronous callback"
      ],
      correct: "B",
      explanation: "Functions declared with 'async' always implicitly return a Promise, resolved with the value returned by the function."
    },
    {
      id: "js_3",
      topic: "Event Loop & Execution",
      difficulty: "Hard",
      question: "Where are Microtasks (like resolved Promise callbacks) queued in JavaScript event loop?",
      options: [
        "A) Macro Task Queue",
        "B) Call Stack",
        "C) Microtask Queue (executed before next macro task)",
        "D) Web API Background Thread"
      ],
      correct: "C",
      explanation: "Microtasks are processed immediately after the current script stack completes and before processing the next macro task (like setTimeout)."
    },
    {
      id: "js_4",
      topic: "JS Engines",
      difficulty: "Medium",
      question: "What is Node.js primarily designed for?",
      options: [
        "A) Browser DOM manipulation",
        "B) Running JavaScript on the server side outside the browser",
        "C) Styling web pages dynamically",
        "D) Designing relational database schemas"
      ],
      correct: "B",
      explanation: "Node.js is an open-source cross-platform JavaScript runtime built on Chrome's V8 engine to run server-side applications."
    },
    {
      id: "js_5",
      topic: "Scope & Closure",
      difficulty: "Hard",
      question: "What is a closure in JavaScript?",
      options: [
        "A) A syntax error during compilation",
        "B) A function bundled together with references to its surrounding lexical environment",
        "C) A method to close browser tabs programmatically",
        "D) A strict mode keyword"
      ],
      correct: "B",
      explanation: "A closure gives inner functions access to an outer function's scope even after the outer function has finished executing."
    }
  ],
  "dsa": [
    {
      id: "dsa_1",
      topic: "Time Complexity",
      difficulty: "Easy",
      question: "What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?",
      options: ["A) O(1)", "B) O(log N)", "C) O(N)", "D) O(N log N)"],
      correct: "B",
      explanation: "Because a balanced BST halves the search space at each level, lookup takes logarithmic O(log N) time."
    },
    {
      id: "dsa_2",
      topic: "Data Structures",
      difficulty: "Medium",
      question: "Which data structure follows the LIFO (Last In First Out) principle?",
      options: ["A) Queue", "B) Stack", "C) Heap", "D) Linked List"],
      correct: "B",
      explanation: "Stacks operate on Last-In-First-Out (LIFO), where elements pushed last are popped first."
    },
    {
      id: "dsa_3",
      topic: "Sorting Algorithms",
      difficulty: "Medium",
      question: "What is the average time complexity of QuickSort?",
      options: ["A) O(N)", "B) O(N log N)", "C) O(N^2)", "D) O(log N)"],
      correct: "B",
      explanation: "QuickSort achieves O(N log N) average complexity by partitioning arrays around pivot elements."
    },
    {
      id: "dsa_4",
      topic: "Graph Algorithms",
      difficulty: "Hard",
      question: "Which traversal algorithm uses a Queue data structure under the hood?",
      options: [
        "A) Depth First Search (DFS)",
        "B) Breadth First Search (BFS)",
        "C) Pre-order Traversal",
        "D) Topological Sort via Stack"
      ],
      correct: "B",
      explanation: "BFS explores neighbor nodes level by level using a Queue (FIFO), whereas DFS uses a Stack (LIFO)."
    },
    {
      id: "dsa_5",
      topic: "Dynamic Programming",
      difficulty: "Hard",
      question: "What key property distinguishes Dynamic Programming from simple recursion?",
      options: [
        "A) Greedy choices at each step",
        "B) Overlapping subproblems and optimal substructure (Memoization/Tabulation)",
        "C) In-place array sorting",
        "D) Randomization of pivot elements"
      ],
      correct: "B",
      explanation: "Dynamic Programming stores solutions to overlapping subproblems to avoid redundant calculations."
    }
  ],
  "backend": [
    {
      id: "db_1",
      topic: "Databases",
      difficulty: "Easy",
      question: "Which of the following is classified as a NoSQL document database?",
      options: ["A) MySQL", "B) PostgreSQL", "C) MongoDB", "D) Oracle DB"],
      correct: "C",
      explanation: "MongoDB stores data in flexible JSON-like BSON documents rather than tabular schemas."
    },
    {
      id: "db_2",
      topic: "HTTP Methods",
      difficulty: "Easy",
      question: "Which HTTP method is specifically idempotent and used to retrieve resources?",
      options: ["A) POST", "B) GET", "C) PATCH", "D) DELETE"],
      correct: "B",
      explanation: "GET requests retrieve data without modifying server state and are idempotent."
    },
    {
      id: "db_3",
      topic: "Express & Node",
      difficulty: "Medium",
      question: "In Express.js, what is middleware?",
      options: [
        "A) Database table relations",
        "B) Functions that access request and response objects to execute code or pass control to next middleware",
        "C) Client-side CSS preprocessors",
        "D) Hardware router protocols"
      ],
      correct: "B",
      explanation: "Middleware functions execute sequentially during the request-response cycle before sending final responses."
    },
    {
      id: "db_4",
      topic: "Database ACID Properties",
      difficulty: "Hard",
      question: "What does 'I' stand for in ACID database transaction properties?",
      options: ["A) Integrity", "B) Isolation", "C) Indexing", "D) Iteration"],
      correct: "B",
      explanation: "Isolation ensures concurrent transactions execute independently without interfering with each other."
    },
    {
      id: "db_5",
      topic: "Web Protocols",
      difficulty: "Hard",
      question: "Which protocol allows full-duplex persistent bidirectional communication over a single TCP connection?",
      options: ["A) HTTP/1.1", "B) WebSockets", "C) REST API", "D) GraphQL"],
      correct: "B",
      explanation: "WebSockets maintain a continuous connection enabling real-time low-latency two-way messaging."
    }
  ]
};

// Return flattened array of all questions or filtered by category
function getQuestions(category = "all") {
  if (category === "all") {
    return Object.values(QUESTION_BANK).flat();
  }
  return QUESTION_BANK[category] || QUESTION_BANK["fullstack"];
}

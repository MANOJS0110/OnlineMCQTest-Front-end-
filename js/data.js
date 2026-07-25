/**
 * Complete 100-Question Bank Dataset
 * 25 Questions each for: Full-Stack, JavaScript Core, Data Structures & Algorithms, and Backend & Databases.
 * Every question includes options (A-D), correct key, difficulty level, topic category, and detailed explanation.
 */

const QUESTION_BANK = {
  // ==================== FULL-STACK DEVELOPMENT (25 QUESTIONS) ====================
  "fullstack": [
    {
      id: "fs_1",
      topic: "Front-End Languages",
      difficulty: "Easy",
      question: "1. Which of the following is typically used as a front-end language?",
      options: ["A) JavaScript", "B) Python", "C) Java", "D) Ruby"],
      correct: "A",
      explanation: "JavaScript is the native programming language executed by web browsers to build interactive front-end user interfaces."
    },
    {
      id: "fs_2",
      topic: "Back-End Architecture",
      difficulty: "Easy",
      question: "2. What is the main role of the back-end in full-stack development?",
      options: ["A) To manage user interfaces", "B) To handle data processing, storage, and server-side logic", "C) To style the website", "D) To provide responsive designs"],
      correct: "B",
      explanation: "The back-end processes requests, manages business logic, authenticates users, and handles database persistence."
    },
    {
      id: "fs_3",
      topic: "JS Frameworks",
      difficulty: "Easy",
      question: "3. Which of the following is a popular JavaScript front-end framework/library?",
      options: ["A) Angular", "B) Django", "C) Flask", "D) Ruby on Rails"],
      correct: "A",
      explanation: "Angular, along with React and Vue, is a major client-side web application framework."
    },
    {
      id: "fs_4",
      topic: "Database Systems",
      difficulty: "Easy",
      question: "4. Which database is known as a NoSQL document database?",
      options: ["A) MySQL", "B) PostgreSQL", "C) MongoDB", "D) Oracle"],
      correct: "C",
      explanation: "MongoDB stores data in flexible, JSON-like document structures rather than relational tables."
    },
    {
      id: "fs_5",
      topic: "APIs & Web Services",
      difficulty: "Easy",
      question: "5. Which of the following is the main purpose of an API?",
      options: ["A) To store data on local disks", "B) To provide a CSS styling grid", "C) To allow different software systems to communicate", "D) To manage operating system memory"],
      correct: "C",
      explanation: "An Application Programming Interface (API) allows distinct applications to exchange data securely."
    },
    {
      id: "fs_6",
      topic: "REST Architecture",
      difficulty: "Medium",
      question: "6. What does REST stand for in the context of web services?",
      options: ["A) Representational State Transfer", "B) Remote Execution State Transfer", "C) Real-time Server Transaction", "D) Remote State Transaction"],
      correct: "A",
      explanation: "REST (Representational State Transfer) is an architectural style for designing networked web APIs."
    },
    {
      id: "fs_7",
      topic: "CSS Frameworks",
      difficulty: "Easy",
      question: "7. Which of the following is a widely used CSS framework?",
      options: ["A) React", "B) Angular", "C) Bootstrap", "D) Node.js"],
      correct: "C",
      explanation: "Bootstrap is an open-source front-end toolkit for building responsive mobile-first websites."
    },
    {
      id: "fs_8",
      topic: "Node.js Ecosystem",
      difficulty: "Easy",
      question: "8. What is Node.js primarily used for?",
      options: ["A) Front-end styling", "B) Back-end server-side development", "C) Relational database indexing", "D) Vector web graphics design"],
      correct: "B",
      explanation: "Node.js enables developers to execute JavaScript code on the server side."
    },
    {
      id: "fs_9",
      topic: "Version Control",
      difficulty: "Easy",
      question: "9. Which of the following is a distributed version control system?",
      options: ["A) Git", "B) SQL", "C) React", "D) Node.js"],
      correct: "A",
      explanation: "Git tracks revision history across distributed code repositories."
    },
    {
      id: "fs_10",
      topic: "Responsive Web Design",
      difficulty: "Medium",
      question: "10. What does the term 'responsive design' refer to in web development?",
      options: ["A) Designing websites to adapt gracefully to different screen sizes", "B) Using fixed large pixel widths for all desktop displays", "C) Designing static print layouts only", "D) Using JavaScript for all layout rendering"],
      correct: "A",
      explanation: "Responsive web design ensures web pages render effectively on desktop, tablet, and mobile displays."
    },
    {
      id: "fs_11",
      topic: "HTTP Methods",
      difficulty: "Easy",
      question: "11. Which HTTP method is used to retrieve data from a server without side effects?",
      options: ["A) POST", "B) GET", "C) PUT", "D) DELETE"],
      correct: "B",
      explanation: "HTTP GET requests request data from specified resources safely and without modifying server state."
    },
    {
      id: "fs_12",
      topic: "Package Managers",
      difficulty: "Easy",
      question: "12. What does the 'npm' CLI tool do in Node.js development?",
      options: ["A) It installs Node.js binary executables", "B) It installs and manages third-party packages from the npm registry", "C) It starts hardware network interface cards", "D) It formats HTML web documents"],
      correct: "B",
      explanation: "npm manages dependency packages for Node.js projects."
    },
    {
      id: "fs_13",
      topic: "Web Styling",
      difficulty: "Easy",
      question: "13. Which language is specifically designed to describe the presentation and styling of a document?",
      options: ["A) HTML", "B) CSS", "C) JavaScript", "D) SQL"],
      correct: "B",
      explanation: "CSS formats the visual appearance and layout of HTML elements."
    },
    {
      id: "fs_14",
      topic: "React Tooling",
      difficulty: "Medium",
      question: "14. Which command is traditionally used to bootstrap a single-page React application?",
      options: ["A) react create", "B) npx create-react-app", "C) npm install react", "D) create-react-app"],
      correct: "B",
      explanation: "npx create-react-app sets up a new React application with zero build configuration."
    },
    {
      id: "fs_15",
      topic: "Module Bundlers",
      difficulty: "Medium",
      question: "15. Which of the following tools is used for bundling JavaScript modules and static assets?",
      options: ["A) Webpack", "B) Babel", "C) Git", "D) npm"],
      correct: "A",
      explanation: "Webpack bundles client-side modules, styles, and assets into static browser bundles."
    },
    {
      id: "fs_16",
      topic: "Debugging Tools",
      difficulty: "Easy",
      question: "16. What is the main purpose of the console.log() method in JavaScript?",
      options: ["A) To display pop-up alert dialogs to end users", "B) To output debugging messages directly to the browser console", "C) To write data permanently to server files", "D) To terminate program execution"],
      correct: "B",
      explanation: "console.log() prints values to the browser developer console for testing and inspection."
    },
    {
      id: "fs_17",
      topic: "Node Package Management",
      difficulty: "Easy",
      question: "17. Which command line syntax is used to install a package locally in Node.js?",
      options: ["A) node install", "B) npm install <package>", "C) npm update", "D) install npm"],
      correct: "B",
      explanation: "'npm install <package>' installs packages locally in node_modules."
    },
    {
      id: "fs_18",
      topic: "JS Runtimes",
      difficulty: "Easy",
      question: "18. Which technology provides an open-source, cross-platform server JavaScript runtime?",
      options: ["A) React", "B) Angular", "C) Node.js", "D) Vue.js"],
      correct: "C",
      explanation: "Node.js runs JavaScript code outside of web browsers on server hardware."
    },
    {
      id: "fs_19",
      topic: "Database Operations",
      difficulty: "Easy",
      question: "19. What does the acronym 'CRUD' stand for in persistent database applications?",
      options: ["A) Create, Read, Update, Delete", "B) Control, Read, Update, Delete", "C) Create, Read, Use, Delete", "D) Control, Replace, Update, Delete"],
      correct: "A",
      explanation: "CRUD summarizes the 4 core database operations: Create, Read, Update, and Delete."
    },
    {
      id: "fs_20",
      topic: "REST Frameworks",
      difficulty: "Medium",
      question: "20. Which of the following backend frameworks is used for building RESTful APIs?",
      options: ["A) Express.js", "B) Flask", "C) Django", "D) All of the above"],
      correct: "D",
      explanation: "Express.js, Flask, and Django are all popular web backend frameworks for building REST APIs."
    },
    {
      id: "fs_21",
      topic: "JS Data Types",
      difficulty: "Medium",
      question: "21. Which of the following is NOT a valid primitive data type in JavaScript?",
      options: ["A) Number", "B) String", "C) Boolean", "D) Character"],
      correct: "D",
      explanation: "JavaScript does not have a separate Character primitive type; characters are strings of length 1."
    },
    {
      id: "fs_22",
      topic: "Architecture Patterns",
      difficulty: "Medium",
      question: "22. What does 'MVC' stand for in software architecture design?",
      options: ["A) Model-View-Controller", "B) Model-View-Creator", "C) Monitor-View-Control", "D) Model-Variable-Controller"],
      correct: "A",
      explanation: "MVC separates software components into Model (data), View (UI), and Controller (logic)."
    },
    {
      id: "fs_23",
      topic: "API Security",
      difficulty: "Hard",
      question: "23. Which of the following mechanisms is commonly used to secure web APIs?",
      options: ["A) JWT (JSON Web Tokens)", "B) SSL/TLS Encryption", "C) OAuth 2.0", "D) All of the above"],
      correct: "D",
      explanation: "Modern web APIs secure transactions using HTTPS/TLS, JWT tokens, and OAuth 2.0 authorization."
    },
    {
      id: "fs_24",
      topic: "Templating Engines",
      difficulty: "Medium",
      question: "24. Which of the following is a popular templating engine used in Node.js server rendering?",
      options: ["A) EJS", "B) Pug", "C) Handlebars", "D) All of the above"],
      correct: "D",
      explanation: "EJS, Pug, and Handlebars are server-side templating engines for Node.js."
    },
    {
      id: "fs_25",
      topic: "JS Runtime Environments",
      difficulty: "Easy",
      question: "25. Which of the following is an example of a server-side JavaScript runtime environment?",
      options: ["A) Chrome", "B) Node.js", "C) Firefox", "D) Safari"],
      correct: "B",
      explanation: "Node.js is a dedicated server-side JavaScript runtime built on Chrome's V8 engine."
    }
  ],

  // ==================== JAVASCRIPT CORE (25 QUESTIONS) ====================
  "javascript": [
    {
      id: "js_1",
      topic: "Variable Declarations",
      difficulty: "Easy",
      question: "1. Which keyword declares a block-scoped variable that CANNOT be reassigned?",
      options: ["A) var", "B) let", "C) const", "D) static"],
      correct: "C",
      explanation: "'const' creates block-scoped variable bindings that cannot be reassigned after initialization."
    },
    {
      id: "js_2",
      topic: "Asynchronous JS",
      difficulty: "Medium",
      question: "2. What is implicitly returned by an 'async' function in JavaScript?",
      options: ["A) A boolean", "B) A Promise", "C) A callback function", "D) A DOM Element"],
      correct: "B",
      explanation: "Functions marked with 'async' always implicitly wrap their return value in a Promise."
    },
    {
      id: "js_3",
      topic: "Event Loop Queue",
      difficulty: "Hard",
      question: "3. In what order does the JavaScript Event Loop process tasks?",
      options: ["A) Call Stack -> Microtask Queue (Promises) -> Macrotask Queue (setTimeout)", "B) Macrotasks -> Microtasks -> Call Stack", "C) Call Stack -> Macrotasks -> Microtasks", "D) Microtasks -> Call Stack -> Web API"],
      correct: "A",
      explanation: "The Event Loop executes all microtasks in the queue completely before executing the next macrotask."
    },
    {
      id: "js_4",
      topic: "Closures",
      difficulty: "Hard",
      question: "4. What is a closure in JavaScript?",
      options: ["A) A function bundled together with references to its surrounding lexical environment", "B) A method that closes browser windows", "C) A compiler syntax error", "D) A strict-mode keyword"],
      correct: "A",
      explanation: "A closure grants an inner function access to variables defined in its enclosing scope."
    },
    {
      id: "js_5",
      topic: "Prototypal Inheritance",
      difficulty: "Hard",
      question: "5. Which property points to an object's prototype link in JavaScript?",
      options: ["A) __proto__", "B) [[Scope]]", "C) prototype_parent", "D) super"],
      correct: "A",
      explanation: "The __proto__ property exposes the internal prototype link of an object."
    },
    {
      id: "js_6",
      topic: "Type Conversion",
      difficulty: "Easy",
      question: "6. What is the output of 'typeof null' in JavaScript?",
      options: ["A) 'null'", "B) 'undefined'", "C) 'object'", "D) 'boolean'"],
      correct: "C",
      explanation: "'typeof null' returns 'object' due to a historical implementation detail in early JavaScript."
    },
    {
      id: "js_7",
      topic: "Array Methods",
      difficulty: "Medium",
      question: "7. Which higher-order array method creates a NEW array with elements that pass a test condition?",
      options: ["A) map()", "B) filter()", "C) forEach()", "D) reduce()"],
      correct: "B",
      explanation: "filter() returns a new array containing all elements that evaluate to true in the provided test callback."
    },
    {
      id: "js_8",
      topic: "Arrow Functions",
      difficulty: "Medium",
      question: "8. How do ES6 Arrow Functions handle the 'this' keyword?",
      options: ["A) They bind 'this' dynamically based on invocation", "B) They lexically inherit 'this' from their enclosing parent scope", "C) 'this' always refers to global window", "D) 'this' is set to undefined"],
      correct: "B",
      explanation: "Arrow functions do not have their own 'this' binding; they inherit 'this' lexically from their surrounding context."
    },
    {
      id: "js_9",
      topic: "Equality Operators",
      difficulty: "Easy",
      question: "9. What is the difference between '==' and '===' in JavaScript?",
      options: ["A) '==' compares reference while '===' compares value", "B) '==' performs implicit type coercion, '===' checks value and type strictly", "C) '===' performs type coercion", "D) They operate identically"],
      correct: "B",
      explanation: "'===' checks both value and type strictly without coercion, whereas '==' converts types automatically."
    },
    {
      id: "js_10",
      topic: "Destructuring Assignment",
      difficulty: "Medium",
      question: "10. What is ES6 Destructuring?",
      options: ["A) Deleting object properties permanently", "B) Unpacking values from arrays or properties from objects into distinct variables", "C) Converting JSON to XML", "D) Garbage collection optimization"],
      correct: "B",
      explanation: "Destructuring assignment allows extracting properties from objects/arrays cleanly into separate variables."
    },
    {
      id: "js_11",
      topic: "DOM Manipulation",
      difficulty: "Easy",
      question: "11. Which DOM method selects the FIRST element matching a specified CSS selector?",
      options: ["A) document.querySelectorAll()", "B) document.getElementById()", "C) document.querySelector()", "D) document.getElementsByClassName()"],
      correct: "C",
      explanation: "querySelector() returns the first DOM element matching a given CSS selector string."
    },
    {
      id: "js_12",
      topic: "Event Handling",
      difficulty: "Medium",
      question: "12. What does event.preventDefault() do in an event listener?",
      options: ["A) Stops event bubbling up the DOM tree", "B) Prevents the browser's default action associated with the event", "C) Removes the event listener", "D) Throws a runtime error"],
      correct: "B",
      explanation: "event.preventDefault() prevents default browser behavior (like form submission reloads or link navigation)."
    },
    {
      id: "js_13",
      topic: "Strict Mode",
      difficulty: "Easy",
      question: "13. What is the primary benefit of putting 'use strict;' at the top of a JS script?",
      options: ["A) Enables experimental syntax", "B) Catches silent errors, disables undeclared global variables, and improves performance", "C) Compiles JS to WebAssembly", "D) Enables automatic multithreading"],
      correct: "B",
      explanation: "'use strict;' enforces stricter parsing and error handling, preventing global scope pollution."
    },
    {
      id: "js_14",
      topic: "Promises & Async",
      difficulty: "Medium",
      question: "14. Which method executes when a JavaScript Promise is rejected?",
      options: ["A) .then()", "B) .catch()", "C) .finally()", "D) .resolve()"],
      correct: "B",
      explanation: "The .catch() handler executes when a Promise transitions to the rejected state."
    },
    {
      id: "js_15",
      topic: "Spread Operator",
      difficulty: "Easy",
      question: "15. What does the spread syntax (...) do when applied to an array?",
      options: ["A) Summarizes elements into a single number", "B) Expands the array elements into individual elements in places where arguments/elements are expected", "C) Reverses the array elements", "D) Sorts the array ascending"],
      correct: "B",
      explanation: "The spread operator (...) unpacks iterable elements into individual items."
    },
    {
      id: "js_16",
      topic: "Object Methods",
      difficulty: "Medium",
      question: "16. Which method returns an array of a given object's own enumerable property names?",
      options: ["A) Object.values()", "B) Object.entries()", "C) Object.keys()", "D) Object.freeze()"],
      correct: "C",
      explanation: "Object.keys() returns an array containing all key names defined directly on an object."
    },
    {
      id: "js_17",
      topic: "Hoisting",
      difficulty: "Hard",
      question: "17. How does JavaScript handle hoisting for 'var' versus 'let' and 'const'?",
      options: ["A) 'var' is hoisted and initialized to undefined; 'let' and 'const' are hoisted but remain in the Temporal Dead Zone (TDZ)", "B) Only 'var' is hoisted", "C) 'let' and 'const' are not hoisted at all", "D) All variables are initialized to null"],
      correct: "A",
      explanation: "var declarations are hoisted and initialized with undefined, while let/const remain uninitialized in the TDZ until declared."
    },
    {
      id: "js_18",
      topic: "Map and Set",
      difficulty: "Medium",
      question: "18. What key property distinguishes a JavaScript 'Set' from an 'Array'?",
      options: ["A) Sets allow duplicate elements", "B) Sets store unique values only, automatically ignoring duplicates", "C) Sets cannot hold objects", "D) Sets have no size property"],
      correct: "B",
      explanation: "A Set is a collection of values where each value must be unique."
    },
    {
      id: "js_19",
      topic: "JSON Methods",
      difficulty: "Easy",
      question: "19. Which JSON method converts a valid JSON string into a JavaScript object?",
      options: ["A) JSON.stringify()", "B) JSON.parse()", "C) JSON.toObject()", "D) JSON.encode()"],
      correct: "B",
      explanation: "JSON.parse() deserializes a JSON string into a corresponding JavaScript object or value."
    },
    {
      id: "js_20",
      topic: "Module System",
      difficulty: "Medium",
      question: "20. Which syntax is used for importing modules in standard ES6 JavaScript?",
      options: ["A) const x = require('x')", "B) import x from 'x'", "C) include 'x'", "D) using x"],
      correct: "B",
      explanation: "ES6 standard module syntax uses 'import x from \"x\"' and 'export default'."
    },
    {
      id: "js_21",
      topic: "Debouncing & Throttling",
      difficulty: "Hard",
      question: "21. What is the main purpose of Debouncing in JavaScript web applications?",
      options: ["A) To prevent form submissions", "B) To delay function execution until a specified time has elapsed since its last call (e.g. search inputs)", "C) To speed up CSS rendering", "D) To encrypt client storage"],
      correct: "B",
      explanation: "Debouncing limits the rate at which a function triggers by waiting for a period of inactivity before executing."
    },
    {
      id: "js_22",
      topic: "Generator Functions",
      difficulty: "Hard",
      question: "22. Which syntax defines a Generator function in JavaScript?",
      options: ["A) function async()", "B) function* myGen()", "C) generator function()", "D) function yield()"],
      correct: "B",
      explanation: "Generator functions are declared using the 'function*' syntax and control execution using the 'yield' keyword."
    },
    {
      id: "js_23",
      topic: "Web Storage API",
      difficulty: "Easy",
      question: "23. What is the key difference between localStorage and sessionStorage?",
      options: ["A) localStorage expires when the browser tab closes; sessionStorage persists indefinitely", "B) localStorage data persists indefinitely until cleared; sessionStorage data is cleared when the tab/session ends", "C) sessionStorage can store 1GB", "D) localStorage is sent with HTTP headers"],
      correct: "B",
      explanation: "localStorage persists across browser restarts; sessionStorage data is deleted when the session tab closes."
    },
    {
      id: "js_24",
      topic: "Call, Apply, Bind",
      difficulty: "Hard",
      question: "24. How does Function.prototype.bind() differ from call() and apply()?",
      options: ["A) bind() executes the function immediately", "B) bind() returns a new function with a permanently bound 'this' context without executing it right away", "C) bind() takes arguments as an array", "D) bind() works only with arrow functions"],
      correct: "B",
      explanation: "bind() returns a new bound copy of the function for later invocation, whereas call()/apply() invoke immediately."
    },
    {
      id: "js_25",
      topic: "Symbol Data Type",
      difficulty: "Hard",
      question: "25. What is the primary characteristic of the ES6 'Symbol' primitive type?",
      options: ["A) Symbols are mutable strings", "B) Every created Symbol is guaranteed to be completely unique and immutable", "C) Symbols represent numbers", "D) Symbols are automatically global"],
      correct: "B",
      explanation: "Symbols create guaranteed unique anonymous identifiers, often used as non-colliding object property keys."
    }
  ],

  // ==================== DATA STRUCTURES & ALGORITHMS (25 QUESTIONS) ====================
  "dsa": [
    {
      id: "dsa_1",
      topic: "Time Complexity",
      difficulty: "Easy",
      question: "1. What is the worst-case time complexity of Binary Search on a sorted array?",
      options: ["A) O(1)", "B) O(log N)", "C) O(N)", "D) O(N log N)"],
      correct: "B",
      explanation: "Binary Search repeatedly halves the search interval, yielding an logarithmic O(log N) runtime."
    },
    {
      id: "dsa_2",
      topic: "Stacks & Queues",
      difficulty: "Easy",
      question: "2. Which data structure operates on a FIFO (First In First Out) principle?",
      options: ["A) Stack", "B) Queue", "C) Array", "D) Tree"],
      correct: "B",
      explanation: "Queues process elements in First-In-First-Out order."
    },
    {
      id: "dsa_3",
      topic: "Sorting Algorithms",
      difficulty: "Medium",
      question: "3. Which sorting algorithm has an average time complexity of O(N log N) and works in-place?",
      options: ["A) Bubble Sort", "B) QuickSort", "C) Merge Sort", "D) Counting Sort"],
      correct: "B",
      explanation: "QuickSort partitions array elements in-place with an average complexity of O(N log N)."
    },
    {
      id: "dsa_4",
      topic: "Tree Traversal",
      difficulty: "Medium",
      question: "4. In-order traversal of a Binary Search Tree (BST) visits nodes in which order?",
      options: ["A) Decreasing order", "B) Sorted ascending order", "C) Level order", "D) Pre-order"],
      correct: "B",
      explanation: "In-order traversal (Left, Root, Right) of a BST outputs elements in sorted ascending order."
    },
    {
      id: "dsa_5",
      topic: "Graph Algorithms",
      difficulty: "Hard",
      question: "5. Which algorithm finds the shortest path in a weighted graph with non-negative edge weights?",
      options: ["A) Prim's Algorithm", "B) Dijkstra's Algorithm", "C) Kruskal's Algorithm", "D) Depth First Search"],
      correct: "B",
      explanation: "Dijkstra's algorithm determines single-source shortest paths on non-negative weighted graphs."
    },
    {
      id: "dsa_6",
      topic: "Array Lookup",
      difficulty: "Easy",
      question: "6. What is the time complexity of accessing an element by index in a standard contiguous Array?",
      options: ["A) O(1)", "B) O(N)", "C) O(log N)", "D) O(N^2)"],
      correct: "A",
      explanation: "Array elements are stored contiguously in memory, allowing direct O(1) random index access."
    },
    {
      id: "dsa_7",
      topic: "Linked Lists",
      difficulty: "Easy",
      question: "7. What is the primary advantage of a Singly Linked List over a contiguous Array?",
      options: ["A) Faster random access by index", "B) Efficient O(1) insertions/deletions at the head without shifting elements", "C) Lower memory consumption", "D) Automatic cache locality"],
      correct: "B",
      explanation: "Linked Lists allow insertion and deletion at known node pointers in O(1) constant time without memory shifting."
    },
    {
      id: "dsa_8",
      topic: "Hash Tables",
      difficulty: "Medium",
      question: "8. What is the average-case time complexity for insertion, lookup, and deletion in a Hash Table?",
      options: ["A) O(1)", "B) O(N)", "C) O(log N)", "D) O(N log N)"],
      correct: "A",
      explanation: "Assuming a good hash function with minimal collisions, Hash Tables operate in average O(1) constant time."
    },
    {
      id: "dsa_9",
      topic: "Recursion & Call Stack",
      difficulty: "Medium",
      question: "9. What error occurs when a recursive function lacks a valid base case?",
      options: ["A) Out of Memory Exception", "B) Stack Overflow Error", "C) Null Pointer Exception", "D) Syntax Error"],
      correct: "B",
      explanation: "Without a base case, recursive calls consume all available call stack space, triggering a Stack Overflow."
    },
    {
      id: "dsa_10",
      topic: "Heap & Priority Queue",
      difficulty: "Medium",
      question: "10. What is the time complexity to insert an element into a Min-Heap of size N?",
      options: ["A) O(1)", "B) O(log N)", "C) O(N)", "D) O(N log N)"],
      correct: "B",
      explanation: "Inserting into a Binary Heap appends to the end and bubbles up the tree, taking O(log N) time."
    },
    {
      id: "dsa_11",
      topic: "Graph Traversal",
      difficulty: "Medium",
      question: "11. Which data structure is used to implement Breadth-First Search (BFS) on a Graph?",
      options: ["A) Stack", "B) Queue", "C) Heap", "D) Binary Tree"],
      correct: "B",
      explanation: "BFS explores neighboring vertices level-by-level using a FIFO Queue."
    },
    {
      id: "dsa_12",
      topic: "Graph Traversal",
      difficulty: "Medium",
      question: "12. Which traversal strategy is used by Depth-First Search (DFS)?",
      options: ["A) Explores deep along branches before backtracking using a Stack / Recursion", "B) Explores level by level using a Queue", "C) Greedy minimum edge selection", "D) Binary halving"],
      correct: "A",
      explanation: "DFS explores as far as possible along each branch before backtracking via a Stack."
    },
    {
      id: "dsa_13",
      topic: "Dynamic Programming",
      difficulty: "Hard",
      question: "13. What two main properties indicate that a problem can be solved using Dynamic Programming?",
      options: ["A) Greedy choice and linear space", "B) Overlapping subproblems and optimal substructure", "C) Sorted inputs and unique elements", "D) Random pivot selection"],
      correct: "B",
      explanation: "DP is suited for problems with optimal substructure and overlapping subproblems solved via memoization/tabulation."
    },
    {
      id: "dsa_14",
      topic: "Sorting Complexities",
      difficulty: "Easy",
      question: "14. Which of the following algorithms has a worst-case time complexity of O(N^2)?",
      options: ["A) Merge Sort", "B) Bubble Sort", "C) Heap Sort", "D) Radix Sort"],
      correct: "B",
      explanation: "Bubble Sort uses nested loops leading to O(N^2) quadratic time complexity."
    },
    {
      id: "dsa_15",
      topic: "Balanced Search Trees",
      difficulty: "Hard",
      question: "15. What guarantees the O(log N) worst-case search complexity in an AVL Tree?",
      options: ["A) Hash buckets", "B) The height difference (balance factor) between left and right subtrees is at most 1", "C) Array storage", "D) Random node coloring"],
      correct: "B",
      explanation: "AVL trees strictly balance node heights so the tree height remains bounded at O(log N)."
    },
    {
      id: "dsa_16",
      topic: "Space Complexity",
      difficulty: "Medium",
      question: "16. What is the auxiliary space complexity of Merge Sort?",
      options: ["A) O(1)", "B) O(N)", "C) O(log N)", "D) O(N^2)"],
      correct: "B",
      explanation: "Merge Sort requires O(N) additional auxiliary space to merge subarrays."
    },
    {
      id: "dsa_17",
      topic: "Greedy Algorithms",
      difficulty: "Medium",
      question: "17. Which algorithm finds a Minimum Spanning Tree (MST) for a connected weighted graph by picking minimum weight edges?",
      options: ["A) Kruskal's Algorithm", "B) Dijkstra's Algorithm", "C) Floyd-Warshall Algorithm", "D) Bellman-Ford Algorithm"],
      correct: "A",
      explanation: "Kruskal's algorithm builds an MST by greedily selecting the smallest edge that does not form a cycle."
    },
    {
      id: "dsa_18",
      topic: "String Matching",
      difficulty: "Hard",
      question: "18. What is the time complexity of the Knuth-Morris-Pratt (KMP) string searching algorithm?",
      options: ["A) O(N * M)", "B) O(N + M)", "C) O(N^2)", "D) O(log N)"],
      correct: "B",
      explanation: "KMP preprocessing avoids re-examining matched characters, reducing pattern searching to linear O(N + M) time."
    },
    {
      id: "dsa_19",
      topic: "Disjoint Set (Union-Find)",
      difficulty: "Hard",
      question: "19. With Path Compression and Rank Optimizations, what is the nearly constant amortized time complexity per operation in Union-Find?",
      options: ["A) O(1)", "B) O(α(N)) - Inverse Ackermann Function", "C) O(log N)", "D) O(N)"],
      correct: "B",
      explanation: "Path compression and union by rank reduce Union-Find operations to O(α(N)), which is effectively O(1) for all practical N."
    },
    {
      id: "dsa_20",
      topic: "Bit Manipulation",
      difficulty: "Medium",
      question: "20. How can you check if an integer N is a power of two using bitwise operators?",
      options: ["A) (N & (N - 1)) == 0 (for N > 0)", "B) (N | (N - 1)) == 0", "C) (N ^ N) == 0", "D) (N >> 1) == 0"],
      correct: "A",
      explanation: "Powers of two have a single binary bit (1000...). Subtracting 1 flips lower bits (0111...), so N & (N - 1) equals 0."
    },
    {
      id: "dsa_21",
      topic: "Trie (Prefix Tree)",
      difficulty: "Medium",
      question: "21. What is the primary use case for a Trie data structure?",
      options: ["A) Sorting numbers in-place", "B) Fast prefix-based string searching and autocomplete systems", "C) Matrix multiplication", "D) Memory allocation management"],
      correct: "B",
      explanation: "Tries store characters along tree branches, enabling O(L) fast prefix lookups where L is string length."
    },
    {
      id: "dsa_22",
      topic: "Backtracking",
      difficulty: "Hard",
      question: "22. Which classic algorithmic technique is commonly used to solve N-Queens and Sudoku puzzles?",
      options: ["A) Greedy choice", "B) Backtracking", "C) Divide and Conquer", "D) Dynamic Programming"],
      correct: "B",
      explanation: "Backtracking incrementally builds candidate solutions and abandons (backtracks) invalid paths."
    },
    {
      id: "dsa_23",
      topic: "Topological Sort",
      difficulty: "Hard",
      question: "23. Topological Sorting can be performed on which type of Graph?",
      options: ["A) Undirected Cyclic Graph", "B) Directed Acyclic Graph (DAG)", "C) Complete Graph", "D) Bipartite Graph"],
      correct: "B",
      explanation: "Topological ordering orders vertices linearly according to dependencies, which requires a Directed Acyclic Graph (DAG)."
    },
    {
      id: "dsa_24",
      topic: "Queue Variants",
      difficulty: "Medium",
      question: "24. What is a Deque (Double-Ended Queue)?",
      options: ["A) A queue with two elements only", "B) A queue where elements can be added or removed from both the front and rear", "C) A queue ordered by priority", "D) A read-only queue"],
      correct: "B",
      explanation: "A Deque allows fast O(1) push and pop operations at both the head and tail ends."
    },
    {
      id: "dsa_25",
      topic: "Shortest Path Algorithms",
      difficulty: "Hard",
      question: "25. Which shortest path algorithm can handle graphs with NEGATIVE edge weights?",
      options: ["A) Dijkstra's Algorithm", "B) Bellman-Ford Algorithm", "C) Breadth-First Search", "D) Prim's Algorithm"],
      correct: "B",
      explanation: "Bellman-Ford computes single-source shortest paths and detects negative weight cycles in O(V * E) time."
    }
  ],

  // ==================== BACKEND & DATABASES (25 QUESTIONS) ====================
  "backend": [
    {
      id: "db_1",
      topic: "NoSQL Databases",
      difficulty: "Easy",
      question: "1. Which of the following is an example of an in-memory key-value NoSQL store?",
      options: ["A) Redis", "B) PostgreSQL", "C) SQLite", "D) Oracle"],
      correct: "A",
      explanation: "Redis is an in-memory data structure store used as a database, cache, and message broker."
    },
    {
      id: "db_2",
      topic: "HTTP Status Codes",
      difficulty: "Easy",
      question: "2. What does the 404 HTTP status code signify?",
      options: ["A) Unauthorized Access", "B) Resource Not Found", "C) Internal Server Error", "D) Bad Gateway"],
      correct: "B",
      explanation: "404 Not Found indicates that the requested server resource URI could not be found."
    },
    {
      id: "db_3",
      topic: "Database Transactions",
      difficulty: "Hard",
      question: "3. What does the 'A' in database ACID properties stand for?",
      options: ["A) Atomicity", "B) Availability", "C) Authentication", "D) Asynchrony"],
      correct: "A",
      explanation: "Atomicity guarantees that all operations in a database transaction succeed or all fail together."
    },
    {
      id: "db_4",
      topic: "REST Headers",
      difficulty: "Medium",
      question: "4. Which HTTP header is typically used to send Bearer JWT tokens for API authorization?",
      options: ["A) Content-Type", "B) Authorization", "C) Accept-Encoding", "D) User-Agent"],
      correct: "B",
      explanation: "The 'Authorization' request header sends client authentication credentials (e.g. 'Bearer <token>')."
    },
    {
      id: "db_5",
      topic: "ORM / ODM",
      difficulty: "Medium",
      question: "5. Which Object Data Modeling (ODM) library is widely used for Node.js and MongoDB?",
      options: ["A) Sequelize", "B) Mongoose", "C) Prisma", "D) TypeORM"],
      correct: "B",
      explanation: "Mongoose provides schema validation and query building for MongoDB in Node.js applications."
    },
    {
      id: "db_6",
      topic: "SQL Joins",
      difficulty: "Medium",
      question: "6. Which SQL JOIN type returns all records when there is a match in either left or right table?",
      options: ["A) INNER JOIN", "B) FULL OUTER JOIN", "C) LEFT JOIN", "D) RIGHT JOIN"],
      correct: "B",
      explanation: "FULL OUTER JOIN combines results of both LEFT and RIGHT joins, returning all matching records."
    },
    {
      id: "db_7",
      topic: "Database Indexing",
      difficulty: "Medium",
      question: "7. What is the primary purpose of creating Indexes on relational database columns?",
      options: ["A) To enforce primary key constraints only", "B) To speed up data retrieval (SELECT queries) at the cost of additional storage and slower writes", "C) To compress table data", "D) To encrypt table columns"],
      correct: "B",
      explanation: "Database indexes use data structures (like B-Trees) to accelerate query search speeds."
    },
    {
      id: "db_8",
      topic: "WebSockets",
      difficulty: "Hard",
      question: "8. How does WebSocket communication differ from standard HTTP polling?",
      options: ["A) WebSockets use UDP only", "B) WebSockets provide a persistent full-duplex bidirectional TCP connection over a single socket", "C) WebSockets cannot transmit text", "D) WebSockets require new handshakes for every message"],
      correct: "B",
      explanation: "WebSockets establish a long-lived, low-latency, two-way channel between client and server."
    },
    {
      id: "db_9",
      topic: "HTTP Status Codes",
      difficulty: "Easy",
      question: "9. Which HTTP status code group represents Successful client requests?",
      options: ["A) 1xx", "B) 2xx (e.g. 200 OK, 201 Created)", "C) 3xx", "D) 4xx"],
      correct: "B",
      explanation: "2xx status codes indicate that client requests were received and processed successfully."
    },
    {
      id: "db_10",
      topic: "Database Normalization",
      difficulty: "Medium",
      question: "10. What is the primary goal of Database Normalization (1NF, 2NF, 3NF)?",
      options: ["A) To maximize redundant data duplicate columns", "B) To eliminate redundant data, prevent update anomalies, and improve data integrity", "C) To convert SQL tables to NoSQL JSON", "D) To encrypt table schemas"],
      correct: "B",
      explanation: "Normalization organizes fields and relationships to minimize data duplication and anomalies."
    },
    {
      id: "db_11",
      topic: "Security - SQL Injection",
      difficulty: "Hard",
      question: "11. What is the most effective defense against SQL Injection vulnerabilities?",
      options: ["A) Filtering quotes with regex", "B) Using Parameterized Queries / Prepared Statements or ORMs", "C) Using HTTP GET instead of POST", "D) Disabling database indexes"],
      correct: "B",
      explanation: "Prepared statements separate SQL query code from user parameter data, preventing code injection."
    },
    {
      id: "db_12",
      topic: "CORS",
      difficulty: "Medium",
      question: "12. What does CORS stand for in browser security architecture?",
      options: ["A) Cross-Origin Resource Sharing", "B) Centralized Object Routing System", "C) Client-Oriented Request Security", "D) Cross-Site Option Routing Protocol"],
      correct: "A",
      explanation: "CORS (Cross-Origin Resource Sharing) tells browsers whether to allow cross-domain web requests."
    },
    {
      id: "db_13",
      topic: "Caching Strategies",
      difficulty: "Medium",
      question: "13. What is Cache Invalidation?",
      options: ["A) Clearing cache keys when underlying database data changes", "B) Disabling client-side cookies", "C) Compressing database backups", "D) Generating SSL certificates"],
      correct: "A",
      explanation: "Cache invalidation purges or updates stale cached data to keep it consistent with the database."
    },
    {
      id: "db_14",
      topic: "Rate Limiting",
      difficulty: "Medium",
      question: "14. Why do backend API services implement Rate Limiting?",
      options: ["A) To prevent DDoS attacks, abuse, and server resource starvation", "B) To format JSON response strings", "C) To compress payload bandwidth", "D) To generate API docs"],
      correct: "A",
      explanation: "Rate limiting caps the number of requests a client IP/token can make within a time window."
    },
    {
      id: "db_15",
      topic: "Session vs Token Auth",
      difficulty: "Hard",
      question: "15. What is the key advantage of JWT Token authentication over traditional Session-based authentication?",
      options: ["A) JWTs are stored in server RAM session tables", "B) JWTs are stateless; the server verifies signatures without database/session lookups", "C) JWTs never expire", "D) JWTs do not require HTTPS"],
      correct: "B",
      explanation: "JWTs carry signed payload claims, enabling stateless authorization without server memory lookups."
    },
    {
      id: "db_16",
      topic: "Message Queues",
      difficulty: "Hard",
      question: "16. Which backend software acts as an asynchronous Message Broker / Queue?",
      options: ["A) RabbitMQ / Apache Kafka", "B) Nginx", "C) MySQL", "D) React Router"],
      correct: "A",
      explanation: "RabbitMQ and Kafka decouple heavy background task processing using asynchronous message queues."
    },
    {
      id: "db_17",
      topic: "HTTP Methods",
      difficulty: "Medium",
      question: "17. What is the semantic difference between HTTP PUT and PATCH methods?",
      options: ["A) PUT updates specific fields; PATCH replaces the entire resource", "B) PUT replaces the entire target resource payload; PATCH applies partial modifications", "C) PUT is safe; PATCH is non-idempotent", "D) They are identical"],
      correct: "B",
      explanation: "PUT replaces target resources entirely, whereas PATCH modifies selected fields partially."
    },
    {
      id: "db_18",
      topic: "Load Balancing",
      difficulty: "Medium",
      question: "18. What is the role of a Reverse Proxy / Load Balancer like Nginx?",
      options: ["A) Distributes incoming traffic across multiple backend application servers", "B) Compiles client JavaScript", "C) Formats database tables", "D) Stores browser cookies"],
      correct: "A",
      explanation: "Load balancers distribute user traffic across server nodes to improve availability and capacity."
    },
    {
      id: "db_19",
      topic: "GraphQL vs REST",
      difficulty: "Hard",
      question: "19. What key feature distinguishes GraphQL from traditional REST APIs?",
      options: ["A) GraphQL uses multiple endpoint URLs", "B) GraphQL lets clients request precisely the fields they need in a single request, preventing over-fetching", "C) GraphQL requires XML payloads", "D) GraphQL does not support POST requests"],
      correct: "B",
      explanation: "GraphQL exposes a single endpoint and allows clients to query custom data schemas."
    },
    {
      id: "db_20",
      topic: "Microservices",
      difficulty: "Hard",
      question: "20. What is a key characteristic of a Microservices backend architecture?",
      options: ["A) Single monolithic code repository and unified database", "B) Decoupled independent services communicating via APIs/queues, each owning its domain and database", "C) Client-side rendering only", "D) Monolithic deployment pipeline"],
      correct: "B",
      explanation: "Microservices break backend systems into small, independently deployable domain services."
    },
    {
      id: "db_21",
      topic: "Password Hashing",
      difficulty: "Hard",
      question: "21. Which cryptographic hashing algorithm with salting is recommended for storing user passwords?",
      options: ["A) MD5", "B) SHA-1", "C) bcrypt / Argon2", "D) Base64"],
      correct: "C",
      explanation: "bcrypt and Argon2 use adaptive work factors and random salts to resist brute-force attacks."
    },
    {
      id: "db_22",
      topic: "Database Sharding",
      difficulty: "Hard",
      question: "22. What is Horizontal Database Sharding?",
      options: ["A) Upgrading server CPU and RAM", "B) Partitioning large database tables horizontally across multiple separate server instances", "C) Adding table indexes", "D) Backing up tables to S3"],
      correct: "B",
      explanation: "Sharding splits database rows across multiple server nodes to scale storage and throughput."
    },
    {
      id: "db_23",
      topic: "gRPC & Protocol Buffers",
      difficulty: "Hard",
      question: "23. What protocol does gRPC use for high-performance microservice communication?",
      options: ["A) HTTP/1.0 with JSON", "B) HTTP/2 with Protocol Buffers (Protobuf) binary serialization", "C) WebSockets with XML", "D) FTP with CSV"],
      correct: "B",
      explanation: "gRPC leverages HTTP/2 multiplexing and compact binary Protocol Buffers for fast low-latency RPCs."
    },
    {
      id: "db_24",
      topic: "Serverless Architecture",
      difficulty: "Medium",
      question: "24. What is a defining feature of Serverless / FaaS (Function-as-a-Service) like AWS Lambda?",
      options: ["A) Servers must be managed manually 24/7", "B) Code executes on-demand in stateless containers that auto-scale and bill per millisecond execution", "C) Persistent local disk storage", "D) Fixed monthly server fees"],
      correct: "B",
      explanation: "Serverless FaaS runs event-triggered functions without requiring server provisioning or maintenance."
    },
    {
      id: "db_25",
      topic: "Content Delivery Networks",
      difficulty: "Easy",
      question: "25. What is the primary function of a Content Delivery Network (CDN)?",
      options: ["A) Running server-side SQL queries", "B) Caching and serving static assets (images, CSS, JS) from edge servers close to end-users globally", "C) Generating user passwords", "D) Compiling C++ binaries"],
      correct: "B",
      explanation: "CDNs cache static assets at geographically distributed edge servers to reduce latency."
    }
  ]
};

// Return question set by category
function getQuestions(category = "all") {
  if (category === "all" || !QUESTION_BANK[category]) {
    return QUESTION_BANK["fullstack"];
  }
  return QUESTION_BANK[category];
}

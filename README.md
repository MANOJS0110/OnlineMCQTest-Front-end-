# Online MCQ Examination & Deep Performance Analytics Platform

A modern, full-featured web application for taking online technical multiple-choice tests with real-time timers, auto-save state, question flagging, and comprehensive performance analytics featuring interactive data visualizations.

![EduTest Analytics](https://img.shields.io/badge/Status-Complete-brightgreen)
![Tech Stack](https://img.shields.io/badge/Tech-HTML5_|_CSS3_|_JavaScript_|_Chart.js-blue)

---

## ✨ Features & Highlights

- 🎓 **Student Registration & Portal**: Manage student identity, academic credentials, and session persistence.
- ⚡ **Multi-Domain Examination Engine**: Choose tests across Full-Stack Web Dev, JavaScript Core, Data Structures & Algorithms, and Backend & Databases.
- ⏱️ **Real-Time Countdown Timer**: Live timer per assessment with visual warnings as time runs out.
- 🗺️ **Question Palette & Bookmarking**: Interactive drawer highlighting Answered, Unanswered, and Marked-for-Review questions.
- 📊 **Deep Performance Analytics**:
  - **Overall Score Card & Grade**: Calculated S/A/B/C performance grades.
  - **Answer Distribution Doughnut Chart**: Visually breaks down Correct vs. Incorrect vs. Unattempted answers.
  - **Topic Mastery Bar Chart**: Pinpoints accuracy levels across specific tech sub-topics.
  - **Speed Analysis Line Chart**: Tracks time spent per question to optimize speed.
  - **Detailed Question Review**: Line-by-line review with user answer, correct answer, and in-depth explanations.
  - **Automated Learning Recommendations**: Actionable insights highlighting weak domains.
- 📜 **Downloadable Certificate of Completion**: Interactive printable modal certificate with verification badge.
- 💎 **Modern Dark Glassmorphism Design**: Sleek cyber theme with smooth micro-interactions, responsive across desktop and mobile browsers.

---

## 🛠️ Project Structure

```text
OnlineMCQTest-Front-end-/
├── index.html         # Main SPA Single Page Application shell
├── login.html         # Legacy redirect wrapper
├── test.html          # Legacy test redirect wrapper
├── css/
│   └── styles.css     # Glassmorphism design system & responsive layout styles
├── js/
│   ├── data.js        # Categorized MCQ Question Bank with answers & explanations
│   ├── analytics.js   # Statistical engine & Chart.js renderer
│   └── app.js         # Core application state controller & event handling
└── README.md          # Comprehensive documentation
```

---

## 🚀 How to Run Locally

1. Open `index.html` directly in any web browser (Chrome, Firefox, Edge, Safari).
2. Enter your student details in the **Student Portal Login**.
3. Select a technical subject category and click **Start Examination Now**.
4. Take the test, mark questions for review, and submit to view your interactive **Analytics Dashboard** and generate your **Completion Certificate**.

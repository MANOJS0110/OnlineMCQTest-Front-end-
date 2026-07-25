/**
 * Application Controller & Main State Manager
 * Coordinates Role Switching (Admin vs Student), Global Filters, Leaderboard Sorting, Heatmap Calendar, and Quiz Flow.
 */

let appState = {
  user: null,
  role: 'student', // 'admin' or 'student'
  selectedCategory: "fullstack",
  currentQuestions: [],
  currentQuestionIndex: 0,
  userAnswers: {},
  flaggedQuestions: new Set(),
  timeSpentPerQuestion: [],
  questionStartTime: 0,
  testTimerInterval: null,
  timeRemainingSeconds: 1500, // 25 mins
  totalTestDuration: 1500,
  adminAnalytics: null,
  studentAnalytics: null,
  leaderboardData: [
    { rank: 1, name: "Alex Johnson", tests: 42, avgScore: 48.5, accuracy: 97, topic: "Backend & Database", highest: 50 },
    { rank: 2, name: "Sarah Smith", tests: 38, avgScore: 46.2, accuracy: 92, topic: "Full Stack", highest: 50 },
    { rank: 3, name: "Manoj S", tests: 35, avgScore: 45.0, accuracy: 90, topic: "Backend & Database", highest: 48 },
    { rank: 4, name: "David Miller", tests: 31, avgScore: 43.8, accuracy: 88, topic: "Data Structures & Alg", highest: 48 },
    { rank: 5, name: "Emily Davis", tests: 29, avgScore: 42.1, accuracy: 84, topic: "JavaScript Core", highest: 46 },
    { rank: 6, name: "Michael Brown", tests: 27, avgScore: 40.5, accuracy: 81, topic: "Full Stack", highest: 46 },
    { rank: 7, name: "Jessica Taylor", tests: 24, avgScore: 39.0, accuracy: 78, topic: "Data Structures & Alg", highest: 44 }
  ],
  recentActivity: [
    { name: "Manoj S", topic: "Full Stack", score: "48/50", percent: "96%", date: "2026-07-25 18:30", time: "18m 42s" },
    { name: "Sarah Smith", topic: "Backend & Database", score: "50/50", percent: "100%", date: "2026-07-25 17:15", time: "16m 10s" },
    { name: "Alex Johnson", topic: "Data Structures & Alg", score: "46/50", percent: "92%", date: "2026-07-25 16:00", time: "21m 05s" },
    { name: "David Miller", topic: "JavaScript Core", score: "44/50", percent: "88%", date: "2026-07-25 14:20", time: "19m 50s" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  loadSavedUser();
  setupEventListeners();
  checkAuthAndRender();
});

function loadSavedUser() {
  const savedUser = localStorage.getItem("mcq_user");
  if (savedUser) {
    try {
      appState.user = JSON.parse(savedUser);
      updateUserNavbar();
    } catch (e) {
      console.error("Failed to parse saved user", e);
    }
  }
}

function updateUserNavbar() {
  const badgeContainer = document.getElementById("navUserBadge");
  if (appState.user && badgeContainer) {
    const initial = appState.user.name ? appState.user.name.charAt(0).toUpperCase() : "U";
    badgeContainer.innerHTML = `
      <div class="avatar">${initial}</div>
      <div style="font-size:0.85rem;">
        <div style="font-weight:800; color:var(--secondary);">${escapeHtml(appState.user.name)}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(appState.user.regId)}</div>
      </div>
      <button class="btn btn-secondary" onclick="openEditProfileModal()" style="padding:4px 10px; font-size:0.75rem; margin-left:4px;">✏️ Edit Data</button>
      <button class="btn btn-secondary" onclick="logout()" style="padding:4px 10px; font-size:0.75rem; margin-left:4px;">Logout</button>
    `;
    badgeContainer.style.display = "flex";
  } else if (badgeContainer) {
    badgeContainer.style.display = "none";
  }
}

function checkAuthAndRender() {
  if (!appState.user) {
    showView("authView");
  } else {
    showView("dashboardView");
    renderDashboardByRole();
  }
}

function setDashboardRole(role) {
  appState.role = role;
  document.getElementById("roleAdminBtn")?.classList.toggle("active", role === 'admin');
  document.getElementById("roleStudentBtn")?.classList.toggle("active", role === 'student');
  renderDashboardByRole();
}

function renderDashboardByRole() {
  const adminSec = document.getElementById("adminDashboardContent");
  const studentSec = document.getElementById("studentDashboardContent");

  if (appState.role === 'admin') {
    if (adminSec) adminSec.style.display = "block";
    if (studentSec) studentSec.style.display = "none";
    
    appState.adminAnalytics = new AdminAnalyticsEngine();
    appState.adminAnalytics.renderAdminCharts('daily');
    renderLeaderboardTable();
    renderRecentActivityTable();
  } else {
    if (adminSec) adminSec.style.display = "none";
    if (studentSec) studentSec.style.display = "block";
    
    appState.studentAnalytics = new UserDashboardAnalyticsEngine();
    appState.studentAnalytics.renderStudentCharts();
    renderHeatmapCalendar();
    renderUserDashboardStats();
  }
}

function showView(viewId) {
  document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add("active");
    window.scrollTo(0, 0);
  }
}

function setupEventListeners() {
  // Login form submit
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = {
        name: document.getElementById("name").value.trim(),
        regId: document.getElementById("regId").value.trim(),
        college: document.getElementById("clgName").value.trim(),
        year: document.getElementById("year").value.trim(),
        department: document.getElementById("department").value.trim(),
        email: document.getElementById("emailId").value.trim()
      };

      appState.user = user;
      localStorage.setItem("mcq_user", JSON.stringify(user));
      updateUserNavbar();
      showView("dashboardView");
      renderDashboardByRole();
    });
  }

  // Edit Profile form submit
  const editForm = document.getElementById("editProfileForm");
  if (editForm) {
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      appState.user = {
        name: document.getElementById("editName").value.trim(),
        regId: document.getElementById("editRegId").value.trim(),
        college: document.getElementById("editClgName").value.trim(),
        year: document.getElementById("editYear").value.trim(),
        department: document.getElementById("editDepartment").value.trim(),
        email: document.getElementById("editEmail").value.trim()
      };

      localStorage.setItem("mcq_user", JSON.stringify(appState.user));
      updateUserNavbar();
      closeEditProfileModal();
      alert("Profile updated successfully!");
    });
  }
}

function loginWithGoogle() {
  const sampleUser = {
    name: "Manoj S",
    regId: "2026FS01",
    college: "Institute of Technology",
    year: "3",
    department: "Computer Science & Engineering",
    email: "manoj.s@gmail.com"
  };

  appState.user = sampleUser;
  localStorage.setItem("mcq_user", JSON.stringify(sampleUser));
  updateUserNavbar();
  showView("dashboardView");
  renderDashboardByRole();
}

// Filter Apply
function applyGlobalFilters() {
  const filterTopic = document.getElementById("filterTopic")?.value;
  const filterTime = document.getElementById("filterTime")?.value;

  if (appState.role === 'admin' && appState.adminAnalytics) {
    appState.adminAnalytics.renderAdminCharts(filterTime || 'daily');
  }
}

// Admin Tables
function renderLeaderboardTable() {
  const container = document.getElementById("leaderboardTableBody");
  if (!container) return;

  const searchQuery = document.getElementById("searchLeaderboard")?.value.toLowerCase() || "";
  const filtered = appState.leaderboardData.filter(item => 
    item.name.toLowerCase().includes(searchQuery) || item.topic.toLowerCase().includes(searchQuery)
  );

  container.innerHTML = filtered.map(item => `
    <tr>
      <td><strong>#${item.rank}</strong></td>
      <td><strong>${escapeHtml(item.name)}</strong></td>
      <td>${item.tests}</td>
      <td><span class="badge badge-primary">${item.avgScore} / 50</span></td>
      <td><span class="badge badge-success">${item.accuracy}%</span></td>
      <td>${escapeHtml(item.topic)}</td>
      <td><strong>${item.highest} pts</strong></td>
    </tr>
  `).join("");
}

function sortLeaderboard(key) {
  appState.leaderboardData.sort((a, b) => (b[key] || 0) - (a[key] || 0));
  renderLeaderboardTable();
}

function renderRecentActivityTable() {
  const container = document.getElementById("recentActivityTableBody");
  if (!container) return;

  container.innerHTML = appState.recentActivity.map(act => `
    <tr>
      <td><strong>${escapeHtml(act.name)}</strong></td>
      <td>${escapeHtml(act.topic)}</td>
      <td><strong>${act.score}</strong></td>
      <td><span class="badge badge-success">${act.percent}</span></td>
      <td>${act.date}</td>
      <td>${act.time}</td>
    </tr>
  `).join("");
}

// Heatmap Calendar (30 Days Grid)
function renderHeatmapCalendar() {
  const container = document.getElementById("heatmapCalendarGrid");
  if (!container) return;

  let html = "";
  for (let i = 1; i <= 30; i++) {
    const level = (i % 4) + 1; // 1-4 random levels
    html += `<div class="heatmap-cell" data-level="${level}" title="Day ${i}: ${level * 2} tests attempted"></div>`;
  }
  container.innerHTML = html;
}

function renderUserDashboardStats() {
  const historyListEl = document.getElementById("studentHistoryList");
  if (!historyListEl) return;

  let history = [];
  const saved = localStorage.getItem("mcq_history");
  if (saved) {
    try { history = JSON.parse(saved); } catch (e) {}
  }

  if (history.length > 0) {
    historyListEl.innerHTML = history.map(h => `
      <div style="padding:10px 0; border-bottom:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-weight:700; text-transform:capitalize; color:var(--secondary);">${h.category} Test</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${h.date}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:800; color:var(--primary);">${h.score}/${h.maxScore} pts</div>
          <div style="font-size:0.75rem; color:var(--success); font-weight:700;">${h.accuracy}% Acc</div>
        </div>
      </div>
    `).join("");
  } else {
    historyListEl.innerHTML = "<p style='color:var(--text-muted); padding:1rem 0;'>No tests taken yet. Launch your assessment!</p>";
  }
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Email Report Modal
function openEmailModal() {
  const modal = document.getElementById("emailReportModal");
  if (modal) modal.classList.add("active");
}

function closeEmailModal() {
  const modal = document.getElementById("emailReportModal");
  if (modal) modal.classList.remove("active");
}

function sendEmailReport(e) {
  e.preventDefault();
  const email = document.getElementById("emailReportInput")?.value;
  alert(`Performance report successfully emailed to ${email}!`);
  closeEmailModal();
}

// Export PDF / Print
function exportPDF() {
  window.print();
}

// Notifications Drawer Toggle
function toggleNotifications() {
  const panel = document.getElementById("notificationPanel");
  if (panel) panel.classList.toggle("active");
}

// Profile Modal
function openEditProfileModal() {
  if (!appState.user) return;
  document.getElementById("editName").value = appState.user.name || "";
  document.getElementById("editRegId").value = appState.user.regId || "";
  document.getElementById("editYear").value = appState.user.year || "";
  document.getElementById("editClgName").value = appState.user.college || "";
  document.getElementById("editDepartment").value = appState.user.department || "";
  document.getElementById("editEmail").value = appState.user.email || "";

  const modal = document.getElementById("editProfileModal");
  if (modal) modal.classList.add("active");
}

function closeEditProfileModal() {
  const modal = document.getElementById("editProfileModal");
  if (modal) modal.classList.remove("active");
}

function logout() {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.removeItem("mcq_user");
    appState.user = null;
    updateUserNavbar();
    showView("authView");
  }
}

function selectSubjectCategory(catKey, element) {
  document.querySelectorAll(".subject-card").forEach(card => card.classList.remove("selected"));
  element.classList.add("selected");
  appState.selectedCategory = catKey;
}

// Quiz Flow
function startQuiz() {
  appState.currentQuestions = getQuestions(appState.selectedCategory);
  appState.currentQuestionIndex = 0;
  appState.userAnswers = {};
  appState.flaggedQuestions = new Set();
  appState.timeSpentPerQuestion = new Array(appState.currentQuestions.length).fill(0);
  
  appState.totalTestDuration = appState.currentQuestions.length * 60;
  appState.timeRemainingSeconds = appState.totalTestDuration;
  appState.testStartTime = Date.now();
  appState.questionStartTime = Date.now();

  renderPaletteGrid();
  renderQuestion(0);
  startTimer();
  showView("testView");
}

function startTimer() {
  clearInterval(appState.testTimerInterval);
  const timerBox = document.getElementById("timerDisplay");

  appState.testTimerInterval = setInterval(() => {
    appState.timeRemainingSeconds--;
    
    const elapsedSec = Math.floor((Date.now() - appState.questionStartTime) / 1000);
    appState.timeSpentPerQuestion[appState.currentQuestionIndex] += elapsedSec;
    appState.questionStartTime = Date.now();

    if (appState.timeRemainingSeconds <= 0) {
      clearInterval(appState.testTimerInterval);
      alert("Time limit reached! Submitting your test automatically.");
      submitQuiz();
      return;
    }

    const mins = Math.floor(appState.timeRemainingSeconds / 60);
    const secs = appState.timeRemainingSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (timerBox) {
      timerBox.innerHTML = `⏱️ ${formatted}`;
      if (appState.timeRemainingSeconds <= 180) {
        timerBox.classList.add("warning");
      } else {
        timerBox.classList.remove("warning");
      }
    }
  }, 1000);
}

function renderQuestion(index) {
  appState.currentQuestionIndex = index;
  const q = appState.currentQuestions[index];
  if (!q) return;

  const qMeta = document.getElementById("questionMeta");
  const qText = document.getElementById("questionText");
  const optionsList = document.getElementById("optionsList");
  const flagBtn = document.getElementById("flagQuestionBtn");

  if (qMeta) {
    qMeta.innerHTML = `
      <span class="badge-tag">Question ${index + 1} of ${appState.currentQuestions.length}</span>
      <span style="font-size:0.85rem; color:var(--text-muted);">Topic: ${q.topic} | Difficulty: ${q.difficulty}</span>
    `;
  }

  if (qText) {
    qText.textContent = q.question;
  }

  if (optionsList) {
    let optionsHtml = "";
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((optText, i) => {
      const letter = letters[i];
      const isSelected = appState.userAnswers[q.id] === letter;
      optionsHtml += `
        <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectOption('${q.id}', '${letter}')">
          <div class="option-key">${letter}</div>
          <div class="option-val">${escapeHtml(optText)}</div>
        </div>
      `;
    });
    optionsList.innerHTML = optionsHtml;
  }

  if (flagBtn) {
    if (appState.flaggedQuestions.has(q.id)) {
      flagBtn.classList.add("active");
      flagBtn.innerHTML = "🚩 Flagged for Review";
    } else {
      flagBtn.classList.remove("active");
      flagBtn.innerHTML = "🏳️ Mark for Review";
    }
  }

  updatePrevNextBtnState();
  updatePaletteHighlights();
}

function selectOption(qId, letter) {
  appState.userAnswers[qId] = letter;
  renderQuestion(appState.currentQuestionIndex);
  updatePaletteHighlights();
}

function toggleFlagQuestion() {
  const q = appState.currentQuestions[appState.currentQuestionIndex];
  if (!q) return;

  if (appState.flaggedQuestions.has(q.id)) {
    appState.flaggedQuestions.delete(q.id);
  } else {
    appState.flaggedQuestions.add(q.id);
  }
  renderQuestion(appState.currentQuestionIndex);
}

function navigateQuestion(direction) {
  const nextIdx = appState.currentQuestionIndex + direction;
  if (nextIdx >= 0 && nextIdx < appState.currentQuestions.length) {
    renderQuestion(nextIdx);
  }
}

function updatePrevNextBtnState() {
  const prevBtn = document.getElementById("prevQuestionBtn");
  const nextBtn = document.getElementById("nextQuestionBtn");
  if (prevBtn) prevBtn.disabled = appState.currentQuestionIndex === 0;
  if (nextBtn) nextBtn.disabled = appState.currentQuestionIndex === appState.currentQuestions.length - 1;
}

function renderPaletteGrid() {
  const grid = document.getElementById("paletteGrid");
  if (!grid) return;

  let html = "";
  appState.currentQuestions.forEach((q, idx) => {
    html += `
      <div class="palette-item" id="palette_${idx}" onclick="renderQuestion(${idx})">
        ${idx + 1}
      </div>
    `;
  });
  grid.innerHTML = html;
}

function updatePaletteHighlights() {
  appState.currentQuestions.forEach((q, idx) => {
    const el = document.getElementById(`palette_${idx}`);
    if (!el) return;

    el.className = "palette-item";
    if (idx === appState.currentQuestionIndex) {
      el.classList.add("current");
    }
    if (appState.userAnswers[q.id]) {
      el.classList.add("answered");
    }
    if (appState.flaggedQuestions.has(q.id)) {
      el.classList.add("flagged");
    }
  });
}

function submitQuiz() {
  if (confirm("Are you sure you want to submit your assessment?")) {
    clearInterval(appState.testTimerInterval);
    const totalSpentTime = appState.totalTestDuration - appState.timeRemainingSeconds;
    
    const quizAnalytics = new TestAnalyticsEngine(
      appState.currentQuestions,
      appState.userAnswers,
      appState.timeSpentPerQuestion,
      totalSpentTime
    );

    saveTestToHistory(quizAnalytics);
    renderQuizAnalyticsView(quizAnalytics);
    showView("analyticsView");
  }
}

function renderQuizAnalyticsView(engine) {
  const scoreVal = document.getElementById("scoreValue");
  const gradeVal = document.getElementById("gradeValue");
  const accuracyVal = document.getElementById("accuracyValue");
  const timeVal = document.getElementById("timeValue");

  if (scoreVal) scoreVal.textContent = `${engine.score} / ${engine.maxScore}`;
  if (accuracyVal) accuracyVal.textContent = `${engine.accuracyPercent}%`;
  
  if (gradeVal) {
    const grade = engine.getGrade();
    gradeVal.textContent = grade.label;
    gradeVal.style.color = grade.color;
  }

  if (timeVal) {
    const mins = Math.floor(engine.totalTime / 60);
    const secs = engine.totalTime % 60;
    timeVal.textContent = `${mins}m ${secs}s`;
  }

  engine.renderReviewList("questionReviewContainer");
}

function saveTestToHistory(engine) {
  let history = [];
  const saved = localStorage.getItem("mcq_history");
  if (saved) {
    try { history = JSON.parse(saved); } catch (e) {}
  }

  const record = {
    date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    category: appState.selectedCategory,
    score: engine.score,
    maxScore: engine.maxScore,
    accuracy: engine.accuracyPercent,
    timeSpentSeconds: engine.totalTime
  };

  history.unshift(record);
  localStorage.setItem("mcq_history", JSON.stringify(history.slice(0, 10)));
}

function openCertificateModal() {
  const modal = document.getElementById("certificateModal");
  const certName = document.getElementById("certName");
  const certDate = document.getElementById("certDate");

  if (certName && appState.user) certName.textContent = appState.user.name;
  if (certDate) certDate.textContent = new Date().toLocaleDateString();
  if (modal) modal.classList.add("active");
}

function closeCertificateModal() {
  const modal = document.getElementById("certificateModal");
  if (modal) modal.classList.remove("active");
}

function printCertificate() {
  window.print();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

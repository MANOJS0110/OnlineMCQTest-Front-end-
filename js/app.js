/**
 * Main Web Application State & Controller Logic
 * Coordinates authentication, test execution flow, timers, and view rendering.
 */

let appState = {
  user: null,
  selectedCategory: "fullstack",
  currentQuestions: [],
  currentQuestionIndex: 0,
  userAnswers: {},
  flaggedQuestions: new Set(),
  timeSpentPerQuestion: [],
  questionStartTime: 0,
  testTimerInterval: null,
  timeRemainingSeconds: 900, // 15 minutes default test duration
  totalTestDuration: 900,
  testStartTime: null,
  analyticsEngine: null
};

// Initialize App on DOM Load
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
        <div style="font-weight:700;">${escapeHtml(appState.user.name)}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(appState.user.regId)}</div>
      </div>
      <button class="btn btn-secondary" onclick="logout()" style="padding:4px 10px; font-size:0.75rem; margin-left:8px;">Logout</button>
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
    renderDashboardStats();
  }
}

function showView(viewId) {
  document.querySelectorAll(".view-section").forEach(sec => {
    sec.classList.remove("active");
  });
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

      if (!user.name || !user.regId) {
        alert("Please provide at least Name and Registration ID.");
        return;
      }

      appState.user = user;
      localStorage.setItem("mcq_user", JSON.stringify(user));
      updateUserNavbar();
      showView("dashboardView");
      renderDashboardStats();
    });
  }
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

// Start Examination Flow
function startQuiz() {
  appState.currentQuestions = getQuestions(appState.selectedCategory);
  appState.currentQuestionIndex = 0;
  appState.userAnswers = {};
  appState.flaggedQuestions = new Set();
  appState.timeSpentPerQuestion = new Array(appState.currentQuestions.length).fill(0);
  
  appState.totalTestDuration = appState.currentQuestions.length * 60; // 1 min per question
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
    
    // Update Question spent time
    const elapsedSec = Math.floor((Date.now() - appState.questionStartTime) / 1000);
    appState.timeSpentPerQuestion[appState.currentQuestionIndex] += elapsedSec;
    appState.questionStartTime = Date.now();

    if (appState.timeRemainingSeconds <= 0) {
      clearInterval(appState.testTimerInterval);
      alert("Time is up! Submitting your examination automatically.");
      submitQuiz();
      return;
    }

    const mins = Math.floor(appState.timeRemainingSeconds / 60);
    const secs = appState.timeRemainingSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (timerBox) {
      timerBox.innerHTML = `⏱️ ${formatted}`;
      if (appState.timeRemainingSeconds <= 120) {
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
      <span class="text-dim" style="font-size:0.85rem;">Topic: ${q.topic} | Difficulty: ${q.difficulty}</span>
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

// Quiz Submission & Analytics Engine Launch
function submitQuiz() {
  if (confirm("Are you sure you want to finish and submit your quiz now?")) {
    clearInterval(appState.testTimerInterval);

    const totalSpentTime = appState.totalTestDuration - appState.timeRemainingSeconds;
    
    // Create Analytics instance
    appState.analyticsEngine = new TestAnalyticsEngine(
      appState.currentQuestions,
      appState.userAnswers,
      appState.timeSpentPerQuestion,
      totalSpentTime
    );

    saveTestToHistory(appState.analyticsEngine);
    renderAnalyticsDashboard();
    showView("analyticsView");
  }
}

function renderAnalyticsDashboard() {
  const engine = appState.analyticsEngine;
  if (!engine) return;

  // Render text summary metrics
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

  // Render Charts
  setTimeout(() => {
    engine.renderCharts();
  }, 100);

  // Render Recommendations
  const recContainer = document.getElementById("recommendationsList");
  if (recContainer) {
    const recs = engine.generateRecommendations();
    recContainer.innerHTML = recs.map(r => `<li style="margin-bottom:8px;">${r}</li>`).join("");
  }

  // Render Question Review List
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

function renderDashboardStats() {
  let history = [];
  const saved = localStorage.getItem("mcq_history");
  if (saved) {
    try { history = JSON.parse(saved); } catch (e) {}
  }

  const totalTestsEl = document.getElementById("dashTotalTests");
  const avgAccuracyEl = document.getElementById("dashAvgAccuracy");
  const topScoreEl = document.getElementById("dashTopScore");
  const historyListEl = document.getElementById("dashHistoryList");

  if (totalTestsEl) totalTestsEl.textContent = history.length;
  
  if (history.length > 0) {
    const avgAcc = Math.round(history.reduce((sum, h) => sum + h.accuracy, 0) / history.length);
    const topScore = Math.max(...history.map(h => h.score));
    
    if (avgAccuracyEl) avgAccuracyEl.textContent = `${avgAcc}%`;
    if (topScoreEl) topScoreEl.textContent = `${topScore} pts`;

    if (historyListEl) {
      historyListEl.innerHTML = history.map(h => `
        <div style="padding:10px; border-bottom:1px solid var(--border-subtle); display:flex; justify-between; align-items:center;">
          <div>
            <div style="font-weight:600; text-transform:capitalize;">${h.category} Test</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${h.date}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-weight:700; color:var(--primary);">${h.score}/${h.maxScore} pts</div>
            <div style="font-size:0.75rem; color:var(--accent-green);">${h.accuracy}% Acc</div>
          </div>
        </div>
      `).join("");
    }
  } else {
    if (avgAccuracyEl) avgAccuracyEl.textContent = "0%";
    if (topScoreEl) topScoreEl.textContent = "0 pts";
    if (historyListEl) historyListEl.innerHTML = "<p style='color:var(--text-muted); padding:1rem;'>No tests taken yet. Start your first quiz!</p>";
  }
}

// Certificate Modal
function openCertificateModal() {
  const engine = appState.analyticsEngine;
  if (!engine || !appState.user) {
    alert("Please complete a test first to view certificate.");
    return;
  }

  const modal = document.getElementById("certificateModal");
  const certName = document.getElementById("certName");
  const certDetails = document.getElementById("certDetails");
  const certDate = document.getElementById("certDate");

  if (certName) certName.textContent = appState.user.name;
  if (certDate) certDate.textContent = new Date().toLocaleDateString();
  if (certDetails) {
    certDetails.innerHTML = `Has successfully passed the <strong>${appState.selectedCategory.toUpperCase()}</strong> examination with a score of <strong>${engine.score}/${engine.maxScore} (${engine.accuracyPercent}%)</strong>.`;
  }

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
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

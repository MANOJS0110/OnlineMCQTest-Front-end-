/**
 * Comprehensive Analytics Visualizations Engine (Admin & Student Modes)
 * Renders Chart.js interactive charts for Platform Admin & Individual Student Dashboards.
 */

let globalChartInstances = {};

// Helper to destroy existing chart instance safely
function destroyChart(chartKey) {
  if (globalChartInstances[chartKey]) {
    try { globalChartInstances[chartKey].destroy(); } catch (e) {}
    globalChartInstances[chartKey] = null;
  }
}

// ==========================================================================
// 1. ADMIN OVERALL DASHBOARD ANALYTICS ENGINE
// ==========================================================================

class AdminAnalyticsEngine {
  constructor(adminData) {
    this.data = adminData || this.getDefaultAdminData();
  }

  getDefaultAdminData() {
    return {
      attemptsTime: {
        daily: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], data: [120, 190, 300, 250, 420, 510, 630] },
        weekly: { labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], data: [1400, 1900, 2200, 2800] },
        monthly: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], data: [5200, 6100, 7500, 8900, 9400, 11200, 12800] }
      },
      topicAccuracy: {
        labels: ['Full Stack', 'Data Structures & Alg', 'Backend & Database', 'JavaScript Core'],
        accuracy: [82, 70, 90, 65]
      },
      topicPopularity: {
        labels: ['Full Stack', 'Data Structures & Alg', 'Backend & Database', 'JavaScript Core'],
        attempts: [1420, 1150, 980, 970]
      },
      avgScores: {
        labels: ['Full Stack', 'Data Structures & Alg', 'Backend & Database', 'JavaScript Core'],
        scores: [41, 35, 45, 33.5] // Out of 50
      }
    };
  }

  renderAdminCharts(timeFilter = 'daily') {
    // 1. Test Attempts Over Time (Line Chart)
    destroyChart('adminAttempts');
    const ctxAttempts = document.getElementById("adminAttemptsChart")?.getContext("2d");
    if (ctxAttempts) {
      const timeData = this.data.attemptsTime[timeFilter] || this.data.attemptsTime.daily;
      globalChartInstances.adminAttempts = new Chart(ctxAttempts, {
        type: 'line',
        data: {
          labels: timeData.labels,
          datasets: [{
            label: 'Test Attempts',
            data: timeData.data,
            borderColor: '#2563EB',
            backgroundColor: 'rgba(37, 99, 235, 0.12)',
            fill: true,
            tension: 0.3,
            pointRadius: 5,
            pointBackgroundColor: '#2563EB'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { grid: { color: '#E2E8F0' }, ticks: { color: '#64748B' } },
            x: { grid: { display: false }, ticks: { color: '#64748B' } }
          }
        }
      });
    }

    // 2. Topic-wise Accuracy (Bar Chart)
    destroyChart('adminAccuracy');
    const ctxAcc = document.getElementById("adminTopicAccuracyChart")?.getContext("2d");
    if (ctxAcc) {
      globalChartInstances.adminAccuracy = new Chart(ctxAcc, {
        type: 'bar',
        data: {
          labels: this.data.topicAccuracy.labels,
          datasets: [{
            label: 'Accuracy (%)',
            data: this.data.topicAccuracy.accuracy,
            backgroundColor: ['#2563EB', '#06B6D4', '#10B981', '#8B5CF6'],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { min: 0, max: 100, grid: { color: '#E2E8F0' }, ticks: { color: '#64748B' } },
            x: { grid: { display: false }, ticks: { color: '#64748B' } }
          }
        }
      });
    }

    // 3. Topic Popularity (Pie / Doughnut Chart)
    destroyChart('adminPopularity');
    const ctxPop = document.getElementById("adminTopicPopularityChart")?.getContext("2d");
    if (ctxPop) {
      globalChartInstances.adminPopularity = new Chart(ctxPop, {
        type: 'pie',
        data: {
          labels: this.data.topicPopularity.labels,
          datasets: [{
            data: this.data.topicPopularity.attempts,
            backgroundColor: ['#2563EB', '#06B6D4', '#10B981', '#8B5CF6'],
            borderWidth: 2,
            borderColor: '#FFFFFF'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#475569', font: { size: 12 } } }
          }
        }
      });
    }

    // 4. Average Scores (Horizontal Bar Chart)
    destroyChart('adminAvgScores');
    const ctxScores = document.getElementById("adminAvgScoresChart")?.getContext("2d");
    if (ctxScores) {
      globalChartInstances.adminAvgScores = new Chart(ctxScores, {
        type: 'bar',
        indexAxis: 'y',
        data: {
          labels: this.data.avgScores.labels,
          datasets: [{
            label: 'Average Score (Out of 50)',
            data: this.data.avgScores.scores,
            backgroundColor: '#1E3A8A',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { min: 0, max: 50, grid: { color: '#E2E8F0' }, ticks: { color: '#64748B' } },
            y: { grid: { display: false }, ticks: { color: '#64748B' } }
          }
        }
      });
    }
  }
}

// ==========================================================================
// 2. INDIVIDUAL USER DASHBOARD ANALYTICS ENGINE
// ==========================================================================

class UserDashboardAnalyticsEngine {
  constructor(userData) {
    this.data = userData || this.getDefaultUserData();
  }

  getDefaultUserData() {
    return {
      scoreProgression: {
        labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7'],
        scores: [32, 36, 40, 38, 44, 46, 48]
      },
      skillsRadar: {
        labels: ['Full Stack', 'Data Structures & Alg', 'Backend & Database', 'JavaScript & Modern Web'],
        scores: [82, 70, 92, 65]
      },
      accuracyDoughnut: {
        correct: 547,
        wrong: 103,
        unanswered: 0
      }
    };
  }

  renderStudentCharts() {
    // 1. Performance Progression Line Chart
    destroyChart('userProgression');
    const ctxProg = document.getElementById("userProgressionChart")?.getContext("2d");
    if (ctxProg) {
      globalChartInstances.userProgression = new Chart(ctxProg, {
        type: 'line',
        data: {
          labels: this.data.scoreProgression.labels,
          datasets: [{
            label: 'Score Achieved (Max 50)',
            data: this.data.scoreProgression.scores,
            borderColor: '#2563EB',
            backgroundColor: 'rgba(37, 99, 235, 0.15)',
            fill: true,
            tension: 0.35,
            pointRadius: 6,
            pointBackgroundColor: '#2563EB'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { min: 0, max: 50, grid: { color: '#E2E8F0' }, ticks: { color: '#64748B' } },
            x: { grid: { display: false }, ticks: { color: '#64748B' } }
          }
        }
      });
    }

    // 2. Performance Skill Radar Chart
    destroyChart('userRadar');
    const ctxRadar = document.getElementById("userSkillRadarChart")?.getContext("2d");
    if (ctxRadar) {
      globalChartInstances.userRadar = new Chart(ctxRadar, {
        type: 'radar',
        data: {
          labels: this.data.skillsRadar.labels,
          datasets: [{
            label: 'Mastery Level (%)',
            data: this.data.skillsRadar.scores,
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            pointBackgroundColor: '#10B981',
            pointRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              min: 0,
              max: 100,
              ticks: { display: false },
              grid: { color: '#E2E8F0' },
              angleLines: { color: '#CBD5E1' }
            }
          },
          plugins: { legend: { display: false } }
        }
      });
    }

    // 3. Accuracy Doughnut Chart (Correct vs Wrong vs Unanswered)
    destroyChart('userDoughnut');
    const ctxDoughnut = document.getElementById("userAccuracyDoughnutChart")?.getContext("2d");
    if (ctxDoughnut) {
      globalChartInstances.userDoughnut = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
          labels: ['Correct Answers', 'Wrong Answers', 'Unanswered'],
          datasets: [{
            data: [this.data.accuracyDoughnut.correct, this.data.accuracyDoughnut.wrong, this.data.accuracyDoughnut.unanswered],
            backgroundColor: ['#10B981', '#EF4444', '#94A3B8'],
            borderWidth: 2,
            borderColor: '#FFFFFF'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#475569', font: { size: 12 } } }
          }
        }
      });
    }
  }
}

// Single-test quiz analytics engine
class TestAnalyticsEngine {
  constructor(questions, userAnswers, timeSpentArray, totalTimeSeconds) {
    this.questions = questions;
    this.userAnswers = userAnswers;
    this.timeSpentArray = timeSpentArray;
    this.totalTime = totalTimeSeconds;
    
    this.totalQuestions = questions.length;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.unattemptedCount = 0;
    this.score = 0;
    this.topicStats = {};

    this.processResults();
  }

  processResults() {
    this.questions.forEach((q) => {
      const userAns = this.userAnswers[q.id];
      const isCorrect = userAns === q.correct;
      
      if (!this.topicStats[q.topic]) {
        this.topicStats[q.topic] = { total: 0, correct: 0 };
      }
      this.topicStats[q.topic].total++;

      if (!userAns) {
        this.unattemptedCount++;
      } else if (isCorrect) {
        this.correctCount++;
        this.score += 2;
        this.topicStats[q.topic].correct++;
      } else {
        this.incorrectCount++;
      }
    });

    this.maxScore = this.totalQuestions * 2;
    this.accuracyPercent = Math.round((this.correctCount / this.totalQuestions) * 100);
    this.avgTimePerQuestion = Math.round(this.totalTime / this.totalQuestions);
  }

  getGrade() {
    if (this.accuracyPercent >= 85) return { label: "Excellent (S Grade)", color: "#10B981" };
    if (this.accuracyPercent >= 70) return { label: "Good (A Grade)", color: "#2563EB" };
    if (this.accuracyPercent >= 50) return { label: "Average (B Grade)", color: "#F59E0B" };
    return { label: "Needs Improvement (C Grade)", color: "#EF4444" };
  }

  generateRecommendations() {
    let recs = [];
    for (let [topic, stats] of Object.entries(this.topicStats)) {
      let acc = Math.round((stats.correct / stats.total) * 100);
      if (acc < 65) {
        recs.push(`Focus Area: Review foundational material in **${topic}** (Current Accuracy: ${acc}%).`);
      }
    }

    if (this.avgTimePerQuestion > 45) {
      recs.push("Speed Recommendation: Average time per question was >45 seconds. Practice timed mock sets to increase speed.");
    } else {
      recs.push("Pacing Alert: You maintained an optimal solving pace during this assessment.");
    }

    if (recs.length === 0) {
      recs.push("Great job! Your performance across all categories was balanced and high-scoring.");
    }
    return recs;
  }

  renderReviewList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = "";
    this.questions.forEach((q, idx) => {
      const userAns = this.userAnswers[q.id];
      const isCorrect = userAns === q.correct;
      const statusClass = !userAns ? "text-warning" : (isCorrect ? "text-success" : "text-danger");
      const statusLabel = !userAns ? "Unattempted" : (isCorrect ? "Correct (+2)" : "Incorrect (0)");

      html += `
        <div class="review-item">
          <div class="flex-between">
            <div style="font-weight:700; font-size:1.02rem;">${idx + 1}. ${q.question}</div>
            <span class="${statusClass}" style="font-weight:800; font-size:0.85rem;">${statusLabel}</span>
          </div>
          <div style="font-size:0.85rem; margin:6px 0; color:var(--text-muted);">
            <span><strong>Your Answer:</strong> ${userAns || "None"}</span> | 
            <span style="color:var(--success);"><strong>Correct Answer:</strong> ${q.correct}</span> | 
            <span>Topic: ${q.topic}</span>
          </div>
          <div class="review-explanation">
            💡 <strong>Explanation:</strong> ${q.explanation}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }
}

/**
 * Comprehensive Analytics & Performance Visualization Engine
 * Renders interactive Chart.js charts, computes diagnostic metrics, and generates reports.
 */

let chartInstances = {};

class TestAnalyticsEngine {
  constructor(questions, userAnswers, timeSpentArray, totalTimeSeconds) {
    this.questions = questions;
    this.userAnswers = userAnswers; // { qId: "A" }
    this.timeSpentArray = timeSpentArray; // Array of seconds per question
    this.totalTime = totalTimeSeconds;
    
    this.totalQuestions = questions.length;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.unattemptedCount = 0;
    this.score = 0;
    
    this.topicStats = {}; // { "Topic": { total: 0, correct: 0 } }
    this.difficultyStats = { Easy: { total: 0, correct: 0 }, Medium: { total: 0, correct: 0 }, Hard: { total: 0, correct: 0 } };
    
    this.processResults();
  }

  processResults() {
    this.questions.forEach((q, idx) => {
      const userAns = this.userAnswers[q.id];
      const isCorrect = userAns === q.correct;
      
      // Topic breakdown
      if (!this.topicStats[q.topic]) {
        this.topicStats[q.topic] = { total: 0, correct: 0 };
      }
      this.topicStats[q.topic].total++;
      
      // Difficulty breakdown
      if (this.difficultyStats[q.difficulty]) {
        this.difficultyStats[q.difficulty].total++;
      }

      if (!userAns) {
        this.unattemptedCount++;
      } else if (isCorrect) {
        this.correctCount++;
        this.score += 2; // 2 points per correct question
        this.topicStats[q.topic].correct++;
        if (this.difficultyStats[q.difficulty]) {
          this.difficultyStats[q.difficulty].correct++;
        }
      } else {
        this.incorrectCount++;
      }
    });

    this.maxScore = this.totalQuestions * 2;
    this.accuracyPercent = Math.round((this.correctCount / this.totalQuestions) * 100);
    this.avgTimePerQuestion = Math.round(this.totalTime / this.totalQuestions);
  }

  getGrade() {
    if (this.accuracyPercent >= 85) return { label: "Excellent (S Grade)", color: "#10b981" };
    if (this.accuracyPercent >= 70) return { label: "Good (A Grade)", color: "#6366f1" };
    if (this.accuracyPercent >= 50) return { label: "Average (B Grade)", color: "#f59e0b" };
    return { label: "Needs Improvement (C Grade)", color: "#ef4444" };
  }

  generateRecommendations() {
    let recommendations = [];
    
    // Check weak topics
    for (let [topic, stats] of Object.entries(this.topicStats)) {
      let acc = Math.round((stats.correct / stats.total) * 100);
      if (acc < 60) {
        recommendations.push(`Focus area: Review core concepts in **${topic}** (Accuracy: ${acc}%).`);
      }
    }

    if (this.avgTimePerQuestion > 45) {
      recommendations.push("Speed Tip: You spent more than 45s per question on average. Practice timed mock drills.");
    } else if (this.accuracyPercent >= 80) {
      recommendations.push("Great job! You demonstrated high mastery across topics. Try advanced difficulty tests.");
    }

    if (recommendations.length === 0) {
      recommendations.push("Balanced performance! Maintain consistent practice to retain accuracy.");
    }

    return recommendations;
  }

  renderCharts() {
    // Destroy previous charts if existing
    Object.values(chartInstances).forEach(chart => chart && chart.destroy());

    // 1. Doughnut Chart: Accuracy Distribution
    const ctxDoughnut = document.getElementById("accuracyDoughnutChart")?.getContext("2d");
    if (ctxDoughnut) {
      chartInstances.doughnut = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
          labels: ['Correct', 'Incorrect', 'Unattempted'],
          datasets: [{
            data: [this.correctCount, this.incorrectCount, this.unattemptedCount],
            backgroundColor: ['#10b981', '#ef4444', '#64748b'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#94a3b8' } }
          }
        }
      });
    }

    // 2. Bar Chart: Topic Accuracy Breakdown
    const ctxTopic = document.getElementById("topicBarChart")?.getContext("2d");
    if (ctxTopic) {
      const topicLabels = Object.keys(this.topicStats);
      const topicAccuracies = topicLabels.map(t => Math.round((this.topicStats[t].correct / this.topicStats[t].total) * 100));

      chartInstances.topicBar = new Chart(ctxTopic, {
        type: 'bar',
        data: {
          labels: topicLabels,
          datasets: [{
            label: 'Accuracy (%)',
            data: topicAccuracies,
            backgroundColor: '#6366f1',
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 0, max: 100, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            x: { ticks: { color: '#94a3b8' }, grid: { display: false } }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }

    // 3. Line Chart: Time Per Question
    const ctxTime = document.getElementById("timeLineChart")?.getContext("2d");
    if (ctxTime) {
      const qLabels = this.questions.map((_, i) => `Q${i + 1}`);
      const times = this.timeSpentArray.length > 0 ? this.timeSpentArray : this.questions.map(() => this.avgTimePerQuestion);

      chartInstances.timeLine = new Chart(ctxTime, {
        type: 'line',
        data: {
          labels: qLabels,
          datasets: [{
            label: 'Time Spent (sec)',
            data: times,
            borderColor: '#06b6d4',
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
            fill: true,
            tension: 0.3,
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            x: { ticks: { color: '#94a3b8' }, grid: { display: false } }
          },
          plugins: {
            legend: { labels: { color: '#94a3b8' } }
          }
        }
      });
    }
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
            <div class="q-title">${idx + 1}. ${q.question}</div>
            <span class="${statusClass}" style="font-weight:700; font-size:0.85rem;">${statusLabel}</span>
          </div>
          <div class="review-meta">
            <span><strong>Your Answer:</strong> ${userAns || "None"}</span> | 
            <span class="text-success"><strong>Correct Answer:</strong> ${q.correct}</span> | 
            <span class="text-dim">Topic: ${q.topic}</span>
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

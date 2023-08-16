// 해당 학생의 점수를 로컬 스토리지에 저장
function saveScore(studentId, score) {
    const scores = JSON.parse(localStorage.getItem("student-scores") || "{}");
    scores[studentId] = score;
    localStorage.setItem("student-scores", JSON.stringify(scores));
  }
  
  // 해당 학생의 점수를 로컬 스토리지에서 불러오기
  function loadScore(studentId) {
    const scores = JSON.parse(localStorage.getItem("student-scores") || "{}");
    return scores[studentId] || 0;
  }
  
  
  // 모든 add-score 버튼 가져오기
  const addButtons = document.querySelectorAll('.add-score');
  
  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  addButtons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
      score += 50;
      scoreSpan.textContent = score;
  
      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });
  
  // 모든 subtract-score 버튼 가져오기
  const subtractButtons = document.querySelectorAll('.subtract-score');
  
  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  subtractButtons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
  
      if (score > 0) {
        score -= 50;
        scoreSpan.textContent = score;
      }
  
      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });

  // 모든 add_50-score 버튼 가져오기
  const add_50Buttons = document.querySelectorAll('.add_50-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  add_50Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
      score += 50;
      scoreSpan.textContent = score;

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });

  // 모든 add_100-score 버튼 가져오기
  const add_100Buttons = document.querySelectorAll('.add_100-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  add_100Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
      score += 100;
      scoreSpan.textContent = score;

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });
  
  // 모든 add_300-score 버튼 가져오기
  const add_300Buttons = document.querySelectorAll('.add_300-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  add_300Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
      score += 300;
      scoreSpan.textContent = score;

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });

  // 모든 add_500-score 버튼 가져오기
  const add_500Buttons = document.querySelectorAll('.add_500-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  add_500Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
      score += 500;
      scoreSpan.textContent = score;

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  }); 

  // 모든 add_1000-score 버튼 가져오기
  const add_1000Buttons = document.querySelectorAll('.add_1000-score');

  // 각 버튼을 순회하며 클릭 이벤트 리스너 추가
  add_1000Buttons.forEach(button => {
    button.addEventListener('click', () => {
      const studentList = button.parentNode;
      const scoreSpan = studentList.querySelector('.score');
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      let score = parseInt(scoreSpan.textContent);
      score += 1000;
      scoreSpan.textContent = score;

      // 변경된 점수를 로컬 스토리지에 저장
      saveScore(studentId, score);
    });
  });

  // 페이지가 로드될 때, 각 학생의 저장된 점수를 불러와서 화면에 표시
  window.addEventListener('load', () => {
    const studentLists = document.querySelectorAll('.student-list');
    studentLists.forEach(studentList => {
      const studentId = studentList.dataset.studentId; // 고유한 학생 ID 가져오기
      const scoreSpan = studentList.querySelector('.score');
      const score = loadScore(studentId);
      scoreSpan.textContent = score;
    });
  });
  

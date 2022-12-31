const EXERCISE_TOTAL = 100;
const EXAM_WEIGHT = .65;
const EXERCISE_WEIGHT = .35;

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const generateClassRecordSummary = studentData => {
  let finalGrades = generateFinalGrades(studentData);
  let letterGrades = generateLetterGrades(finalGrades);
  let examData = generateExamStatistics(studentData);
  return {
    studentGrades: letterGrades,
    exams: examData,
  }
}

const generateFinalGrades = studentData => {
  let students = Object.keys(studentData);
  return students.map(studentNumber => {
    let examAvg = calculateExamAverage(studentData[studentNumber].scores.exams);
    let exerciseAvg = calculateExerciseAverage(studentData[studentNumber].scores.exercises);
    return Math.round((examAvg * EXAM_WEIGHT) + (exerciseAvg * EXERCISE_WEIGHT));
  });
}

const calculateExamAverage = exams => {
  return exams.reduce((sum, exam) => sum + exam) / exams.length;
}

const calculateExerciseAverage = exercises => {
  return (exercises.reduce((sum, exercise) => sum + exercise) / EXERCISE_TOTAL) * 100;
}

const generateLetterGrades = rawExamAvgs => {
  return rawExamAvgs.map(average => {
    if (average > 92) {
      return `${average} (A)`;
    } else if (average > 84) {
      return `${average} (B)`;
    } else if (average > 76) {
      return `${average} (C)`;
    } else if (average > 68) {
      return `${average} (D)`;
    } else if (average > 59) {
      return `${average} (E)`;
    } else {
      return `${average} (F)`;
    }
  });
}

const generateExamStatistics = studentData => {
  let studentExamData = generateRawExamData(studentData);
  let groupedExamData = separateScoresByExam(studentExamData);
  return groupedExamData.map(exam => parseExamData(exam));
}

const generateRawExamData = studentData => {
  let studentNumbers = Object.keys(studentData);
  return studentNumbers.map(studentNumber => studentData[studentNumber].scores.exams);
}

const separateScoresByExam = examsByStudent => {
  let examNumber = examsByStudent[0].length
  let examData = []
  for (let i = 0; i < examNumber; i += 1) {
    let currentExam = [];
    examsByStudent.forEach(group => currentExam.push(group[i]));
    examData.push(currentExam);
  }
  return examData;
}

const parseExamData = examScores => {
  let min = Math.min(...examScores);
  let max = Math.max(...examScores);
  let average = calculateExamAverage(examScores);
  return {
    average: average,
    minimum: min,
    maximum: max,
  }
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
const questions = [
  { id: "q1", type: "mcq", question: "2 + 2 ?", options: ["3", "4", "5"], correct: "4" },
  { id: "q2", type: "mcq", question: "Capital of India?", options: ["Delhi", "Mumbai"], correct: "Delhi" },
  { id: "q3", type: "mcq", question: "5 * 3 ?", options: ["15", "10"], correct: "15" },
];

exports.getNextQuestion = (index) => {
  if (index >= questions.length) return null;
  return questions[index];
};
function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      const roundedGrade = Math.ceil(grades[i] / 5) * 5;
      if (roundedGrade - grades[i] < 3) {
        grades[i] = roundedGrade;
      }
    }
  }

  return grades;
}

const grades = [73,67,38,33];
console.log(gradingStudents(grades));// [75, 67, 40,33]
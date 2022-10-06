// Study case
// Ada sebuah array object dibawah ini
// Tampilkan nilai student yang terendah
// Tampilkan nilai student yang tertinggi
// Tampilkan sertifikat lulus bagi nilai diatas 50 di console
const studentScores = [
  { name: "Ganda", score: 90 },
  { name: "Nadila", score: 80 },
  { name: "Andre", score: 70 },
  { name: "Andra", score: 60 },
  { name: "Backbone", score: 50 },
  { name: "Nuri", score: 65 },
  { name: "Tariana", score: 50 },
  { name: "Najwa", score: 76 },
  { name: "Nanda", score: 99 },
  { name: "Ben", score: 100 },
  { name: "Rizky", score: 40 },
  { name: "Bandana", score: 81 },
  { name: "Rindho", score: 80 },
  { name: "Finder", score: 90 },
];

const findMinMax = (arrayOfObject, type) => {
  const temp = [...arrayOfObject];
  switch (type) {
    case "min":
      const min = temp.sort(
        (previous, current) => previous.score - current.score
      )[0];
      console.log(`The lowest score is ${min.score} from ${min.name}`);
      return;
    case "max":
      const max = temp.sort(
        (previous, current) => current.score - previous.score
      )[0];
      console.log(`The highest score is ${max.score} from ${max.name}`);
      return;
    default:
      return;
  }
};

const createCertificates = (students) => {
  const passgrade = 50;
  for (let student of students) {
    if (student.score > passgrade) {
      console.log(
        `Certificate for ${student.name} with score: ${student.score}`
      );
    } else {
      console.log(
        `Unfortunately ${student.name} not lulus with score: ${student.score}`
      );
    }
  }
};

findMinMax(studentScores, "min");
console.log();
findMinMax(studentScores, "max");
console.log();
createCertificates(studentScores);

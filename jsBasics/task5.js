
let testScore = 78; 


if (testScore < 50) {
    console.log("Потрібно покращити знання");
} else if (testScore >= 50 && testScore <= 64) {
    console.log("Середній рівень");
} else if (testScore >= 65 && testScore <= 79) {
    console.log("Хороший рівень");
} else if (testScore >= 80 && testScore <= 89) {
    console.log("Дуже хороший рівень");
} else if (testScore >= 90 && testScore <= 100) {
    console.log("Відмінний рівень");
} else {
    console.log("Неправильний ввід балів"); 
}

const name1 = "Олександр";
const name2 = "Марія";


const greeting1 = "Привіт, " + name1 + " та " + name2 + "!";
console.log("Вітання через конкатенацію:", greeting1);


const greeting2 = `Привіт, ${name1} та ${name2}!`;
console.log("Вітання через шаблонний рядок:", greeting2);

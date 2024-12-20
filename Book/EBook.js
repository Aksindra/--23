class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, File Format: ${this.fileFormat}`);
    }
}


const ebook1 = new EBook("Sapiens", "Yuval Noah Harari", 2011, "PDF");


ebook1.printInfo();
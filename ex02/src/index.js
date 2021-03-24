class Book{
    constructor(title){
        this.title = title;
    }
    get name() {
        return this._title;
    }
    set name(newTitle){
        
        this._title = newTitle;
    }

}
const littlePrince = new Book("The Little Prince");//
console.log(littlePrince.title);//the little prince
littlePrince.title = "Le Petit Prince";
console.log(littlePrince.title);//le petit
module.exports = Book;
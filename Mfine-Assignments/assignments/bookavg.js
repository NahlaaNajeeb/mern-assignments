let books= [
	//object #1
	{
		bookname: 'Think like a monk',
		bookauth:'Jay shetty',
        bookprice: 500,
        bookrating: 9
	},

    {
		bookname: 'The monk who sold a ferrari',
		bookauth:'Robin sharma',
        bookprice: 158,
        bookrating: 8
	},

];

function searcht(books){
    let search=[];
    for(let book of books ){
        if(book.bookname.match("ferrari"))
            search.push(book.bookname);
    }
    return search;
}

function find(books){
    let results=[];
    for(let book of books ){
        if(book.bookauth == "Jayshetty")
            results.push(book.bookname);
    }
    return results;
}

function pricer(books){
    let pric=[];
    for(let book of books ){
        if(book.bookprice > 100 && book.bookprice < 500 )
            pric.push(book.bookname);
    }
    return pric;
}


function rate(books){
    let rat=[];
    for(let book of books ){
        if(book.bookrating >"8")
            rat.push(book.bookname);
    }
    return rat;
}



console.log('Name\t     Author \tPrice \tRating');
for(let book of books){
    console.log(`${book.bookname}\t${book.bookauth}\t${book.bookprice}\t${book.bookrating}`)
}



console.log("\n");
let results = find(books);
console.log(results);

console.log("\n");
let pric = pricer(books);
console.log(pric);

console.log("\n");
let rat= rate(books);
console.log(rat);

console.log("\n");
let tc= Totalcost(books);//assigning tcost value to tc
console.log(tc);

console.log("\n");
let av= avgcost(books);
console.log(av);



function Totalcost(books){
    let tcost=0;
    for(let book of books){
        tcost +=parseFloat(book.bookprice);//tcost=tcost+bookprice
    }
    return tcost;

}


function avgcost(books){
    let len=0;
    for(let book of books){
        len++//incrementing len value when each book is taken
    }
    var avg;
    avg=Totalcost(books)/len;
    return avg;
    
}

function findBookByRating(value,books){
    let newarr = [
        
    ];
    for(let book of books){
        if (book.bookrating == value)
        
        {
            console.log("yes")
            newarr.push({
                "bookTitle": book.bookname,
                "bookPrice": book.bookprice,
                "bookAuthor": book.bookauth,
                "bookRating": book.bookrating
            })

        }
        

    }
    return newarr;
}

//return book title and price
function findbookname(value,books){
    let newarr = [
        
    ];
    for(let book of books){
        if (book.bookname == value)
        console.log("yes")
        {
            newarr.bookTitle = value;
            newarr.bookPrice = book.bookprice;

        }
        return newarr;

    }
}

console.log("\n");
let newarr = findbookname('Think like a monk',books);
console.log(newarr);

console.log("ok")
let ab = findBookByRating(8,books);
console.log(ab);
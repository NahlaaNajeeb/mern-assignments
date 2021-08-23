function createRevObj(comment, rating) {
    
    let p = new Object();

    p.comment = comment;
    p.rating = rating;
    return p;
}
let p= createRevObj("Great",10); 

let review=[
    createRevObj('Great',10),
    createRevObj('Avg',7),
    createRevObj('Bad',4),
]

for(let rev of review){

    for(let property in rev){
        console.log(property, rev[property])
    }
    console.log();
}
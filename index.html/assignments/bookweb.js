let books= [
	//object #1
	{
        bcover :"book1.jpg",
        bookname: 'The Accursed God',
		bauth:'Vivek Dutta Mishra',
        bprice: 500,
      
	},

    { 
        bcover : "book2.jpg",
		bookname: 'Harry Potter and the Goblet of Fire',
		bauth:'J K Rowling',
        bprice: 340,
      
	},

	//object #1
    {
        bcover : "book4.jpg"	,
		bookname: "Harry Potter and Prisoner of Azkaban",
		bauth: "JK Rowling",
        bprice: 600,
    
		
	
	}


];

let tab = document.getElementById("reviews")
for (book of books){
    tab.innerHTML +=
   `<tr>
        <td><img src = "${book.bcover}" width="70" /></td>
        <td>${book.bookname}</td>
        <td>${book.bauth}</td>
        <td>${book.bprice}</td>
        <td>
        <button id="details">Details </button>
        <button id="delete" onclick= "removeBook()">Delete</button>
        </td>
        
    </tr>`
}

//function del(btn) {
  //  document.getElementById(btn).remove()
//}
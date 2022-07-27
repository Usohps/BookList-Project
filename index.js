const items={
    firstname:"Princewill",
    like:"I love Books"
}
let paragraph=document.getElementById("demo");
paragraph.innerHTML="My name is " + items.firstname +" ,I am cool and " + items.like;
paragraph.style.margin="auto"

// delete books
const listOfBooks= document.querySelector("#book-list ul");
listOfBooks.addEventListener("click",function(e){
    if(e.target.className =="delete"){
        const li= e.target.parentElement;
        listOfBooks.removeChild(li);
    };
});

const Addbooks=document.forms['add-book'];

Addbooks.addEventListener("submit",function (e){
        e.preventDefault();
        const value=Addbooks.querySelector('input[type="text"]').value;
        // create Element
        const Li = document.createElement("li");
        const bookName = document.createElement("span");
        const deleteBtn= document.createElement("span");
           //  add textcontent
        deleteBtn.textContent="delete";
        bookName.textContent=value;
        // append to Element
        Li.appendChild(bookName);
        Li.appendChild(deleteBtn);
        listOfBooks.appendChild(Li);
        bookName.className=("name");
        deleteBtn.className=("delete");
});
// to hide the books
const hideBooks= document.querySelector("#hide");
hideBooks.addEventListener("change",function(e){
     if(hideBooks.checked){
        listOfBooks.style.display="none";
     }else{
         listOfBooks.style.display="block";
     };
});
// to fillter books when searched
const searchBook=document.forms["search_books"].querySelector("input");
searchBook.addEventListener("keyup",function(e){
    const term=e.target.value.toLowerCase();
    const books=listOfBooks.getElementsByTagName("li");
    Array.from(books).forEach(function(book){
      const title=book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term)!= -1){
          book.style.display="block";
      }else{
          book.style.display="none";
      }; 
    });
}); 

// toogle between 2 pages by adding and removing classList
const tabs= document.querySelector(".tabs");
const panels=document.querySelectorAll(".panel");
 tabs.addEventListener("click",function(e){
     if(e.target.tagName=="LI"){
         const targetPanel=document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel==targetPanel){
                panel.classList.add("active");   
            }else{
                panel.classList.remove("active");
            };
        });
     };
 });
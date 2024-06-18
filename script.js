var popup = document.querySelector(".popup")       // queryselector is only used for making function using event listener
var popup_box = document.querySelector(".popup_box")
var add = document.getElementById("addbutton")

var book = document.querySelector(".book")

add.addEventListener("click",function(){
    popup.style.display = "block"
    popup_box.style.display = "block"
})

// cancel and add button will work automatically and reload to the same page if we didnt assume any action in form eg. <form action="https://wwww.amazon.com"> so this will reload to amazon

// so to change , select cancel button

var cancelpopup = document.getElementById("cancel_popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()  // used to reload to the same page
    popup.style.display = "none"
    popup_box.style.display = "none"

})


//select container,add_book,description,book_title,book_author

var container = document.querySelector(".container")
var add_book = document.getElementById("add_book")
var book_title = document.getElementById("book_title")
var book_author = document.getElementById("book_author")
var description = document.getElementById("Description")

add_book.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML = `<h2>${book_title.value}</h2>
    <p>${book_author.value}</p><br>
    <p>${Description.value}</p>
    <button id="del" onclick="deleteon(event)">Delete</button>`
    container.append(div)
    popup.style.display = "none"
    popup_box.style.display = "none"
})


function deleteon(event){
    event.target.parentElement.remove()
}
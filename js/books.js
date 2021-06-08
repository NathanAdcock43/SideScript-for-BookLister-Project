$(document).ready(function() {
    function getBooks() {
        let search = document.getElementById("search").value;
        let apply = document.getElementById("apply");
        console.log(search);
        $.ajax({
            url:
                "https://www.googleapis.com/books/v1/volumes?q="+
                search+
                "&key="+
                APIv3Key,
            dataType: "json",
            success: function (book) {
                console.log(book);
                for(var i = 0; i < book.items.length; i++) {
                    // apply.innerHTML += "<p class='select'>" + book.items[i].volumeInfo.title + "</p>";
                    // apply.innerHTML += "<h3 class='select'>" + book.items[i].volumeInfo.authors + "</h3>";
                    // apply.innerHTML += "<img class='select' src='" + book.items[i].volumeInfo.imageLinks.thumbnail + "'>";
                    // apply.innerHTML += "<h4 class='select'>" + book.items[i].volumeInfo.description + "</h4>";


                    apply.innerHTML += "<div class='col'><div class=\"container grid-body select\" id=\"cardBody\"><div class=\"card\" style=\"width: 18rem;\"><div class=\"card-body\" style=\"background-color: #7A7072\"><h5 class=\"card-title select\" style=\"text-align: center; color: white; font-size: larger; font-weight: bold\">" + book.items[i].volumeInfo.title + "</h5><img  class=\" select\" src=" + book.items[i].volumeInfo.imageLinks.thumbnail + "alt=\"pic\" style=\"width: 250px;\"></div></div></div></div>";

                }
            },
            type: "GET"
        });
    }
    let url = document.getElementById("url");
    let title = document.getElementById("title");
    let info = document.getElementById("info");
    var submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', getBooks);

    $(document).on("click", "div.select" , function() {
        let href = $(this).attr('src');
        url.setAttribute("value", href)
    });
    $(document).on("click", "div.select" , function() {
        let bookName = $('h5.select').clone().html();
        title.setAttribute("value", bookName)
    });
    // $(document).on("click", "h4.select" , function() {
    //     let description = $('h4.select').clone().html();
    //     info.setAttribute("value", description)
    // });

    // $(document).on("click", "h4.select" , function() {
    //
    // }
    // $(document).on("click", "h3.select" , function() {
    //     var author = $('h3.select').clone().html();
    //
    // });
});
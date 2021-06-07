$(document).ready(function() {


    function getBooks() {
        let search = document.getElementById("search").value;
        let apply = document.getElementById("apply");
        let url = document.getElementById("url");
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
                    apply.innerHTML += "<p class='select'>" + book.items[i].volumeInfo.title + "</p>";
                    apply.innerHTML += "<h3 class='select'>" + book.items[i].volumeInfo.authors + "</h3>";
                    apply.innerHTML += "<img class='select' src='" + book.items[i].volumeInfo.imageLinks.thumbnail + "'>";

                }
            },
            type: "GET"
        });
    }
    let url = document.getElementById("url");
    let title = document.getElementById("title");

    var submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', getBooks);

    $(document).on("click", "img.select" , function() {
        var href = $(this).attr('src');
        url.setAttribute("value", href)
    });

    $(document).on("click", "p.select" , function() {
        let bookName = $('p.select').clone().html();
        title.setAttribute("value", bookName)
    });

    // $(document).on("click", "h3.select" , function() {
    //     var author = $('h3.select').clone().html();
    //
    // });

});
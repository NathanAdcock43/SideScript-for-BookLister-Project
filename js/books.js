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
                    apply.innerHTML += "<div class=\"container grid-body\" id=\"cardBody\" style='width: max-content'><div class=\"card\" style=\"width: 18rem;\"><div class=\"card-body select\" style=\"background-color: #7A7072\"><h5 class='select card-title' style=\"text-align: center; color: white; font-size: larger; font-weight: bold\">" + book.items[i].volumeInfo.title + "</h5><img  class=\"select\" src=" + book.items[i].volumeInfo.imageLinks.thumbnail + "alt=\"pic\" style=\"width: 250px; height: 350px;\"></div></div></div>";

                    // apply.innerHTML += '<div class=\"col-md-4 card-container\"><div class=\"card card-flip\"><div class=\"front card-block\"><img src=\" + book.items[i].volumeInfo.imageLinks.thumbnail + " alt=\"thecount\" style=\"width: 250px; height: 350px;\"></div><div class=\"back card-block\"><h4 class="card-title">Title</h4><h6 class=\"card-subtitle text-muted\">Sub-title</h6><p class=\"card-text\">Text</p><a href=\"#\" class=\"btn btn-primary btn-lg\">Read More</a></div></div></div>'













                }
            },
            type: "GET"
        });
    }
    // let cardBody = document.getElementById("cardBody");
    let url = document.getElementById("url");
    let title = document.getElementById("title");
    let info = document.getElementById("info");
    var submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', getBooks);
    $(document).on("click", "div.select" , function() {
        let src = $("img.select").attr('src');
        url.setAttribute("value", src)
    });
    $(document).on("click", "div.select" , function() {
        let bookName = $('h5.card-title').clone().html();
        title.setAttribute("value", bookName)
        console.log(bookName);
    });
    $(document).on("click", "h4.select" , function() {
        let description = $('h4.select').clone().html();
        info.setAttribute("value", description)
    });
    // $(document).on("click", "h4.select" , function() {
    //
    // }
    // $(document).on("click", "h3.select" , function() {
    //     var author = $('h3.select').clone().html();
    //
    // });
});
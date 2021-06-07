$(document).ready(function (){



    $("#myform").submit(function(){
        let search = $("#books").val();
        if (search === ''){
            alert("please enter a search parameter")
        }else{
            var url='';
            var img='';
            var title='';
            var author='';
            var descript='';

            $.get("http://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

                for (i = 0; i < response.items.length; i++) {
                    //     get book title

                    img = $('<img class="aligning card z-depth-5" id="dynamic" alt="missing pic"><br><a>href=' + response.items[i].volumeInfo.infoLink + '><button id ="imagebutton" class= "btn red aligning">Read More</button></a>');
                    title = $('<h4 class="card-title">') + response.items[i].volumeInfo.title + "</h4>";
                    author = $('<h6 class="card-subtitle text-muted">') + response.items[i].volumeInfo.author + "</h6>";
                    descript = $('<p class="card-text">') + response.items[i].volumeInfo.description + "</p>";
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;

                    img.attr('scr', url);
                    title.appendTo('#result');
                    author.appendTo("#result");
                    descript.appendTo("#result");
                    img.appendTo("#result");
                }
            });
        }
        return false;
    });



})
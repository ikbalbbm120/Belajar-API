function searchMovie() {
    $('#movie-list').html('');
    
    $.ajax({
        type: 'get',
        url: 'http://omdbapi.com',
        datatype: 'json',
        data: {
            'apikey' : '4f1cf1a6',
            's' : $('#search-input').val()
        },
        success: function(result) {
            if(result.Response == "true") {
                let movies = result.Search;

                $.each(movies,function(i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-3">
                        <div class="card mb-3">
                            <img src="`+ data.poster+`" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">`+ data.Title +`</h5>
                            <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                                <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">see detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                });

                $('#search-input').val('');

            } else {
                $('#movie-list').html(`
                <h1 class="text-center">movie Not found</h1>
                `);
            }
        }
    });
}

$('#search-button').on('click', function() {
    searchMovie();
});

$('#search-input').on('keyup', function(e) {
    if(e,keycode === 13) {
        searchMovie();
    }
});

$('#movie-list').on('click', '.see-detail', function() {
    $.ajax({
        datatype: 'json',
        url: 'http://omdbapi.com',
        type: 'get',
        data: {
            'apikey': '4f1cf1a6',
            'i': $(this).data('id')
        },
        success: function(movie) {
            if( movie.Response === "true" ) {
                $('#modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3">
                                <img src="`+ movie.poster +`" class="img-fluid">
                            <div class="col-md-7">
                                <ul class="list-group">
                                <li class="list-group-item"><h3>`+ movie.title +`</h3></li>
                                <li class="list-group-item">Released :`+ movie.Released +`</li>
                                <li class="list-group-item">Genre :`+ movie.Genre +`</li>
                                <li class="list-group-item">Director :`+ movie.Director +`</li>
                                <li class="list-group-item">Actor :`+ movie.Actors +`</li>
                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
            };
        }
    });

});

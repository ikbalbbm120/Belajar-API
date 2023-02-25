function tampilkanSemuamenu() {
    $.getJSON('data/pizza.json', function(data) {
        let menu = data.menu;
        $.each(menu, function(i,data) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card" mb-3><img src="img/pizza/'+ data.gambar +'" class="card-img-top"><div class="card-body"<h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi+'</p><h5 class="card-title">Rp.'+ data.harga +'</h5><a href="#" class="btn btn-primary">pesan sekarang</a></div></div></div></div>');
        });
        $('#daftar-menu').html(content);
    });
}

tampilkanSemuamenu();


$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');


    let kategory = $(this).html();
    $('h1').html(kategory);

    if( kategory == 'All menu' ) {
        $('#daftar-menu').html('');
        tampilkanSemuamenu();
        return;
    }

    $.getJSON('data/pizza.json', function(data) {
        let menu = data.menu;
        let content = '';
        $.each(menu, function(i,data) {
            if(data.kategory == kategory.toLowerCase()) {
                content += '' 
            }
        });
    });

});
//event pada saat link di diklik

$('.page-scroll').on('click', function (e) {

    // ambil isi href

    var href = $(this).attr('href');

    //tangkap elemen ybs 
    var elemenHref = $(href);


    //pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenHref.offset().top - 50
    }, 1250, 'swing');

    e.preventDefault();
});



//parallax

//profil h1

$(window).on('load', function () {
    $('.jumbotron').addClass('muncul');
});

$(window).scroll(function () {
    var Wscroll = $(this).scrollTop();
    //jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px,' + Wscroll / 8 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + Wscroll / 4 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px,' + Wscroll / 2 + '%)'
    });

    //sertifikat

    if (Wscroll > $('.sertifikat').offset().top - 300) {
        $('.sertifikat .thumbnail').each(function (i) {
            setTimeout(function () {

                $('.sertifikat .thumbnail').eq(i).addClass('muncul');

            }, 300 * i);
        });

    };

    if (Wscroll > $('.paragraf').offset().top - 350) {
        $('.paragraf').addClass('kiri');
    }


});
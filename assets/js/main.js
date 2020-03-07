let apiUrl = 'https://www.instagram.com/gentlemil/?__a=1';
let photos = document.querySelector('#instagram');

// ------------- NAVIGATION  ----------------

// ----------------- JS ---------------------
// window.addEventListener('scroll', function () {
//     let navigation = document.querySelector('#navigation')
//     if (this.window.pageYOffset > 0) {
//         navigation.classList.add('active')
//     } else {
//         navigation.classList.remove('active')
//     }
// })

// ------------ JQUERY -------------------
$(window).on('scroll', function () {
    if (window.pageYOffset > 0) {
        $('#navigation').addClass('active');
    } else {
        $('#navigation').removeClass('active');
    }
})

// --- OTWIERANIE NOWEGO LINKU  ---

// ------------- JS ---------------
// let newLink = document.querySelector('#our-history.right.btn')
// newLink.addEventListener('click', function (event) {
//     window.open('https://www.youtube.com/watch?v=58ODFur4ICw', "_blank")
//     event.preventDefault()
// })

// ----------- JQUERY ----------
// $('.btn').on('click', function (event) {
//     window.open('https://www.youtube.com/watch?v=58ODFur4ICw', '_blank')
//     event.preventDefault()
// })

// ---- NAVIGATION W MOBILCE ----
$('.hamburger').on('click', function () {
    $('body').toggleClass('menu-open')
    $('#navigation').toggleClass('menu-open')
    $(this).toggleClass('active')
})



// zapytanie do axios zeby pobrac dane
axios({
    method: 'GET',
    url: apiUrl
}).then(function (response) {
    let data = response.data.graphql.user.edge_owner_to_timeline_media.edges;
    let html = ``;

    // data.forEach(function (item) {
    //     html += `<div. class="item">
    //     <a href"${item.url}" class="gallery">
    //         <img src="${item.url}" alt="${item.alt}"/>
    //     </a>
    //     </div>
    //     `
    // })

    data.forEach(function (item) {
        html += `<div class="item">
        <a href="${item.node.display_url}"  class="gallery">
        <img src="${item.node.display_url}" /></a></div>
        `
    });

    photos.innerHTML = html;
});

//  inicjalizacja fancybox dla zdjec generowanych powyzej
$(document).fancybox({
    selector: '.gallery'
})



//  ---
AOS.init();

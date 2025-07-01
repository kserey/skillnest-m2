$(document).ready(function () {
    // IMG LIST
    const images = [
        { src: 'assets/img/img1.webp', caption: 'Desierto de Atacama' },
        { src: 'assets/img/img2.webp', caption: 'Valparaíso' },
        { src: 'assets/img/img3.webp', caption: 'Santiago' },
        { src: 'assets/img/img5.webp', caption: 'Villarrica' },
        { src: 'assets/img/img6.webp', caption: 'Parque Nacional Conguillío' },
        { src: 'assets/img/img7.webp', caption: 'Puerto Varas' },
        { src: 'assets/img/img8.webp', caption: 'Chiloé' },
        { src: 'assets/img/img9.webp', caption: 'Parque Nacional Pumalín' },
        { src: 'assets/img/img10.webp', caption: 'Futaleufú' },
        { src: 'assets/img/img11.webp', caption: 'Glaciar Queulat' },
        { src: 'assets/img/img12.webp', caption: 'Cerro Castillo' },
        { src: 'assets/img/img13.webp', caption: 'Río Puerto Tranquilo' },
        { src: 'assets/img/img14.webp', caption: 'Parque Nacional Patagonia' },
        { src: 'assets/img/img15.webp', caption: 'Caleta Tortel' },
        { src: 'assets/img/img16.webp', caption: 'Glaciar O´higgins' },
        { src: 'assets/img/img17.webp', caption: 'Torres del Paine' },
        { src: 'assets/img/img18.webp', caption: 'Glaciar Balmaceda' },
        { src: 'assets/img/img19.webp', caption: 'Isla Magdalena' },
        { src: 'assets/img/img20.webp', caption: 'Isla Navarino' },
        { src: 'assets/img/img4.webp', caption: 'Punta de Lobos' },
    ];

    // LOCALICE THE GALLERY DIV
    let $galleryContainer = $('#galleryContainer');

    // FUNCTION TO CREATE A CARD AND ADD IT TO THE GALLERY
    function createCard(imageObj, index) {
        const cardHtml = `
        <div class="col-6 col-sm-4 col-md-3">
            <div class="gallery-item rounded-3 shadow-sm d-flex flex-column align-items-center">
                <img
                    src="${imageObj.src}"
                    class="img-fluid gallery-img"
                    data-index="${index}"
                    alt="${imageObj.caption}"
                />
                <div class="gallery-caption mt-2 text-center">${imageObj.caption}</div>
            </div>
        </div>
        `;
        $galleryContainer.append(cardHtml);
    }

    // CREATE EACH CARD FOR THE GALLERY
    images.forEach((imgObj, i) => createCard(imgObj, i));

    // INIT MODAL
    let currentIndex = 0;
    let modal = new bootstrap.Modal(document.getElementById('imageModal'));
    let $modalImg = $('#modalImage');

    // CREATE MODAL CAPTION
    if ($('#modalCaption').length === 0) {
        $('<div id="modalCaption" class="text-center mt-2 text-white fs-5"></div>').insertAfter($modalImg);
    }

    // LOCALICE THE MODAL CAPTION
    let $modalCaption = $('#modalCaption');

    // FUNCTION TO SHOW IMAGE IN MODAL
    function showImage(index) {
        $modalImg.fadeOut(150, function () {
        $modalImg.attr('src', images[index].src).fadeIn(200);
        $modalCaption.text(images[index].caption);
        });
    }

    // EVENT LISTENER TO OPEN MODAL FOR THE CORRECT IMAGE BY INDEX
    $galleryContainer.on('click', '.gallery-img', function () {
        currentIndex = parseInt($(this).data('index'));
        showImage(currentIndex);
        modal.show();
    });

    // NEXT AND PREVIOUS BUTTONS
    $('#nextBtn').click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    $('#prevBtn').click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
});
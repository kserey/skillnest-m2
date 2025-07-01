$(document).ready(function() {

    // --- DATA ---

    // TICKET PRICE
    let ticket_price = 5000;

    // MOVIES DATA
    let movies = [
        {
            id: 'dune-2',
            title: 'Duna Parte 2',
            image: "assets/img/dune2.webp",
            showtimes: ["18:00", "20:30", "22:00"]
        },
        {
            id: 'oppenheimer',
            title: 'Oppenheimer',
            image: "assets/img/oppenheimer.webp",
            showtimes: ["17:00", "19:45", "21:30"]
        },
        {
            id: 'barbie',
            title: 'Barbie',
            image: "assets/img/barbie.webp",
            showtimes: ["16:30", "19:00", "21:00"]
        }
    ];

    let currentMovieTitle = '';
    let currentShowtime = '';

    let bookingModal = new bootstrap.Modal(document.getElementById('booking-modal'));
    let confirmationModal = new bootstrap.Modal(document.getElementById('confirmation-modal'));


    // --- MASKS ---

    // CARD NUMBER MASK
    let cardNumberElement = document.getElementById('card-number');
    let cardMaskOptions = {
      mask: '0000 0000 0000 0000',
      lazy: false
    }; 
    
    let cardMask = IMask(cardNumberElement, cardMaskOptions);

    // EXPIRACY DATE MASK
    let expiryDateElement = document.getElementById('expiry-date');
    let expiryDateMask = IMask(expiryDateElement, {
    mask: 'MM{/}YY',
    blocks: {
        MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2,
        },
        YY: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 99,
        },
    },
    });

    // CVV MASK
    let cvvElement = document.getElementById('cvv');
    let cvvMask = IMask(cvvElement, {
        mask: '000',
        lazy: false
    }); 

    // ------ FUNCTIONS ------ 

    // FUNCTION TO GENERATE MOVIE CARDS
    function generateMovieCards() {
        let $gallery = $('#movie-gallery');
        $gallery.empty();

         movies.forEach(movie => {
            let cardHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <button class="btn btn-primary reserve-btn" data-movie-id="${movie.id}">Reservar</button>
                        </div>
                    </div>
                </div>
            `;
            $gallery.append(cardHTML);
        });
    }

    // FUNCTION TO UPDATE TOTAL PRICE
    function updateTotalPrice() {
        let quantity = parseInt($('#ticket-quantity').val());
        let total = quantity * ticket_price;
        $('#total-price').text(`Total: $${total}`);
    }

    // FUNCTION TO SHOW CONFIRMATION
    function showConfirmation(details) {
        $('#confirmation-details').html(`
            <p><strong>Película:</strong> ${details.movie}</p>
            <p><strong>Función:</strong> ${details.showtime}</p>
            <p><strong>Cantidad de Entradas:</strong> ${details.ticketCount}</p>
            <hr>
            <h5 class="text-center"><strong>Total Pagado: $${details.price.toLocaleString('es-CL')}</strong></h5>
            <hr>
            <p class="text-center small">¡Gracias por tu compra en CineFlash!</p>
        `);
    }

    // EVENT LISTENERS

    // OPEN MODAL
    $('#movie-gallery').on('click', '.reserve-btn', function() {
        let movieId = $(this).data('movie-id');
        let movieInfo = movies.find(movie => movie.id === movieId);

        currentMovieTitle = movieInfo.title;
        currentShowtime = movieInfo.showtimes[0];

        $('#modal-movie-title').text(movieInfo.title);
        let $showtimeSelect = $('#showtime-select');
        $showtimeSelect.empty();
        movieInfo.showtimes.forEach(time => {
            $showtimeSelect.append(`<option value="${time}">${time}</option>`);
        });

        $('#ticket-quantity').val(1);
        updateTotalPrice();
        bookingModal.show();
    });
    

    // UPDATE TOTAL PRICE
    $('#ticket-quantity').on('input', function() {
        updateTotalPrice();
    });


    // CONFIRM RESERVATION
    $('#booking-form').on('submit', function(event) {
        event.preventDefault(); 
        
        let ticketCount = parseInt($('#ticket-quantity').val());
        if (isNaN(ticketCount) || ticketCount <= 0) {
            alert('Por favor, ingresa una cantidad válida de entradas.');
            return;
        }

        let reservationDetails = {
            movie: currentMovieTitle,
            showtime: $('#showtime-select').val(),
            ticketCount: ticketCount,
            price: ticketCount * ticket_price
        };

        showConfirmation(reservationDetails);
        bookingModal.hide();
        confirmationModal.show();
    });

    generateMovieCards();

    // RESET FORM WHEN MODAL HIDES
    $('#booking-modal').on('hidden.bs.modal', function () {
        $('#booking-form')[0].reset();
    });


});



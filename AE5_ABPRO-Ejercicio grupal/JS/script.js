// >>>> ARRAY WITH BOOK DATA
// NOTE: I PUT MORE BOOKS THAN THE WIREFRAME BECAUSE I NEED TO TEST FILTER CASES WITH MORE THAN 1 RESULT (EXAMPLE: SEARCH FOR "GABRIEL", "DE" OR "FICCIÓN" (WITH ACCENT. I DIDN'T WANT TO CONVERT IT TO ACCENT-FREE... I GOT FLOJERA BUT I COULD HAVE DONE IT))

let books = [
  {
    title: "El Principito",
    author: "Antoine de Saint-Exupery",
    theme: "Ficción",
    summary: "Una historia poética sobre un pequeño príncipe y sus viajes.",
    image: "../img/principito.webp"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    theme: "Programación",
    summary: "Una guía para escribir código limpio y mantenible.",
    image: "../img/clean-code.webp"
  },
  {
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    theme: "Realismo Mágico",
    summary: "Una saga familiar ambientada en el mítico pueblo de Macondo.",
    image: "../img/cien-anos.webp"
  },
  {
    title: "La Increíble y Triste Historia de la Cándida Eréndira y de su Abuela Desalmada",
    author: "Gabriel García Márquez",
    theme: "Ficción",
    summary: "Obra en la que se trata ampliamente el tema de la prostitución de menores en el Caribe Sudamericano.",
    image: "../img/candida.webp"
  },
  {
    title: "Crónica de una Muerte Anunciada",
    author: "Gabriel García Márquez",
    theme: "Novela Policial",
    summary: "Acercamiento entre lo periodístico, lo narrativo, y la novela policial. Inspirada en un suceso real.",
    image: "../img/cronica.webp"
  },
  {
    title: "1984",
    author: "George Orwell",
    theme: "Distopía",
    summary: "Una sociedad controlada por el Gran Hermano y la vigilancia extrema.",
    image: "../img/1984.webp"
  },
  {
    title: "Orgullo y Prejuicio",
    author: "Jane Austen",
    theme: "Romance",
    summary: "La complicada relación entre Elizabeth Bennet y el Sr. Darcy.",
    image: "../img/orgullo.webp"
  }
];


// >>>> FUNCTION TO DISPLAY CARDS WITH BOOK DATA FROM ARRAY "BOOKS"

function showBooks(bookList = books) {
  let content = document.getElementById('book-list');
  content.innerHTML = '';

  bookList.forEach(book => {
    let div = document.createElement('div');
    div.className = 'col';
    div.innerHTML = `
      <div class="card h-100">
          <div class="row g-0 align-items-center h-100">

            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">
                  ${book.title}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  ${book.author}
                </h6>
                <p class="card-text"><strong>Género:</strong>
                ${book.theme}
                </p>
                <p class="card-text">
                ${book.summary}
                </p>
              </div>
            </div>
          
            <div class="col-4 text-end pe-3">
              <img src="img/${book.image}" class="img-fluid rounded" alt="Portada de ${book.title}" style="max-height: 140px;">
            </div>
          
          </div>
        </div>
    `;
    content.appendChild(div);
  });

  document.getElementById('count').textContent = `Libros encontrados: ${bookList.length}`;
}


// >>>> FUNCTION TO SEARCH BOOKS BY TITLE, AUTHOR OR THEME

function searchBooks() {
  let keyword = document.getElementById('search').value.toLowerCase();
  let filtered = books.filter(book =>
    book.title.toLowerCase().includes(keyword) ||
    book.author.toLowerCase().includes(keyword) ||
    book.theme.toLowerCase().includes(keyword)
  );
  showBooks(filtered);
}


// >>>> FUNCTION TO SEND REGISTER FORM, VALIDATING FIELDS. CLEAN FIELDS AFTER SUCCESS

function sendForm() {
  let name = document.getElementById('name').value.trim();
  let mail = document.getElementById('mail').value.trim();
  let password = document.getElementById('password').value.trim();

  if (!name || !mail || !password) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  alert("Registro exitoso. ¡Bienvenido a LibroLibre!");

  document.getElementById('form-register').reset();

  return false;
}

// >>>> FUNCTION TO CLEAN FILTER

function cleanFilter() {
  document.getElementById('search').value = '';
  showBooks();
}

// >>>> METHOD TO LOAD THE CATALOG AND ACTIVATE SEARCH WHITH ENTER KEY

document.addEventListener('DOMContentLoaded', () => {
  showBooks();

  document.getElementById('search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchBooks();
    }
  });
});


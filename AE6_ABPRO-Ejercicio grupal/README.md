# CineFlash - Cartelera de Cine Interactiva 🎬

"CineFlash" es una landing page para un cine ficticio que muestra las películas actualmente en cartelera. El proyecto permite a los usuarios seleccionar una película y realizar una reserva de entradas a través de un flujo interactivo y dinámico, todo dentro de una única página web.

Este proyecto destaca por su interfaz de usuario fluida y la incorporación de herramientas para mejorar la experiencia, como el formato automático de campos de pago.

---

## Contenido

* [Versión en Español](#-versión-en-español)
* [English Version](#-english-version)

---

## 🇪🇸 Versión en Español

### ✨ Características Principales

* **Galería de Películas Dinámica**: Las tarjetas de las películas se generan automáticamente a partir de un arreglo de datos en JavaScript, permitiendo añadir o modificar la cartelera fácilmente.
* **Proceso de Reserva Integrado**: Al hacer clic en "Reservar", se abre una ventana modal que centraliza todo el proceso:
    1.  Selección de función y cantidad de entradas.
    2.  Cálculo de precio total en tiempo real.
    3.  Formulario de pago simulado.
* **Experiencia de Usuario Mejorada con IMask.js**: Se ha integrado la librería **IMask.js** para ofrecer una mejor experiencia en el formulario de pago. Esta herramienta, incorporada de forma proactiva, aplica máscaras de formato para guiar al usuario:
    * **Número de Tarjeta**: Formatea el número en bloques de cuatro dígitos (`0000 0000 0000 0000`).
    * **Fecha de Vencimiento**: Utiliza `IMask.MaskedRange` para asegurar un formato `MM/AA` válido, restringiendo los meses del 01 al 12.
    * **CVV**: Limita la entrada a 3 dígitos.
* **Modal de Confirmación**: Tras completar el pago, un modal de confirmación muestra un resumen detallado de la compra, incluyendo película, función, cantidad y total pagado.
* **Diseño Responsivo**: Construido con Bootstrap 5 para una correcta visualización en dispositivos de escritorio y móviles.

### 💻 Tecnologías Utilizadas

* **Frontend**:
    * HTML5
    * CSS3
    * JavaScript (ES6+)
* **Frameworks y Librerías**:
    * Bootstrap 5
    * jQuery
    * IMask.js

### ✒️ Autor

Proyecto desarrollado por [**Irina Serey**](https://www.linkedin.com/in/irina-serey/).

---

## 🇬🇧 English Version

### ✨ Key Features

* **Dynamic Movie Gallery**: Movie cards are generated automatically from a JavaScript data array, making it easy to add or modify the film listings.
* **Integrated Booking Process**: Clicking the "Book Now" button opens a modal window that centralizes the entire process:
    1.  Selection of showtime and number of tickets.
    2.  Real-time total price calculation.
    3.  A simulated payment form.
* **Enhanced User Experience with IMask.js**: The **IMask.js** library has been integrated to provide a better experience in the payment form. This tool, proactively incorporated into the project, applies input masks to guide the user:
    * **Card Number**: Formats the number into blocks of four digits (`0000 0000 0000 0000`).
    * **Expiry Date**: Uses `IMask.MaskedRange` to ensure a valid `MM/YY` format, restricting months from 01 to 12.
    * **CVV**: Limits the input to 3 digits.
* **Confirmation Modal**: After completing the payment, a confirmation modal displays a detailed summary of the purchase, including the movie, showtime, quantity, and total amount paid.
* **Responsive Design**: Built with Bootstrap 5 to ensure proper display on both desktop and mobile devices.

### 💻 Technologies Used

* **Frontend**:
    * HTML5
    * CSS3
    * JavaScript (ES6+)
* **Frameworks & Libraries**:
    * Bootstrap 5
    * jQuery
    * IMask.js

### ✒️ Author

Project developed by [**Irina Serey**](https://www.linkedin.com/in/irina-serey/).
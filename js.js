 const books = [
      { title: "The Real Reason Why Legend Died", author:"MANJINDER MAKHA", price: 450, image: "1.jpeg" },
      { title: "ਪਹਿਲੀ ਕਿਤਾਬ",author:"sukhpreet singh",  price: 350, image: "img 2.jpg" },
      { title: "ਹੰਨੈ ਹੰਨੈ ਪਾਤਸ਼ਾਹੀ", author:" ਜਗਦੀਪ ਸਿੰਘ", price: 650, image: "ਹੰਨੈ ਹੰਨੈ ਪਾਤਸ਼ਾਹੀ.jpg" },
      { title: "SAHEED KARTAR SINGH SRABHA ", author:"ਅਜਮੇਰ ਸਿੰਘ", price: 350, image: "SAHEED KARTAR SINGH SRABHA.jpeg" },
      { title: "ਮਹਾਰਾਣੀ ਜਿੰਦ ਕੌਰ", author:"ਸੁਖਦਿਆਲ ਸਿੰਘ", price: 350, image: "4.jpeg"},
      { title: "ਚਾਲੀ ਦਿਨ", author:"Gurpreet Singh Dhugga", price: 250, image: "7.jpeg" },
      { title: "ਪਵਿੱਤਰ ਪਾਪੀ", author:"ਨਾਨਕ ਸਿੰਘ", price: 200, image: "5.jpg" },
    ];

    function scrollToBooks() {
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    }

    function renderBooks() {
      const grid = document.getElementById("books-list");
      books.forEach((book, index) => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
          <img src="${book.image}" alt="${book.title}" />
          <p class="title">${book.title}</p>
          <p class="author">${book.author}</p>
          <p class="price">₹${book.price}</p>
          <button onclick="openOrderForm(${index})">Buy It Now</button>
        `;
        grid.appendChild(div);
      });
    }

    let selectedBook = null;

    function openOrderForm(index) {
      selectedBook = books[index];
      document.getElementById("overlay").classList.add("active");
      document.getElementById("order-form").classList.add("active");
    }

    function closeForm() {
      document.getElementById("overlay").classList.remove("active");
      document.getElementById("order-form").classList.remove("active");
    }

    document.getElementById("orderDetails").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const address = document.getElementById("address").value;
      const Pincode = document.getElementById("Pincode").value;
      const mobile = document.getElementById("mobile").value;
      const location = document.getElementById("location").value;
      alert(`Thank you ${name}! Your order for '${selectedBook.title}' has been successfully placed.`);
      closeForm();
    });

    window.onload = renderBooks;
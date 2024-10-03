const burgerBtn = document.querySelector(".neader_burger");
const menuHeader = document.querySelector(".menuBurger");
const burgerNav = document.querySelector(".burger");
const burgerDelBtn = document.querySelector(".neader_burger-del");

burgerBtn.addEventListener("click", () => {
  burgerNav.style.display = "none";
  menuHeader.style.display = "flex";
  menuHeader.style.removeProperty("container");
});

burgerDelBtn.addEventListener("click", () => {
  burgerNav.style.display = "flex";
  menuHeader.style.display = "none";
});

// const innerHTML = `
//         <nav>
//             <a href="#">Equipment</a>
//             <a href="#">About</a>
//             <a href="#">Blog</a>
//         </nav>`;

// menuHeader.innerHTML = innerHTML;

// function addBooks() {
//     const innerHTML = books.reduce((acc, item, index) => {
//       return (
//         acc +
//         `<ul>
//             <li>${item.name}</li>
//             <li>${item.author}</li>
//             <li>${item.genre}</li>
//             <li>${item.year}</li>
//             <button onclick='deletTask(${index})'class='delBtn' id="delBtn" data-action='delete'>удалить книгу</button>
//             </ul>`
//       );
//     }, "");

//     booksCont.innerHTML = innerHTML;
//   }

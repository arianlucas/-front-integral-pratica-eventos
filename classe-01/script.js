const menu = document.querySelectorAll('.menu-buttons span');
const btmenu = document.querySelector(".bt-menu");
const btmenuimg = document.querySelector(".bt-menu img");
const imgs = document.querySelectorAll(".imgs");
const favoritos = document.querySelectorAll(".item__like")

const modal = document.querySelector(".modal");
const modalLike = document.querySelector(".modal__like")
const modalFechar = document.querySelector(".fechar-modal");
const modalLink = document.querySelector(".modal a");
const modalImg = document.querySelector(".modal_img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let galeria = [];
let imagem = []
let curtidos = [];

btmenu.addEventListener("click", function () {
    menu.forEach(span => {
        exibirItem(span);

        if (!span.classList.contains("hidden")) {
            btmenuimg.src = "./assets/open-menu.svg"
        } else {
            btmenuimg.src = "./assets/closed-menu.svg"
        }

    })
})

imgs.forEach(img => {
    galeria.push(img.src);
    imagem.push(img)

    img.addEventListener("click", (event) => {

        exibirItem(modal);
        modalImg.src = img.src;
        modalImg.id = img.id;
        conferirId(modalImg);

        if (curtidos.includes(modalImg.src)) {
            modalLike.classList.remove('hidden');
        } else {
            modalLike.classList.add('hidden');
        }
    })

});

modalImg.addEventListener("dblclick", (event) => {
    let fav = imagem[event.target.id - 1].previousElementSibling;

    if (curtidos.includes(event.target.src)) {
        curtidos = curtidos.filter(like => like !== event.target.src);
        fav.classList.add('hidden');
        modalLike.classList.add('hidden');
    } else {
        curtidos.push(event.target.src);
        fav.classList.remove('hidden');
        modalLike.classList.remove('hidden');
    }

    console.log(fav)
})

prev.addEventListener("click", () => {

    const index = galeria.indexOf(modalImg.src);
    modalImg.id = index;
    modalImg.src = galeria[index - 1]
    conferirId(modalImg);
    updateModalLike()

});

next.addEventListener("click", () => {

    const index = galeria.indexOf(modalImg.src);
    modalImg.id = index + 2;
    modalImg.src = galeria[index + 1];
    conferirId(modalImg);
    updateModalLike()

});


modalFechar.addEventListener('click', () => {
    exibirItem(modal);
});


function exibirItem(item) {
    item.classList.toggle("hidden");
}

function conferirId(item) {
    if (item.id === imgs[0].id) {
        prev.style.display = "none";
    } else {
        prev.style.display = "block";
    }

    if (item.id === imgs[imgs.length - 1].id) {
        next.style.display = "none";
    } else {
        next.style.display = "block";
    }
}

function updateModalLike() {
    if (curtidos.includes(modalImg.src)) {
        modalLike.classList.remove('hidden');
    } else {
        modalLike.classList.add('hidden');
    }
}


console.log(galeria)
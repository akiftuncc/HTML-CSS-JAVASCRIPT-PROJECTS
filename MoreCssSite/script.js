const menu = document.querySelector(".navbar-menu");
const x = document.querySelector(".hidden .nav-list")

const i_class_list = ['<i class="fa-solid fa-xmark"></i>', '<i class="fa-solid fa-bars"></i>'];

let count_of_menubutton = 0
menu.addEventListener("click", function() {
    count_of_menubutton++;
    if (count_of_menubutton % 2 == 0) {
        menu.innerHTML = i_class_list[1];
        x.style.display = "none";
    } else {
        menu.innerHTML = i_class_list[0];

        x.style.display = "grid";
    }
})
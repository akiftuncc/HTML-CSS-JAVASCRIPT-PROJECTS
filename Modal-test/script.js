let count = 0;
document.querySelectorAll(".modalNum-span").forEach((element) => {
    count++;
    element.textContent = count;
});

document.querySelectorAll(".btn").forEach((element) => {
    const modalNumReel = element.querySelector(".modalNum-span");
    element.addEventListener("click", function() {
        let modalNumNumber = modalNumReel.textContent;
        const modalNum_div = document.querySelectorAll(".modal-div");
        modalNum_div.forEach((element) => {
            if (element.querySelector("span").textContent == modalNumNumber) {
                element.querySelector(".modal").classList.remove("hidden");
            }
        });
    });
});

document.querySelectorAll(".modal").forEach((element) => {
    element.addEventListener("click", function() {
        document.querySelectorAll(".modal").forEach((element) => {
            if (!element.classList.contains("hidden")) {
                element.classList.add("hidden");
            }
        });
    });
});
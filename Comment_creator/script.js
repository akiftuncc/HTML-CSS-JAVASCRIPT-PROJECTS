const btn = document.querySelector("#addBtn");
const clearBtn = document.querySelector("#clrBtn");

btn.addEventListener("click", function() {
    const isim = document.querySelector("#fname").value;
    const soyisim = document.querySelector("#lname").value;
    const yorum = document.querySelector("#comment").value;


    if (emptyCheck(isim)) {
        alert("Tüm boşlukları doldurun")
    } else if (emptyCheck(soyisim)) {
        alert("Tüm boşlukları doldurun")
    } else if (emptyCheck(yorum)) {
        alert("Tüm boşlukları doldurun");
    } else {

        const myObject = { isim: isim, soyisim: soyisim, yorum: yorum };
        let oturumDizisi;
        if (localStorage.getItem("oturum") === null) {
            oturumDizisi = [];
        } else {
            oturumDizisi = JSON.parse(localStorage.getItem("oturum"));
        }

        oturumDizisi.push(myObject);

        localStorage.setItem("oturum", JSON.stringify(oturumDizisi));

        writeOperation(isim, soyisim, yorum);

    }

})

clearBtn.addEventListener("click", function() {
    localStorage.clear();

})

JSON.parse(localStorage.getItem("oturum")).forEach(element => {
    writeOperation(element.isim, element.soyisim, element.yorum);

});

function writeOperation(isim, soyisim, yorum) {
    const container = document.querySelector(".container");
    const commentLi = document.createElement("li");
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("section-div");
    const commentName = document.createElement("div");
    commentName.classList.add("section-name");
    const commentNameh5 = document.createElement("h5");
    commentNameh5.textContent = (isim + " " + soyisim + ":")
    const commentSurname = document.createElement("div")
    commentName.classList.add("section-surname");
    const commentSurnameh5 = document.createElement("h5");
    const commentComment = document.createElement("div");
    commentDiv.classList.add("seciton-comment");
    const commenth6 = document.createElement("h6");
    commenth6.textContent = yorum

    commentComment.appendChild(commenth6);
    commentSurname.appendChild(commentSurnameh5);
    commentName.appendChild(commentNameh5);
    commentDiv.appendChild(commentName);
    commentDiv.appendChild(commentSurname);
    commentLi.appendChild(commentDiv);
    commentLi.appendChild(commentComment);
    container.appendChild(commentLi);
}






function emptyCheck(str) {
    let r = 0;
    if (!str) {
        r = 1;
    }
    return r;
}
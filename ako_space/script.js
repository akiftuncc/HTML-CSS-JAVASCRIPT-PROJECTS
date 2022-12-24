const buttons = document.querySelectorAll(".fa-solid");

buttons.forEach(button =>  {

    button.addEventListener('click',function(e){
        const number = +e.target.dataset.number;
        const data = document.querySelector(`.data-${number}`);
        data.classList.toggle('hidden');

    })

});



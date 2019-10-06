(function() {

    function changeArrow() {
        this.classList.toggle('form__input--arrow-up')
    }

    function resetArrow() {
        this.classList.remove('form__input--arrow-up')
    }

    let selectInputGroup = document.getElementsByClassName('form__input--select');

    for (let i=0; i<selectInputGroup.length; i++) {
        let selectInput = selectInputGroup[i];
        console.log(selectInput);
        selectInput.addEventListener('click', changeArrow);
        selectInput.addEventListener('blur', resetArrow);
    }
}());
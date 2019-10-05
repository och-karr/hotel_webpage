(function() {

    function changeArrow() {
        console.log(this.value);
    }

    let selectInputGroup = document.getElementsByClassName('form__input--select');

    for (let i=0; i<selectInputGroup.length; i++) {
        let selectInput = selectInputGroup[0];
        console.log(selectInput);
        selectInput.addEventListener('click', changeArrow);
    }
}());
//the main function is an IIFE;
(function (){
    //make an incrementor
    function iCounter() {
        counter = counter + 1;
    }
    //and a decrementor
    function dCounter() {
        counter = counter - 1;
    }
    //create a function to update the UI whenever it changes.
    function updateUI(){
        iValue.innerText = counter;
        /* if (counter > 0) {
            iValue.style.fontSize = counter + 'em';
        } */
    }
    //set counter initial value to zero
    let counter = 0;
    //call the pertinent functions when buttons are clicked.
    iButton.addEventListener('click', function(){
        iCounter();
        updateUI();
    });

    dButton.addEventListener('click', function(){
        dCounter();
        updateUI();
    });
})();
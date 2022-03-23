//Display variable for displaying content
let display = document.getElementById('resultDiv');

//Put button elements into an array to make working with them easy
let buttons = Array.from(document.getElementsByClassName('button'));

//map through button elements in array and add event listerner functionality
buttons.map(button => {
    button.addEventListener('click', clickFunction);

    function clickFunction(e){
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = 'Error!!';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    }
})
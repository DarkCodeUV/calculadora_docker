let screen = document.querySelector('#screen-result');

function getData(ref) {
    let value = ref.value;
    screen.value += value;
}

function clean() {
    screen.value = '';
}

function calculate() {
    try {
        //if(screen.value === undefined ) return  screen.value = 0;
        let valor = eval(screen.value);
        
        if (typeof  valor !== "number" || isNaN(eval(valor))){
            setTimeout(() => {
                clean();
            }, 1000);
            return screen.value = `Syntax ERROR`;
        }
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
        setTimeout(() => {
            clean();
        }, 1000);
    }
}







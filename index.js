let count = 0,
    h1 = document.querySelector('h1');

function increase() {
    h1.innerText = count;
    count++
}

function decrease() {
    if(count >= 0) {
     h1.innerText = count;
     count--
    } 
}

function reset() {
    document.location.reload(true)
}

function selectTheme(theme) {
    let button = document.getElementsByTagName('button');

    document.getElementsByTagName('body')[0].className = theme;
    document.getElementsByTagName('main')[0].className = theme;


    for(let i=0; i<button.length; i++) {
        button[i].className = theme;
    }

}
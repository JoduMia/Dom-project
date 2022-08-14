let div = null;
let btn,input,copyBtn;
// main function calling
window.onload = function () {
    main();
    unlock();
}




// Main function defination.
function main() {
    const root = document.getElementById('root');
    input = document.getElementById('input');
    copyBtn = document.getElementById('copybtn');
    btn = document.getElementById('btn');

// eventlisten 1
    btn.addEventListener('click', function () {
        const color = changeColor();
        root.style.backgroundColor = color;
        input.value = color.toUpperCase();
    })


// eventlisten 2
    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(input.value);

        if(div != null){
            div.remove();
            div = null;
        }

        // calling the toast messagefunction
        toastMessage(input.value);


    })

    //eventlisten 4 for change bgcolor with input hex code

    input.addEventListener('keyup', function (event) {
        const colorcode = event.target.value;
        root.style.backgroundColor = colorcode
    })

}

// changecolor function rgb type
// function changeColor() {
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);
//     const rgb = `rgb(${red}, ${green}, ${blue})`;
//     return rgb;
// }

// making rgb color to hexcolor
function changeColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgb = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    return rgb;
}


// toast message function

function toastMessage(msg) {
    div = document.createElement('div');
    const p = document.createElement('p')
    if(msg){
        p.innerHTML = `<span>' ${msg} '</span> Copied !!! `;
        div.appendChild(p);
        document.body.appendChild(div);
        div.className = 'toast-message slide-in';
        div.addEventListener('click', function () {
        this.classList.remove('slide-in');
        this.classList.add('slide-out');

        div.addEventListener('animationend', function () {
            div.remove();
        })

    })
    } else {
        alert('Nothing to copy !!!')
    }

}


// unlocking the copy button

function unlock() {
    const unlockBtn = document.getElementById('uninput');
    unlockBtn.addEventListener('keyup', function (event) {
        console.log(event.target.value);
        if((event.target.value).toLowerCase() == 'unlock'){
            console.log(btn);
            btn.removeAttribute('disabled');
            copyBtn.removeAttribute('disabled');
            input.removeAttribute('disabled');
        }
    })
}
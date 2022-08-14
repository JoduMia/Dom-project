// global variable calling for many purpose as demand as my projcet
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
        if(div != null){
            div.remove();
            div = null;
        }

        if(isValidHex(input.value)){
            navigator.clipboard.writeText(input.value);
            toastMessage(input.value);
        } else {
            alert('Can\'t copy a invalid code')
        }

        // calling the toast messagefunction


    })

    //eventlisten 4 for change bgcolor with input hex code

    input.addEventListener('keyup', function (event) {
        const colorcode = event.target.value;
        if(isValidHex(colorcode)) {
            root.style.backgroundColor = colorcode;
        }
    })
}



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
        if((event.target.value).toLowerCase() == 'unlock'){
            btn.removeAttribute('disabled');
            copyBtn.removeAttribute('disabled');
            input.removeAttribute('disabled');
        }
    })
}



//  cheking the valid color code functio
function isValidHex(code) {
    if(code.length != 7) return false;
    if(code[0] != '#') return false;
    code = code.substring(1);
    return /^[0-9A-Fa-f]{6}$/i.test(code);
}


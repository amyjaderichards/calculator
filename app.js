window.addEventListener('DOMContentLoaded', init);

// All calculator keys
const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
// Special function keys
const spec = ['*', '/', '+', '-'];


function init() {
    document.title = "JavaScript Calculator"
    console.log('ready');

    let dec = false;
    let eva = false;

    // Create a div element called container
    const container = document.createElement('div');
    // Add a class of container to the div
    container.classList.add('container');
    // Set the maximum width of the container div to 600px
    container.style.maxWidth = '600px';
    // Center the container
    container.style.margin = 'auto';
    // Add the container element to the main body
    document.body.appendChild(container);

    // Create an input element called output
    const output = document.createElement('input');
    // Set the input type to text
    output.setAttribute('type', 'text');
    // Add a class of 'output' to the input element
    output.classList.add('output');
    // Set the width to 100% (max-width previously defined)
    output.style.width = '100%';
    // Set the line height to 50px
    output.style.lineHeight = '50px';
    // Set the font size to 3em
    output.style.fontSize = '3em';
    // Align the text to the right
    output.style.textAlign = 'right';
    // Append the output element to container
    container.appendChild(output);

    // Create a div element to hold all calculator keys
    const main = document.createElement('div');
    main.classList.add('main');
    main.style.width = '100%';
    container.appendChild(main);

    opts.forEach(function (val) {
        btnMaker(val, addOutput)
    })

    btnMaker('=', evalOutput);
    btnMaker('C', clrOutput);

    function cOutput(v) {
        output.style.border = v + '1px solid';
        output.style.color = v;
    }

    function evalOutput() {
        cOutput('black');
        if (output.value === "") {
            cOutput('red');
        } else if(eva) {
            cOutput('red');
        } else {
            output.value = eval(output.value);
        }
        dec = output.value.includes('.');
    }


    function clrOutput() {
        cOutput('black');
        output.value = "";
    }

    function btnMaker(txt, myFunction) {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.style.width = '23%';
        btn.style.lineHeight = '50px';
        btn.style.margin = '1%';
        btn.style.fontSize = '2em';
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click', myFunction);
        main.appendChild(btn);
    }

    function addOutput(e) {
        cOutput('black');
        console.log(e.target);
        let char = e.target.val;

        if (char == '.') {
            if (dec) {
                char = '';
                cOutput('red');
            } else {
                dec = true;
            }
        }

        eva = spec.includes(char);

        if(eva) {
            dec = false;
        }
        output.value += char;
    }

}


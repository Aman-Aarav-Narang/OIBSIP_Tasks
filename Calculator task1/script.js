let disp = document.getElementById('disp');
buttons = document.querySelectorAll('button');
let screenValue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == '*') {
            buttonText = '*';
            screenValue += buttonText;
            disp.value = screenValue;

        } else if (buttonText == 'Clr') {
            screenValue = "";
            disp.value = screenValue;
        } else if (buttonText == 'B') {

            if (screenValue != null) {
                screenValue = screenValue.substr(0, screenValue.length - 1);
                disp.value = screenValue;

            }
        } else if (buttonText == '=') {
            disp.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            disp.value = screenValue;
        }
    })
}
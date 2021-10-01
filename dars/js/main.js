var elLang = document.querySelector('.translate-lang'),
    elSelectOne = document.querySelector('.translate-lang__select1'),
    elSelectTwo = document.querySelector('.translate-lang__select2'),
    elTextareaOne = document.querySelector('.translate-text__textarea1'),
    elTextareaTwo = document.querySelector('.translate-text__textarea2'),
    elMicrophone = document.querySelector('.translate-text__microphone');
    elIcons = document.querySelector('.translate-lang__icons');

var rec = new webkitSpeechRecognition();
rec.lang = 'uz-UZ';

rec.onend = function () {
    console.log('Yozish tugadi');
}
rec.onresult = function (evt) {
    var sound = evt.results[0][0].transcript;
    elTextareaOne.textContent = sound;
    var elTextareaOneValue = elTextareaOne.textContent;
    if (elTextareaOneValue.includes('salom')) {
        elTextareaTwo.textContent = 'Welcome';
    }
    else if (elTextareaOneValue.includes('qalaysan')) {
        elTextareaTwo.textContent = 'Ha Ismoil Gitler';
    }
}


var elClick = false;
function elementClick(element, value, icons) {
    if (!elClick) {
        element.classList.add('red')
        elClick = true;
        if (value === true) {
            icons.classList.add('reverse');
        }
    }
    else {
        element.classList.remove('red')
        elClick = false;
        if (value === true) {
            icons.classList.remove('reverse');
        }
    }
}

elMicrophone.addEventListener('click', function () {
    elementClick(elMicrophone, false, elLang);
    rec.start();
})
elIcons.addEventListener('click', function () {
    elementClick(elIcons, true, elLang);
})


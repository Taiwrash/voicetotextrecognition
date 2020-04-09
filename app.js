window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;

let parag = document.createElement('p');
const container = document.querySelector('.container');

container.appendChild(parag);


recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
    const weapon = transcript.replace(/gun|bomb|knife|bullet|bullets|knives|kill|shoot/, '💩');
         parag.textContent = weapon;

         if(e.results[0].isFinal) {
             parag = document.createElement('p');
             container.appendChild(parag);
         }
})
recognition.addEventListener('end',recognition.start);
recognition.start();
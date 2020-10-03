'use strict';{

  function setWord(){
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }

  const words =[
    'const',
    'getElementById',
    'document',
    'addEventListener',
    'let',
    'classList',
    'textContent',
    'if',
    'function',
    'Math.floor',
  ]

  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');

  document.addEventListener('click',() =>{
    if(isPlaying === true){
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  target.addEventListener('click', () =>{
    document.getElementById('text');
    document.getElementById('text2');
    document.getElementById('text3');
    text.classList.add('dest');
    text2.classList.add('dest');
    text3.classList.add('dest');
    target.classList.remove('frame');
    target.classList.add('reframe');
  });

  document.addEventListener('keydown', e =>{
    if(e.key !== word[loc]){
      return;
    }

      loc++;

      target.textContent ='_'.repeat(loc) + word.substring(loc);

      if(loc === word.length){
        if(words.length === 0){
          const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
          const result = document.getElementById('result');
          result.textContent =`Finished! ${elapsedTime} seconds!`;
          return;
        }

        setWord();
      }
  });
}
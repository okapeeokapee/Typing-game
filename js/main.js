'use strict';{
  const words =[
    'red',
    'blue',
    'pink',
  ]

  
  let word;
  let loc = 0;

  const target = document.getElementById('target');
  word = words[Math.floor(Math.random() * words.length)];
  target.textContent = word;

  document.addEventListener('keydown', e =>{
    if(e.key !== word[loc]){
      return;
    }

    if(e.key === word[loc]){
      loc++;

      //1:_ed
      //2:__d
      //3:___
      target.textContent ='_'.repeat(loc) + word.substring(loc);
    }
  });
}
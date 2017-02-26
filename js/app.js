console.log('Prepare the ray gun!')

document.querySelector('button').addEventListener('click', function(){
  console.log('FIRE AT WILL')
  let ongoing = document.getElementsByClassName('ongoing')
  let task = document.getElementsByClassName('ongoing').innerHTML
  let fillme = document.getElementsByClassName('input')
  let rotting = document.getElementById('downcount').innerHTML
  let pComp = "<p class='comp'>Pomodoro Completed</p>"
  console.log(fillme)
  console.log(ongoing)
  task = fillme.value
  fillme = ''

})

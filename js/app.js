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

//  let tomato = setInterval(downCount, 1000);

// let downCount = function(evt){
//     var minTotal = ;
//     var secTotal = ;
//     rotting = minTotal + ":" + secTotal
//
//     if (minTotal === '00' && secTotal === '00'){
//       rotting.style.display = 'none'
//       ongoing.classList.add(pComp)
//
//     }
//   }
})

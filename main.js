// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('click', (e) => {
  if(e.target.className === 'like-glyph' || 'like-glyph activated-heart'){
    let heart = e.target
    mimicServerCall()
    .then((response) => {
      if(response){
        if(heart.className === 'like-glyph'){
          heart.innerHTML = FULL_HEART
          heart.classList.toggle('activated-heart')
        }
        else {
          heart.innerHTML = EMPTY_HEART
          heart.classList.toggle('activated-heart')
        }
      }
      // update heart to full heart, add class activated-heart
    })
    .catch((error) => {
      let modalMessage = document.getElementById('modal-message')
      let modalElement = document.getElementById('modal')

      modalElement.classList.remove('hidden')
      modalMessage.innerHTML = error
      setTimeout(() =>  modalElement.classList.add('hidden'), 3000)
    })
  }
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');

  errorModal.classList.add('hidden');

  document.querySelectorAll('.like-glyph').forEach(heart => {
    heart.addEventListener('click', () => {
      if (heart.textContent === EMPTY_HEART) {
        mimicServerCall()
          .then(() => {
            heart.textContent = FULL_HEART
            heart.classList.add('activated-heart')
          })
          .catch(error => {
            modalMessage.textContent = error;
            errorModal.classList.remove('hidden')
            setTimeout(() => {
              errorModal.classList.add('hidden')
            }, 3000);
          });
      } else {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    });
  });
});

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

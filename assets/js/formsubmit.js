
const scriptURL = 'https://script.google.com/macros/s/AKfycbzOub-VhlLD2bbHWvmeoe69dq_2Bp0KPErpz7dheh1ACWZT6800Nz0qMiZI_-82Kacp/exec'
const form = document.forms['submit-to-google-sheet']
const msj = document.getElementById("mesaje")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msj.innerHTML="Submitted successfully"
      setTimeout(
        function(){
          msj.innerHTML=""  
        },
      5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
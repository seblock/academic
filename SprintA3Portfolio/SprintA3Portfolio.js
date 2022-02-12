const form = document.querySelector("form");
const clearBtn = document.querySelector("input[type='reset']");

// Bootstrap validation
(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {

      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          console.log("Send message failed!")
        } else {
          // POST is only sent after validation is passed
          event.preventDefault()
          AddMessage()
          clearBtn.click() // wish there was an event.enableDefault() method ¯\_(ツ)_/¯
          console.log("Send message succeeded!")
        }
        form.classList.add('was-validated')
      }, false),
        
      form.addEventListener('reset', function () {
        form.classList.remove('was-validated')
      }, false)

    })
})()

// POST request to the API for contactForm data.
function AddMessage() {
  const inputs = document.querySelectorAll("form input");
  const textarea = document.querySelector("#message");

  let message = new Object({
    name: `${inputs[0].value}`,
    email: `${inputs[1].value}`,
    title: `${inputs[2].value}`,
    message: `${textarea.value}`,
  });

  let json_message = JSON.stringify(message);

  let request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://cswd2portfolio2022.azurewebsites.net/contacts",
    true
  );
  request.setRequestHeader("Content-type", "application/json");

  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      alert(`Success: ${request.responseText}`);
    } 
    if (request.status != 200) {
      alert(`Failure: ${request.responseText}`);
    }
  }
  request.send(json_message);
}
console.log('javascript loaded')
$(document).ready( () => console.log('jquery loaded'))

var checks = 0

$(document).ready( () => {
  $("input[type=checkbox]").click( (event) => {
    event.target.checked ? checks++ : checks--
    console.log(checks)
    if (checks == 5) {
      alert('badge earned')
    }
  })
})

console.log('javascript loaded')
$(document).ready( () => {
  console.log('jquery loaded')
  $('.badges').hide()

})

var checks = 0



$(document).ready( () => {
  $("input[type=checkbox]").click( (event) => {
    event.target.checked ? checks++ : checks--
    console.log(checks)
    if (checks == 5) {
      badgeEarned()
    }
  })
})

$('#see-badges').click( () => {
  $('#challenge-title').hide()
  $('#checklist').hide()
  $('#topic').hide()
  $('.badges').show()
})

function badgeEarned() {
  $('#modal').modal()
}

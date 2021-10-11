$(document).ready(function() {
  $('#radio-form').submit(function(event) {
    event.preventDefault();
    const flavor = $("input:radio[name=flavor]:checked").val();
    console.log(flavor);
  })
})
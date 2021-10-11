$(document).ready(function() {
  $('#radio-form').submit(function(event) {
    event.preventDefault();
    const flavor = $("input:radio[name=flavor]:checked").val();
    const color =$("input:radio[name=color]:checked").val();
    const beatle =$("input:radio[name=beatle]:checked").val();


    console.log(flavor);
    console.log(color);
    console.log(beatle);
  })
})
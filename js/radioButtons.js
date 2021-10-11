$(document).ready(function() {
  $('#radio-form').submit(function(event) {
    event.preventDefault();
    const q1 = $("input:radio[name=q1]:checked").val();
    const q2 =$("input:radio[name=q2]:checked").val();
    const q3 =$("input:radio[name=q3]:checked").val();


    console.log(q1);
    console.log(q2);
    console.log(q3);
  })
})
$(document).ready(function() {
  $('#radio-form').submit(function(event) {
    event.preventDefault();
    const q1 = $("input:radio[name=q1]:checked").val();
    const q2 =$("input:radio[name=q2]:checked").val();
    const q3 =$("input:radio[name=q3]:checked").val();
    let answersArray = [q1,q2,q3]
    let a = 0;
    let b = 0;
    let c = 0;
    for(let char of answersArray) {
      if(char === "a") {
        a ++
      }
      if(char === "b") {
        b ++
      }
      if(char === "c") {
        c ++
      }
    }
    a = Math.round((a/8)*100)
    b = Math.round((b/8)*100)
    c = Math.round((c/8)*100)
    console.log(a, b, c)

  })
})
//document.body.innerHTML = "works"
//console.log("works")

$("#click-me").click(function(event){
  event.preventDefault();
  $("#title").html("hello world");
});
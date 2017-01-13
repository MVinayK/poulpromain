$(document).ready(function(){

  $("#products .portfolio-item").on("click", function(evt){
    var elem = "img/" + $(this).children("img").data('name')+ ".jpg";
    console.log(elem);
    $("#litratureModalId img").attr('src', elem);
    $('#litratureModalId').modal('show');
  })


})

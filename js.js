           $( document ).ready(function() {
     var c1Title= $('#r1c1Title').text();
 
    
     localStorage.setItem("t1",c1Title);
    var result = localStorage.getItem("t1");
    
    $("#title1").html(result);
    alert(result);
});
           $( document ).ready(function() {
     var c1Title= $('#r1c1Title').text();
 
                          
     localStorage.setItem("t1",c1Title);//changing c1Title to any String content like "test" will work
    var result = localStorage.getItem("t1");
    
    $("#title1").html(result);
    alert(result);
});
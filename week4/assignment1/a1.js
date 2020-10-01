function delayedResult(n1, n2, delayTime, callback){
   let output = window.setTimeout(function(){ console.log(n1+n2);}, delayTime );
   return output;
}

delayedResult(-5, 10, 2000, function(result){
    window.alert(result);});

delayedResult(4, 5, 6000, function(result){
    console.log(result);});


    

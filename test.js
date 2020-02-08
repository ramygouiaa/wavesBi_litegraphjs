function getUnique(array){
    var uniqueArray = [];
    var array = array.filter(function (el) {
        return el != "";
      });
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

var tab = ['t1','t2','t1','t3',""]

console.log(getUnique(tab));




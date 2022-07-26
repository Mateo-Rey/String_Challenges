function spinWords(string){
    return string.split(' ').map(function(string){ // the .map() runs a function on every single element in an array henceforth we can check that each element is a string with over 4 letters then execute the split,reverse,join on each character
      return (string.length > 4) ? string.split('').reverse().join('') : string
    }).join(' ');
  }
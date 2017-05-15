(function() {
  let simpleList = ['a', 'b', 'c', 'd', 'e'];
  
  function foo(a, b, c, d, e) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
  }

  // Pre-ES6 'apply' would be used to destructure an array to assignment variables
  //foo.apply(this, simpleList);

  // ES6 Spread:
  //foo(...simpleList);

  // Can be used which 'new' which 'apply' cannot
  const dates = [2017, 05, 15];
  var bar = new Date(...dates);
  console.log(bar);

  // Copy an Array - key use with Redux
  let copiedList = [...simpleList];
  copiedList[0] = 'z';
  // Updated copied list, we see simpleList is unchanged
  console.log(`${simpleList} + ${copiedList}`);

  // It can replace concat
  var concat1 = simpleList.concat(copiedList);
  var concat2 = [...simpleList, ...copiedList];
  console.log(concat2);


  // Spread operator applies only for iterable objects and allows an expression to be expanded.

  // Rest sntax looks similar but is used for destructuring arrays and objects.

  // Spread expands, Rest condences

  // Rest:

  function zog(a, d, ...theArgs) { 
    console.log(a, d, theArgs[0], theArgs[1]);
  }
  // It is different to arguments, in that it an array so array methods can be called on it, arugments is not a real array
  zog(3, 2, 1, 0);

  function bog() {
    console.log(arguments);
    // arguments is not a proper array, it must be converted:
     var args = Array.prototype.slice.call(arguments, f.length);
  }
  bog(7, 6, 5);

})();
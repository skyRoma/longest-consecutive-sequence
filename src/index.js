module.exports = function longestConsecutiveLength(array) {
	  // your solution here
  // your solution here
  if(!array.length) return 0;
    array.sort((a, b) => a - b);
    var k = 1,
        n = 0;
    var num;
    var MAX = [1];
    for (var i = 1; i < array.length; i++) {


        if (array[i] == array[i - 1] + 1) {
            k++;
            MAX.push(k);
        } else


        if (array[i] == array[i - 1]) continue;

        else {
            k = 1;
            
        }
    }

    // print(MAX);
    num = Math.max.apply(null, MAX)
    // print(array);
    return num;

}

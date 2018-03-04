module.exports = function longestConsecutiveLength(array) {
let set = new Set(array);
let max, min;
var maxLong = 0;
max = min = array[0];
for (let value of set) {
if (set.has(max + 1) && set.has(min - 1)) {
set.delete(min);
min--;
set.delete(max);
max++;
}

if (set.has(max + 1) && !set.has(min - 1)) {
set.delete(max);
max++;
}

if (!set.has(max + 1) && set.has(min - 1)) {
set.delete(max);
min--;
}

if (!set.has(max + 1) && !set.has(min - 1)) {
set.delete(value);
if ((max - min + 1) > maxLong) maxLong = (max - min + 1);
var it = set.values();
first = it.next();
max = min= first.value; 
}
}
return maxLong;
}


var isEven = function (x) { return x % 2 == 0 };

var filter = function (array, filterFn) {
    var result = [];
    
    for (var i = 0; i < array.length; i += 1) {
        var item = array[i];
        if (filterFn(item)) {
            result.push(item);
        }
    }
    return result;
};

console.log(filter([1,2,3,4], isEven))
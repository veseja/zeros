module.exports = function getZerosCount(number) {
    var nulls = 0;
    var i = 1;
    //var logfm = Math.log(5) / Math.log(10);
    for (var j = 5; j <= number; j*=5)
    {
        var rest = number % j;
        number = number - rest;
        nulls += (number / j);
        i++;
        }
    return nulls;
    //return logfm;
}

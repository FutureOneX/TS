var double = function (x) {
    if (typeof x === "number") {
        return x * 2;
    }
    return "".concat(x, "-").concat(x);
};
console.log(double(36));
console.log(double("Adriaan"));

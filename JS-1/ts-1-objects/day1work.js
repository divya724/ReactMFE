var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var user1 = {
        name: "Mickey",
        age: 99,
        loggedIn: false
    };
    var user2 = {
        name: "Mouse",
        age: 20,
        loggedIn: true
    };
    console.log(user1, user2);
    console.log("Age of  ".concat(user1.name, " is ").concat(user1.age));
    console.log();
    var users = [
        user1, user2
    ];
    console.log(users);
    console.log(users[0]);
    console.log(users[1].name);
    var user1transaction = { accountNumber: 40987654389, status: 'Active', balance: 10000, type: 'savings' };
    var user2transaction = { accountNumber: 409870054389, status: 'Active', balance: 200, type: 'current' };
    var user3transaction = __assign(__assign({}, user2), { accountNumber: 4567890879876986 });
}
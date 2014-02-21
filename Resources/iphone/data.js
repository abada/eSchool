var loggedIn = false;

Ti.App.Properties.getString("loggedIn") && (loggedIn = true);

exports.isLoggedIn = function() {
    return loggedIn;
};

exports.login = function(username, password, callback) {
    if ("error" !== username) {
        loggedIn = true;
        Ti.App.Properties.setString("loggedIn", 1);
        setTimeout(function() {
            callback({
                result: "ok"
            });
        }, 1500);
    } else setTimeout(function() {
        callback({
            result: "error",
            msg: 'Username "error" triggers login error'
        });
    }, 1500);
};

exports.logout = function(callback) {
    loggedIn = false;
    Ti.App.Properties.removeProperty("loggedIn");
    callback({
        result: "ok"
    });
};

var dataStore = [ {
    title: "History",
    prof: "Hemant Sir ",
    time: "7-7:30 am"
}, {
    title: "Geography",
    prof: "Disha Madam ",
    time: "7:30-8 am"
}, {
    title: "Algebra",
    prof: "ABC ",
    time: "8-8:30 am"
}, {
    title: "Geometry",
    prof: "XYZ ",
    time: "8:30-9 am"
}, {
    title: "Drawing",
    prof: "HM Sir ",
    time: "9-9:30 am"
}, {
    title: "Proxy",
    prof: "Hemant Sir ",
    time: "9:30-10 am"
}, {
    title: "Recess",
    prof: "",
    time: "10-11 am"
}, {
    title: "Civics",
    prof: "Debra Tr.",
    time: "11-11:30 am"
}, {
    title: "Economics",
    prof: " HM Sir ",
    time: "11:30-12 pm"
}, {
    title: "PT",
    prof: " Tiwari Sir ",
    time: "12-12:30 pm"
}, {
    title: "Marathi",
    prof: " Kulkarni Tr. ",
    time: "12:30-1 pm"
} ];

var dataBuilt = true;

if (!dataBuilt) for (var i = 0; 10 > i; i++) {
    var row = {
        title: "History- Hemant Sir ",
        time: "10-10:30 am"
    };
    dataStore.push(row);
}

exports.deleteItem = function(id) {
    dataStore.splice(id, 1);
};

exports.getItem = function(id) {
    return dataStore[id];
};

exports.getAll = function() {
    return dataStore;
};
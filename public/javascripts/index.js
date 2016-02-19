function startServer() {
    $.ajax({
        url: "/rest/startServer",
        type: "GET",
        dataType: "json",
        timeout: 3000,
        complete: function (response) { alert(JSON.stringify(response)); }
    });
}
function stopServer() {
    $.ajax({
        url: "/rest/stopServer",
        type: "GET",
        dataType: "json",
        timeout: 3000,
        complete: function (response) { alert(JSON.stringify(response)); }
    });
}
function restartServer() {
    $.ajax({
        url: "/rest/restartServer",
        type: "GET",
        dataType: "json",
        timeout: 3000,
        complete: function (response) { alert(JSON.stringify(response)); }
    });
}
//# sourceMappingURL=index.js.map
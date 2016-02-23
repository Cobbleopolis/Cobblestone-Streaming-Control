function startServer() {
    $.ajax({
        url: '/rest/startServer',
        type: 'GET',
        timeout: 3000,
        success: function (data) {
            notify(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(JSON.stringify(jqXHR) + '\n' + textStatus + '\n' + errorThrown);
        }
    });
}
function stopServer() {
    $.ajax({
        url: '/rest/stopServer',
        type: 'GET',
        timeout: 3000,
        success: function (data) {
            notify(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(JSON.stringify(jqXHR) + '\n' + textStatus + '\n' + errorThrown);
        }
    });
}
function restartServer() {
    $.ajax({
        url: '/rest/restartServer',
        type: 'GET',
        timeout: 3000,
        success: function (data) {
            notify(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(JSON.stringify(jqXHR) + '\n' + textStatus + '\n' + errorThrown);
        }
    });
}
function updateServerRunning() {
    $.ajax({
        url: '/rest/isServerRunning',
        type: 'GET',
        timeout: 3000,
        success: function (data) {
            if (data) {
                $('#runningStatus').text('Running').addClass('good').removeClass('bad');
            }
            else {
                $('#runningStatus').text('Not Running').addClass('bad').removeClass('good');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(JSON.stringify(jqXHR) + '\n' + textStatus + '\n' + errorThrown);
        }
    });
}
function notify(message) {
    $("#notification").append($('<p>' + message + '</p>').fadeIn().delay(3000).fadeOut());
}
setInterval(updateServerRunning, 3000);
//# sourceMappingURL=index.js.map
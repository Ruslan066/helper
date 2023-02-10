function sendMessage() {
    var token = '6262320229:AAGXga_bACBigzvXi_EhrzC8CGGsvS0EX0s';
    var chat_id = '468004165';
    var text = document.getElementById('message').value;
    var url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&text=' + text;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
}
let userName = document.getElementById('use')
let password = document.getElementById('pasword')

let flag = 1;

function validation() {
    if (userName.value == "") {
        document.getElementById('user').innerText = "User name is empty"
        flag = 0
    } else if (userName.value.length < 3) {
        document.getElementById('user').innerText = "Uer name is less then 3"
        flag = 0

    } else {
        document.getElementById('user').innerText = ""
        flag = 1
    }



    if (password.value == "") {
        document.getElementById('pas').innerText = "password name is empty"
        flag = 0

    } else if (password.value.length < 8) {
        document.getElementById('pas').innerText = "min limit 8 character"
        flag = 0

    } else {
        document.getElementById('pas').innerText = ""
        flag = 1
    }



    if (flag) {
        return true
    }

    else {
        return false;
    }
}
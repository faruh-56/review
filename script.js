function correctDate(date) {
    return date < 10 ? "0" + date : date;
}

function updateSaleCountdown() {
    let saleDate = new Date(2024, 8, 25);
    let currentDate = new Date();
    let dateDiff = saleDate - currentDate;

    if (dateDiff <= 0) {
        document.querySelectorAll(".date").forEach((el) => el.innerHTML = "00");
        return;
    }

    let days = Math.floor(dateDiff / (24 * 60 * 60 * 1000));
    let hours = Math.floor((dateDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minutes = Math.floor((dateDiff % (60 * 60 * 1000)) / (60 * 1000));

    let timeValue = document.getElementsByClassName("date");
    timeValue[0].innerHTML = correctDate(days);
    timeValue[1].innerHTML = correctDate(hours);
    timeValue[2].innerHTML = correctDate(minutes);
}

updateSaleCountdown();
setInterval(updateSaleCountdown, 1000);

let wrapper = document.querySelector(".wrapper");
let popUp = document.querySelector(".popUp");
let typ = document.querySelector(".wrapper .thankYouPage");
let btns = document.querySelectorAll("section button");
let formBtn = document.querySelector(".form button")
let username = document.getElementsByName("username")[0]
let userphone = document.getElementsByName("userphone")[0]

btns.forEach(btn => {
    btn.addEventListener('click', showPopUp);
});

wrapper.addEventListener('click', hidePopUp);

function showPopUp() {
    wrapper.style.display = "flex";
    popUp.style.display = "flex";
    typ.style.display = "none";
}

function hidePopUp(event) {
    if (event.target === wrapper) {
        wrapper.style.display = "none";
    }
}

formBtn.addEventListener("click", sendForm)

function sendForm() {
    event.preventDefault()
    if(username.value.length > 1 ) {
        if(userphone.value.length == 13 ) {
            showTyp()
        } else {
            console.log('Неверный номер')
        } 
    } else {
        console.log('Короткое Имя')
    }
}

function showTyp() {
    popUp.style.display = "none";
    typ.style.display = "flex";
}

function showFromPlace(place) {
    document.querySelector('.fromPlace').value = place;
    
if (document.querySelector('.fromPlace').value == document.querySelector('.toPlace').value) {
    alert('Cuộc đời là những chuyến đi, nhưng điểm đi và điểm đến giống nhau nghĩa là bạn đang dậm chân tại chỗ đấy!!');
    document.querySelector('.fromPlace').value = '';
}
}
function showToPlace(place) {
    document.querySelector('.toPlace').value = place;
    
if (document.querySelector('.fromPlace').value == document.querySelector('.toPlace').value) {
    alert('Cuộc đời là những chuyến đi, nhưng điểm đi và điểm đến giống nhau nghĩa là bạn đang dậm chân tại chỗ đấy!!');
    document.querySelector('.toPlace').value = '';
}
}

document.querySelector('.exchange-btn').onclick = function() {
    console.log('Yep')
    let t = document.querySelector('.fromPlace').value;
    document.querySelector('.fromPlace').value = document.querySelector('.toPlace').value;
    document.querySelector('.toPlace').value = t;
};


let dropdown = document.querySelectorAll('.dropdown');
for (let i = 0; i < dropdown.length; i++){
dropdown[i].onclick = function() {
    dropdown[i].classList.toggle('active');
}}

let language = document.querySelectorAll('.language');
for (let i = 0; i < language.length; i++){
language[i].onclick = function() {
    for (let i = 0; i < language.length; i++){
        if (language[i].classList.contains('language--active'))
            language[i].classList.remove('language--active');
    }
    language[i].classList.add('language--active');
}}

document.querySelector('.menu-btn').onclick = function() {
    document.querySelector('.nav').classList.toggle('active');
}
document.querySelector('.exchange-fake-btn').onclick = function() {
    let t = document.querySelector('.from-value-fake').innerHTML;
    document.querySelector('.from-value-fake').innerHTML = document.querySelector('.to-value-fake').innerHTML;
    document.querySelector('.to-value-fake').innerHTML = t;
}

let errorBtns = document.querySelectorAll('.error-btn');
errorBtns.forEach((errorBtn, index) => {
    errorBtn.onclick = function() {
        console.log('error active')
    document.querySelector('.error').classList.toggle('active');
    }
})

document.querySelector('.error').onclick = function() {
    document.querySelector('.error').classList.remove('active');
}

document.querySelector('.nav').onclick = function() {
    if (document.querySelector('.nav').classList.contains('active'))
    document.querySelector('.nav').classList.toggle('active');
}

let tabs = document.querySelectorAll('.tab-item');
let panes = document.querySelectorAll('.tab-pane');

tabs.forEach((tab, index) => {
    let pane = panes[index];
    tab.onclick = function() {
        document.querySelector('.tab-item.active').classList.remove('active');
        document.querySelector('.tab-pane.active').classList.remove('active');
        this.classList.add('active');
        pane.classList.add('active');

        if (tabs[2].classList.contains('active')){
        document.querySelector('.app__header').style.background = '#4d46fa';
        document.querySelector('.app__header').style.color = 'white';
        document.querySelector('.app__header .logo a').style.color = 'white';
        document.querySelector('.app__header .bookingNow p').style.color = '#4d46fa';
        document.querySelector('.app__header .bookingNow p').style.background = 'white';
        document.querySelector('.app__footer').style.background = '#eeeeee';
        document.querySelector('.app__footer').style.position = 'relative';
        
        }
        else {
        document.querySelector('.app__header').style.background = 'transparent';
        document.querySelector('.app__header').style.color = 'black';
        document.querySelector('.app__header .logo a').style.color = 'black';
        document.querySelector('.app__header .bookingNow p').style.background = '#4d46fa';
        document.querySelector('.app__header .bookingNow p').style.color = 'white';
        document.querySelector('.app__footer').style.background = 'white';
        document.querySelector('.app__footer').style.position = 'fixed';
        }
    }
})

let searchBtn = document.querySelector('.search-btn');
searchBtn.onclick = function() {
    document.querySelector('.tab-item.active').classList.remove('active');
    document.querySelector('.tab-pane.active').classList.remove('active');
    panes[2].classList.add('active');
    tabs[2].classList.add('active');

    if (tabs[2].classList.contains('active')){
    document.querySelector('.app__header').style.background = '#4d46fa';
    document.querySelector('.app__header').style.color = 'white';
    document.querySelector('.app__header .logo a').style.color = 'white';
    document.querySelector('.app__header .bookingNow p').style.color = '#4d46fa';
    document.querySelector('.app__header .bookingNow p').style.background = 'white';
    document.querySelector('.app__footer').style.background = '#eeeeee';
    document.querySelector('.app__footer').style.position = 'relative';
    }
    else {
    document.querySelector('.app__header').style.background = 'transparent';
    document.querySelector('.app__header').style.color = 'black';
    document.querySelector('.app__header .logo a').style.color = 'black';
    document.querySelector('.app__header .bookingNow p').style.background = '#4d46fa';
    document.querySelector('.app__header .bookingNow p').style.color = 'white';
    document.querySelector('.app__footer').style.background = 'white';
    document.querySelector('.app__footer').style.position = 'fixed';
    }
}

let detailTabs = document.querySelectorAll('.detail-tab');
let detailItems = document.querySelectorAll('.detail-item');

detailTabs.forEach((detailTab, index) => {
    let detailItem = detailItems[index];
    detailTab.onclick = function() {
        document.querySelector('.detail-tab.active').classList.remove('active');
        document.querySelector('.detail-item.active').classList.remove('active');
        this.classList.add('active');
        detailItem.classList.add('active');
    }
})

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;

document.querySelector(".departureDay").setAttribute("min", today);
document.querySelector(".departureDay").setAttribute("value", today);
document.querySelector(".returnDay").setAttribute("min", today);
document.querySelector(".returnDay").setAttribute("value", today);
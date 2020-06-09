'use strict';
const lang = 'en';
const ruWeeks = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const enWeeks = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

if (lang === 'en') {
    alert(enWeeks);
} else if (lang === 'run') {
    alert(ruWeeks);
} else {
    alert('Wrong lang!');
}

switch (lang) {
    case 'en':
        alert(enWeeks);
        break;
    case 'ru':
        alert(ruWeeks);
        break;
    default:
        alert('Wrong lang!');
}

const arr = [
    ['ru', ruWeeks],
    ['en', enWeeks]
];

alert(arr.find((item) => item[0] === lang)[1]);

const namePerson = 'Артем';

console.log(namePerson === 'Артем' ? 'директор' : (namePerson === 'Максим' ? 'преподаватель' : 'студент'));

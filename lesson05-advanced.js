'use strict';

// lesson05
const newArr = ['342', '200', '567', '400', '28', '42', '290'];

newArr.forEach(em => {
    if (em.startsWith('2' || em.startsWith('4'))) {
        console.log(em);
    }
});

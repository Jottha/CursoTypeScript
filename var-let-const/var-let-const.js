'use strict';
let a = 1;

function funcao() {
    console.log(a);

    let b = 2;

    if(true) {
        let c = 3;
        console.log(b);
    }
    console.log(c);
}

funcao();
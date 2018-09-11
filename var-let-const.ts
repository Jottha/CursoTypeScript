const a = 1;

function funcao() {
    console.log(a);

    const b = 2;

    if(true) {
        const c = 3;
        console.log(b);
    }
    console.log(c);
}

funcao();
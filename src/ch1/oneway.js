function zeroOrOneEdit(s1, s2){
    if( Math.abs(s1.length - s2.length) > 1 ){
        return false;
    }

    let smaller = s1.length < s2.length ? s1 : s2;
    let bigger = s1.length >= s2.length ? s1 : s2;

    let changeCount = 0;
    let offset = 0;
    
    for(let i = 0; i < smaller.length; i++){
        if(  smaller.charAt(i) !== bigger.charAt(i+offset) ){
            changeCount++;

            if( smaller.length !== bigger.length ){
                offset++;
            }
        }
    }

    return changeCount < 2;
}

console.log(zeroOrOneEdit('pale', 'ple'));
console.log(zeroOrOneEdit('pales', 'pale'));
console.log(zeroOrOneEdit('pale', 'bale'));
console.log(zeroOrOneEdit('pale', 'bake'));
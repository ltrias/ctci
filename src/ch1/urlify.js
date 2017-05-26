var input = "Mr John Smith    ";

function urlify(input, size){;
    let p = input.length - 1;

    for(let i = size - 1; i > 0; i--){
        let c = input[i];

        if( c !== ' ' ){
            input[p--] = c;
        }else{
            input[p--] = '0';
            input[p--] = '2';
            input[p--] = '%';
        }
    }
}

let _input = input.split('');
urlify(_input, 13);

console.log('[' + input + ']');
console.log('[' + _input.join('') + ']');
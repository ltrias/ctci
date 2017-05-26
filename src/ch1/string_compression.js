'use strict';

export function compress(s){
    let s2 = '';

    for(let i = 0; i < s.length && s2.length < s.length;){
        let currentChar = s.charAt(i);
        let counter = 0;

        while( s.charAt(i) === currentChar ){
            counter++;
            i++;
        }

        s2 += currentChar + counter;
    }

    return s2.length < s.length ? s2 : s;
}
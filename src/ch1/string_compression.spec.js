
import { expect } from 'chai';
import * as funcs from './string_compression';

for (let key in funcs) {
  let func = funcs[key];

  describe('String compression: ' + key, function() {
    [
      ['aaaaa', 'a5'],
      ['aabcccccaaa', 'a2b1c5a3']
    ].forEach(args => {
      it(`must compress string '${args[0]}' to '${args[1]}'`, function() {
        expect(func(args[0])).to.equal(args[1]);
      });
    });

    [
      ['a', 'a'],
      ['abcd', 'abcd'],
      ['aa', 'aa'],
      ['', '']
    ].forEach(args => {
      it(`must not compress string '${args[0]}'`, function() {
        expect(func(args[0])).to.be.equal(args[1]);
      });
    });
  });
}
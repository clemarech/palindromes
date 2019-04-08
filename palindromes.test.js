const palindromes = require('./palindromes.js')

describe('palindromes()', ()=> {
    it('identify one-word palindromes', ()=> {
        expect(palindromes('madam')).toEqual(['madam'])
    })
})
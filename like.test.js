const likes = require('./likes');
describe('Likes', () => {
    test('[] should equal no one likes this', () => {
        const result  = likes([]);
        expect(result).toEqual('no one likes this');
    });
    test('[Peter] should equal Peter likes this', () => {
        const result  = likes(['Peter']);
        expect(result).toEqual('Peter likes this');
    });
    test('[Jacob, Alex] should equal Jacob and Alex like this', () => {
        const result  = likes(['Jacob', 'Alex']);
        expect(result).toEqual('Jacob and Alex like this');
    });
    test('[Max, John, Mark] should equal Max, John and Mark like this', () => {
        const result  = likes(['Max', 'John', 'Mark']);
        expect(result).toEqual('Max, John and Mark like this');
    });
    test('[Alex, Jacob, Mark, Max] should equal Alex, Jacob and 2 others like this', () => {
        const result  = likes(['Alex', 'Jacob', 'Mark', 'Max']);
        expect(result).toEqual('Alex, Jacob and 2 others like this');
    });
})
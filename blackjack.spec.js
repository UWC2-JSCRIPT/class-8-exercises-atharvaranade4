describe('Blackjack tests', () =>{

    //declare values
    const ace = { val: 11, displayVal: 'Ace', suit: 'hearts' };
    const two = { val: 2, displayVal: '2', suit: 'hearts' };
    const four = { val: 4, displayVal: '4', suit: 'hearts' };
    const five = { val: 5, displayVal: '5', suit: 'hearts' };
    const six = { val: 6, displayVal: '6', suit: 'hearts' };
    const nine = { val: 9, displayVal: '9', suit: 'hearts' };
    const ten = { val: 10, displayVal: '10', suit: 'hearts' };

    describe('dealerShouldDraw', ()=>{
        it(() => {
            const correct = false;
            expect(dealerShouldDraw([ten, nine])).toEqual(correct);
        });
        it(() => {
            const correct = true;
            expect(dealerShouldDraw([ace, six])).toEqual(correct);
        });
        it( () => {
            const correct = false;
            expect(dealerShouldDraw([ten, six, ace])).toEqual(correct);
        });
        it(() => {
            const correct = true;
            expect(dealerShouldDraw([two, four, two, five])).toEqual(correct);
        });
    })

});
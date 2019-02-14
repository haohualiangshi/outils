describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`outils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(outils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('outils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(outils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`outils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(outils.arrayEqual(arr, arr))
        });
    });

    describe('#RemoveMulIndex()',function(){
        it('outils.removeMulIndex([1,2,3,4],[2,3]) should return [1, 2]',function(){
            assert(outils.arrayEqual(outils.removeMulIndex([1,2,3,4],[2,3]) ,[1, 2]))
            // console.log(outils.removeMulIndex([1,2,3,4],[2,3]))
        })
    })
});
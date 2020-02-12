

beforeEach(() => {
    jest.resetModules();
    require('../src/puttingStuffOnGlobal');
})

afterEach(() => {
    window.myGlobalVar = undefined;
})


describe('puttingStuffOnGlobal', () => {
    describe('when shouldSetUp is true', () => {
        beforeAll(() => { window.shouldSetUp = true; console.log('beforeAll'); });
        afterAll(() => { window.shouldSetUp = undefined; console.log('afterAll'); });
        test('global test', () => {
            expect(window.myGlobalVar).toEqual('testGlobal');
        });
    });

    test('global test', () => {
        expect(window.myGlobalVar).toEqual('defaultValue');
    });
});

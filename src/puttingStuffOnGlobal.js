const shouldSetUp = window.shouldSetUp;

if(shouldSetUp) {
    window.myGlobalVar = 'testGlobal';
} else {
    window.myGlobalVar = 'defaultValue';
}

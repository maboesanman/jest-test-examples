module.exports = function greet(name) {
    if(typeof(name) !== 'string') {
        throw new Error('name needs to be a string');
    }

    if(name == '') {
        return 'Hello!';
    }
    return 'Hello, ' + name;
}
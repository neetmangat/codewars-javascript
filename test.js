let Test = {
    assertEquals: (func, output, error) => {
        func === output ? console.log('Success! -- Test Passed.') : console.log(`Failure! -- ${error}`);
    }
}

module.exports = Test;
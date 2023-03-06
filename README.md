# RR-SNAPSHOT-TESTING

Snapshot testing is a new testing tool to add to your tool box, but it is not meant to replace your testing tool box. There are times when you will want to use TDD and other times when taking a snapshot test will be beneficial for your application. You may want to use both when writing tests for an application.

Here are some advantages and disadvantages of snapshot testing.

Advantages:

- There is better coverage of testing code.
- The snapshot tests are easy to write.
- The snapshot tests are easy to update.

Disadvantages:

- When using snapshots, TDD is not used since the code is already written.
- The tests can be overused.
- It is possible to update the tests to make them pass without changing the code. This can give a false positive if the snapshot includes an error.

## Write first snapshot

test('renders a snapshot', () => {
    const tree = renderer.create(<App/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

- We set a variable (usually called 'tree') equal to renderer.create. We pass a React element in JSX form, App, to renderer.create. renderer.create renders the element and creates a special output that has a toJSON method.
- The call toJSON is important because it turns the component representation into JSON. This makes it easier to save as a snapshot and compare to other snapshots. You can see what the output looks like by adding a console.log(tree) after renderer.create. Remove the toJSON call to see what the object looks like without it. Make sure to add the toJSON call back before moving to the next step.
- The link expect(tree).toMatchSnapshot() compares the new snapshot in tree to the saved snapshot if one already exists. If they match, the test passes. If they do not match, the test fails. If a snapshot does not already exist, it creates one, and the test passes.
- Jest will look in a special directory, __snapshots__, for a snapshot that matches the test file currently running. For example, when running snapshot tests in App.test.js, it will look for App.test.js.snap when running snapshot comparisons.

[`npm test`] to run test
any update you can press "u" in the terminal to update

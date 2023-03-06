import App from "./App";
//install "npm install --save-dev react-test-renderer"
// import JEST snapshot
import renderer from "react-test-renderer";
// run "npm test"

// writing Test
test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})
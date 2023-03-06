import GitHubCard from "./GitHubCard";
import renderer from "react-test-renderer";

// Challenge  #1
test('renders card component', () => {
    const tree = renderer.create(<GitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
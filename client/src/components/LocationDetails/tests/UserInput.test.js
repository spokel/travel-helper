import UserInput from "../components/UserInput"
import { shallow } from 'enzyme';

describe("UserInput component", () => {
  it("renders without crashing", () => {
    shallow(<UserInput />);
  });
  
  it("renders Input header", () => {
    const wrapper = shallow(<UserInput />);
    const header = <h2 className='input-header'>The best travel guide for the best price</h2>;
    expect(wrapper.contains(header)).toEqual(true);
  })
})

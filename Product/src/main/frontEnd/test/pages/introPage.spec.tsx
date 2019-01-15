
import { configure, shallow, ShallowWrapper } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { IntroPage } from "../../src/pages/intro/introPage";

configure({ adapter: new Adapter() });

let child: ShallowWrapper<undefined, undefined>;

beforeEach(() => {
    child = shallow(<IntroPage />);
});

// checking that all is fine and component has been rendered
it("should render without error", () => {
    expect(true).toBe(true);
});

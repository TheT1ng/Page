import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-15';
import {Home} from '../../src/components/Home';
Enzyme.configure({ adapter: new Adapter() });
describe('Home', () => {
    it('should render correctly', () => {
        const output = shallow(
            <Home/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
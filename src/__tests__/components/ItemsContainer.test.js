import React from 'react';
import { shallow } from 'enzyme';
import ItemsContainer from '../../components/ItemsContainer';

describe('ItemsContainer', () => {
    it('renders', () => {
        const component = shallow(<ItemsContainer />);

        expect(component).toMatchSnapshot();
    });
});

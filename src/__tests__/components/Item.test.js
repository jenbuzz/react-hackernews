import React from 'react';
import { shallow } from 'enzyme';
import Item from '../../components/Item';

describe('Item', () => {
    it('renders - item not set', () => {
        const component = shallow(<Item />);

        expect(component).toMatchSnapshot('item-not-set');
    });

    it('renders - item is set', () => {
        const item = {
            title: 'Lorem ipsum',
            url: 'http://localhost',
            time: 1591024073,
        };

        const component = shallow(<Item item={item} />);

        expect(component).toMatchSnapshot('item-is-set');
    });
});

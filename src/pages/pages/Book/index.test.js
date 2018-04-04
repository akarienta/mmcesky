import React from 'react';
import { mount } from 'enzyme';

import Book from './index';

it('has a proper headline', () => {
    const wrapper = mount(<Book match={{ params: { slug: 'test-book' } }} />);
    expect(wrapper.find('h1').text()).toBe('Book test-book');
});

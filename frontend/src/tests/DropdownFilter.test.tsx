import React from 'react';
import TestRenderer from 'react-test-renderer';
import MenuListComposition from '../components/Dropdown/DropdownFilter';



it('renders SearchBar correctly ', () => {
    const tree = TestRenderer.create(<MenuListComposition />).toJSON();
    expect(tree).toMatchSnapshot();
});

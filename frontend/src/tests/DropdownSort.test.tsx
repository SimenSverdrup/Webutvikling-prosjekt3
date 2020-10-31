import React from 'react';
import { render } from '@testing-library/react' // ES6
import MenuListComposition1 from '../../src/components/Dropdown/DropdownSort';



it('renders Menu correctly ', () => {
    const { container } = render(<MenuListComposition1 />);
    expect(container).toMatchSnapshot();
});

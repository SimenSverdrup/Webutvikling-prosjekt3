import React from 'react';
import { render } from '@testing-library/react' // ES6
import LongMenu from '../../src/components/Dropdown/dropdownFilterSlider';



it('renders Menu correctly ', () => {
    const { container } = render(<LongMenu />);
    expect(container).toMatchSnapshot();
});

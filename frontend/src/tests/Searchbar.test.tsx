import React from 'react';
import { render } from '@testing-library/react' // ES6
import SearchBar from '../components/SearchBar/SearchBar';



it("renders SearchBar correctly", () => {
        const { container } = render(<SearchBar/>);
        expect(container).toMatchSnapshot();
});


import React from 'react';
import {render} from '@testing-library/react';
import Card from './Card';

// Smoke Test
test("renders without crashing", () => {
    render(<Card/>);
})

// Snapshot Test
test("matches snapshot", () => {
    const {asFragment} = render(<Card/>);
    expect(asFragment()).toMatchSnapshot();
});
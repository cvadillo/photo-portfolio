import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup);

describe('About component', () => {
	//Test to see if the element renders
	it('renders', () => {
		render(<About />)
	});

	//Test case to the DOM snapshot
	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(<About />);
		expect(asFragment()).toMatchSnapshot();
	})
})
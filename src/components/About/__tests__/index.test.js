import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test

    //First test - verify the component is rendering
    it('renders', () => {
        render(<About />)
    });

    //Second test - callback function runs the test
    it('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    });
})
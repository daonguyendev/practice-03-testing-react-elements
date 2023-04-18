import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
    
describe('App component', () => {
    it('Should render without errors', () => {
        const component = shallow(<App />);
        const expectedContentLength = 1;
        const actualContent = component.find('.app-pages');
        expect(actualContent.length).toBe(expectedContentLength);
    })
});
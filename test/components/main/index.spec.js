import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {MainComponent} from '../../../src/components/main/index';
import {Container, Error, Button, Logo} from '../../../src/components/main/styles';

Enzyme.configure({ adapter: new Adapter() });

describe('MainComponent', () => {
    let props = {
        setPreloading: jest.fn(),
        fetchDeck: jest.fn(),
        fetchCards: jest.fn(),
        changeLogoBgColor: jest.fn(),
    };
    describe('on render', () => {
        it('should render Container element', () => {
            const wrapper = shallow(<MainComponent {...props} />);

            expect(wrapper.find(Container).length).toEqual(1);
        });
        it('should have Logo element', () => {
            props = {...props};
            const wrapper = shallow(<MainComponent {...props} />);

            expect(wrapper.find(Logo).length).toEqual(1);
        });
        it('should pass logoBgColor props to Logo element', () => {
            props = {...props, logoBgColor: '#777'};
            const wrapper = shallow(<MainComponent {...props} />);

            expect(wrapper.find(Logo).props().logoBgColor).toEqual('#777');
        });
        it('should have Error element', () => {
            props = {...props, error: 'someError'};
            const wrapper = shallow(<MainComponent {...props} />);

            expect(wrapper.find(Error).props().children).toEqual('someError');
        });
        it('should have 2 Button elements', () => {
            const wrapper = shallow(<MainComponent {...props} />);

            expect(wrapper.find(Button).length).toEqual(2);
        });
    });
    describe('ComponentDidMount', () => {
        it('should call fetchDeck prop', () => {
            const wrapper = shallow(<MainComponent  {...props} />);
            props.fetchDeck.mockClear();

            wrapper.instance().componentDidMount();

            expect(props.fetchDeck.mock.calls.length).toEqual(1);
        });
    });
    describe('when first button is clicked', () => {
        it('should call changeLogoBgColor prop', () => {
            const wrapper = shallow(<MainComponent  {...props} />);
            props.changeLogoBgColor.mockClear();

            wrapper.find(Button).at(0).simulate('click');

            expect(props.changeLogoBgColor.mock.calls.length).toEqual(1);
        });
    });
    describe('when second button is clicked', () => {
        it('should call fetchDeck and fetchCards props', () => {
            const wrapper = shallow(<MainComponent  {...props} />);
            props.fetchDeck.mockClear();

            wrapper.find(Button).at(1).simulate('click');

            expect(props.fetchDeck.mock.calls.length).toEqual(1);
        });
    });
});



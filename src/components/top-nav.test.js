import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav'

describe('</>', ()=> {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Renders the "What" and "New Game" links', () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.find('ul').hasClass('clearfix')).toEqual(true);
  })

  it('Should fire the onRestartGame callback on click', () => {
    const onRestartGameCallback = jest.fn();
    const wrapper = mount(<TopNav onRestartGame={onRestartGameCallback} />);
    const newLink = wrapper.find('.new');
    newLink.simulate('click', {preventDefault(){}});

    expect(onRestartGameCallback).toHaveBeenCalled();


  })
})

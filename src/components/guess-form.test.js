import React from 'react';

import GuessForm from './guess-form';
import {shallow, mount} from 'enzyme';

describe('<GuessForm />', ()=> {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Fire onMakeGuess on submit', () => {
    const onMakeGuess = jest.fn();
    const value = "10";
    const wrapper = mount(<GuessForm onMakeGuess={onMakeGuess}/>);
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(onMakeGuess).toHaveBeenCalledWith(value);
  })

});

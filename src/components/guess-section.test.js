import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

import GuessSection from './guess-section'
import {shallow} from 'enzyme';

describe('<GuessSection />', () => {
  it('Renders without crashing', () => {
    const onMakeGuess = jest.fn();
    shallow(<GuessSection feedback="" guessCount={0} onMakeGuess={onMakeGuess}/>)
  })
})

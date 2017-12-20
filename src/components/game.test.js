import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import Game from './game'
import {shallow, mount} from 'enzyme';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />)
  });

  it('Can start a new game', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [1, 2, 3, 4],
     feedback: 'Awesome',
     correctAnswer: -1
   });
   wrapper.instance().restartGame();
   expect(wrapper.state('guesses')).toEqual([]);
   expect(wrapper.state('feedback')).toEqual('Make your guess!');
   expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
   expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);

  })
});

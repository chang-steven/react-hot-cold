import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';

import StatusSection from './status-section'
import {shallow} from 'enzyme';

describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection auralStatus="" guesses={[]} />);
  })
})

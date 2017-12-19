import React from 'react';

import Feedback from './feedback';
import {shallow, mount} from 'enzyme';

describe('<Feedback />', ()=> {
  it('Renders without crashing', () => {
    shallow(<Feedback feedback="" guessCount={0}/>);
  });
});

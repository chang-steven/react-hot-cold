import React from 'react';
import TopNav from './top-nav';

import Header from './header'
import {shallow} from 'enzyme';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    const auralCallback = jest.fn();
    const onRestartGameCallback = jest.fn();
    shallow(<Header onGenerateAuralUpdate={auralCallback} onRestartGame={onRestartGameCallback}/>)
  });
})

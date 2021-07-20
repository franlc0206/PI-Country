import React from 'react';
import { configure, mount, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import LandingPage from './index';
import { Link } from 'react-router-dom';

configure({adapter: new Adapter()});

describe('LandingPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper =  shallow(<LandingPage />)
  })

  it('should render a button', () => {
    expect(wrapper.find('button')).toHaveLength(1)
  })
  it('this button it has to contains the text "Homepage" and change the route to "/home"', () => {
    expect(wrapper.find('button').text()).toEqual('Homepage')
    expect(wrapper.find(Link).prop('to')).toEqual('/home/!#')
  })
  
});
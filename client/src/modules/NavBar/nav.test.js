import React from 'react';
import { configure, mount, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import NavBar from './NavBar.js';
import { Link } from 'react-router-dom';
import Filtros from '../Filtros/Filtros.js';

configure({adapter: new Adapter()});

describe('NavBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper =  shallow(<NavBar />)
  })

  it('should render a text that´s change the route to "/home"', () => {
    expect(wrapper.find('a')).toHaveLength(1)
    expect(wrapper.find('a').prop('href')).toEqual('/home/!')
  })
  it('should render a text that´s change the route to "/home"', () => {
    expect(wrapper.find(Filtros)).toHaveLength(1)
  })
  
});
// @flow
import React from 'react';
import axios from 'axios';
import { mount } from 'enzyme';
import Cookies from 'js-cookie';
import { Notifications } from '../index';

const component = <Notifications element={<div>Hello</div>} />;

describe('Notifications', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({
      data: {
        signed_in: 1,
        fetch_notifications: [
          'First notification',
          'Second notification',
        ],
      },
    }));
  });

  fit('fetches notifications', () => {
    const wrapper = mount(component);
    expect(wrapper.text()).toContain('First notification');
  });
});

import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'
import Root from '../containers/Root'
import { getStore } from '../index'
import jsonState from '../fixtures/searchedforAhmed'
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';


const store = getStore()


store.replaceReducer(() => jsonState)

storiesOf('searchedForAhmed', module)
  .addDecorator(StoryRouter())
  .add('params', () => (
    <Root store={getStore()} />
  ));

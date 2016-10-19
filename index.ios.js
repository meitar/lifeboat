/**
 * @license GPL-3.0
 */

'use strict';

/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './App/index.js';

export default class Lifeboat extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('Lifeboat', () => Lifeboat);

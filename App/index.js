/**
 * Buoy "native" client app.
 *
 * @license GPL-3.0
 */

'use strict';

/**
 * The `@flow` tag here adds some kind of type-checking?
 *
 * @flow
 */

import React, { Component } from 'react';
import AlertScreen from './components/AlertScreen';

export default class Main extends Component {
  render() {
    return (
      <AlertScreen />
    );
  }
}

/* vim: set expandtab shiftwidth=2 tabstop=2 softtabstop=2 : */

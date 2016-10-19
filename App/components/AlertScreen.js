/**
 * Buttons, our way.
 *
 * @license GPL-3.0
 */

'use strict';
/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

export default class AlertScreen extends Component {
  render() {
    return (
      <View style={styles.page_wrapper}>
        <View style={styles.half_height}>
          <View style={styles.flex_row}>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.text}>TODO: Timed Alert Button here</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.text}>TODO: Contextual Alert Button here</Text>
            </TouchableHighlight>
          </View>
        </View>
        <TouchableHighlight style={[styles.button, styles.immediate_button]}>
          <Text style={styles.text}>TODO: Immediate Alert Button here</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page_wrapper: {
    flex: 1
  },
  half_height: {
    flex: 1
  },
  flex_row: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    borderColor: '#FF0000',
    borderStyle: 'dashed',
    borderWidth: 1
  },
  immediate_button: {
    flex: 2,
    borderColor: '#0000FF'
  },
  text: {
    color: '#666666'
  }
});

/* vim: set expandtab shiftwidth=2 tabstop=2 softtabstop=2 : */

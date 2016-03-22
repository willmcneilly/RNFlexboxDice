import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Pip from '../Pip';

const DieFace5 = (props) =>
  <View style={styles.face}>
    <View style={styles.outerColumn}>
      <Pip />
      <Pip />
    </View>
    <View style={styles.innerColumn}>
      <Pip />
    </View>
    <View style={styles.outerColumn}>
      <Pip />
      <Pip />
    </View>
  </View>;

const styles = StyleSheet.create({
  face: {
    width: 160,
    height: 160,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1
  },
  outerColumn: {
    justifyContent: 'space-between'
  },
  innerColumn: {
    justifyContent: 'center'
  }
});

export default DieFace5;

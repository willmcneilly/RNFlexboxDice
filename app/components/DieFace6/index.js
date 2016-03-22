import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Pip from '../Pip';

const DieFace6 = (props) =>
  <View style={styles.face}>
    <View style={styles.column}>
      <Pip />
      <Pip />
      <Pip />
    </View>
    <View style={styles.column}>
      <Pip />
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
  column: {
    justifyContent: 'space-between'
  }
});

export default DieFace6;

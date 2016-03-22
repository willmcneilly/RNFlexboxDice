import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Pip from '../Pip';

const DieFace4 = (props) =>
  <View style={styles.face}>
    <View style={styles.column}>
      <Pip />
      <Pip />
    </View>
    <View style={styles.column}>
      <Pip />
      <Pip />
    </View>
  </View>;

const styles = StyleSheet.create({
  face: {
    width: 160,
    height: 160,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  column: {
    justifyContent: 'space-between'
  }
});

export default DieFace4;

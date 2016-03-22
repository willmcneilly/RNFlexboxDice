import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Pip from '../Pip';

const DieFace1 = (props) =>
  <View style={styles.face}>
    <Pip />
  </View>;

const styles = StyleSheet.create({
  face: {
    width: 160,
    height: 160,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DieFace1;

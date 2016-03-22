import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Pip from '../Pip';

const DieFace2 = (props) =>
  <View style={styles.face}>
    <Pip />
    <Pip style={styles.pip2}/>
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
  pip2: {
    alignSelf: 'flex-end'
  }
});

export default DieFace2;

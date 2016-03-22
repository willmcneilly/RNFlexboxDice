import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Pip = (props) =>
  <View style={[styles.pip, props.style]} />;

const styles = StyleSheet.create({
  pip: {
    width: 34,
    height: 34,
    borderRadius: 40,
    backgroundColor: '#333'
  }
});

export default Pip;

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Die = (props) =>
  <View style={styles.die}>
    {props.children}
  </View>


const styles = StyleSheet.create({
  die: {
    flex: 1,
    width: 160,
    height: 154,
    backgroundColor: '#ddd',
    borderRadius: 8,
    borderWidth: 5,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#aaa',
    borderBottomColor: '#bbb',
    borderTopColor: '#eee',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0
    }
  }
});

export default Die;

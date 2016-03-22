import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Die from './app/components/Die';
import DieFace1 from './app/components/DieFace1';
import DieFace2 from './app/components/DieFace2';
import DieFace3 from './app/components/DieFace3';
import DieFace4 from './app/components/DieFace4';
import DieFace5 from './app/components/DieFace5';
import DieFace6 from './app/components/DieFace6';

const Faces = [DieFace1, DieFace2, DieFace3, DieFace4, DieFace5, DieFace6];

class RNFlexboxDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFace: 1
    };
  }

  handlePress() {
    const currentFace = this.state.activeFace;
    const nextFace = currentFace === 6 ? 1 : currentFace + 1;
    this.setState({activeFace: nextFace});
  }

  renderFace() {
    const faceNumber = this.state.activeFace;
    const Face = Faces[faceNumber - 1];
    return <Face />;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.handlePress()}
        >
          <View>
            <Die>
              {this.renderFace()}
            </Die>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  }
});

AppRegistry.registerComponent('RNFlexboxDice', () => RNFlexboxDice);

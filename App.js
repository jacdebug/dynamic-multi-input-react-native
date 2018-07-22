import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class InputItem extends React.Component {
  state = {
    key: '',
    value: '',
  };

  onChange(key, value) {
    this.setState({
      [key]: value,
    });

    this.props.onChange(
      {
        ...this.state,
        [key]: value,
      },
      this.props.index
    );
  }

  render() {
    return (
      <View
        style={{
          display: 'flex',
          marginBottom: 10,
          flexDirection: 'row',
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            flex: 1,
            marginRight: 5,
          }}
          onChangeText={value => this.onChange('key', value)}
          value={this.state.text}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            flex: 1,
          }}
          onChangeText={value => this.onChange('value', value)}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default class App extends React.Component {
  state = {
    countInput: 1,
  };

  inputItemValue = {};

  onChange = (value, index) => {
    this.inputItemValue[index] = value;
  };

  incrementCountInput = () => {
    this.setState({
      countInput: this.state.countInput + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Click "Add more +" to add input</Text>
        <View style={{ width: '50%' }}>
          {Array(this.state.countInput)
            .fill()
            .map((ele, index) => (
              <InputItem key={index} index={index} onChange={this.onChange} />
            ))}
          <Button onPress={this.incrementCountInput} title="Add more +" />
        </View>
        <Button
          onPress={() => alert(JSON.stringify(this.inputItemValue))}
          title="Submit"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

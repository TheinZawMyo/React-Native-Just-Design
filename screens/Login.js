import React from 'react';
import {Button, TextInput, Headline} from 'react-native-paper';
import {
  ScrollView,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../images/react.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.inputContainer}>
            <Headline style={styles.header}>Hello World!</Headline>
            <TextInput
              label="Email"
              mode="outlined"
              outlineColor="#4E36C7"
              style={styles.input}
            />
            <TextInput
              label="Password"
              mode="outlined"
              outlineColor="#4E36C7"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Button
              mode="contained"
              style={{paddingVertical: 8, backgroundColor: '#7078f4'}}
              onPress={() => navigation.navigate('Home')}>
              Login
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    // backgroundColor: 'green',
    height: 350,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    height: '100%',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    color: '#4E36C7',
  },
  inputContainer: {
    padding: 10,
  },
  input: {
    backgroundColor: '#FFF',
    marginTop: 10,
  },
});

export default Login;

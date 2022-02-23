import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import {Button, Card, Headline} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const Detail = ({navigation}) => {
  const SIZE = [36, 37, 38, 39, 40, 41];

  const renderSize = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          margin: 5,
        }}>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#5e72e5" />
      <View style={{height: 350}}>
        <Image source={require('../images/shoe.jpg')} style={styles.image} />
        <Icon
          name="leftcircleo"
          size={25}
          color="#fff"
          style={{position: 'absolute', top: 20, left: 25}}
          onPress={() => navigation.goBack()}
        />
        <Icon
          name="hearto"
          size={25}
          color="#fff"
          style={{position: 'absolute', top: 20, right: 25}}
        />
      </View>
      <View>
        <Card style={styles.card}>
          <View>
            <Headline style={{color: '#4E36C7'}}>Shoes</Headline>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 50,
                  height: 50,
                  width: 50,
                  borderColor: '#4E36C7',
                  borderWidth: 2,
                }}>
                <Image
                  source={require('../images/people.png')}
                  style={styles.peopleIcon}
                />
              </View>
              <Text style={{fontSize: 15, marginHorizontal: 10}}>
                Pro Reseller
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 20, marginHorizontal: 10}}>$ 1999</Text>
            </View>
          </View>

          {/* Size box */}
          <Text style={{fontSize: 18, marginTop: 10}}>Size</Text>
          <FlatList
            data={SIZE}
            numColumns={3}
            renderItem={renderSize}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />

          <Button mode="contained" style={styles.btn}>
            Add to Cart
          </Button>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  card: {
    marginHorizontal: 20,
    marginTop: -30,
    padding: 15,
    paddingVertical: 25,
    color: '#4E36C7',
  },
  peopleIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    resizeMode: 'cover',
  },
  btn: {
    marginTop: 15,
  },
});

export default Detail;

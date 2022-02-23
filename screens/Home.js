import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {Card, Headline, Searchbar, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const DATA = [
  {
    id: 1,
    name: 'Jumper',
    image: require('../images/pic1.png'),
  },
  {
    id: 2,
    name: 'Romper',
    image: require('../images/pic2.png'),
  },
  {
    id: 3,
    name: 'Shirt',
    image: require('../images/pic3.png'),
  },
  {
    id: 4,
    name: 'Skirt',
    image: require('../images/pic4.png'),
  },
  {
    id: 5,
    name: 'T-Shirt',
    image: require('../images/pic5.png'),
  },
  {
    id: 6,
    name: 'Bags',
    image: require('../images/pic6.png'),
  },
];

const Home = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <Card style={styles.card} onPress={() => navigation.navigate('Detail')}>
        <View>
          <Image source={item.image} />
          <Text style={{textAlign: 'center'}}>{item.name}</Text>
        </View>
      </Card>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#4E36C7" />
      <View style={styles.header}>
        <View style={styles.title}>
          <Headline style={{color: '#fff'}}>Home</Headline>
          <TouchableOpacity style={{marginTop: 5}}>
            <Icon name="exclamationcircleo" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View>
          <Searchbar placeholder="Search..." style={{marginTop: 25}} />
        </View>
      </View>

      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={{marginVertical: 20, marginHorizontal: 10}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    padding: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 25,
    borderBottomEndRadius: 25,
    backgroundColor: '#4E36C7',
  },
  card: {
    width: '50%',
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 30,
  },
});

export default Home;

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import * as rssParser from 'react-native-rss-parser';


export default function App() {
  const [items, setItems] = useState([]);

  async function fetchNews() {
    return await fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }})
  .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
    setItems(rss.items)
    })
  }

  fetchNews()

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./images/nasa-logo.png')} />
      <Text style={styles.caption}>NASA news 🚀🚀🚀 </Text>
      <FlatList style={styles.titleList}  data={items} renderItem={({item}) => <Text style={styles.titles} >{item.title}</Text>} ></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    paddingTop: 20,
    paddingBottom: 15,
    fontWeight: '900',
    color: '#BB86FC'
  },
  titleList: {
    paddingLeft: 20
  },
  img: {
    marginTop: 20,
    borderWidth: 4,
    borderColor: '#BB86FC'
  },
  titles: {
    color: '#BB86FC'
  }
});

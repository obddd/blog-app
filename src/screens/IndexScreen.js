import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Feather } from '@expo/vector-icons' 

import {Context} from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPosts } = useContext(Context);
  return (
    <View>
      <Button title='Add Posts' onPress={addBlogPosts}/>
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
              <Feather style={styles.icon} name='trash'/>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;

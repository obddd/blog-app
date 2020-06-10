import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import {Context} from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPosts } = useContext(Context);
  return (
    <View>
      <Text>Index screen</Text>
      <Button title='Add Posts' onPress={addBlogPosts}/>
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;

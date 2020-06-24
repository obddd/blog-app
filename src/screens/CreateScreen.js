import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from  '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const { addBlogPosts } = useContext(Context)
  return (
    <View>
      <Text style={styles.title}>Enter Title:</Text>
      <TextInput
        style={styles.content}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.title}>Enter Content:</Text>
      <TextInput
        style={styles.content}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPosts(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin: 8
    },
    content: {
        fontSize: 15,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 5,
        padding: 5,
        marginBottom: 5
    }
});
export default CreateScreen;

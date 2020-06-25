import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
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
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title:'',
        content:''
    }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 8,
  },
  content: {
    fontSize: 15,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
    padding: 5,
    marginBottom: 5,
  },
});

export default BlogPostForm;

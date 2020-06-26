import React, { useReducer } from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'add_blogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        },
      ];
    case 'edit_blogPost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'del_blogPost':
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    dispatch({
      type: 'get_blogposts',
      payload: response.data
    })
  }
}

const addBlogPosts = (dispatch) => {
  return async(title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content })
    // dispatch({ 
    //   type: 'add_blogPost', 
    //   payload: { title, content } 
    // });
    callback ? callback() : null;
  };
};
const editBlogPosts = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: 'edit_blogPost',
      payload: { id, title, content },
    });
    callback ? callback() : null;
  };
}
const delBlogPosts = (dispatch) => {
  return (id) => {
    dispatch({
      type: 'del_blogPost',
      payload: id,
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPosts, delBlogPosts, editBlogPosts, getBlogPosts },
  []
);

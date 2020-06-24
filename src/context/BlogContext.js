import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        },
      ];
    case 'del_blogPost':
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPosts = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ 
      type: 'add_blogPost', 
      payload: { title, content } 
    });
    callback();
  };
};
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
  { addBlogPosts, delBlogPosts },
  []
);

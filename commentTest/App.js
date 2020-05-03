/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Image} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Comment from 'react-native-comments';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Image
          source={require('./src/assets/wolf.jpg')}
          style={{width: '100%', height: '50%'}}
        />
        <Comment
          isLoggedIn={true}
          commentData={commentData}
          signupfunction={'akash'}
          userName={'akash'}
          createComment={createComment}
          editComment={'function2'}
          likeAction={likeAction}
        />
      </SafeAreaView>
    </>
  );
};

function createComment(comment) {
  console.log('$$$$$$$$$$$', comment);
}

function likeAction(comment_id) {
  console.log('%%%%%%%%%%%%', comment_id);
}

function disLikeAction(comment_id) {
  console.log('%%%%%%%%%%%%', comment_id);
}

const commentData = [
  {
    video_id: 'ccacaa375fa15778316292c2dc9448a99de028af',
    comment_id: '63998fa6-b3e2-40bf-ae4b-aa6a032ddc79',
    comment: 'Ghu',
    channel_id: '45ccb2f6b105e3248bd8b7e88aa7ddaba9c1dbd4',
    user_id: '5dd62f50ef785fc3f18aa12b',
    username: 'Sughosh Modem',
    replies: 1,
    created_at: '2020-01-20T09:06:50.069+00:00',
    modified_at: '2020-01-20T09:06:50.069+00:00',
  },
  {
    _id: '5dde97b5e7462b805c6855a0',
    video_id: '3b3c2d98b87cecd0bc7679065e7917496aead96c',
    comment_id: '39d4d717-50c9-4773-b159-b7a0f30ae9c5',
    comment: 'Test comment',
    channel_id: 'a0c651dfb3dc1bb12bc084e377780555360c9b20',
    user_id: '75bda434720d90e27c8ec6f4',
    username: 'Anoop Dhiman',
    created_at: '2019-11-27T15:35:17.743Z',
    modified_at: '2019-11-27T15:35:17.743Z',
    __v: 0,
    replies: 1,
  },
];

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

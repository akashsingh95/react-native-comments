import React from 'react';
import commentStyle from './styles/comment';
import {
  Alert,
  Keyboard,
  Animated,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {Avatar} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';
import strLabels from './styles/strLabels';
import moment from 'moment';

export default class CommentBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      userName: null,
      editModalVisible: false,
      text: '',
      commentInputHeight: 50,
      editingComment: undefined,
      createComment: false,
    };
    this.keyboardHeight = new Animated.Value(0);
  }

  componentDidMount() {}

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
    ]).start();
  };

  alertFunction = () => {
    const {signUp} = this.props;
    Keyboard.dismiss();
    Alert.alert(
      'Sign In',
      strLabels.SignInToAddComment,
      [
        {text: strLabels.Cancel},
        {
          text: strLabels.SignIn,
          onPress: () => {
            signUp();
          },
        },
      ],
      {cancelable: true},
    );
  };

  createComment = (comment) => {
    const {createComment} = this.props;
    createComment(comment);
  };

  doLike = (comment_id) => {
    const {likeAction} = this.props;
    likeAction(comment_id);
  };

  doDislike = (comment_id) => {
    const {dislikeAction} = this.props;
    dislikeAction(comment_id);
  };

  alertComment = () => {
    //const {handleIsCommenting} = this.props;
    Keyboard.dismiss();
    Alert.alert(
      'Discard Comment?',
      '',
      [
        {
          text: 'KEEP WRITING',
          onPress: () => {
            this.mainTextInput.focus();
          },
          style: 'destructive',
        },
        {
          text: 'DISCARD',
          onPress: () => {
            // handleIsCommenting(false);
            this.setState({text: '', editModalVisible: false});
          },
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {
      isLoggedIn,
      userName,
      createComment,
      editComment,
      userAvatarContainer,
      mainCommentTextStyle,
      commentData,
      commentAvatarContainer,
    } = this.props;
    var initials = userName.match(/\b\w/g) || [];
    initials = (initials.shift() || '').toUpperCase() || '';
    return (
      <View keyboardShouldPersistTaps="handled">
        <View style={commentStyle.parentView}>
          <Modal
            isVisible={this.state.editModalVisible}
            onSwipeComplete={() => this.setState({visible: false})}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
            onBackdropPress={() => {
              if (this.state.text && this.state.text.trim().length > 0) {
                this.alertComment();
              } else {
                //handleIsCommenting(false);
                this.setState({text: '', editModalVisible: false});
              }
            }}
            onBackButtonPress={() => {
              if (this.state.text && this.state.text.trim().length > 0) {
                this.alertComment();
              } else {
                // handleIsCommenting(false);
                this.setState({text: '', editModalVisible: false});
              }
            }}
            style={commentStyle.parentView_modal}>
            <Animated.View
              style={[
                commentStyle.modalView,
                {paddingBottom: this.keyboardHeight},
              ]}>
              <View style={commentStyle.modalView}>
                {isLoggedIn && this.state.profilename != undefined ? (
                  <Avatar.Image
                    size={40}
                    title={initials}
                    activeOpacity={0.7}
                    rounded
                    containerStyle={
                      userAvatarContainer
                        ? userAvatarContainer
                        : commentStyle.userAvatarContainer
                    }
                  />
                ) : (
                  <Avatar.Image
                    size={40}
                    title="U"
                    activeOpacity={0.7}
                    rounded
                    containerStyle={
                      userAvatarContainer
                        ? userAvatarContainer
                        : commentStyle.userAvatarContainer
                    }
                  />
                )}
                <TextInput
                  style={[
                    commentStyle.textInput,
                    {height: Math.max(this.state.commentInputHeight, 50)},
                  ]}
                  autoFocus={true}
                  onContentSizeChange={(event) => {
                    if (event.nativeEvent.contentSize.height <= 150) {
                      this.setState({
                        commentInputHeight:
                          event.nativeEvent.contentSize.height,
                      });
                    }
                  }}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  editable={true}
                  maxLength={5000}
                  multiline={true}
                  ref={(input) => {
                    this.mainTextInput = input;
                  }}
                />
                {(this.state.editingComment && !this.state.createComment
                  ? !(
                      this.state.text.trim() ===
                        this.state.editingComment.comment ||
                      this.state.text.trim().length === 0
                    )
                  : this.state.text.trim().length > 0) && (
                  <TouchableOpacity
                    style={commentStyle.create_edit_button_gap}
                    onPress={async () => {
                      Keyboard.dismiss();
                      //handleIsCommenting(false);
                      this.setState({
                        text: '',
                        editModalVisible: false,
                      });
                      if (isLoggedIn) {
                        if (this.state.createComment) {
                          await createComment(this.state.text.trim());
                          this.setState({
                            createComment: false,
                          });
                        } else {
                          if (this.state.text.trim().length == 0) {
                            Snackbar.show({
                              title: 'please enter comment',
                              duration: Snackbar.LENGTH_SHORT,
                            });
                          } else {
                            editComment(
                              this.state.text.trim(),
                              this.state.editingComment.comment_id,
                            );
                          }
                        }
                      } else {
                        this.alertFunction();
                      }
                    }}>
                    <Image
                      style={commentStyle.sendIcon}
                      source={require('./assets/send.png')}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </Animated.View>
          </Modal>
        </View>
        <View>
          <View>
            <View style={commentStyle.view2}>
              {isLoggedIn && this.props.userName != undefined ? (
                <Avatar.Image
                  size={40}
                  title={initials}
                  activeOpacity={0.7}
                  rounded
                  containerStyle={
                    userAvatarContainer
                      ? userAvatarContainer
                      : commentStyle.userAvatarContainer
                  }
                />
              ) : (
                <Avatar.Image
                  size={40}
                  title="U"
                  activeOpacity={0.7}
                  rounded
                  containerStyle={
                    userAvatarContainer
                      ? userAvatarContainer
                      : commentStyle.userAvatarContainer
                  }
                />
              )}
              <ScrollView keyboardShouldPersistTaps="handled">
                <View style={commentStyle.view3}>
                  <TouchableOpacity
                    onPress={() => {
                      if (isLoggedIn) {
                        // handleIsCommenting(true);
                        this.setState({
                          text: '',
                          editModalVisible: true,
                          createComment: true,
                        });
                      } else {
                        this.alertFunction();
                      }
                    }}
                    style={commentStyle.public_comment_button}
                    ref={(input) => {
                      this.textInput = input;
                    }}>
                    <Text
                      style={
                        mainCommentTextStyle
                          ? mainCommentTextStyle
                          : commentStyle.public_comment_text
                      }>
                      Add Public Comment
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
          <FlatList
            data={commentData}
            keyExtractor={(item) => item.comment_id}
            renderItem={({item, index, separators}) => (
              <View style={commentStyle.view4}>
                {item.username ? (
                  <Avatar.Image
                    size={40}
                    title={item.username
                      .split(' ')
                      .map((n, i, a) => (i === 0 ? n[0] : null))
                      .join('')
                      .toUpperCase()}
                    activeOpacity={0.7}
                    rounded
                    containerStyle={
                      userAvatarContainer
                        ? userAvatarContainer
                        : commentStyle.userAvatarContainer
                    }
                  />
                ) : (
                  <Avatar.Image
                    size={40}
                    title="U"
                    activeOpacity={0.7}
                    rounded
                    containerStyle={
                      commentAvatarContainer
                        ? commentAvatarContainer
                        : commentStyle.userAvatarContainer
                    }
                  />
                )}
                <View style={commentStyle.view5}>
                  <Text style={commentStyle.username}>
                    <Text style={commentStyle.usernameText}>
                      {item.username}
                    </Text>{' '}
                    | {moment(item.created_at).from(moment())}{' '}
                    {item.created_at !== item.modified_at && '(edited)'}
                  </Text>

                  <Text style={commentStyle.commentText}>{item.comment}</Text>

                  <View style={commentStyle.view6}>
                    <TouchableOpacity
                      style={commentStyle.likeTouchable}
                      disabled={this.state.buttonClicked}
                      onPress={() => {
                        if (isLoggedIn) {
                          this.doLike(item.comment_id);
                          // this.handleButtonClicked();
                        } else {
                          this.alertFunction();
                        }
                      }}>
                      <Image
                        style={[
                          item.liked
                            ? commentStyle.userInteractImageClick
                            : commentStyle.like,
                        ]}
                        source={require('./assets/like.png')}
                      />
                      <Text style={commentStyle.likeCountText}>
                        {item.likedCount
                          ? this.formatCount(item.likedCount, 0)
                          : 0}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={commentStyle.dislikeTouchable}
                      disabled={this.state.buttonClicked}
                      onPress={() => {
                        if (isLoggedIn) {
                          this.doDislike(item.comment_id);
                          // this.handleButtonClicked();
                        } else {
                          this.alertFunction();
                        }
                      }}>
                      <Image
                        style={[
                          item.disliked
                            ? commentStyle.userInteractImageClickDown
                            : commentStyle.dislike,
                        ]}
                        source={require('./assets/dislike.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={commentStyle.replyTouchable}
                      disabled={this.state.buttonClicked}
                      onPress={() => {
                        if (isLoggedIn) {
                          // this.props.handlecommentscroll();
                          // this.showChildComments(item);
                          // this.handleButtonClicked();
                        } else {
                          this.alertFunction();
                        }
                      }}>
                      <Image
                        style={commentStyle.commentreply}
                        source={require('./assets/commentreply.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

CommentBox.propType = {
  userAvatarContainer: PropTypes.object,
  commentAvatarContainer: PropTypes.object,
  mainCommentTextStyle: PropTypes.object,
  commentData: PropTypes.object,
  likeAction: PropTypes.func,
  dislikeAction: PropTypes.func,
};

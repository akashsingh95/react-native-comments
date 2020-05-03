import {StyleSheet} from 'react-native';
import Colors from './colors';
import fontStyle from './fontStyle';

const commentStyle = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  sendIcon: {
    width: 18,
    height: 16,
    resizeMode: 'contain',
    tintColor: Colors.LinkColor,
  },
  heading: {
    fontSize: 18,
    fontFamily: fontStyle.jioMedium,
  },
  headingText: {
    color: Colors.Black,
  },
  view2: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingStart: 15,
    paddingBottom: 15,
    paddingEnd: 10,
    borderBottomColor: Colors.divider_color,
    borderBottomWidth: 0.5,
  },
  view3: {
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 8,
  },
  textInput: {
    flex: 1,
    width: '80%',
    marginStart: 10,
  },
  view4: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingStart: 15,
    paddingEnd: 10,
    borderBottomColor: Colors.divider_color,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    flex: 1,
  },
  view5: {
    flexDirection: 'column',
    width: '90%',
  },
  username: {
    marginLeft: 12,
    fontFamily: fontStyle.jioMedium,
    color: Colors.comment_username,
    fontSize: 12,
  },
  userAvatarContainer: {
    backgroundColor: Colors.Blue,
  },
  usernameText: {
    fontWeight: 'bold',
  },
  commentText: {
    marginLeft: 13,
    marginTop: 5,
    alignSelf: 'flex-start',
    fontFamily: fontStyle.jioMedium,
    color: Colors.Charcoal,
  },
  view6: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    paddingTop: 10,
  },
  like: {
    width: 16,
    height: 14,
    resizeMode: 'contain',
    tintColor: Colors.comment_username,
  },
  userInteractImageClick: {
    width: 16,
    height: 14,
    resizeMode: 'contain',
    tintColor: Colors.LinkColor,
  },
  likeCountText: {
    marginLeft: 10,
    fontSize: 10,
  },
  repliesContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeTouchable: {
    flexDirection: 'row',
    width: 50,
    height: 25,
  },
  crossButtonTouchable: {
    width: 30,
  },
  dislikeTouchable: {
    width: 60,
    height: 20,
  },
  addReply: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 20,
    padding: 15,
  },
  replyTouchable: {
    width: 60,
    height: 20,
  },
  userInteractImageClickDown: {
    width: 16,
    height: 14,
    marginLeft: 20,
    resizeMode: 'contain',
    tintColor: Colors.LinkColor,
  },
  dislike: {
    width: 16,
    height: 14,
    marginLeft: 20,
    resizeMode: 'contain',
    tintColor: Colors.comment_username,
  },
  commentreply: {
    width: 16,
    height: 14,
    marginLeft: 30,
    resizeMode: 'contain',
    tintColor: Colors.comment_username,
  },
  view7: {
    justifyContent: 'flex-start',
    marginLeft: 'auto',
  },
  menuOptionsCustom: {
    paddingRight: 60,
    marginRight: 100,
  },
  menuOption: {
    display: 'flex',
    width: '95%',
    backgroundColor: Colors.White,
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  modalView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 'auto',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_style: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_bgcolor: {
    backgroundColor: Colors.Yellow,
  },
  parentView: {
    width: '100%',
  },
  parentView_modal: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: 'auto',
  },
  public_comment_button: {
    display: 'flex',
    alignSelf: 'flex-start',
    height: 30,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
    width: '100%',
  },
  child_comment_text_style: {
    marginLeft: 10,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontFamily: fontStyle.jioMedium,
    color: Colors.LinkColor,
  },
  create_edit_button_gap: {
    marginRight: 5,
  },
  child_comment_view_style: {
    flex: 1,
    flexDirection: 'row',
  },
  child_comment_style: {
    zIndex: 20,
  },
  public_comment_text: {
    alignSelf: 'flex-start',
    fontFamily: 'Cochin',
  },
  //reply comment component
  reply_comment_parent_view: {
    backgroundColor: Colors.White,
  },
  reply_comment_subView: {
    backgroundColor: Colors.White,
    marginLeft: 20,
  },
  reply_cross_button: {
    width: 12,
    height: 12,
  },
});

export default commentStyle;

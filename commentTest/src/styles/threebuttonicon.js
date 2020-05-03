import { StyleSheet } from 'react-native';
import fontStyle from './fontStyle';


const threeButtonIcon = StyleSheet.create({

    container: {
        width: 185,
        height: 182,
        backgroundColor: '#464646',
        flex: 1,
        borderRadius: 0,
        flexDirection: 'column'
        //  justifyContent: 'center'

    },
    text: {
        color: '#000',
        fontSize: 16,
        fontFamily: fontStyle.jioMedium,
        paddingBottom:5,
        marginLeft: 5,
        fontWeight: '600'

    },
    commentText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: fontStyle.jioMedium,
        paddingTop: 2,
        paddingBottom:5,
        marginLeft: 5

    },
    icon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        // borderWidth: 10
    },
    commentIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    dialogTitle: {
        padding: 5,
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: fontStyle.jioMedium,
        marginLeft: 5,
        marginTop: 5
    },
    dialogButton: {
        fontSize: 15,
        fontFamily: fontStyle.jioMedium,
        fontWeight: 'bold',
        marginLeft: 10
    },
    dialogButtonFilterCancel: {
        fontSize: 12,
        fontFamily: fontStyle.jioMedium,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 15,
    },
    dialogButtonFilter: {
        fontSize: 12,
        fontFamily: fontStyle.jioMedium,
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 10,
        color: '#4D18C1',
        marginTop: 20,
        marginBottom: 15,
    },
    dialogContent: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: '80%',
        alignContent: 'center'
    },
    dialogContentForActionsheet: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: '100%',
        alignContent: 'center'
    },
    dialogButtonDark: {
        fontSize: 15,
        fontFamily: fontStyle.jioMedium,
        fontWeight: 'bold',
        marginLeft: 10
    },
    dialogButtonLiv: {
        color: '#4E18C4',
        fontSize: 15,
        fontFamily: fontStyle.jioMedium,
        fontWeight: 'bold',
        marginLeft: 10
    },
    dialogTitleDark: {
        fontSize: 18,
        fontFamily: fontStyle.jioMedium,
        marginLeft: 5,
        marginTop: 5
    },


})



export default threeButtonIcon;

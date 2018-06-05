import { StyleSheet, Image, Dimensions } from 'react-native';
import { BORDER_WIDTH, FONT_SIZE, IDLY_BLUE,
    BACKGROUND_COLOR, FONT_WEIGHT } from '../styles/common';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: BACKGROUND_COLOR
    },

    buttonContainer:{
        flex:0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: BACKGROUND_COLOR,
        borderTopWidth: BORDER_WIDTH,
        borderColor: "#ccc",
        paddingTop: 10
    },

    header:{
        backgroundColor: '#128DC9',
        fontWeight: 'bold',
        fontSize: FONT_SIZE,
        color: '#FFFFFF',
        paddingLeft: 10
    },

    button:{
        backgroundColor: IDLY_BLUE,
        width: screenWidth*0.3,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    },

    walletButton:{
        backgroundColor: IDLY_BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth*0.28,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    },

    name: {
        fontSize: FONT_SIZE,
        fontWeight: FONT_WEIGHT,
        marginTop: 8 * 2
    },

    cardPosition: {
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
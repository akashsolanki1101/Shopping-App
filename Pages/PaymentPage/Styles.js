import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container :{
        flex : 1,
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 10,
        backgroundColor : 'white'
    },
    message:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    messageText1:{
        fontSize : 25,
        color : 'grey'
    },
    messageText2:{
        fontSize : 18,
    },
    placeOrderButton:{
        width : '90%',
        height: 50,
        backgroundColor : '#A5CAD2',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 4,
        elevation : 1
    },
    placeOrderButtonText : {
        color : 'white',
        fontSize : 16,
        fontWeight : '700'
    },
})
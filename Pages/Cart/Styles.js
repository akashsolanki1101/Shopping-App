import {StyleSheet} from 'react-native'
 
export const styles = StyleSheet.create({
    container:{
        flex : 1
    },
    message:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    messageText1 :{
        fontSize : 25,
        fontWeight : '500',
        color : 'grey'
    },
    messageText2 :{
        fontSize : 18
    },
    priceInfoBar:{
        width : '100%',
        height : 65,
        flexDirection:  'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingHorizontal : 10,
        backgroundColor : 'white',
        elevation : 2,
    },
    placeOrderButton:{
        width : '40%',
        height: '60%',
        backgroundColor : '#A5CAD2',

        // backgroundColor : '#FA6300',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 4
    },
    placeOrderButtonText : {
        color : 'white',
        fontSize : 16,
        fontWeight : '700'
    },
    totalPriceText:{
        fontSize : 20,
        fontWeight : '700',
        color : '#FF7A89'

    }
})

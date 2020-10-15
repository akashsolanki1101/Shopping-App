import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container :{
        flex : 1,
    },
    deliveryAddressBar :{
        width : '100%',
        height : 120,
        backgroundColor : 'white',
        elevation : 2,
        marginBottom : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent :'space-between',
        padding : 10,
    },
    deliveryAddress:{
        width : '70%',
        height : '100%',
        justifyContent : 'space-between'
    },
    userName:{
        flexDirection : 'row',
        alignItems : 'center',
    },
    userNameText:{
        fontSize : 18,
        fontWeight : '700'
    },
    addressType:{
        borderRadius:4,
        backgroundColor : '#rgba(100,100,100,.2)',
        paddingHorizontal : 5,
        paddingVertical:1,
        marginLeft : 10
    },
    addressTypeText:{
        fontSize : 10,
        fontWeight : '700',
    },
    changeAddressButton:{
        width : '25%',
        height: 40,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 4,
        borderColor:'#A5CAD2',
        borderWidth:.4,
    },
    changeAddressButtonText:{
        color : '#A5CAD2',
        fontSize : 16,
        fontWeight : '700'
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
    },
    cartIconContainer:{
        flexDirection:'row',
    },
    itemCountContainer:{
        bottom:10,
        right:10,   
    },
    itemCountText:{
       color:'white',
       fontWeight:'bold'       
    }
})
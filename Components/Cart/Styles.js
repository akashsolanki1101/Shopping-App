import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({       
    list :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    listItem:{
        marginBottom : 10,
        width : '100%',
        height : 200,
        backgroundColor : 'white',
        justifyContent : 'space-between',
    },
    upperBox:{
        width :'100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 10
    },
    lowerBox:{
        width :'100%',
        justifyContent : 'space-between',
        flexDirection : 'row',
    },
    imageBox:{
        width : 70,
        height : 110,
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    image:{
        height : 70,
        width : 50,
    },
    quantityBox:{
        width : 70,
        height : 30,
        elevation:2,
        backgroundColor: 'white',
        alignItems : 'center',
        justifyContent : 'space-around',
        flexDirection : 'row'
    },
    remove:{
        height : 50,
        width : '50%',
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : .3,
        borderColor : '#rgba(0, 0 ,0 ,.2)'
    },
    addToWishList:{
        width : '50%',
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : .3,
        borderColor : '#rgba(0, 0 ,0 ,.2)'
    },
    productName:{
        fontSize : 18,
    },
    productPrice:{
        fontSize : 20,
        fontWeight : '700',
        marginTop : 5
    },
})

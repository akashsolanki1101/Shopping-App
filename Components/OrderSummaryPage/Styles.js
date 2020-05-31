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
        height : 150,
        backgroundColor : 'white',
        justifyContent : 'space-between',
    },
    upperBox:{
        width :'100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 10
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
    productName:{
        fontSize : 18,
    },
    productPrice:{
        fontSize : 20,
        fontWeight : '700',
        marginTop : 5
    },
})

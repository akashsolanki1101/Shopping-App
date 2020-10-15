import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    mainDisplay:{
        flex : 1
    },
    container1 :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'white',
    },
    imageContainer:{
        alignItems : 'flex-end',
        width : '90%',
        height : 500,
    },
    image:{
        width : '100%',
        height : '100%'
    },
    favIcon:{
        width : 40,
        height : 40,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 20,
        elevation : 5,
        backgroundColor : 'white',
        overflow : 'hidden',
        margin : 5  
    },
    details:{
        width : '90%',
        marginVertical : 10    
    },
    name:{
        fontSize : 15,
        marginBottom : 5
    },
    description:{
        fontSize : 18,
        color : 'grey',
    },
    price:{
        fontSize : 20,
        fontWeight : '700'
    },
    container2:{
        width : '100%',
        height :50,
        flexDirection : 'row',
        elevation : 5,   
    },
    addToCart:{
        width: '50%',
        height : '100%',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor: 'white',
    },
    addToCartText:{
        fontWeight :'700',
        color : '#FF7A89'
    },
    buyNow : {
        width: '50%',
        height : '100%',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#A5CAD2'
    },
    buyNowText:{
        fontWeight :'700',
        color : 'white'
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

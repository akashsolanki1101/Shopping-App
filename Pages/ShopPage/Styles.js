import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        backgroundColor : 'white'
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
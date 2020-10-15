import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    animationContainer:{
        width:'100%',
    },
    animation:{
       width:'80%',
       height:'50%' 
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
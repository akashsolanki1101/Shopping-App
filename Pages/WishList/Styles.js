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
    messageText:{
        fontSize : 20,
        color : 'grey'
    },
    clearAll:{
        width : '100%',
        height : 60,
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor : '#rgba(87,84,88,.1)'
    },
    clearAllText:{
        color : '#5183D1'
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

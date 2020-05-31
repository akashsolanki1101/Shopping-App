import React from 'react'

import {View,Text,StyleSheet} from 'react-native'

const Rating = props=>{
    return(
        <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{props.children} ★</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    ratingContainer:{
        width : 38,
        height : 22,
        backgroundColor : '#1FBF00',
        alignItems : 'center',
        justifyContent:'center',
        borderRadius : 10,
        marginTop : 5
    },
    rating : {
        fontSize:10,
        color : 'white',
    },
})

export default Rating
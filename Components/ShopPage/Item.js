import React from 'react'

import {View,Text,StyleSheet,ImageBackground, TouchableOpacity,Image} from 'react-native'
import {useSelector} from 'react-redux'

const Item = props=>{

    const WishList = useSelector(state => state.wishList.WishList)
    const isFavorite = WishList.some(product => product.productId === props.productId)

    return(
        <TouchableOpacity
            activeOpacity={.6}
            onPress={()=>props.navigation.navigate({
                routeName : 'ProductDetailPage',
                params:{
                    productId : props.productId,
                    isFav : isFavorite
                }
            })}
        >
            <View style={styles.container}>
                <Image style={styles.image} source={{uri : props.imageUrl}}/>
                <View style={styles.detail}>
                    <Text numberOfLines={1} style={styles.name}>{props.name}</Text>
                    <Text numberOfLines={1} >{props.description}</Text>
                    <Text style={styles.price}>₹{props.price.toLocaleString()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container :{
        width : 200,
        height : 380,
        alignItems : 'center',
        borderColor : 'black',
        elevation : 2,
        backgroundColor : 'white',
        padding : 5
    },
    image:{
        height : '80%',
        width : '98%',
    },
    detail:{
        width : '98%',
        height : '20%',
    },
    name : {
        fontSize : 15,
        fontWeight : '700'
    },
    price:{
        fontSize : 15,
        fontWeight : '700'
    }
})

export default Item
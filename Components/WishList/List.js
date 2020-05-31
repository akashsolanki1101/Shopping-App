import React from 'react'

import {View,Text,TouchableNativeFeedback,Image} from 'react-native'
import {useDispatch} from 'react-redux'
import {MaterialIcons} from '@expo/vector-icons'

import Rating from '../Rating'
import {removeWishListItem} from '../../Store/Actions/WishListActions'
import {styles} from './Styles' 

export const List = props =>{
    const dispatch = useDispatch()
    return(
        <View style={styles.list}>
        {
            props.data.map(item=>{
                return(
                    <TouchableNativeFeedback
                        key={item.productId}
                        onPress={()=>props.navigation.navigate({
                            routeName : 'ProductDetailPage',
                            params:{
                            productId : item.productId,
                            isFav : true
                        }})}
                    >
                    <View style={styles.listItem} >
                        <Image style={styles.image} title='productImage' source={{uri : item.imageUrl}}/>
                        <View style={styles.details}>
                            <Text numberOfLines={2}>{item.name}</Text>
                            <Rating>{item.rating}</Rating>
                            <Text>₹{item.price}</Text>
                        </View>
                        <View style={styles.trashIcon}>
                            <MaterialIcons 
                                name='delete'
                                size={25}
                                onPress={()=>dispatch(removeWishListItem(item.productId))}
                            />
                        </View>
                    </View>
                    </TouchableNativeFeedback>
                )
            })
        }
        </View>
    )
}


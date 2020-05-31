import React from 'react'

import {View,Text,Image,TouchableNativeFeedback} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useDispatch,useSelector} from 'react-redux'

import {styles} from './Styles'
import {removeCartItem,increaseItemQuantity,decreaseItemQuantity} from '../../Store/Actions/CartActions'

export const List = props =>{
    const dispatch = useDispatch();
    const WishList = useSelector(state=>state.wishList.WishList)
    return(
    <View style={styles.list}>
        {
            props.data.map(({item,quantity})=>{
                const isFav = WishList.find(product=>product.productId===item.productId)
                return(
                    <View style={styles.listItem} key={item.productId}>
                        <View style={styles.upperBox}> 
                            <View style={styles.details}>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productPrice}>₹{item.price}</Text>
                            </View>
                            <View style={styles.imageBox}>
                                <TouchableNativeFeedback onPress={()=>props.navigation.navigate({
                                    routeName : 'ProductDetailPage',
                                    params :{
                                        productId : item.productId,
                                        isFav : isFav
                                    }
                                })}>
                                    <Image style={styles.image} title='product image' source={{uri : item.imageUrl}}/>
                                </TouchableNativeFeedback>
                                <View style={styles.quantityBox}>
                                    <Ionicons name='ios-arrow-dropleft' size={20} onPress={()=>dispatch(decreaseItemQuantity(item.productId))}/>
                                    <Text>{quantity}</Text>
                                    <Ionicons name='ios-arrow-dropright' size={20} onPress={()=>dispatch(increaseItemQuantity(item.productId))}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.lowerBox}>
                            <TouchableNativeFeedback>
                                <View style={styles.addToWishList}>
                                    <Text>SAVE FOR LATER</Text>
                                </View>
                            </TouchableNativeFeedback>

                            <TouchableNativeFeedback
                                onPress={()=>dispatch(removeCartItem(item.productId))}
                            >
                                <View style={styles.remove}>
                                    <Ionicons name='md-trash' color='grey' size={20}/>
                                    <Text>REMOVE</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                    </View>
                )
            })
        }
    </View>
)
}

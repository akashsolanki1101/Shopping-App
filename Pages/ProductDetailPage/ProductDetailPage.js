import React from 'react'

import {View,Text,ScrollView, ImageBackground, TouchableOpacity,TouchableNativeFeedback} from 'react-native'
import {useDispatch} from 'react-redux'
import {Ionicons} from '@expo/vector-icons'

import {addToCart} from '../../Store/Actions/CartActions'
import {toggleWishListItem} from '../../Store/Actions/WishListActions'

import Rating from '../../Components/Rating'
import {styles} from './Styles'
import PRODUCTS from '../../Data/Products'

const ProductDetailPage = props =>{
    const dispatch = useDispatch();
    const selectedProductId = props.navigation.getParam('productId')
    const isFav = props.navigation.getParam('isFav')
    const selectedProduct = PRODUCTS.find(product => product.productId===selectedProductId)
    
    return(
        <View style={styles.mainDisplay}>
            <ScrollView style={{backgroundColor : 'white'}}>
                <View style={styles.container1}>
                    <ImageBackground style={styles.imageContainer} imageStyle={styles.image} source={{uri : selectedProduct.imageUrl}}>
                        <TouchableOpacity >
                            <View style={styles.favIcon}>
                                <Ionicons 
                                    name='ios-heart'
                                    size={25}
                                    onPress={()=>{
                                        dispatch(toggleWishListItem(selectedProduct.productId))}}
                                    color={isFav ? 'red' :'#9CAB93'}
                                />
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.details}>
                        <Text style={styles.name}>{selectedProduct.name}</Text>
                        <Text style={styles.description}>{selectedProduct.description}</Text>
                        <Text style={styles.price}>₹{selectedProduct.price}</Text>
                        <Rating>{selectedProduct.rating}</Rating>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.container2}>
                <TouchableNativeFeedback
                    onPress={()=>dispatch(addToCart(selectedProduct.productId))}
                >
                    <View style={styles.addToCart}>
                        <Text style={styles.addToCartText}>ADD TO CART</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={()=>props.navigation.navigate({
                        routeName : 'OrderSummary',
                        params :{
                            productList : [{item: selectedProduct , quantity : 1}]
                        }
                    })}
                >
                    <View style={styles.buyNow}>
                        <Text style={styles.buyNowText}>BUY NOW</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

ProductDetailPage.navigationOptions = {
    headerTitle : ''
}

export default ProductDetailPage
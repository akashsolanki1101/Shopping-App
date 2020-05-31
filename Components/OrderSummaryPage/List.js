import React from 'react'

import {View,Text,Image} from 'react-native'

import {styles} from './Styles'


export const List = props =>{
    return(
    <View style={{...styles.list,...props.style}}>
        {
            props.data.map(({item,quantity})=>{
                return(
                    <View style={styles.listItem} key={item.productId}>
                        <View style={styles.upperBox}> 
                            <View style={styles.details}>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productPrice}>₹{item.price}</Text>
                            </View>
                            <View style={styles.imageBox}>
                                    <Image style={styles.image} title='product image' source={{uri : item.imageUrl}}/>
                                <View style={styles.quantityBox}>
                                    <Text>Qty: {quantity}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })
        }
    </View>
)
}

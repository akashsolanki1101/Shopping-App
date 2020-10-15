import React from 'react'

import {View,FlatList} from 'react-native'

import Item from './Item'
import {styles} from './Styles'

export const List = props=>{
    return(
        <View style={styles.container}>
            <FlatList 
                keyExtractor={item=>item.productId}
                data={props.data}
                numColumns={2}
                contentContainerStyle={styles.List}
                renderItem={element=>{
                    return(
                        <Item 
                            navigation={props.navigation}
                            productId={element.item.productId}
                            name={element.item.name}
                            imageUrl={element.item.imageUrl}
                            price={element.item.price}
                            description={element.item.description}
                        />
                    )
                }}
            />
        </View>
    )
}



import React,{useEffect} from 'react'

import {View,Text, ScrollView, TouchableNativeFeedback,Alert} from 'react-native'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'  

import {emptyWishlist} from '../../Store/Actions/WishListActions'
import {styles} from './Styles'
import {List} from '../../Components/WishList/List'

const WishList = props =>{
    const WishList = useSelector(state => state.wishList.WishList)
    const totalItems = WishList.length
    const dispatch = useDispatch()    

    useEffect(()=>{
        props.navigation.setParams({totalItems:totalItems})
    },[totalItems])

    if(WishList.length===0)
    {
        return(
            <View style={styles.message}>
                <Text style={styles.messageText}>No Item!!</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <ScrollView >
                    <List data={WishList} navigation={props.navigation}/>
            </ScrollView>
            <TouchableNativeFeedback
                onPress={()=>
                        Alert.alert(
                            'Clear Wishlist',
                            'Are you sure you want to delete your wishlist items ?',
                            [
                                {
                                    text : 'YES',
                                    onPress:()=>dispatch(emptyWishlist()),
                                    style :'destructive'
                                },
                                {
                                    text : 'NO'
                                }
                            ]
                        )
                                
                    }
            >
                <View style={styles.clearAll}>
                    <Text style={styles.clearAllText}>Clear All</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

WishList.navigationOptions = navData =>{
    const totalItems = navData.navigation.getParam('totalItems')
    const title = totalItems!==0 ? `Wishlist(${totalItems})` : 'Wishlist'

    return{
        headerTitle : title
    }
}

export default WishList
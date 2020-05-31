import React from 'react'

import {View,Text,StyleSheet} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import HeaderButton from '../../Components/HeaderButton'

const SellerProductPage = props =>{
    return(
        <View style={styles.container}>
            <Text>Seller Product Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
})

SellerProductPage.navigationOptions = navData =>{
    return {
        headerLeft : ()=>{
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='Menu' 
                        iconName='ios-menu'
                        onPress={navData.navigation.toggleDrawer}
                        iconSize={25}                        
                        />
                </HeaderButtons>
            )
        },
        headerRight : ()=>{
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='Menu' 
                        iconName='ios-add-circle-outline'
                        onPress={()=>navData.navigation.navigate({
                            routeName : 'SellerProductDetailPage'
                        })}
                        iconSize={25}                        
                        />
                </HeaderButtons>
            )
        }
    }
}

export default SellerProductPage
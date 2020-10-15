import React from 'react'

import {View,TouchableWithoutFeedback} from 'react-native'

import {styles} from './Styles'

export const Backdrop = ({closeHandler,children})=>{
    return(
        <TouchableWithoutFeedback
            style={{flex:1}}
            onPress={closeHandler}
        >
            <View style={styles.backDropContainer}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    )
}
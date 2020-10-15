import React from 'react'

import {View,ScrollView,Text,TouchableNativeFeedback} from 'react-native'

import {stateList} from '../../Data/States'
import {styles} from './Styles'

export const StateList = ({selectedStateHandler})=>{
    return(
        <View style={styles.stateList} >
            <View style={styles.selectStateTitle}>
                <Text style={styles.selectStateTitleText}>Select State</Text>
            </View>
            <ScrollView>
            {
                stateList.map(state=>{
                    return(
                        <TouchableNativeFeedback key={state.id} onPress={()=>selectedStateHandler(state.name)}>
                            <View  style={styles.stateListItem}>
                                <Text style={styles.stateListItemText}>{state.name}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    )
                })
            }
            </ScrollView>
        </View>
    )
}



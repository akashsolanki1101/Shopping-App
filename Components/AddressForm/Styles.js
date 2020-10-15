import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    stateList : {
        width : '90%',
        height : '80%',
        backgroundColor : 'white',
        justifyContent : 'center',
        elevation:10
    },
    stateListItem:{
        padding : 12,
        backgroundColor : 'white',
        elevation : 2,
        marginBottom : 1
    },
    stateListItemText:{
        fontSize : 15,
    },
    selectStateTitle : {
        width : '100%',
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        elevation : 3,
        backgroundColor : 'white'
    },
    selectStateTitleText:{
        fontSize : 18,
        fontWeight:'700'
    },
})
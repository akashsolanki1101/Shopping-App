import {StyleSheet} from 'react-native'

export const styles= StyleSheet.create({
    list :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    listItem:{
        width : '100%',
        height : 160,
        flexDirection : 'row',
        padding : 10,
        justifyContent : 'space-around',
        backgroundColor : 'white',
        elevation : 2,
        marginBottom : 1,
        alignItems: 'center'
    },
    image:{
        width : '20%',
        height : '80%',
    },
    details :{
        width : '60%',
        height : '100%',
    },
    trashIcon:{
        height : '100%',
        alignItems : 'flex-start',
        justifyContent : 'flex-start'
    }
})
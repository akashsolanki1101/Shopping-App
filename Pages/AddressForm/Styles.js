import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container :{
        flex : 1,
        // alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'white',
    },
    addressInfo:{
        width : '100%',
        height : 450,
        elevation :3,
        backgroundColor : 'white',
        justifyContent:'space-between',
        padding : 20,
        marginBottom : 2,
    },  
    personalInfo:{
        width : '100%',
        height : 220,
        elevation:3,
        backgroundColor : 'white',
        padding: 20,
        justifyContent : 'space-between',
        marginBottom : 2

    },
    addressType:{
        width : '100%',
        height : 150,
        backgroundColor : 'white',
        padding: 20,
        justifyContent : 'space-around',
        elevation:3,
    },
    saveButtonBox:{
        width : '100%',
        height : 70,
        elevation : 3,
        backgroundColor : 'white',
        alignItems : 'center',
        alignItems : 'center'
    },
    saveButton :{
        width :'90%',
        height : 50,
        borderRadius : 2,
        backgroundColor : '#A5CAD2',
        alignItems : 'center',
        justifyContent : 'center',
        elevation : 1
    },
    saveButtonText:{
        fontSize : 20,
        fontWeight : '700',
        color : 'white'
    },
    textInput:{
        borderBottomWidth : .5,
        borderBottomColor : 'grey',
        fontSize: 17,
    },
    stateList : {
        width : '90%',
        height : '90%',
        backgroundColor : 'white',
        position : 'absolute',
        left:'5%',
        top:'3%',
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
    addressTypeText :{
        fontSize : 17,
    }
})
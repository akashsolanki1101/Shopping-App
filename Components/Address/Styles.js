import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    list:{
        flex : 1
    },
    listItem:{
        width : '100%',
        height : 190,
        backgroundColor : 'white',
        justifyContent : 'space-between',
        flexDirection : 'row',
        padding : 20,
        elevation : 2,
        marginBottom:1
    },
    leftBox:{
        width : '10%',
    },
    middleBox:{
        width : '70%',
        justifyContent : 'space-between'
    },
    userName:{
        flexDirection : 'row',
        alignItems : 'center',
    },
    userNameText:{
        fontSize : 18,
        fontWeight : '700'
    },
    addressType:{
        borderRadius:4,
        backgroundColor : '#rgba(100,100,100,.2)',
        paddingHorizontal : 5,
        paddingVertical:1,
        marginLeft : 10
    },
    addressTypeText:{
        fontSize : 10,
        fontWeight : '700',
    },
    rightBox:{
        width : '14%',
        overflow :'hidden'
    },
    editAddressButton:{
        width : '100%',
        height: '15%',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 4,
        borderColor:'#A5CAD2',
        borderWidth:.4,
        elevation:2,
        overflow :'hidden',
        backgroundColor :'white'
    },
    editAddressButtonText:{
        color : '#A5CAD2',
        fontSize : 14,
        fontWeight : '700'
    },
})
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
    },
    listItem:{
        width : '100%',
        height : 100,
        alignItems : 'center',
        justifyContent : 'space-around',
        // elevation : 2,
        marginVertical : 5,
        backgroundColor : 'white',
        flexDirection : 'column',
        paddingHorizontal : 10
    },
    imageBox :{
        width : 60,
        height : 80
    },
    image:{
        width : '100%',
        height : '100%'
    },
    details :{
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-around'
    },
    detailsText:{
        fontSize : 20
    },
    button : {
        width : '40%',
        backgroundColor : '#A5CAD2',
        padding : 5,
        alignItems : 'center'
    },
    buttonText :{
        color : 'white',
        fontSize  : 16, 
        fontWeight : '700'
    },
    ItemsList:{
        height : 150,
        marginBottom : 1
    },
    popUpContainer:{
       width:'90%',
       maxHeight:'80%',
       justifyContent:'center',
       backgroundColor:'#eee'
    },
    orderDetailsContainer:{
        height : 50,
        paddingHorizontal:10,
        justifyContent : 'space-between',
        alignItems:'center',
        elevation : 3,
        backgroundColor : 'white',
        flexDirection:'row'
    }
})
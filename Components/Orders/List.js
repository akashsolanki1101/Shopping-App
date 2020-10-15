import React,{useState} from 'react'

import {View,Text,TouchableNativeFeedback,ScrollView,TouchableWithoutFeedback} from 'react-native'

import {styles} from './Styles'
import {Backdrop} from '../Backdrop/Backdrop'
import {List} from '../OrderSummaryPage/List'

const DetailsPopPup = ({data}) =>{
    return(
        <TouchableWithoutFeedback
            onPress={()=>{}}
        >
            <View style={styles.popUpContainer}>
                <View style={styles.orderDetailsContainer}>
                    <Text style={styles.detailsText}>{data.date}</Text>
                    <Text style={styles.detailsText}>₹{data.amount}</Text>
                </View>
                <ScrollView>
                {
                    <List
                        data={data.data}
                    />
                }
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}

const MainList = props =>{
    const [showDetails,setShowDetails] = useState(false)
    const [selectedOrder,setSelectedOrder] = useState()
    
    const hideDetailsPopUp = ()=>{
        setShowDetails(false)
    }

    const handleSelectedOrderDetails = (amount,data,date)=>{
        const item = {
            data,
            amount,
            date
        }
        setSelectedOrder(item)
    }

    return(
        <>
        <ScrollView>
            <View style={styles.container}> 
                {
                    props.data.map(item=>{                    
                        return(
                            <View key={item.orderId} style={styles.listItem}>
                                <View style={styles.details}>
                                    <Text style={styles.detailsText}>₹{item.totalAmount}</Text>
                                    <Text style={styles.detailsText}>Items: {item.items.length}</Text>
                                    <Text style={styles.detailsText}>{item.date.slice(4,16)}</Text>
                                </View>
                                <TouchableNativeFeedback
                                    onPress={()=>{
                                        setShowDetails(true)
                                        handleSelectedOrderDetails(item.totalAmount,item.items,item.date.slice(4,16))
                                    }}
                                >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>SHOW DETAILS</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
        {
            showDetails?
                <Backdrop
                    closeHandler={hideDetailsPopUp}
                >
                    <DetailsPopPup data={selectedOrder}/>
                </Backdrop>
            : null
        }
        </>
    )
}

export default MainList
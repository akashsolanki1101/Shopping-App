import React,{useState} from 'react'

import {View,Text,TouchableNativeFeedback,ScrollView} from 'react-native'

import {styles} from './Styles'
import {List} from '../OrderSummaryPage/List'

const Fun = props =>{
    return <List data={props.data} style={styles.ItemsList} />
}

const MainList = props =>{
    const [showDetails,setShowDetails] = useState(false)

    return(
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
                                onPress={()=>setShowDetails(true)}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>SHOW DETAILS</Text>
                                </View>
                            </TouchableNativeFeedback>
                            {
                                showDetails?
                                (
                                    <View style={styles.container1}>
                                        <ScrollView>
                                            <Fun data={item.items}/>
                                        </ScrollView>
                                    </View>
                                )
                                : null
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}

export default MainList
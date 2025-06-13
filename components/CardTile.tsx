import {StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


type CardTileParam = {
    Pic: string;
    Name: string;
    Price: string;

}
const CardTile: React.FC<CardTileParam> = ({Pic, Name, Price}) => {
  return (
        <View style={styles.card}>
            //Image
            <Image
             style={styles.foodPic}
            source={{uri: Pic}}/>

         <View style={styles.textOverlay}>
               //Name
            <Text style={styles.nameTxt}>{Name}</Text>
            
            //Price
            <Text style={styles.priceTxt}>${Price}</Text>
         </View>
        </View>
  )
}

export default CardTile

const styles = StyleSheet.create({

    card: {
        height: 300,
        width: 220,
        backgroundColor: 'black',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25
    },
    foodPic: {
height: '100%',
width: '100%',
borderRadius: 25,
    },
    nameTxt: {
fontSize: 14,
fontWeight: 'bold',
color: 'white'
    },
    priceTxt: {
fontSize: 20,
fontWeight: 'bold',
color: 'white'

    },
      textOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(37, 36, 36, 0.16)', // semi-transparent bg
    padding: 10,
    borderRadius: 10,
    alignItems:'center',

  },


})
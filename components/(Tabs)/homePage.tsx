import { Image, StyleSheet, Text, View, ScrollView, Touchable } from 'react-native';
import React from 'react';
import Colors from '../colorPalette';
import FoodTab from '../FoodList/ListTitle';
import CardTile from '../CardTile';

const HomePage = () => (
  <ScrollView style={styles.container}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Image
        style={styles.logo}
        source={require('../../assets/icons/logo.png')} />
      <View style={{ flexDirection: 'row' }}>
        <Image style={[styles.upperBtn, { marginRight: 15 }]}
          source={require('../../assets/icons/search.png')} />
        <Image style={styles.upperBtn}
          source={require('../../assets/icons/profile.png')} />
      </View>
    </View>

    <View style={{ marginTop: 40, marginLeft: 40, marginBottom: 10 }}>
      <Text style={{ fontSize: 60, fontWeight: 'bold' }}>New</Text>
      <Text style={{ fontSize: 60 }}>Product</Text>
    </View>

    <ScrollView
      horizontal={true}
      style={{ flexDirection: 'row', marginLeft: 25, marginBottom: 30 }}>
      <FoodTab name='Fast food' color={Colors.primary} />
      <FoodTab name='Burger' />
      <FoodTab name='Fries' />
      <FoodTab name='Combo Offer' />
      <FoodTab name='Drinks' />
      <FoodTab name='Cakes' />
      <FoodTab name='Snacks' />
      <FoodTab name='Juice' />
    </ScrollView>

<ScrollView
    horizontal= {true}
    style={{ flexDirection: 'row', marginLeft: 25, marginBottom: 30 }}>
  
    <CardTile 
    Name='Crispy Burger'
    Price="19.99" 
    Pic='https://images.unsplash.com/photo-1633424234673-c8cd0f4df77b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    <CardTile 
    Name='Chicken Crispy Burger'
    Price="23" 
    Pic='https://images.unsplash.com/photo-1632203171982-cc0df6e9ceb4?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    <CardTile 
    Name='BBQ Burger'
    Price="23" 
    Pic='https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' />
    <CardTile 
    Name='Classic Burger'
    Price="23" 
    Pic='https://images.unsplash.com/photo-1624855600799-ac8e8bddd1da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzdGZvb2R8ZW58MHx8MHx8fDA%3D' />
    <CardTile 
    Name='Salty Fries'
    Price="23" 
    Pic='https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    <CardTile 
    Name='Combo Burger'
    Price="23" 
    Pic='https://plus.unsplash.com/premium_photo-1695822018806-1d22a78e0bb8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    <CardTile 
    Name='Burger'
    Price="23" 
    Pic='https://images.unsplash.com/photo-1624855600799-ac8e8bddd1da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzdGZvb2R8ZW58MHx8MHx8fDA%3D' />
    <CardTile 
    Name='Burger'
    Price="23" 
    Pic='https://images.unsplash.com/photo-1624855600799-ac8e8bddd1da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzdGZvb2R8ZW58MHx8MHx8fDA%3D' />


</ScrollView>
  </ScrollView>
);

export default HomePage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10
  },
  logo: {
    height:30,
    width: 30,
  },
  upperBtn:{
    height: 30,
    width: 30,
  },
  Heading:{
    fontSize: 50,
  },
  listTxt:{
    fontSize: 12,
    color: 'grey'
  }
})
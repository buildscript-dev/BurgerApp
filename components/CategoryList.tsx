import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardTile from './CardTile'


const CategoryData =[
const navigation = useNavigation();
if(){

}


] 

const CategoryList = () => {
  return (
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


</ScrollView>  )
}

export default CategoryList

const styles = StyleSheet.create({})
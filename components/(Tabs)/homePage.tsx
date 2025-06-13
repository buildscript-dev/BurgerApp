import { Image, StyleSheet, Text, View, ScrollView, Touchable } from 'react-native';
import React from 'react';
import Colors from '../colorPalette';
import FoodTab from '../FoodList/ListTitle';

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image 
          style={styles.logo}
          source={require('../../assets/icons/logo.png')}
        />
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
     style={{flexDirection: 'row',marginLeft: 25}}>
<FoodTab name='Fast food' />
<FoodTab name='Burger'/>
<FoodTab name='Fries'/>
<FoodTab name='Combo Offer'/>
<FoodTab name='Drinks'/>
<FoodTab name='Cakes' />
<FoodTab name='Snacks'/>
<FoodTab name='Juice'/>
    </ScrollView>
    </ScrollView>
  );
};

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
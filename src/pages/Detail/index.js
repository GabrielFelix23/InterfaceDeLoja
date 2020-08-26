import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../component/Dot/index'
import SizeButton from '../../component/SizeButton/index'

export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: "Nike Downshifter 10"
  })
  return (
    <ScrollView style={styles.container}>
        <Image
          source={require("../../assets/detail.png")}
          style={styles.image}
          resizeMode="cover"
        />

        <View>
          <View>
            <Text style={[styles.title, {fontSize: 24}]}>R$ 280,90</Text>
          </View>

          <View opacity={0.4}>
            <Text style={[styles.title, {fontSize: 30}]}>Nike Downshifter 10</Text>
          </View>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4"/>
          <Dot color="#fb6e53"/>
          <Dot color="#ddd"/>
          <Dot color="#000"/>
        </View>

        <View style={{flexDirection: "row", width: "100%"}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#fff">40</SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: "#fff"
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: "Anton_400Regular",
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  }
})
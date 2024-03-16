import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import PieChart from 'react-native-pie-chart'

const Profile = () => {

  const widthAndHeight = 250
  const series = [430, 321, 185, 123, 80]
  const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']

  return (
    <ScrollView style={{ flex: 1 }}>
    <View style={{backgroundColor:'white'}}>
      <Text style={{color:'black'}}>Basic</Text>
      <PieChart widthAndHeight={widthAndHeight} series={series} sliceColor={sliceColor} />
      <Text style={{color:'black'}}>Doughnut</Text>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        coverRadius={0.45}
        coverFill={'#FFF'}
      />
    </View>
  </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({})
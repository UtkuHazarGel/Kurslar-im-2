import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Courses from '../components/Courses'

export default function AllCourses() {
  return (
    <View style={styles.container}>
      <Courses coursesPeriod="Hepsi"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        textAlign:"center"
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Courses from '../components/Courses'

export default function RecentCourses() {
  return (
    <View style={styles.container}>
      <Courses coursesPeriod="Son Bir Hafta"/>
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
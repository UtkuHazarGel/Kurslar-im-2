import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";

export default function CourseForm() {
  return (
    <View style={styles.form}>
        <Text style={styles.title}>Kurs Bilgileri</Text>
      <View style={styles.priceAndDate}>
        <Input
          label="Tutar"
          style={styles.flexAll}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: () => {},
          }}
        />
        <Input
          label="Tarih"
          style={styles.flexAll}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLenght: 10,
            onChangeText: () => {},
          }}
        />
      </View>

      <Input
        label="Başlık"
        textInputConfig={{
          multiline: true,
          onChangeText: () => {},
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    priceAndDate:
        {flexDirection:"row"},
    flexAll:{
        flex:1
    },
    form:{
        marginTop:40
    },
    title:{
        fontSize:25,
        fontWeight:"bold",
        color:"blue",
        textAlign:"center",
        marginVertical:20
    }
    
});

import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { getFormattedDate } from "../helper/date";

export default function CourseForm({
  cancelHandler,
  onSubmit,
  buttonLabel,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
  });
  function addOrUpdateHandler() {
    const courseData = {
      amount: Number(inputs.amount),
      date: new Date(inputs.date),
      description: inputs.description,
    };
    onSubmit(courseData);
  }
  console.log(inputs);
  function inputChange(inputIdentifier, enteredValue) {
    setInputs((currentInput) => {
      return {
        ...currentInput,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Kurs Bilgileri</Text>
      <View style={styles.priceAndDate}>
        <Input
          label="Tutar"
          style={styles.flexAll}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChange.bind(this, "amount"),
            value: inputs.amount,
          }}
        />
        <Input
          label="Tarih"
          style={styles.flexAll}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLenght: 10,
            onChangeText: inputChange.bind(this, "date"),
            value: inputs.date,
          }}
        />
      </View>

      <Input
        label="Başlık"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChange.bind(this, "description"),
          value: inputs.description,
        }}
      />
      <View style={styles.buttons}>
        <Pressable onPress={cancelHandler}>
          <View style={styles.cancel}>
            <Text style={styles.cancelText}>İptal Et</Text>
          </View>
        </Pressable>
        <Pressable onPress={addOrUpdateHandler}>
          <View style={styles.addOrDelete}>
            <Text style={styles.addOrDeleteText}>{buttonLabel}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  priceAndDate: { flexDirection: "row" },
  flexAll: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    marginVertical: 20,
  },
  cancel: {
    backgroundColor: "red",
    minWidth: 120,
    marginRight: 10,
    padding: 8,
    alignItems: "center",
  },
  cancelText: {
    color: "white",
  },
  addOrDelete: {
    backgroundColor: "blue",
    minWidth: 120,
    marginRight: 10,
    padding: 8,
    alignItems: "center",
  },
  addOrDeleteText: {
    color: "white",
  },
});

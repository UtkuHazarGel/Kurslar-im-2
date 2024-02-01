import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Courses from "../components/Courses";
import { CoursesContext } from "../store/coursesContext";
import CourseForm from "../components/CourseForm";
import { storeCourse, updateCourse , deleteCourseHttp} from "../helper/http";

export default function ManageCourse({ route, navigation }) {
  const coursesContext = useContext(CoursesContext);
  
  const courseId = route.params?.courseId;
  let isEditing = false;
  const selectedCourse = coursesContext.courses.find(
    (course) => course.id === courseId
  );
  if (courseId) {
    isEditing = true;
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Kursu Güncelle" : "Kurs Ekle",
    });
  }, [navigation, isEditing]);

  async function deleteCourse() {
    coursesContext.deleteCourse(courseId);
    await deleteCourseHttp(courseId)
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  async function addOrUpdateHandler(courseData) {
    if (isEditing) {
      coursesContext.updateCourse(courseId, courseData);
      await updateCourse(courseId,courseData)
    } else {
      const id = await storeCourse(courseData)
      coursesContext.addCourse({...courseData,id:id});
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <CourseForm
        onSubmit={addOrUpdateHandler}
        cancelHandler={cancelHandler}
        buttonLabel={isEditing ? "Güncelle" : "Ekle"}
        defaultValues={selectedCourse}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <EvilIcons
            name="trash"
            size={36}
            color="black"
            onPress={deleteCourse}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  deleteContainer: {
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "blue",
    paddingTop: 10,
    marginTop: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

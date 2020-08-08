import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import Header from "../../components/Header";
import TeacherItem from "../../components/TeacherItem";
import { ITeacherItem } from "../../services/classes";

import styles from "./styles";

const TeacherListFavorites: React.FC = () => {
  const [teachers, setTeachers] = useState<ITeacherItem[]>([]);

  async function loadFavoriteTeachers() {
    const favoritesTeachers = await AsyncStorage.getItem("teachersFavorites");

    if (favoritesTeachers) {
      const favoritesList = JSON.parse(favoritesTeachers);
      setTeachers(favoritesList);
    }
  }

  useFocusEffect(() => {
    loadFavoriteTeachers();
  });

  return (
    <View style={styles.container}>
      <Header title="Meus proffys Favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers &&
          teachers.map((teacher, index) => {
            return (
              <TeacherItem
                key={`teacher_favorite_${index}`}
                teacher={teacher}
                isFavorite
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default TeacherListFavorites;

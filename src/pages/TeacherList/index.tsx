import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import {
  TextInput,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import Header from "../../components/Header";
import TeacherItem from "../../components/TeacherItem";
import { getClassesByParams, ITeacherItem } from "../../services/classes";

import styles from "./styles";

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setFiltersVisible] = useState(true);
  const [teachers, setTeachers] = useState<ITeacherItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const weekDayList = [
    { idx: 0, day: "Domingo" },
    { idx: 1, day: "Segunda-feira" },
    { idx: 2, day: "Terça-feira" },
    { idx: 3, day: "Quarta-feira" },
    { idx: 4, day: "Quinta-feira" },
    { idx: 5, day: "Sexta-feira" },
    { idx: 6, day: "Sábado" },
  ];

  function loadFavoriteTeachers() {
    AsyncStorage.getItem("teachersFavorites").then((response) => {
      if (response) {
        const favoritesList = JSON.parse(response);
        const favoritesIds = favoritesList.map(
          (favTeacher: ITeacherItem) => favTeacher.id
        );
        setFavorites(favoritesIds);
        console.log(favoritesIds);
      }
    });
  }

  function handlerFilterVisibleToogle() {
    setFiltersVisible(!isFiltersVisible);
  }

  function handleFiltersSubmit() {
    const idx = weekDayList.find((value) => value.day === weekDay);
    if (!idx || !time || !subject) {
      return null;
    } else {
      loadFavoriteTeachers();
      getClassesByParams({ week_day: idx.idx, time, subject }, setTeachers);
      handlerFilterVisibleToogle();
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Proffys Disponíveis">
        <View style={styles.filterBlock}>
          <BorderlessButton
            style={styles.filterBlockButton}
            onPress={handlerFilterVisibleToogle}
          >
            <Feather name="filter" size={20} color="#04D361" />
            <Text style={styles.textFilter}>
              Filtrar por dia, hora e matéria
            </Text>
            {isFiltersVisible && (
              <Feather name="chevron-up" size={20} color="#A380F6" />
            )}
            {!isFiltersVisible && (
              <Feather name="chevron-down" size={20} color="#A380F6" />
            )}
          </BorderlessButton>
        </View>
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={weekDay}
                  onChangeText={(text) => setWeekDay(text)}
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </Header>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers &&
          teachers.map((teacher, index) => {
            return (
              <TeacherItem
                key={`teacher_${index}`}
                teacher={teacher}
                isFavorite={favorites.includes(teacher.id)}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default TeacherList;

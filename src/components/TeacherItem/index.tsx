import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import unFavoriteIcon from "../../assets/images/icons/unfavorite.png";
import { ITeacherItem } from "../../services/classes";

import styles from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import { insertConnectionTeacher } from "../../services/connections";

interface ITeacherItemProps {
  teacher: ITeacherItem;
  isFavorite: boolean;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher, isFavorite }) => {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  function handleOpenWhatsApp() {
    const url = `whatsapp://send?phone=55${teacher.whatsapp}`;
    handleInsertConnenction();
    Linking.openURL(url);
  }

  async function handleIsFavoriteToogle() {
    const favorites = await AsyncStorage.getItem("teachersFavorites");
    let favoritesArray = [];

    if (favorites) favoritesArray = JSON.parse(favorites);

    if (isFavoriteState) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: ITeacherItem) => teacherItem.id === teacher.id
      );
      favoritesArray.splice(favoriteIndex, 1);
    } else {
      favoritesArray.push(teacher);
    }

    setIsFavoriteState(!isFavoriteState);
    await AsyncStorage.setItem(
      "teachersFavorites",
      JSON.stringify(favoritesArray)
    );
  }

  function handleInsertConnenction() {
    console.log(teacher.id);
    insertConnectionTeacher(teacher.id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri: teacher.avatar }} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          {" "}
          Preço/hora{" "}
          <Text style={styles.priceValue}> R$ {teacher.cost.toFixed(2)}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[
              styles.favoriteButton,
              isFavoriteState && styles.favoriteActiveButton,
            ]}
            onPress={handleIsFavoriteToogle}
          >
            {isFavoriteState ? (
              <Image source={unFavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>
          <RectButton style={styles.contactButton} onPress={handleOpenWhatsApp}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;

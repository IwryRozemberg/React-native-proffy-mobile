import React from "react";
import { View, ImageBackground, Text } from "react-native";

import giveClassesBgImg from "../../assets/images/give-classes-background.png";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();
  function handleNavigationBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImg}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <RectButton style={styles.okButton} onPress={handleNavigationBack}>
        <Text style={styles.onButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;

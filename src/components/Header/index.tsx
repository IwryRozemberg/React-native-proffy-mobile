import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import backImg from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
import styles from "./styles";

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title, children }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backImg} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{title}</Text>

      {children}
    </View>
  );
};

export default Header;

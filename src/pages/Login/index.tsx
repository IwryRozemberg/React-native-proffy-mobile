import { View, Image, Text, TextInput } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import landingImg from "../../assets/images/landing.png";
import styles from "./styles";

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={landingImg} style={styles.logo} />
      </View>
      <View style={styles.login}>
        <View style={styles.headerForm}>
          <Text style={styles.legend}>Fazer login</Text>
          <BorderlessButton style={styles.newAccountButton}>
            Criar uma conta
          </BorderlessButton>
        </View>
        <TextInput placeholder="E-mail" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} />
        <RectButton style={styles.loginButton}>Entrar</RectButton>
      </View>
    </View>
  );
};

export default Index;

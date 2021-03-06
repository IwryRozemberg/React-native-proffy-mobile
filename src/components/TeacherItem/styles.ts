import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderColor: '#e6e6f0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEEEEE',
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontFamily: 'Archivo_700Bold',
    color: '#32264d',
    fontSize: 20,
  },
  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 12,
    marginTop: 4,
  },
  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#6a6180',
  },
  footer: {
    backgroundColor: '#FAFAFC',
    borderTopColor: '#e6e6f0',
    borderTopWidth: 1,
    alignItems: 'center',
    padding: 24,
    marginTop: 24,
  },
  price: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 14,
  },
  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257e5',
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  favoriteButton: {
    backgroundColor: '#8257e5',
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteActiveButton: {
    backgroundColor: '#e33d3d',
  },
  contactButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  contactButtonText: {
    color: '#ffffff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;
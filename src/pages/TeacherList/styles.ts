import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F7',
    flex: 1,
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },
  filterBlock: {
    borderBottomColor: '#9871F5',
    borderBottomWidth: 1,
    marginBottom: 16,
    marginTop: -20,
  },
  filterBlockButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  textFilter: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#d4c2ff',
  },
  input: {
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%',
  },
  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
});

export default styles;
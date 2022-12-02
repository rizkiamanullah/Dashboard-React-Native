import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <View style={styles.bgContainer}>
      <StatusBar style='dark' />
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.homeLogo} source={require('./assets/dist/img/logo1.png')} />
        </View>

        <View style={styles.quickMenu}>
          <Text style={{fontWeight:'400', fontSize: 19, marginHorizontal: 15}}>
            Quick Access
          </Text>
          <TouchableOpacity style={styles.quickMenuButton}>
            <FontAwesomeIcon icon={faClock}/>
            <Text>
              Attendance
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickMenuButton}>
            <FontAwesomeIcon icon={faPlane}/>
            <Text>
              Business Trip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickMenuButton}>
            <FontAwesomeIcon icon={faCalendar}/>
            <Text>
              Form Izin
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickMenuButton}>
            <FontAwesomeIcon icon={faBusinessTime}/>
            <Text>
              Form Lembur
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: '#f4f6f9',
    paddingVertical:10,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  mainContainer:{
    flexDirection: 'column',
    backgroundColor: '#f4f6f9',
    alignItems: 'stretch',
    height: '70%',
  },
  imageContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeLogo: {
    height: 250,
    width: 250,
  },
  quickMenu:{
    height: '20%',
    backgroundColor: '#f4f6f9',
    paddingBottom: 10,

  },
  quickMenuButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  quickMenuButtonText:{
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  }
});

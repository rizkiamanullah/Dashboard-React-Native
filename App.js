import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  FlatList,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const s = StyleSheet.create({
  bgContainer: {
    paddingTop: '0%',
    paddingHorizontal: 0,
    backgroundColor: '#001f3f',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#f4f6f9',
    height: '89%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    color: '#000',
    fontSize: 'Segoe UI',
    fontSize: 21,
    fontWeight: '300',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#c2c3c5',
    borderRadius: 5,
    width: '90%',
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    backgroundColor: '#f4f6f9',
  },
  textButton: {
    color: '#0098d7',
    fontSize: 20,
  },
  listReminderContainer: {
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '90%',
    height: '8%',
    marginVertical: 10,
    padding: 15,
  }
})

export default function App() {
  const [enteredReminderText, setEnteredReminderText] = useState('');
  const [listReminder, setListReminder] = useState([]);

  function reminderInputHandler(text){
    // console.log(text);
    setEnteredReminderText(text);
  };

  function countTapHandler(){
    // console.log('tapped');
    // console.log(enteredReminderText);
    setListReminder(currentReminderText => [
      ...currentReminderText, 
      { text: enteredReminderText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={s.bgContainer}>
      <View style={s.box}>
        <Text style={s.text}>
          Aplikasi Pengingat Anda
        </Text>
        <TextInput style={s.textInput} placeholder="Masukkan yang perlu diingat" onChangeText={reminderInputHandler} />
        <TouchableOpacity style={s.button}>
          <Text style={s.textButton} onPress={countTapHandler}>
            Tambah
          </Text>
        </TouchableOpacity>
        <View style={s.listReminderContainer}>
          <FlatList
            data={listReminder}
            renderItem={(itemdata) => {
              return (
                <View>
                  <Text>
                    {/* {itemdata.item.id} */}
                    {itemdata.item.text}
                  </Text>
                </View>
              )
            }}
          />
        </View>
      </View>
    </View>
  );
}

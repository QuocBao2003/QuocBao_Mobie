import { Text, SafeAreaView, StyleSheet,TouchableOpacity,View,Image,TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize : 18}}>9:41</Text>
        <View style={styles.viewIcon}>
          <Icon name="signal" size={20} color="#000" />
          <Icon name="wifi" size={20} color="#000" />
          <Icon name="battery-full" size={20} color="#000" />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.image}>
          <Image source={require('./assets/Image95.png')} resizeMode="contain" />
        </View>
        <View style={styles.text}>
          <Text style={{color:'#8353E2',fontSize : 30}}>MANAGE YOUR</Text>   
          <Text style={{color:'#8353E2',fontSize : 30}}>         TASK</Text>   
        </View>
        <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#a9a9a9" >
        </TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}}>GET STARTED -></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :'#DEE1E62B'
  },
  header :{
    flexDirection : 'row',
    justifyContent : 'space-between',
    margin :10,
    height : 50
  },
  viewIcon :{
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : 70
  },
  body : {
    flexDirection : 'column',
    alignItems :'center',
  
  },
  image:{
    borderColor :'#8353E2',
    margin :10,
    borderWidth: 2,
    height : 260
  
  },
  text:{
    color:'#8353E2',
    fontSize : 50,
    marginTop : 10
  },
  input:{
    marginTop : 20,
    height : 40,
    width : '80%',
     borderColor: '#a9a9a9', 
    borderWidth: 2,
    borderRadius: 10, 
    paddingHorizontal: 10, 
    fontSize: 16,

  },
  button :{
    marginTop :10,
    height : 40,
    width : '50%',
    backgroundColor : '#00BDD6',
    padding : 10,
    borderRadius : 5,
    alignItems :'center'
  }

});

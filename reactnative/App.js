import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, Alert, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Btn } from './Btn';
import { Person } from './Person';
import { Counter } from './Counter';




export default function App() {
  const [count, setCount] = useState(0); //arttır azalt butonu için

  const alertMe = () => { //alert için
    Alert.alert('Dikkat', 'Silme işlemini onaylıyor musunuz?', [
      {
        text : "İptal",
        onPress: () => Alert.alert("İşleminiz başarıyla sonuçlandı", "İptal edildi."),
      },
      {
        text : "Devam et",
        onPress: () => Alert.alert("İşleminiz başarıyla sonuçlandı", "Silindi."),
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>


<Button 
title='Increase' 
onPress={() => {
  setCount((pre) => pre + 1);
}}
color={"red"}
/>

<Button title='Descrease' 
onPress={() => {
  setCount((prev) => prev - 1);
}}
color={"red"}
/>

<Text style={{ fontSize: 40}}>{count}</Text>

<Image style={{width: 100, height: 100}} source={require("./assets/kedi.jpeg")}/>

    
    
    <Button color={"pink"} title='Press' onPress={alertMe}/> 

    <View
    style={{width: 350, 
      height: 100, 
      flexDirection: "row"
    }}
    >
      <View style={{
        flex:2, 
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <View style={{
          width: 80, 
          height: 80, 
          borderRadius: 45, 
          backgroundColor: "grey",
          alignItems: 'center',
          justifyContent: 'center'}}>
          <Image style={{
            width: 75, 
            height: 75, 
            borderRadius:50
            }} source={require("./assets/kedi.jpeg")}/>
          </View>
      </View>

      <View style={{
         flex:4, 
         fontWeight: "bold", 
         justifyContent: "center"}}>
        <Text>neslihan ulupınar</Text>
        <Text>neslihanulpnr0@gmail.com</Text>
        </View>

      <View style={{
      flex:1,          
      justifyContent: "center",
      alignItems: 'center'}}>
        <Text style={{
          fontSize: 40, 
          fontWeight:"bold",
          }}><MaterialCommunityIcons name="instagram" size={24} color="black" /></Text>
      </View>
    </View>


<TextInput 
placeholder='name'
placeholderTextColor={"blue"}
  style={{ width: 200, height: 50, padding: 15, borderWidth: 2 }}
/>

<Btn/>

<Person name="neslihan" surname="ulupınar" color="pink"/>
<Person name="begüm" surname="ulupınar" color="purple"/>

<Counter/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

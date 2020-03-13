import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  function call()
    {
      fetch('apilink', 
      {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

        },
      body: JSON.stringify({
        userName: 'username',
        loginpwd: 'password',
          }),
        }
).then(res => res.json()) // if response is json, for text use res.text()
.then(response => { 
                if(response.logincredentials[0].message=="Success")
                  {
                    console.log("LoggedIn");
                  }
                
                }) // if text, no need for JSON.stringify
.catch(error => console.error('Error:', error));;

// console.log("yyyyyyyyyyyy"+as);
// Promise.resolve(s).then(value=>{
// console.log('value:',value);
// }) 
    }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
      onPress={
        call
      }title="Tap"/>
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

import React, {useState} from 'react';
import { StyleSheet, TextInput,Text, View, Button } from 'react-native';
import Btn from './Components/btn';
export default function App() {
  const [enteredGoal, setEnteredGoal]=useState('');
  const [courseGoals, setCourseGoal] =useState([]);
  const goalHandler=(enteredText)=>{
    setEnteredGoal(enteredText);
  };
  
  const addGoalHandler = ()=>{
    setCourseGoal([...courseGoals,enteredGoal]);
  };
    return (
    <View style={{padding:50}} >
      <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>

        {/* For input */}
        <TextInput 
          placeholder="Enter Goal" 
          style={{width:'80%',borderBottomColor:'black',  borderBottomWidth:1, marginBottom:10}} 
          onChangeText={goalHandler}
          value={enteredGoal}
        />
        <Button title="Add" style={{}} onPress={addGoalHandler}/>
        <Btn/>
      </View>

      <View>
        {/* For Output */}
    {courseGoals.map(goal=>{
      return (
        <Text key={goal}>{goal}</Text>
      )
    })}
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
});





// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Blink extends Component {

//   componentDidMount(){
//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }

//   //state object
//   state = { isShowingText: true };

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }



// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const styles = StyleSheet.create({
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, flexDirection: 'row'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//         <Text>Yo</Text>
//       </View>
//     );
//   }
// } 
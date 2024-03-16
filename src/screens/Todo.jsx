import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BottomModal,
  ModalContent,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import { tasks } from '../constants/tasks';
import Hr from 'react-native-hr'

const Todo = () => {
  const suggestions = [
    {
      id: '0',
      todo: 'Drink Water, keep healthy',
    },
    {
      id: '1',
      todo: 'Go Excercising',
    },
    {
      id: '2',
      todo: 'Go to bed early',
    },
    {
      id: '3',
      todo: 'Take pill reminder',
    },
    {
      id: '4',
      todo: 'Go Shopping',
    },
    {
      id: '5',
      todo: 'Finish assignments',
    },
  ];
  
  const [todo, setTodo] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [taskList, setTaskList] = useState(tasks)

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <Text
          style={{marginLeft: 15, marginTop: 20, color: 'black', fontSize: 20}}>
          My Tasks
        </Text>
      </View>
      <ScrollView style={{flex: 1}} horizontal={false}>
      {taskList.map(task => (
          <View key={task.id} style={{ flexDirection: 'row', justifyContent:"space-between", paddingVertical: 10, paddingHorizontal: 20 }}>
            <Text style={{color:'black', fontSize:15}}>{task.todo}</Text>
            <Hr />
            <Pressable >
              <Antdesign name="checkcircleo" size={20} style={{color: 'black', marginLeft: 10}} />
            </Pressable>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginTop: 150,
          alignItems: 'flex-end',
        }}>
        <Pressable
          onPress={() => setIsVisible(!isVisible)}
          style={{
            borderRadius: 50,
            marginBottom: 30,
            marginRight: 25,
          }}>
          <Antdesign
            name="pluscircle"
            size={50}
            style={{color: 'black'}}></Antdesign>
        </Pressable>
      </View>

      <BottomModal
        onBackdropPress={() => setIsVisible(!isVisible)}
        onHardwareBackPress={() => setIsVisible(!isVisible)}
        swipeDirection={['up', 'down']}
        swipeThreshold={200}
        modalTitle={
          <ModalTitle
            title="Add Task"
            style={{backgroundColor: 'white', color: 'white'}}
          />
        }
        modalAnimation={
          new SlideAnimation({
            slidefrom: 'bottom',
          })
        }
        visible={isVisible}
        onTouchOutside={() => setIsVisible(!isVisible)}>
        <ModalContent
          style={{width: '100%', height: 290, backgroundColor: 'white'}}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={todo}
              onChangeText={text => setTodo(text)}
              placeholder="Enter a task here"
              style={{
                backgroundColor: 'purple',
                color: 'white',
                fontSize: 17,
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 25,
                padding: 10,
                marginTop: 15,
                width: '90%',
              }}></TextInput>
            <Ionicons
              name="send-outline"
              size={30}
              color="purple"
              style={{position: 'absolute', right: 1, top: 25}}
            />
          </View>

          <Text style={{marginTop: 15, color: 'black'}}>Some suggestions</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              flexWrap: 'wrap',
              marginVertical: 10,
            }}>
            {suggestions?.map((item, index) => (
              <Pressable
                onPress={() => setTodo(item?.todo)}
                style={{
                  backgroundColor: 'purple',
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderRadius: 25,
                }}
                key={index}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  {item?.todo}
                </Text>
              </Pressable>
            ))}
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

// import {
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import React, { useState } from 'react';
// import {
//   BottomModal,
//   ModalContent,
//   ModalTitle,
//   SlideAnimation,
// } from 'react-native-modals';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Antdesign from 'react-native-vector-icons/AntDesign';
// import { tasks } from '../constants/tasks';
// import Hr from 'react-native-hr';

// const Todo = () => {
//   const suggestions = [
//     {
//       id: '0',
//       todo: 'Drink Water, keep healthy',
//     },
//     {
//       id: '1',
//       todo: 'Go Exercising',
//     },
//     {
//       id: '2',
//       todo: 'Go to bed early',
//     },
//     {
//       id: '3',
//       todo: 'Take pill reminder',
//     },
//     {
//       id: '4',
//       todo: 'Go Shopping',
//     },
//     {
//       id: '5',
//       todo: 'Finish assignments',
//     },
//   ];

//   const [todo, setTodo] = useState('');
//   const [isVisible, setIsVisible] = useState(false);
//   const [taskList, setTaskList] = useState(tasks);

//   // Function to add a new task
//   const addTask = () => {
//     if (todo.trim() !== '') {
//       const newTask = {
//         id: taskList.length.toString(),
//         todo: todo,
//       };
//       setTaskList([...taskList, newTask]);
//       setTodo(''); // Clearing the input after adding the task
//       setIsVisible(false); // Closing the modal after adding the task
//     }
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: 'white' }}>
//       <View>
//         <Text
//           style={{
//             marginLeft: 15,
//             marginTop: 20,
//             color: 'black',
//             fontSize: 20,
//           }}>
//           My Tasks
//         </Text>
//       </View>
//       <ScrollView style={{ flex: 1 }} horizontal={false}>
//         {taskList.map((task) => (
//           <View
//             key={task.id}
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               paddingVertical: 10,
//               paddingHorizontal: 20,
//             }}>
//             <Text style={{ color: 'black', fontSize: 15 }}>{task.todo}</Text>
//             <Hr />
//             <Pressable>
//               <Antdesign
//                 name="checkcircleo"
//                 size={20}
//                 style={{ color: 'black', marginLeft: 10 }}
//               />
//             </Pressable>
//           </View>
//         ))}
//       </ScrollView>

//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'flex-end',
//           marginTop: 150,
//           alignItems: 'flex-end',
//         }}>
//         <Pressable
//           onPress={() => setIsVisible(true)}
//           style={{
//             borderRadius: 50,
//             marginBottom: 30,
//             marginRight: 25,
//           }}>
//           <Antdesign
//             name="pluscircle"
//             size={50}
//             style={{ color: 'black' }}></Antdesign>
//         </Pressable>
//       </View>

//       <BottomModal
//         onBackdropPress={() => setIsVisible(false)}
//         onHardwareBackPress={() => setIsVisible(false)}
//         swipeDirection={['up', 'down']}
//         swipeThreshold={200}
//         modalTitle={
//           <ModalTitle
//             title="Add Task"
//             style={{ backgroundColor: 'white', color: 'white' }}
//           />
//         }
//         modalAnimation={
//           new SlideAnimation({
//             slidefrom: 'bottom',
//           })
//         }
//         visible={isVisible}
//         onTouchOutside={() => setIsVisible(false)}>
//         <ModalContent
//           style={{
//             width: '100%',
//             height: 290,
//             backgroundColor: 'white',
//           }}>
//           <View style={{ flexDirection: 'row' }}>
//             <TextInput
//               value={todo}
//               onChangeText={(text) => setTodo(text)}
//               placeholder="Enter a task here"
//               style={{
//                 backgroundColor: 'purple',
//                 color: 'white',
//                 fontSize: 17,
//                 borderColor: 'black',
//                 borderWidth: 1,
//                 borderRadius: 25,
//                 padding: 10,
//                 marginTop: 15,
//                 width: '90%',
//               }}></TextInput>
//             <Ionicons
//               name="send-outline"
//               size={30}
//               color="purple"
//               style={{ position: 'absolute', right: 1, top: 25 }}
//             />
//           </View>

//           <Text style={{ marginTop: 15, color: 'black' }}>
//             Some suggestions
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               gap: 10,
//               flexWrap: 'wrap',
//               marginVertical: 10,
//             }}>
//             {suggestions?.map((item, index) => (
//               <Pressable
//                 onPress={() => setTodo(item?.todo)}
//                 style={{
//                   backgroundColor: 'purple',
//                   paddingHorizontal: 10,
//                   paddingVertical: 8,
//                   borderRadius: 25,
//                 }}
//                 key={index}>
//                 <Text
//                   style={{ textAlign: 'center', color: 'white' }}>
//                   {item?.todo}
//                 </Text>
//               </Pressable>
//             ))}
//           </View>
//           <Pressable
//             onPress={addTask}
//             style={{
//               backgroundColor: 'purple',
//               paddingVertical: 10,
//               borderRadius: 25,
//               marginTop: 15,
//             }}>
//             <Text
//               style={{
//                 textAlign: 'center',
//                 color: 'white',
//                 fontSize: 16,
//               }}>
//               Add Task
//             </Text>
//           </Pressable>
//         </ModalContent>
//       </BottomModal>
//     </View>
//   );
// };

// export default Todo;


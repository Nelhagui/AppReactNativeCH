import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import TaskList from './src/components/tareas';



const App = () => {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const onChange = (text) => {
    setTask(text);
  }

  const addTask = () => {
    setTaskList([...taskList, {id: Math.random(), task}]);
    setTask('')
  }

  const deleteTask = (id) => {
    setTaskList(taskList.filter(task => task.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerForm}>
          <TextInput
            onChangeText={(text)=>onChange(text)}
            value={task}
            style={styles.textInputs}
            />
            <Button
              onPress={() => addTask()}
              title='sent'
              style={styles.buttonInputs}
            />
        </View>
        <View style={styles.containerTask}>
          {taskList.length > 0 ? (
            <>
              <Text style={styles.titleTaks}>Lista de Tareas</Text>
              <FlatList
                keyExtractor={(item) => item.id.toString()}
                refreshing={true}
                data={taskList}
                renderItem={({item}) => (
                  <TaskList item={item} deleteTask={deleteTask} />
                )}
              />
            </>
          ) : (
            <Text style={styles.titleTaks}>Sin Lista</Text>
          )}
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  containerForm: {
    flexDirection: 'row'
  },
  titleTaks:
  {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  textInputs: {
    backgroundColor: '#f0f0f0',
    padding: 2,
    paddingStart: 15,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    width: '80%'
  },
})

export default App;

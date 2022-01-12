import React from "react";
import { styles } from "./style";
import {
    View,
    Text,
    TouchableOpacity
  } from 'react-native';

const TaskList = ({item, deleteTask}) => {
    return (
        <View style={styles.cardTask}>
            <Text>{item.task}</Text>
            <TouchableOpacity>
                <Text onPress={()=> {deleteTask && deleteTask(item.id)}}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TaskList;
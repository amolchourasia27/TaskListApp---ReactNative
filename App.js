import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const defaultValue = '                            ⬇️⬇️ List will appear ⬇️⬇️';
const App = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const handelAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  const List = props => {
    return (
      <View style={styles.Box}>
        <Text style={styles.textBox}>{props.data}</Text>
      </View>
    );
  };

  return (
    <View style={styles.bodyWrapper}>
      <Text style={styles.title}>Enter Item in a list</Text>
      <View>
        <TextInput
          style={styles.InputField}
          placeholder="Write a task"
          onChangeText={text => setTask(text)}
          value={task}
        />
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => handelAddTask()}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => completeTask()}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
      <View />
      <View style={styles.scrollWrapper}>
        <List data={defaultValue} />
        <ScrollView style={styles.listWrapper}>
          {taskItems.map((item, index) => {
            return <List key={index} data={item} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyWrapper: {
    backgroundColor: '#222831',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    paddingTop: 25,
    paddingBottom: 15,
    color: '#EFEFEF',
    fontWeight: 'bold',
  },
  InputField: {
    backgroundColor: '#393E46',
    height: 70,
    margin: 50,
    borderRadius: 15,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '20%',
    width: '100%',
    backgroundColor: '#222831',
    alignSelf: 'center',
  },
  inputButton: {
    backgroundColor: '#00ADB5',
    height: 50,
    width: 5,
    flex: 3,
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 15,
    alignSelf: 'center',
  },
  removeButton: {
    backgroundColor: '#00ADB5',
    height: 50,
    width: 15,
    marginLeft: '10%',
    marginRight: '10%',
    flex: 3,
    borderRadius: 15,
    alignSelf: 'center',
  },
  textBox: {
    alignItems: 'center',
    color: '#EFEFEF',
    fontWeight: 'bold',
  },
  Box: {
    alignItems: 'flex-start',
    borderRadius: 10,
    margin: 5,
    padding: 5,
    backgroundColor: '#00ADB5',
  },
  listWrapper: {
    backgroundColor: '#222831',
    margin: 20,
  },
  buttonText: {
    padding: 10,
    margin: '5%',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  listContainer: {
    backgroundColor: '#222831',
  },
  scrollWrapper: {
    backgroundColor: '#222831',
    height: '35%',
    width: '100%',
    alignContent: 'center',
  },
});
export default App;

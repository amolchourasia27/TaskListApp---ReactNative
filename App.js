import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const handelAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = idx => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(idx, 1);
    setTaskItems(itemsCopy);
  };
  const List = props => {
    return (
      <View style={styles.Box}>
        <Text style={styles.textBox}>{props.data}</Text>
        <View style={styles.checkBokContainer}>
          <TouchableOpacity onPress={() => completeTask(props.idx)}>
            <View style={styles.checkBok}>
              <Text>✔️</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.bodyWrapper}>
      <Text style={styles.title}>Create Task List!!</Text>
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
          <Text style={styles.buttonText}>Enter Task</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.removeButton}
          onPress={() => completeTask()}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity> */}
      </View>
      <View />
      <View style={styles.scrollWrapper}>
        <ScrollView style={styles.listWrapper}>
          {taskItems.map((item, index) => {
            return <List key={index} data={item} idx={index} />;
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
    height: '100%',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 25,
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
    flex: 6,
    marginLeft: '9%',
    marginRight: '9%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  textBox: {
    alignItems: 'center',
    color: '#EFEFEF',
    fontWeight: 'bold',
  },
  Box: {
    flexDirection: 'row',
    alignItems: 'flex-end',
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
    marginTop: '5%',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
  },
  listContainer: {
    backgroundColor: '#222831',
  },
  scrollWrapper: {
    backgroundColor: '#222831',
    height: 200,
    width: 350,
    alignContent: 'center',
  },
  checkBok: {
    backgroundColor: 'green',
    height: 20,
    width: 20,
    borderWidth: 1,
  },
  checkBokContainer: {
    alignContent: 'center',
    marginLeft: 250,
    paddingBottom: 4,
    position: 'absolute',
  },
});
export default App;

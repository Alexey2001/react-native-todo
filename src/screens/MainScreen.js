import React from 'react'
import {StyleSheet, View, FlatList, Text, Image} from 'react-native'
import {AddTodo} from '../components/AddTodo'
import {Todo} from '../components/Todo'
export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    let content = (
      <FlatList
      keyExtractor={item => item.id.toString()}
      data={todos}
      renderItem={({item}) => {
        return <Todo todo={item} onRemove={removeTodo}
          onOpen={openTodo}
        />
      }}
    />
    )

    if(todos.length === 0) {
      content =(
         <View style={styles.imgWrap}>
        <Image style={styles.image} source={require('../../assets/no-items.png.png')}/>
        {/* <Image 
        style={styles.image} 
        source={{
          uri: 'http://samuraigeeks.net/wp-content/uploads/2019/06/373-3738691_react-native-svg-transformer-allows-you-import-svg.jpg'
        }}/> */}

      </View>

      )
    }

    return (
     <View>
        <AddTodo onSubmit={addTodo}/>
        {content}
        </View>
    )
}

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})
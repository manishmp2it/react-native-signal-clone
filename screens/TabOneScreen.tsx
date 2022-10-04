import * as React from "react";
import { Text, StyleSheet, View, Image,FlatList } from "react-native"
import ChatRoomItem from "../components/ChatRoomItem/ChatRoomItem";
import chatRoomData from "../assets/dummy-data/ChatRooms"
export default function TabOneScreen() {

  const chatRoom1=chatRoomData[0];
  const chatRoom2=chatRoomData[1];

  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData}
        renderItem={({item})=><ChatRoomItem chatRoom={item}/>}
        showsVerticalScrollIndicator={false}
      />
     
    </View>
  );

}

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white',
    flex:1
  }
})


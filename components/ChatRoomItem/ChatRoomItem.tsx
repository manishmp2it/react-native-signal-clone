import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styles from "./Styles";

export default function ChatRoomItem({ chatRoom}:any) {

  const user = chatRoom.users[1]

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.imageUri }} style={styles.image} />

      {chatRoom.newMessages ? <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
      </View>:null}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
      </View>
    </View>
  )
}


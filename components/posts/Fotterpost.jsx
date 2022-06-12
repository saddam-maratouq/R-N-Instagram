import { StyleSheet, Text, View } from "react-native";
import React from "react";

//icons
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const Fotterpost = ({ post }) => {
  return (
    <>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* instgram icon  */}
        <View style={styles.IconContent}>
          <FontAwesome name="heart-o" size={26} color="#fff" />
          <FontAwesome name="comment-o" size={26} color="#fff" />
          <MaterialCommunityIcons name="share-outline" size={26} color="#fff" />
        </View>

        <View>
          <FontAwesome5 name="bookmark" size={24} color="#fff" />
        </View>
      </View>

      {/* likes */}
      <View style={{ marginTop: 5, flexDirection: "row" }}>
        <Text style={{ color: "#fff", fontWeight: "500" }}>
          {post.likes.toLocaleString()} Likes
        </Text>
      </View>

      {/* caption */}

      <View style={{ marginTop: 5, flexDirection: "row" }}>
        <Text>
          <Text style={{ color: "#fff", fontWeight: "900" }}>
          
          {post.userName}{" "}
          </Text>
          <Text style={{ color: "#fff" }}>{post.caption}</Text>
        </Text>
      </View>

      {/* comment ternery */}
      <View style={{ marginTop: 5 }}>
        {!!post.Comments.length && (
          <Text style={{ color: "gray" }}>
            View {post.Comments.length > 1 ? "All " : ""} {post.Comments.length}
            {post.Comments.length > 1 ? " Comments" : " Comment"}
          </Text>
        )}
      </View> 

      {/* Real comment  */} 

     
          
       {post.Comments.map((comment,index) => (
          <View key={index} style={{ marginTop: 5, flexDirection: "row" }}>
          <Text style={{color:'white' }} > 
          <Text style={{ fontWeight:'900' }}>{comment.user} </Text>
          <Text>{comment.comment}</Text>
          </Text>
          
          </View>
       ))}  
     
    </>
  );
};

export default Fotterpost;

const styles = StyleSheet.create({
  IconContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "35%",
  },
});

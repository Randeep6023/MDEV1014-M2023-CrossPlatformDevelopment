import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { Text, View } from "react-native";

const SearchResult = () => {
    return(
        <SafeAreaView style = {styles.wrapper}>
            <View style = {[styles.boxStyle, styles.box1]}>
                <View style = {styles.box1content}>
                    <Text style = {styles.searchText}>Table</Text>
                </View>
            </View>
            <View style = {[styles.boxStyle, styles.box2]}>
                <View style = {styles.box2content}></View>
                <View style = {styles.box2content}></View>
                <View style = {styles.box2content}></View>
                <View style = {styles.box2content}></View>
                <View style = {styles.box2content}></View>
                <View style = {styles.box2content}></View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     wrapper : {
        flex : 1,
        flexDirection : "column",
        backgroundColor: '#66BB6A',
    },
    boxStyle : {
        width : "100%",
        padding : 10,
        marginTop : 20,
        backgroundColor : "white"
    },
    box1 : {
        backgroundColor: '#66BB6A',
        justifyContent : "flex-start"
    },
    box1content : {
        width : "100%",
        borderWidth : 2,
        borderRadius : 10,
        borderColor : '#BDBDBD',
        backgroundColor : 'white',
        //alignSelf : "flex-start",
        flexDirection : "row",
        alignItems : "center",
        height : 40
    },
    box2 : {
        flex : 1,
        justifyContent : "flex-end"
    },
    box2content : {
        backgroundColor : "#E0E0E0",
        flex : 0.3,
        marginTop : 10,
    },
    searchText : {
        marginLeft : 10,
        fontSize : 20
    }
})

export default SearchResult
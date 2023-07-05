import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { Text, View, Image } from "react-native";

const SearchResult = () => {
    return(
        <SafeAreaView style = {styles.wrapper}>
            <View style = {[styles.boxStyle, styles.topBar]}>
                <Image source={require('./assets/menuImage.jpg')} style = {styles.menuIcon}/>
                <View style = {styles.textArea}>
                    <Text style = {styles.screenText}>Search Results</Text>
                </View>
                <Image source={require('./assets/cartIcon.png')} style = {styles.cartIcon} />
            </View>
            <View style = {[styles.boxStyle, styles.box1]}>
                {/* <Image source={require('./assets/menuImage.jpg')} style = {styles.menuIcon}/> */}
                <View style = {styles.box1content}>
                    <Image source = {require('./assets/searchIcon.png')} style = {styles.searchIcon} />
                    <Text style = {styles.searchText}>Table</Text>
                    <Image source = {require('./assets/cancelIcon.png')} style = {styles.cancelIcon} />
                </View>
            </View>
            <View style = {[styles.boxStyle, styles.box2]}>
                <View style = {styles.box2content}>
                    <View style = {styles.imageContainer}>
                        <Image source={require('./assets/table1.jpeg')} style = {styles.resultImage} />
                    </View>
                </View>
                <View style = {styles.box2content}>
                    <View style = {styles.imageContainer}>
                        <Image source={require('./assets/table2.jpeg')} style = {styles.resultImage} />
                    </View>
                </View>
                <View style = {styles.box2content}>
                    <View style = {styles.imageContainer}>
                        <Image source={require('./assets/table3.webp')} style = {styles.resultImage} />
                    </View>
                </View>
                <View style = {styles.box2content}>
                    <View style = {styles.imageContainer}>
                        <Image source={require('./assets/table4.webp')} style = {styles.resultImage} />
                    </View>
                </View>
                <View style = {styles.box2content}>
                    <View style = {styles.imageContainer}>
                        <Image source={require('./assets/table5.jpeg')} style = {styles.resultImage} />
                    </View>
                </View>
                <View style = {styles.box2content}>
                    <View style = {styles.imageContainer}>
                        <Image source={require('./assets/table6.jpeg')} style = {styles.resultImage} />
                    </View>
                </View>
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
        //marginTop : 10,
        backgroundColor : "white"
    },
    topBar : {
        backgroundColor: '#66BB6A',
        justifyContent : "flex-start",
        flexDirection : "row",
    },
    textArea : {
        flex : 1,
        alignContent : "center"
    },
    screenText : {
        alignSelf : "center",
        justifyContent : "center",
        fontSize : 30
    },
    menuIcon : {
        width : 40,
        height : 40,
        marginLeft : 10,
        backgroundColor : "#66BB6A",
        borderRadius : 5
    },
    cartIcon : {
        width : 40,
        height : 40,
        alignSelf : "flex-end",
        marginRight : 10,
        borderRadius : 5
    },
    box1 : {
        backgroundColor: '#66BB6A',
        justifyContent : "flex-start",
        flexDirection : "row",
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
        height : 40,
        //marginLeft : 10
    },
    searchText : {
        marginLeft : 10,
        fontSize : 20,
        flex : 1
    },
    searchIcon : {
        width : 20,
        height : 20,
        marginLeft : 10
    },
    cancelIcon : {
        width : 20,
        height : 20,
        marginRight : 10
    },
    box2 : {
        flex : 1,
        justifyContent : Platform.OS == "web" ? "center" : "flex-start",
        flexDirection : Platform.OS == "web" ? "row" : "column",
        flexWrap : Platform.OS == "web" ? "wrap" : "nowrap"
    },
    box2content : {
        backgroundColor : "#E0E0E0",
        flex : 0.3,
        margin : Platform.OS == "web" ? 5 : 3,
        //flex : Platform.OS == "web" ? 1 : 0.3,
        flexDirection : "row",
        minWidth : Platform.OS == "web" ? "49%" : undefined,
    },
    imageContainer : {
        flexDirection : "row",
        position : "relative",
        alignItems : "center",
        flex : 1,
        margin : 8
    },
    resultImage : {
        width : 120,
        height : 90,
        resizeMode : "cover",
    }
})

export default SearchResult
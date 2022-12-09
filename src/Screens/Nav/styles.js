import { StyleSheet } from "react-native";

export default StyleSheet.create({
    nav: {
        backgroundColor: "#272630",
        paddingHorizontal: 10
    },
    top_nav: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nav_image: {
        width: 70,
        height: 50,
        marginTop: 8
    },
    ml: {
        marginLeft: 5
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    nav_icon: {
        fontSize: 30,
        color: "#fff"
    },
    username: {
        color: "#fff",
        fontWeight: "600"
    }, 
    cart: {
        position: "relative"
    },
    cart_items: {
        position: "absolute",
        color: "orange",
        fontWeight: "600",
        left: "50%",
        top: "-15%",
    },
    searchbar: {
        backgroundColor: "#fff",
        height: 40,
        width: "100%",
        flexDirection: "row",
        borderRadius: 5,
        marginBottom: 5
    },
    search: {
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    search_btn: {
        backgroundColor: "orange",
        padding: 2,
        flex: 1,
        borderRadius: 5
    }
})
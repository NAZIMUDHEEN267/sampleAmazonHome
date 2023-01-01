import { StyleSheet } from "react-native";

export default StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#232142",
        justifyContent: "space-between",
        width: "100%"
    },
    footer_top: {
        backgroundColor: "#747980",
        padding: 10
    },
    font: {
        color: "#fefefe",
        fontWeight: "600",
        textAlign: "center",
        marginTop: 7,
    },
    footer_center: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10
    },
    footer_below: {
        backgroundColor: "#111",
        padding: 10
    },
    flex: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})
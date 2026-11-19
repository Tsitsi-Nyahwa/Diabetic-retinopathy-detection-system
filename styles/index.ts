import { Dimensions, StyleSheet } from "react-native";

export const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fdfdfdff",
        width: width,
        height: height,
        position: "relative",
   },
    container: {
        padding: 25,
        position: "relative",
    },
    bg_success: {
        backgroundColor: "#16a34a", // green-600
    },
    bg_danger: {
        backgroundColor: "#dc2626", // red-600
    },
    bg_purple: {
        backgroundColor: "#7e22ce", // purple-700
    },
    bg_amber: {
        backgroundColor: "#f59e0b", // amber-500
    },
    bg_blue: {
        backgroundColor: "#2563eb", // blue-600
    },
    bg_white: {
        backgroundColor: "#ffffff",
    },
    outline: {
        backgroundColor: "#ffffff",
        borderColor: "#e4e4e4f3",
        borderWidth: 0.9,
    },
    bg_mute : {backgroundColor :"#b1b5bdff"},
    bg_success_30: { backgroundColor: "rgba(22, 163, 74, 0.3)" },
    bg_danger_30: { backgroundColor: "rgba(220, 38, 38, 0.3)" },
    bg_purple_30: { backgroundColor: "rgba(126, 34, 206, 0.3)" },
    bg_amber_30: { backgroundColor: "rgba(245, 158, 11, 0.3)" },
    bg_blue_30: { backgroundColor: "rgba(37, 99, 235, 0.3)" },
    text_mute : {color :"#b1b5bdff"},
    text_success: { color: "#16a34a" },
    text_danger: { color: "#dc2626" },
    text_purple: { color: "#7e22ce" },
    text_amber: { color: "#f59e0b" },
    text_blue: { color: "#2563eb" },
    text_white: { color: "#ffffff" },
    text_gray : {color : "#667"},
    h1: {
        fontSize: 29,
        fontWeight: "bold",
        fontFamily: "Poppins-Bold",
        color: "#222",
    },
    h2: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "Poppins-Bold",
        color: "#222",
    },
    h3: {
        fontSize: 21,
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold",
        color: "#333",
    },
    h4: {
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold",
        color: "#333",
    },
    h5: {
        fontSize: 15,
        fontWeight: "500",
        fontFamily: "Poppins-Medium",
        color: "#444",
    },
    h6: {
        fontSize: 13,
        fontWeight: "500",
        fontFamily: "Poppins-Medium",
        color: "#444",
    },
    p: {
        fontSize: 12,
        fontFamily: "Poppins-Regular",
        color: "#555",
    },
    fontBold: {
        fontFamily: "Poppins-Bold",
    },
    fontSemiBold :{
        fontFamily: "Poppins-SemiBold",
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        flexDirection: "row",
    },
    buttonSmall: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 8,
        flexDirection: "row",
    },
    normalButtonSM: {
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 8,
        flexDirection: "row",
        alignSelf: "flex-start",
    },
    btnText: {
        fontSize: 12,
        fontFamily: "Poppins-Regular",
    },
    buttonOutline: {
        backgroundColor: "transparent",
       paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderColor: "#c7c7c7f3",
        borderWidth: 1,
    },
    buttonText: {
        color: "#fff",
        fontFamily: "Poppins-Regular",
        textAlign: "center",
        fontSize: 12,
    },
    buttonTextOutline: {
        fontFamily: "Poppins-SemiBold",
        textAlign: "center",
        fontSize: 12,
    },
    textCenter: {
        textAlign: "center",
    },
    centerItems: {
        justifyContent: "center",
        alignItems: "center",
    },
    flexRow: {
        flexDirection: "row",
    },
    flexWrap: {
        flexWrap : "wrap"
    },
    flexColumn: {
        flexDirection: "column",
    },
    justifyStart :{
        justifyContent : "flex-start"
    },
    justifyEnd: {
        justifyContent: "flex-end",
    },
    justifyBetween: {
        justifyContent: "space-between",
    },
    justifyEvenly :{ justifyContent :"space-evenly"},
    mTop10 : {
        marginTop : 10
    },
    h10: { height: height * (10 / 100) },
    h20: { height: height * (20 / 100) },
    h30: { height: height * (30 / 100) },
    h40: { height: height * (40 / 100) },
    h50: { height: height * (50 / 100) },
    h60: { height: height * (60 / 100) },
    h70: { height: height * (70 / 100) },
    h80: { height: height * (80 / 100) },
    h90: { height: height * (90 / 100) },
    h100: { height: "100%" },
    w5: { width: width * 0.05 },
    w10: { width: width * 0.1 },
    w15: { width: width * 0.15 },
    w20: { width: width * 0.2 },
    w25: { width: width * 0.25 },
    w30: { width: width * 0.3 },
    w35: { width: width * 0.35 },
    w40: { width: width * 0.4 },
    w45: { width: width * 0.45 },
    w50: { width: width * 0.5 },
    w55: { width: width * 0.55 },
    w60: { width: width * 0.6 },
    w65: { width: width * 0.65 },
    w70: { width: width * 0.7 },
    w75: { width: width * 0.75 },
    w80: { width: width * 0.8 },
    w85: { width: width * 0.85 },
    w90: { width: width * 0.9 },
    w95: { width: width * 0.95 },
    w100: { width: "100%" },

    defaultInput: {
        borderColor: "#c7c7c7f3",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical : 8,
        borderRadius: 8,
        fontSize: 10,
        fontFamily: "Poppins-Regular",
    },
    inputError :{ borderColor: 'red', borderWidth: 1 },
    selfCenter: {
        alignSelf: "center",
    },
    header: {
        paddingTop: 45,
        paddingBottom: 15,
        paddingHorizontal: 25,
        backgroundColor: "white",
        position: "fixed",
    },
    androidShadow: {
        elevation: 5,
    },
    iosShadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    logoIconContainer : {
        backgroundColor : "#16a34a",
        borderRadius : 7.5,
        padding : 7.5,
        justifyContent : "center",
        alignItems  : "center"
    },
    cameraContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 64,
        flexDirection: 'row',
        justifyContent : "space-between",
        backgroundColor: 'transparent',
        width: '100%',
        paddingHorizontal : 75
    },
    dashedBorder : {
        borderWidth : 1,
        borderColor : "#ccccccf3",
        borderStyle : "dashed",
    },
    imageContainer :{
        padding : 10
    },
    scanImageContainer : {
        borderRadius : 7.5,
        justifyContent :"center",
        flexDirection : "column",
        alignItems  :"center"
    },
    shutterBorder : {
        borderWidth : 2,
        borderColor : "white",
        padding : 5,
        height : 80,
        width : 80,
        borderRadius  : "50%"
    },
    shutter : {
        backgroundColor : "white",
        width : "100%",
        height : "100%",
        borderRadius : "50%"
    },
    imageLoader : {
        borderRadius : 7.5,
        padding : 25,
        borderWidth :0.9,
        gap : 10,
        borderColor  :"#ecececf3",
        justifyContent : "center",
        alignContent  : "center"
    },
    linearGradient: {
        width: "100%",
        borderRadius: 7.5,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    healthCard : {
        backgroundColor : "white",
        borderRadius : 7.5,
        padding : 10,
        borderWidth :0.9,
        marginTop : 15,
        borderColor  :"#e4e4e4f3",
    },
    testCard : {
        borderRadius : 5,
        padding : 10,
        borderWidth :0.9,
        borderColor  :"#e4e4e4f3",
    },
    pill: {
        paddingHorizontal: 10,
        paddingVertical: 2.5,
        borderRadius: 5,
        alignSelf: "flex-start",
    },
    pillText: {
        fontSize:9,
        fontFamily  :"Poppins-Regular",
        fontWeight: "600",
    },
    userMessage :{ 
        paddingVertical : 10,
        paddingInline : 15,
        borderTopLeftRadius : 20,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        borderWidth :0.9,
        backgroundColor : "white",
        borderColor  :"#e4e4e4f3",
    },
    card: {
        padding : 10,
        borderRadius : 7.5,
        borderWidth :0.9,
        backgroundColor:  "white",
        borderColor  :"#e4e4e4f3",      
    },
    initialsContainer : {
        height : "auto",
        paddingInline : 15,
        paddingVertical : 10,
        borderRadius : 50

    },
    profileContainer :{
        backgroundColor : "white",
        paddingVertical : 15,
        paddingHorizontal : 20,
        borderRadius : 7.5,
        borderWidth :0.9,
        borderColor  :"#e4e4e4f3",
    },
    screenOptions : {
        backgroundColor : "white",
        marginTop : 15,
        padding : 10,
        borderRadius : 7.5,
        borderWidth :0.9,
        borderColor  :"#e4e4e4f3",      
    },
    optionBB:{
        borderBottomWidth :0.9,
        borderBottomColor  :"#e4e4e4f3",         
    },
    option:{
        paddingVertical: 10,
    },
    loaderContainer : {
        borderRadius : 50,
       backgroundColor : "#ffffff52",
       height : 10
    },
    loader : {
        height :"100%",
        borderRadius : 50,
        backgroundColor :"#ffffff"
    },
    badges :{
        backgroundColor : "white",
        marginTop : 15,
        padding : 15,
    },
    games:{
        marginTop : 15
    },
    cube :   {
        borderRadius : 7,
        width : 75, 
        height : 75,
        backgroundColor : "red"
    },
    focusCircle :{
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "teal"
    },
    guess : {
        paddingVertical : 10,
        paddingHorizontal : 15,
        borderRadius : 10
    },
    radio : {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: "#4CAF50",
        alignItems: "center",
        justifyContent: "center"
    },
    selectedRadio: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#4CAF50"
    },
    modal: {
        flex: 1,
        width,
        height,
        position: "absolute",
        backgroundColor: "#00000086",
        zIndex: 100,
        padding: 25,
    },
    modalContent: {
        width: "100%",
        maxHeight : height * 75/100,
        backgroundColor: "white",
        borderRadius: 7.5,
        padding: 15,
    },
    modalHeader: {
        width: "100%",
        position: "relative",
    },
    relative: {
        position : "relative"
    },
    absolute : {
        position : "absolute"
    },
    results: {
        top : 60,
        zIndex: 100
    },
    result:  {
       padding: 7
    },
    lock : {
        backgroundColor: "#ffffff5b"
    }
})
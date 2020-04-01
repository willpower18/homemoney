import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerBrand:{
        fontSize:24,
        paddingTop:10,
        color:'#92278f',
        fontWeight: 'bold',
    },
    homeIcon:{
        paddingTop: 10,
    },
    dashBoard:{
        marginTop:25,
        padding:24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom:16,
    },
    dashBoardHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleDash:{
        fontSize:24,
        color: '#00a651',
        fontWeight: 'bold',
    },
    titleDashResult:{
        fontSize:24,
        color: '#ffbe06',
        fontWeight: 'bold',
    },
    valueDash:{
        fontSize:24,
        color: '#13131a',
        marginTop:5,
        fontWeight: 'bold',
    },

    dashBoard2:{
        marginTop:5,
        padding:24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom:16,
    },
    dashBoardHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleDash2:{
        fontSize:24,
        color: '#FF4206',
        fontWeight: 'bold',
    },
    lineButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    IncidentValue:{
        marginTop:8,
        fontSize:15,
        color:'#737380',
    },
    contactBox:{
        padding:24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom:16,
    },
    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight:30,
    },
    heroDescription:{
        fontSize:15,
        color:"#737380",
        marginTop:16,
    },
    actions:{
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    action:{
        backgroundColor: "transparent",
        borderRadius:8,
        height: 50,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText:{
        color: "#92278f",
        fontSize:12,
        textAlign: 'center',
    },
    headerText:{
        fontSize:15,
        paddingTop:10,
        color:'#737380',
        fontWeight: 'bold',
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color: '#13131a',
        fontWeight: 'bold',
    },
    description:{
        fontSize:16,
        lineHeight:24,
        color: '#737380'
    },
    incidentList:{
        marginTop:32,
    },
    Incident:{
        padding:24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom:16,
    },
    IncidentProperty:{
        fontSize:14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    IncidentValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:'#737380',
    },
    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButtonText:{
        marginTop: 5,
        color: '#737380',
        fontSize:15,
        fontWeight: 'bold',
    }, 
    headerTextRD:{
        textAlign:'center',
        fontSize:20,
        paddingTop:10,
        color:'#737380',
        fontWeight: 'bold',
    },
});
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    Nav: {
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
    },

    container: {
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF5E6',
        height: '100%'
    },

    welcome: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Cochin',
        color: 'purple',
        margin: 10,    
    },

    sub: {
        flex: 0.825,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textsub: {
        width: 50,
        height: 25,
        fontSize: 15,
        color: 'black'
      },    

    image: {
        width: 50, 
        height: 50,
        margin: 40,
    },

    badgeimage: {
        width: 30,
        height: 30,
        margin: 10,
    },

    main: {
        justifyContent: 'flex-start',
    },

    badge: {
        flex: 0.175, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    text: {
        fontSize: 25,
        alignSelf: "center",
        color: 'red'
    
    },

    buttontext:{
        color: 'white',
    },

    button: {
        //flexWrap : 'wrap',
        height: 50,
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
        margin: 20    
    },

    date: {
        width: 200,
        marginVertical: 10
    },
  
});
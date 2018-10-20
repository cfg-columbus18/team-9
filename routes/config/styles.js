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
        backgroundColor: '#FFF3F3',
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

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    image: {
        width: 50, 
        height: 50,
        margin: 40,
        backgroundColor: '#FFF3F3',
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

    title: {

    },

    text: {

    },

    button: {

    },

    label: {

    },
});
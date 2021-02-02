import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 400,
        maxWidth: '80%'
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '60%'
    },
    listContainer: {
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'space-around',
        width: '60%',
    },
    listContainerBig: {
        // flex: 1,
        // flexDirection: 'column',
        justifyContent: 'space-around',
        width: '80%',
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    listItem: {
        borderColor: 'black', borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    },
});

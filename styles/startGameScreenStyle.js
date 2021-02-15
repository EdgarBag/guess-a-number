import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'sarpanch-medium'
    },
    inputContainer: {
        width: Dimensions.get('window').height > 300 ? '80%' : '60%',
        maxWidth: '90%',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: 350,
        maxWidth: '100%',
        marginTop: Dimensions.get('window').height > 600 ? 30 : 10,
        justifyContent: 'space-between',
    },
    inputStyle: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        margin: 20,
        alignItems: 'center',
        width: 150
    }
});
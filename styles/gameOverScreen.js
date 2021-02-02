import { StyleSheet, Dimensions } from 'react-native'
import colors from './../constans/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    screen: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '70%',
        height: '40%',
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,//300,
        height: Dimensions.get('window').width * 0.7, //300,
        borderRadius: 200,
        borderWidth: 2,
        overflow: 'hidden',

        marginVertical: Dimensions.get('window').height / 20
    },
    imageGO: {
        width: '100%',
        height: '100%'
    },
    highLight: {
        color: colors.primary
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 20
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 27
    },
    title: {
        fontSize: 30
    }
})
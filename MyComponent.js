/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import EStyleSheet from 'react-native-extended-stylesheet';

// define extended styles
// define extended styles
const styles = EStyleSheet.create({
    column: {
        width: '80%'                                    // 80% of screen width
    },
    text: {
        color: '$textColor',                            // global variable $textColor
        fontSize: '1.5rem'                              // relative REM unit
    },
    '@media (min-width: 350) and (max-width: 500)': { // media queries
        text: {
            fontSize: '2rem',
        }
    }
});

// use styles as usual
export  default class MyComponent extends React.Component {
    render() {
        return (
            <View style={styles.column}>
                <Text style={styles.text}>Hello</Text>
            </View>
        );
    }
}
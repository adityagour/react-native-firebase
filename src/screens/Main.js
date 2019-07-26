import React from 'react'
import { Alert, Platform, Image, View, Text, StyleSheet, Button } from 'react-native';
import { firebaseAuth } from '../../environment/config';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentUser: null, errorMessage: null }
    }


    componentDidMount() {
        const { currentUser } = firebaseAuth;
        this.setState({ currentUser })
    }
    onPressButton = () => {
        firebaseAuth.signOut()
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => this.setState({ errorMessage: error.message }));
    }
    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <View>
                    <Button
                        onPress={this.onPressButton}
                        title="Sign Out"
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
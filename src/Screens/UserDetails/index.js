import React, { Component } from "react";
import { View, Image, Text, FlatList, Pressable, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { screens } from "../../Navigation/Constants";
import { colorCode } from "../../Utilities/AppConstants";
import { navigateToScreen } from "../../Utilities/Utility";
import { setUserDetails } from './redux/dispatcher'
import style from "./style";

class UserDetails extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={style.container}>
                <Text style={{alignSelf:'flex-end', color:colorCode.BLACK,fontSize:20}}>{this.props.user.name}</Text>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>Enter Your name</Text>
                    <TextInput
                        style={{ borderRadius: 5, borderWidth: 0.5, borderColor: colorCode.GREEN, marginVertical: 20 }}
                        onChangeText={(text) => this.props.setUserDetails(text.length > 0 ? 'Welcome '+ text : text)}
                    />
                    <Pressable style={{ paddingVertical: 10, backgroundColor: colorCode.GREEN, height: 50, width: 300, borderRadius: 5, alignContent: 'center', justifyContent: 'center' }}
                        onPress={() => navigateToScreen(screens.BUTTONS)}
                    >
                        <Text style={{ color: colorCode.WHITE, textAlign: 'center' }}>Continue</Text>
                    </Pressable>
                </View>
            </View>
        )
    }


}
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ setUserDetails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
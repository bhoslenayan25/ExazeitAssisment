import React, { Component } from "react";
import { View, Image, Text, FlatList, Pressable, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { colorCode } from "../../Utilities/AppConstants";
import style from "./style";
import SwipeButton from 'rn-swipe-button';

class Buttons extends Component {
    constructor(props) {
        super(props);
    }

    swipeIcon = () => {
        return (
            <View style={{ borderRadius: 5, backgroundColor: colorCode.LIGHT_BLUE }}>
                <Image
                    source={require('../../Assets/diamond.png')} style={{ height: 26, width: 26 }}
                />
            </View>
        )
    }

    onButtonPress = (text) => {
        ToastAndroid.showWithGravity(
            text + ' Pressed',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={{ alignSelf: 'flex-end', color: colorCode.WHITE, fontSize: 20 }}>{this.props.user.name}</Text>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Text style={{ color: colorCode.TEXT, alignSelf: 'center' }}>4 Varients of Buttom</Text>

                    <Pressable style={style.buttonStyle}
                        onPress={() => this.onButtonPress('Button 1')}
                    >
                        <Text style={{ color: colorCode.LIGHT_BLUE, textAlign: 'center' }}>Press me</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => this.onButtonPress('Button 2')}
                        style={{ ...style.buttonStyle, backgroundColor: colorCode.BUTTON2_BG }}>
                        <Text style={{ color: colorCode.LIGHT_BLUE, textAlign: 'center' }}>Press me</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => this.onButtonPress('Button 3')}
                        style={{ ...style.buttonStyle, backgroundColor: colorCode.LIGHT_BLUE }}>
                        <Text style={{ color: colorCode.WHITE, textAlign: 'center' }}>Press me</Text>
                    </Pressable>


                    <SwipeButton
                        containerStyles={{ marginTop: 20, borderRadius: 5, backgroundColor: colorCode.BLACK, borderColor: '#525963' }}
                        railBackgroundColor={colorCode.BLACK}
                        title='Slide me to continue'
                        titleColor={colorCode.LIGHT_BLUE}
                        titleFontSize={14}
                        railBorderColor='#525963'
                        thumbIconComponent={this.swipeIcon}
                        thumbIconImageSource={require('../../Assets/diamond.png')}
                        thumbIconBackgroundColor={colorCode.LIGHT_BLUE}
                        thumbIconBorderColor={colorCode.LIGHT_BLUE}
                        thumbIconStyles={{ borderRadius: 5 }}
                        railFillBackgroundColor={colorCode.BLACK}
                        railFillBorderColor={colorCode.BLACK}
                        shouldResetAfterSuccess={true}
                        disabled={false}
                        onSwipeSuccess={() => {
                            this.onButtonPress('Swipe button')
                        }}
                    />

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


export default connect(mapStateToProps, null)(Buttons);
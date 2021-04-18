import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

const banners = require.context('../assets/images/banners', true);
export default class Banners extends Component {
    constructor(props) {
        super(props)
        const selectedCharacterEventWish = this.props.getFormattedCharacterEventWish('kebabCase')
        this.state = {
          selectedBanner: 'beginners-wish',
          selectedCharacterEventWish,
          banners: {
            'beginners-wish': 'Novice Wishes',
            [selectedCharacterEventWish]: 'Character Event Wish',
            'epitome-invocation': 'Weapon Event Wish',
            'wanderlust-invocation': 'Standard Wish'
          },
          wishes: {
            'beginners-wish': 'beginnersWish',
            [selectedCharacterEventWish]: this.props.getFormattedCharacterEventWish('camelCase', selectedCharacterEventWish),
            'epitome-invocation': 'epitomeInvocation',
            'wanderlust-invocation': 'wanderlustInvocation'
          },
          wasBeginnersWishDisabled: false,
          isSettingsPageVisible: false
        }    
      }
      componentDidMount() {
        this.toggleBeginnersWish(this.props.isBeginnersWishLimited)
        this.setState({ selectedBanner: this.props.selectedBanner })
      }
};
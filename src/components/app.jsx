import React, { Component } from 'react'
import Banners from './banners'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.setView = this.setView.bind(this);
        this.state = {
            view: 'banners',
            currentDetails: 'beginners-wish',
            selectedWish: 'beginnersWish',
            isBeginnersWishLimited: false,
            isBeginnersWishOver10: false,
            inventory: {},
            wasDisclaimerSeen: false,
            isSettingsPageVisible: false,
            currentWishes: [],
            selectedCharacterEventWish: 'beginners-wish',
            userWishes: {
              'beginners-wish': 0,             
            }
          }
    }
    componentDidMount() {
        this.clearLocalStorageEveryNewBuild();
        //this.loadData();
    }
    setView(view) {
        this.setState({view})
    }
    clearLocalStorageEveryNewBuild() {        
        if (!localStorage.getItem("appVersion") || localStorage.getItem("appVersion") !== version) {
            localStorage.clear();
            localStorage.setItem("appVersion", version);
        }
    }
    render () {
        const {
            currentDetails,
            view,
            isBeginnersWishLimited,
            isBeginnersWishOver10,
            inventory,
            wasDisclaimerSeen,
            selectedDetail,
            currentWishes,
            selectedCharacterEventWish,
            userWishes
          } = this.state          
          switch(view) {
            case 'banners':
              return <Banners
                setView={this.setView}
                setCurrentDetails={this.setCurrentDetails.bind(this)}
                setSelectedWish={this.setSelectedWish.bind(this)}
                selectedBanner={currentDetails}
                getFormattedCharacterEventWish={this.getFormattedCharacterEventWish.bind(this)}
                updateCharacterEventWish={this.updateCharacterEventWish.bind(this)}
                isBeginnersWishLimited={isBeginnersWishLimited}
                isBeginnersWishOver10={isBeginnersWishOver10}
                wasDisclaimerSeen={wasDisclaimerSeen}
                wish={this.wish.bind(this)}
                hideModal={this.hideModal.bind(this)}
                reset={this.reset.bind(this)}
                userWishes={userWishes}
              />
          }
    }
}
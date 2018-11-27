import { Component } from '@angular/core';

import { Platform, ActionSheetController, NavController, AlertController } from 'ionic-angular';


@Component({
    selector: 'page-action',
    templateUrl: 'action.html'
})
export class ActionPage {
    constructor(
        public navCtrl: NavController,
        public platform: Platform,
        public actionsheetCtrl: ActionSheetController,
        public alertCtrl: AlertController,

    ) { }

    openMenu() {
        let actionSheet = this.actionsheetCtrl.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }


    showPrompt() {
        const prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    }

    showAlert() {
        const alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }

    showConfirm() {
        const confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

    testRadioOpen: boolean;
    testRadioResult;

    showRadio() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');

        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });

        alert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });

        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });

        alert.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });

        alert.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });

        alert.addInput({
            type: 'radio',
            label: 'White',
            value: 'white'
        });

        alert.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });
        alert.present();
    }

    testCheckboxOpen: boolean;
    testCheckboxResult;

    doCheckbox() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Which planets have you visited?');

        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Coruscant',
            value: 'value3'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Endor',
            value: 'value4'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Hoth',
            value: 'value5'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Jakku',
            value: 'value6'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Naboo',
            value: 'value6'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Takodana',
            value: 'value6'
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Tatooine',
            value: 'value6'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: data => {
                console.log('Checkbox data:', data);
                this.testCheckboxOpen = false;
                this.testCheckboxResult = data;
            }
        });
        alert.present().then(() => {
            this.testCheckboxOpen = true;
        });
    }

    public press: number = 0;
    public pan: number = 0;
    public swipe: number = 0;
    public tap: number = 0;

    pressEvent(e) {
        this.press++
    }
    panEvent(e) {
        this.pan++
    }
    swipeEvent(e) {
        this.swipe++
    }
    tapEvent(e) {
        this.tap++
    }
}




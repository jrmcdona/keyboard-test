import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeKeyboard, NativeKeyboardOptions } from '@ionic-native/native-keyboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NativeKeyboard]
})
export class HomePage {

  //nativeKeyboard: NativeKeyboard;
  chatShowing: boolean;

  constructor(public el: ElementRef, public navCtrl: NavController, public nativeKeyboard: NativeKeyboard) {

  }


  ionViewDidEnter() {
    this.showMessenger();
  }
  ngOnInit() {
    this.chatShowing = true;

    // if (this.chatShowing) {
    //   document.addEventListener('deviceready', this.showMessenger, false);
    // }
    //console.log("showMessenger")

    // let options = {
    //   onSubmit: (text: any) => {
    //     console.log('this.sendMessage(text); ' + text);
    //     this.appendMessage(text);
    //   },
    //   onKeyboardWillShow: function (height) {
    //     console.log("keyboard will show, height is: " + height);
    //     //appendMessage("keyboard will show, height is: " + height);
    //   },
    //   onKeyboardDidShow: function (height) {
    //     console.log("keyboard shows, height is: " + height);
    //     //appendMessage("keyboard shows, height is: " + height);
    //   },
    //   onKeyboardWillHide: function () {
    //     console.log("keyboard will hide");
    //   },
    //   onKeyboardDidHide: function () {
    //     console.log("keyboard did hide");
    //   },
    //   onTextChanged: function (newText) {
    //     console.log("text changed to: " + newText);
    //     //appendMessage(newText);
    //   },
    //   showKeyboard: true,
    //   type: "twitter", // iOS only, default (default) | decimalpad | phonepad | numberpad | namephonepad | number | email | twitter | url | alphabet | search | ascii
    //   appearance: "light", // iOS only,  light (default) | dark
    //   secure: false, // iOS only,  default false, disables things like Emoji and Predicive text entry
    //   autocorrectionEnabled: false, // on iOS this hides the 'predictive text' bar
    //   scrollToBottomAfterMessengerShows: true,
    //   autoscrollElement: document.getElementById("messages"), // default unset
    //   keepOpenAfterSubmit: true, // default false
    //   animated: true,
    //   text: "This has been prefilled",
    //   placeholder: 'Type your message..',
    //   placeholderColor: "#DDDDDD",
    //   textViewBackgroundColor: "#F6F6F6",
    //   backgroundColor: "#F6F6F6",
    //   textViewBorderColor: "#777777", // iOS only
    //   maxChars: 140, // setting this > 0 will make the counter show up on iOS (and ignore input on Android, for now)
    //   counterStyle: 'countdownreversed', // iOS only currently, note that 'none' still shows a counter in case maxChars is set
    //   textColor: '#555555',
    //   // this button is best suited for picking media (camera / cameraroll / last image) from an actionsheet
    //   leftButton: {
    //     type: 'ionicon', // or 'text' (Android only currently) or 'fontawesome'
    //     value: '\uf48a', // http://ionicons.com/ - right-click and inspect the :before value (don't forget the \uf !)
    //     //color: '#ff0000', // default blue on iOS, grey on Android
    //     textStyle: 'normal', // if type is 'text', you can set this to 'normal' (default), 'bold', 'italic'
    //     disabledWhenTextEntered: false, // default false
    //     onPress: function () {
    //       // if (window.plugins && window.plugins.actionsheet) {
    //       //   window.plugins.actionsheet.show({
    //       //     androidTheme: window.plugins.actionsheet.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
    //       //     buttonLabels: ['Take Photo or Video', 'Use Last Photo Taken', 'Choose From Library'],
    //       //     addCancelButtonWithLabel: 'Cancel'
    //       //   }, function(index) {
    //       //     if (index != 4) { // which is 'cancel'
    //       //       console.log("Picked index " + index + ".. you'll need to implement the rest yourself ;)");
    //       //     }
    //       //   });
    //       // } else {
    //       //   alert("Left button pressed - if you install cordova-plugin-actionsheet you'll see a nice ActionSheet in this demo.");
    //       // }
    //     }
    //   },
    //   rightButton: {
    //     type: 'text', // or 'fontawesome' or 'ionicon', default 'text'
    //     value: 'Send', // 'fa-battery-quarter', // '\uf2c3', // 'Send', // default 'Send'
    //     textStyle: 'bold', // 'normal' (default), 'bold', 'italic'
    //     //color: '#FF0000', // default iOS blue
    //     onPress: function () {
    //       console.log("Right button was pressed - text was passed to 'onSubmit' if provided.");
    //     }
    //   }
    // };
    // var onSuccess = function () {
    //   console.log("Show Messenger succeeded!");
    // };
    // var onError = function (message) {
    //   console.log("Got error message: " + message);
    // };

    //this.nativeKeyboard.showMessenger(options);
  }


  // sendMessage(text): void {
  //   console.log("user sent " + text);
  // }

  appendMessage(message) {
    message = message.split("\n").join("<br/>");
    var messages = document.getElementById("messages");
    messages.innerHTML = messages.innerHTML + '<div class="message right"><span>' + message + '</span><div>10/20/16, 5:21 PM</div></div>';
    // scroll down the page so the message is shown
    messages.scrollTop = messages.scrollHeight;
  }

  hideMessenger() {
    let options = {
      onSubmit: (text: any) => {
        console.log('this.sendMessage(text); ' + text);
        this.appendMessage(text);
      },
      onKeyboardWillShow: function (height) {
        console.log("keyboard will show, height is: " + height);
        //appendMessage("keyboard will show, height is: " + height);
      },
      onKeyboardDidShow: function (height) {
        console.log("keyboard shows, height is: " + height);
        //appendMessage("keyboard shows, height is: " + height);
      },
      onKeyboardWillHide: function () {
        console.log("keyboard will hide");
      },
      onKeyboardDidHide: function () {
        console.log("keyboard did hide");
      },
      onTextChanged: function (newText) {
        console.log("text changed to: " + newText);
        //appendMessage(newText);
      },
      showKeyboard: true,
      type: "twitter", // iOS only, default (default) | decimalpad | phonepad | numberpad | namephonepad | number | email | twitter | url | alphabet | search | ascii
      appearance: "light", // iOS only,  light (default) | dark
      secure: false, // iOS only,  default false, disables things like Emoji and Predicive text entry
      autocorrectionEnabled: false, // on iOS this hides the 'predictive text' bar
      scrollToBottomAfterMessengerShows: true,
      autoscrollElement: document.getElementById("messages"), // default unset
      keepOpenAfterSubmit: true, // default false
      animated: true,
      text: "This has been prefilled",
      placeholder: 'Type your message..',
      placeholderColor: "#DDDDDD",
      textViewBackgroundColor: "#F6F6F6",
      backgroundColor: "#F6F6F6",
      textViewBorderColor: "#777777", // iOS only
      maxChars: 140, // setting this > 0 will make the counter show up on iOS (and ignore input on Android, for now)
      counterStyle: 'countdownreversed', // iOS only currently, note that 'none' still shows a counter in case maxChars is set
      textColor: '#555555',
      // this button is best suited for picking media (camera / cameraroll / last image) from an actionsheet
      leftButton: {
        type: 'ionicon', // or 'text' (Android only currently) or 'fontawesome'
        value: '\uf48a', // http://ionicons.com/ - right-click and inspect the :before value (don't forget the \uf !)
        //color: '#ff0000', // default blue on iOS, grey on Android
        textStyle: 'normal', // if type is 'text', you can set this to 'normal' (default), 'bold', 'italic'
        disabledWhenTextEntered: false, // default false
        onPress: function () {
          // if (window.plugins && window.plugins.actionsheet) {
          //   window.plugins.actionsheet.show({
          //     androidTheme: window.plugins.actionsheet.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
          //     buttonLabels: ['Take Photo or Video', 'Use Last Photo Taken', 'Choose From Library'],
          //     addCancelButtonWithLabel: 'Cancel'
          //   }, function(index) {
          //     if (index != 4) { // which is 'cancel'
          //       console.log("Picked index " + index + ".. you'll need to implement the rest yourself ;)");
          //     }
          //   });
          // } else {
          //   alert("Left button pressed - if you install cordova-plugin-actionsheet you'll see a nice ActionSheet in this demo.");
          // }
        }
      },
      rightButton: {
        type: 'text', // or 'fontawesome' or 'ionicon', default 'text'
        value: 'Send', // 'fa-battery-quarter', // '\uf2c3', // 'Send', // default 'Send'
        textStyle: 'bold', // 'normal' (default), 'bold', 'italic'
        //color: '#FF0000', // default iOS blue
        onPress: function () {
          console.log("Right button was pressed - text was passed to 'onSubmit' if provided.");
        }
      }
    };
    this.nativeKeyboard.hideMessenger(options);
  }



  showMessenger() {
    console.log("showMessenger")
    let options = {
      onSubmit: (text: any) => {
        console.log('this.sendMessage(text); ' + text);
        this.appendMessage(text);
      },
      onKeyboardWillShow: function (height) {
        console.log("keyboard will show, height is: " + height);
        //appendMessage("keyboard will show, height is: " + height);
      },
      onKeyboardDidShow: function (height) {
        console.log("keyboard shows, height is: " + height);
        //appendMessage("keyboard shows, height is: " + height);
      },
      onKeyboardWillHide: function () {
        console.log("keyboard will hide");
      },
      onKeyboardDidHide: function () {
        console.log("keyboard did hide");
      },
      onTextChanged: function (newText) {
        console.log("text changed to: " + newText);
        //appendMessage(newText);
      },
      showKeyboard: true,
      type: "twitter", // iOS only, default (default) | decimalpad | phonepad | numberpad | namephonepad | number | email | twitter | url | alphabet | search | ascii
      appearance: "light", // iOS only,  light (default) | dark
      secure: false, // iOS only,  default false, disables things like Emoji and Predicive text entry
      autocorrectionEnabled: false, // on iOS this hides the 'predictive text' bar
      scrollToBottomAfterMessengerShows: true,
      autoscrollElement: document.getElementById("messages"), // default unset
      keepOpenAfterSubmit: true, // default false
      animated: true,
      text: "This has been prefilled",
      placeholder: 'Type your message..',
      placeholderColor: "#DDDDDD",
      textViewBackgroundColor: "#F6F6F6",
      backgroundColor: "#F6F6F6",
      textViewBorderColor: "#777777", // iOS only
      maxChars: 140, // setting this > 0 will make the counter show up on iOS (and ignore input on Android, for now)
      counterStyle: 'countdownreversed', // iOS only currently, note that 'none' still shows a counter in case maxChars is set
      textColor: '#555555',
      // this button is best suited for picking media (camera / cameraroll / last image) from an actionsheet
      leftButton: {
        type: 'ionicon', // or 'text' (Android only currently) or 'fontawesome'
        value: '\uf48a', // http://ionicons.com/ - right-click and inspect the :before value (don't forget the \uf !)
        //color: '#ff0000', // default blue on iOS, grey on Android
        textStyle: 'normal', // if type is 'text', you can set this to 'normal' (default), 'bold', 'italic'
        disabledWhenTextEntered: false, // default false
        onPress: function () {
          // if (window.plugins && window.plugins.actionsheet) {
          //   window.plugins.actionsheet.show({
          //     androidTheme: window.plugins.actionsheet.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
          //     buttonLabels: ['Take Photo or Video', 'Use Last Photo Taken', 'Choose From Library'],
          //     addCancelButtonWithLabel: 'Cancel'
          //   }, function(index) {
          //     if (index != 4) { // which is 'cancel'
          //       console.log("Picked index " + index + ".. you'll need to implement the rest yourself ;)");
          //     }
          //   });
          // } else {
          //   alert("Left button pressed - if you install cordova-plugin-actionsheet you'll see a nice ActionSheet in this demo.");
          // }
        }
      },
      rightButton: {
        type: 'text', // or 'fontawesome' or 'ionicon', default 'text'
        value: 'Send', // 'fa-battery-quarter', // '\uf2c3', // 'Send', // default 'Send'
        textStyle: 'bold', // 'normal' (default), 'bold', 'italic'
        //color: '#FF0000', // default iOS blue
        onPress: function () {
          console.log("Right button was pressed - text was passed to 'onSubmit' if provided.");
        }
      }
    };
    var onSuccess = function () {
      console.log("Show Messenger succeeded!");
    };
    var onError = function (message) {
      console.log("Got error message: " + message);
    };

    this.nativeKeyboard.showMessenger(options);
  }

  updateMessenger() {
    var options = {
      text: "This is the updated text! ",
      showKeyboard: true,
      caretIndex: 10 // caret is set at end of text if not specified
    };
    this.nativeKeyboard.updateMessenger(
      options);
  }

  showMessengerKeyboard() {
    this.nativeKeyboard.showMessengerKeyboard();
  }

  toggleChat() {
    console.log('toggle chat')
    if (this.chatShowing) {
      this.hideMessenger();
    } else {
      this.showMessenger();
    }
    this.chatShowing = !this.chatShowing;
  }


  scrollToBottom(): void {
    console.log("scroll to bottom")
    const scrollPane: any = this.el
      .nativeElement.querySelector('.message-list');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}


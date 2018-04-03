import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import {
  Container,
  Content,
  Icon,
  Thumbnail,
  Header,
  Left,
  Right,
  Body,
  Fab,
  Button,
  Toast
} from "native-base";
import { Actions } from "react-native-router-flux";

import Voice from "react-native-voice";
import Tts from "react-native-tts";

const wait = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

class Speech extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonActive: false,
      recognized: "",
      pitch: "",
      error: "",
      end: "",
      started: "",
      results: [],
      partialResults: []
    };

    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechError = this.onSpeechError.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart(e) {
    this.setState({
      started: "√"
    });
  }

  onSpeechRecognized(e) {
    this.setState({
      recognized: "√"
    });
  }

  onSpeechEnd(e) {
    this.setState({
      end: "√"
    });

    Tts.setDefaultLanguage("pt-BR");
    Tts.setDefaultVoice("com.apple.ttsbundle.Luciana-compact");
    Tts.setDucking(true);

    if (this.state.results.length > 0) {
      Tts.speak("buscando por");

      this.state.results.map((result, index) => {
        console.log(
          "reconhecimento de voz - resultado: [" + index + "] - " + result
        );

        Tts.speak(result);

        Toast.show({
          text: "Siri: buscando por " + result,
          position: "bottom",
          buttonText: "close",
          type: "",
          duration: 3000
        });

        Actions.replace("Search", {
          searchResult: result,
          hideTabBar: true
        });
      });
    } else {
      Tts.speak("não entendi.");
      //_cancelRecognizing();
      //_destroyRecognizer();

      Toast.show({
        text: "Siri: não entendi",
        position: "bottom",
        buttonText: "",
        type: "danger",
        duration: 3000
      });
    }
  }

  onSpeechError(e) {
    this.setState({
      error: JSON.stringify(e.error)
    });
  }

  onSpeechResults(e) {
    this.setState({ results: e.value });

    // this.setState({
    //   results: e.value
    // });
  }

  onSpeechPartialResults(e) {
    // this.setState({
    //   partialResults: e.value
    // });
  }

  onSpeechVolumeChanged(e) {
    // this.setState({
    //   pitch: e.value
    // });
  }

  async _startRecognizing(e) {
    //Tts.voices().then(voices => console.log(voices));
    //26:{language: "pt-BR", id: "com.apple.ttsbundle.Luciana-compact", quality: 300, name: "Luciana"}
    // Tts.setDefaultLanguage("pt-BR");
    // Tts.setDefaultVoice("com.apple.ttsbundle.Luciana-compact");
    // Tts.setDucking(true);

    // Tts.addEventListener("tts-start", event => console.log("start", event));

    // Tts.addEventListener("tts-finish", event => console.log("finish", event));

    // Tts.addEventListener("tts-cancel", event => console.log("cancel", event));

    //Tts.speak("Hello!!!, tell me a category!,or a professional name!");
    //Tts.speak("O que procura?");
    //Tts.speak("Como posso ajudar?");
    //Tts.stop();

    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechError = this.onSpeechError.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);

    this.setState({
      buttonActive: true,
      recognized: "",
      pitch: "",
      error: "",
      started: "",
      results: [],
      partialResults: [],
      end: ""
    });

    try {
      //      await Voice.start("en-US");
      await Voice.start("pt-BR");
    } catch (e) {
      console.error(e);
    }
  }

  async _stopRecognizing(e) {
    this.setState({ buttonActive: false });

    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }

    // await wait(1000);

    // Tts.setDefaultLanguage("pt-BR");
    // Tts.setDefaultVoice("com.apple.ttsbundle.Luciana-compact");
    // Tts.setDucking(true);

    // if (this.state.results.length > 0) {
    //   Tts.speak("buscando por");

    //   this.state.results.map((result, index) => {
    //     console.log(
    //       "reconhecimento de voz - resultado: [" + index + "] - " + result
    //     );

    //     Tts.speak(result);

    //     Toast.show({
    //       text: "Siri: buscando por " + result,
    //       position: "bottom",
    //       buttonText: "close",
    //       type: "",
    //       duration: 5000
    //     });

    //     //Actions.Search({ searchResult: result });
    //     //Actions.refresh({ searchResult: result });
    //     //Actions.popTo("Search", { searchResult: result });
    //     //Actions.jump("Search", { searchResult: result });
    //     //Actions.push("Search", { searchResult: result });

    //     Actions.replace("Search", {
    //       searchResult: result,
    //       hideTabBar: true
    //     });
    //   });
    // } else {
    //   Tts.speak("não entendi.");
    //   //_cancelRecognizing();
    //   //_destroyRecognizer();

    //   Toast.show({
    //     text: "Siri: não entendi",
    //     position: "bottom",
    //     buttonText: "",
    //     type: "danger",
    //     duration: 3000
    //   });
    // }
  }

  async _cancelRecognizing(e) {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  }

  async _destroyRecognizer(e) {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: "",
      pitch: "",
      error: "",
      started: "",
      results: [],
      partialResults: [],
      end: ""
    });
  }

  render() {
    return (
      <View>
        {/* <View style={styles.container}>
           <Text style={styles.welcome}>Speech Recognition</Text>
          <Text style={styles.instructions}>
            Press the button and start speaking.
          </Text> 
          <Text style={styles.stat}>{`Started: ${this.state.started}`}</Text>
          <Text style={styles.stat}>
            {`Recognized: ${this.state.recognized}`}
          </Text>
          <Text style={styles.stat}>{`Pitch: ${this.state.pitch}`}</Text>
          <Text style={styles.stat}>{`Error: ${this.state.error}`}</Text>
          <Text style={styles.stat}>Results</Text>
          {this.state.results.map((result, index) => {
            return (
              <Text key={`result-${index}`} style={styles.stat}>
                {result}
              </Text>
            );
          })}
          <Text style={styles.stat}>Partial Results</Text>
          {this.state.partialResults.map((result, index) => {
            return (
              <Text key={`partial-result-${index}`} style={styles.stat}>
                {result}
              </Text>
            );
          })}
          <Text style={styles.stat}>{`End: ${this.state.end}`}</Text>
           <TouchableWithoutFeedback 
                onPressIn={this.handlePressIn} 
                onPressOut={this.handlePressOut}
            >  
          <TouchableHighlight onPress={this._startRecognizing.bind(this)}>
            <Image
              style={styles.button}
              source={require("../../components/assets/StoriesHeaderThumbnails/2.jpg")}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={this._stopRecognizing.bind(this)}>
            <Text style={styles.action}>Stop Recognizing</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._cancelRecognizing.bind(this)}>
            <Text style={styles.action}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._destroyRecognizer.bind(this)}>
            <Text style={styles.action}>Destroy</Text>
          </TouchableHighlight>
        </View> */}
        <Fab
          active="true"
          direction="up"
          containerStyle={{}}
          style={
            this.state.buttonActive
              ? { backgroundColor: "#DD5144", marginBottom: 20 }
              : { backgroundColor: "#ffce00", marginBottom: 20 }
          }
          position="bottomRight"
          onPressIn={this._startRecognizing.bind(this)}
          onPressOut={this._stopRecognizing.bind(this)}
        >
          <Icon name="ios-mic" style={{ color: "#000" }} />
        </Fab>
      </View>
    );
  }
}

export default Speech;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  action: {
    textAlign: "center",
    color: "#0000FF",
    marginVertical: 5,
    fontWeight: "bold"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  stat: {
    textAlign: "center",
    color: "#B0171F",
    marginBottom: 1
  }
});

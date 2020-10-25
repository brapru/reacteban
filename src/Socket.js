import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from 'react-native'

import io from "socket.io-client";

export default class Socket extends Component {

        _mounted = false;

        constructor(props) {
                super(props);
                this.state = {
                  weight: "",
                  scale: [0]
                };
        }

        componentDidMount() {
          this._mounted = true;
          const socket = io("http://192.168.0.19:5000/scale", {query: 'b64=1'});
                socket.on("scale_update", update => {
                        this.setState({ scale: [update] });
                });
        }
       
        componentWillUnmount() {
          this._mounted = false;
        }

        render() {
          const scale = this.state.scale.map(weight => (
           <Text key={weight}>{weight}</Text>
          ));

          return (
                <Text>{scale}</Text>
          )
        }

}

const styles = StyleSheet.create({
        text: {
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center"
        },
});

import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { TextInput_9: "" }
  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/download_1_alQrNtA.png"
      }}
    >
      <TextInput
        placeholder="menu botton"
        style={styles.TextInput_9}
        value={this.state.TextInput_9}
        onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
      />
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/download_1_eXBdNYD.jpeg"
        }}
      />
      <Button
        title="start"
        style={styles.Button_7}
        onPress={() => alert("Pressed!")}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  ImageBackground_1: {},
  TextInput_9: { paddingLeft: 121, color: "#074ef2" },
  Image_5: {},
  Button_7: { color: "#272ba0", borderColor: "#0d2dce" }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)

import {PropTypes} from 'react';
import { NativeModules, NativeComponent, requireNativeComponent } from "react-native";

const { Calculator } = NativeModules;
// const { RCTTextLabel } = NativeComponent; //requireNativeComponent

const iface = {
  name: "RCTTextLabel",
  propTypes: {
    text: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    ...View.propTypes // include the default view properties
  }
};
const RCTTextLabel = requireNativeComponent("RCTTextLabel", iface);
export {Calculator as default, RCTTextLabel as TextLabel};

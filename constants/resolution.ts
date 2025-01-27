import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

export const wp = (percentage: any) => {
    return (percentage * deviceWidth) / 100;
};

export const hp = (percentage: any) => {
    return (percentage * deviceHeight) / 100;
};

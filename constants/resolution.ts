import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

export const wp = (percentage: any) => {
    return (percentage * deviceWidth) / 100;
};

export const hp = (percentage: any) => {
    return (percentage * deviceHeight) / 100;
};

export const getColumnCount = ()=>{
    if(deviceWidth>=1024){
        return 4
    }
    if(deviceWidth>=768){
        return 3
    }
    if(deviceWidth>=540){
        return 2
    }
}

import { Dimensions } from 'react-native';

/**
 * px2dp 将设计稿的像素值转化为设备真实值
 * 
 * @param {number} px : 需要转化的像素值
 * @param {number} designsWidth ：设计稿尺寸
 * @return {number} ：返回设备实际宽度 
 */
export function px2dp(px, designsWidth = 750){
  if(typeof px !== 'number') return new Error(`${px} is not a number`);
  if(typeof designsWidth !== 'number') return new Error(`${designsWidth} is not a number`);
  return px * Dimensions.get('window').width / designsWidth;
}

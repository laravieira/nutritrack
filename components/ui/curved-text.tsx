import React from 'react';
import Svg, { Text, TextProps, TextPath, Defs, Path, G } from 'react-native-svg'

type CurvedTextProps = {
  width: number;
  height: number;
  rotate?: number;
  text: string;
} & TextProps

export default function CurvedText({ width, height, rotate = 0, text, children, ...props }: CurvedTextProps) {
  return (
    <Svg width={width} height={height} viewBox={ `0 0 ${width} ${height}` }>
      <Defs>
        <Path
          id="circlePath"
          d={ `M ${width / 2}, ${height / 2} m -${width/3}, 0 a ${width/3},${width/3} 0 1,1 ${width/3*2},0 a ${width/3},${width/3} 0 1,1 -${width/3*2},0` }
        />
      </Defs>
      <G transform={ `rotate(${rotate}, ${width / 2}, ${height / 2})` }>
        <Text {...props}>
          <TextPath href="#circlePath" startOffset="0%">
            {text}
          </TextPath>
        </Text>
      </G>
    </Svg>
  );
}
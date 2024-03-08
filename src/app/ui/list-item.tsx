import { PropsWithChildren } from 'react';
import { Circle, Svg, Text, View } from '@react-pdf/renderer';
import { tw } from '../util/tw';

export const ListItem = ({children}: PropsWithChildren) => {
  return (
    <View style={tw('w-full flex flex-row items-center text-xs gap-x-2')}>
      <Svg width={2} height={2}>
        <Circle cx="1" cy="1" r="1" fill="#fff" />
      </Svg>
      <Text style={tw('py-0.5')}>{children}</Text>
    </View>
  );
};
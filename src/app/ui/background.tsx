import { tw } from '../util/tw';
import { Image, View } from '@react-pdf/renderer';
import React from 'react';

export const Background = () => (<View  style={{ ...tw('absolute inset-0') }}>
  <Image src="/bg.png" style={tw('h-full w-full')}/>
</View>);
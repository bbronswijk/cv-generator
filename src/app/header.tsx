import { Text, View } from '@react-pdf/renderer';
import { tw } from './util/tw';
import React from 'react';

export const Header = () => ( <View style={tw('pb-6 gap-1 border-b py-5 border-teal-50 ')}>
  <Text style={tw('text-4xl leading-none')}>Bram Bronswijk</Text>
  <Text style={tw('text-2xl leading-none')}>Curriculum Vitae</Text>
</View>);

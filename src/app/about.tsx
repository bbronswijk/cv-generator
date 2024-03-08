import { tw } from './util/tw';
import { Text, View } from '@react-pdf/renderer';
import React from 'react';

export const About = () => (
  <View style={tw('gap-16 border-b py-5 border-teal-50 flex flex-row')}>
    <View style={tw('flex-[2_2_0%] flex gap-3')}>
      <Text style={tw('text-lg leading-none font-bold')}>About</Text>

      <View>
        <View style={tw('flex flex-row')}>
          <Text style={tw('text-xs leading-normal basis-1/3')}>Portfolio</Text>
          <Text style={tw('text-xs leading-normal basis-1/2')}>https://brambronswijk.nl</Text>
        </View>
        <View style={tw('flex flex-row')}>
          <Text style={tw('text-xs leading-normal basis-1/3')}>Email</Text>
          <Text style={tw('text-xs leading-normal basis-1/2')}>bram@passionatepeople.io</Text>
        </View>
        <View style={tw('flex flex-row')}>
          <Text style={tw('text-xs leading-normal basis-1/3')}>Date of birth</Text>
          <Text style={tw('text-xs leading-normal basis-1/2')}>6 October 1993</Text>
        </View>
      </View>

      <Text style={tw('text-xs leading-normal')}>
        A full-stack developer from Delft with a passion for UI design and frontend development.
        Always doing my best to deliver high quality code. Always working on many side
        projects, to try out new things, and to keep up to date with the latest technologies.
        Continuously looking for optimizations and efficiency in Agile/Scrum processes.

        Feel free to take a look at my portfolio at https://brambronswijk.nl.
      </Text>
    </View>

    <View style={tw('gap-6')}>
      <Text style={tw('text-lg leading-none font-bold')}>Education</Text>

      <View style={tw('flex gap-y-1')}>
        <Text style={tw('text-sm leading-none font-bold')}>Technische Universiteit Delft</Text>
        <Text style={tw('text-xs leading-none whitespace-nowrap')}>Bachelor of Science ( BSc. ),
          Bouwkunde</Text>
        <Text style={tw('text-xs leading-none opacity-70')}>Sept 2011 – Jan 2015</Text>
      </View>

      <View style={tw('flex gap-y-1')}>
        <Text style={tw('text-sm leading-none font-bold')}>Technische Universiteit Delft</Text>
        <Text style={tw('text-xs leading-none whitespace-nowrap')}>Master of Science ( MSc. ),
          Architecture</Text>
        <Text style={tw('text-xs leading-none opacity-70')}>Feb 2015 – June 2017</Text>
      </View>

    </View>
  </View>
)
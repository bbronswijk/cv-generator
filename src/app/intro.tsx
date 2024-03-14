import { tw } from './util/tw';
import { Text, View } from '@react-pdf/renderer';
import React from 'react';
import { About } from '@/app/data/data.model';

export const Intro = (about: About) => (
  <View style={tw('gap-10 border-b py-5 border-teal-50 flex flex-row')}>
    <View style={tw('flex-[2_2_0%] flex gap-3')}>
      <Text style={tw('text-lg leading-none font-bold')}>{about.title}</Text>

      <View>
        {about.info.map(({ label, value }) => (
          <View style={tw('flex flex-row')} key={label}>
            <Text style={tw('text-xs leading-normal basis-1/3')}>{label}</Text>
            <Text style={tw('text-xs leading-normal basis-1/2')}>{value}</Text>
          </View>
        ))}
      </View>

      <Text style={tw('text-xs leading-normal')}>{about.intro}</Text>
    </View>

    <View style={tw('gap-6')}>
      <Text style={tw('text-lg leading-none font-bold')}>{about.educationTitle}</Text>

      <View style={tw('flex gap-y-1')}>
        <Text style={tw('text-sm leading-none font-bold')}>Technische Universiteit Delft</Text>
        <Text style={tw('text-xs leading-none whitespace-nowrap')}>Bachelor of Science ( BSc. ), Bouwkunde</Text>
        <Text style={tw('text-xs leading-none opacity-70')}>Sept 2011 – Jan 2015</Text>
      </View>

      <View style={tw('flex gap-y-1')}>
        <Text style={tw('text-sm leading-none font-bold')}>Technische Universiteit Delft</Text>
        <Text style={tw('text-xs leading-none whitespace-nowrap')}>Master of Science ( MSc. ), Architecture</Text>
        <Text style={tw('text-xs leading-none opacity-70')}>Feb 2015 – Jun 2017</Text>
      </View>

    </View>
  </View>
)
import { Text, View } from '@react-pdf/renderer';
import { tw } from '../util/tw';
import { Tag } from '../ui/tag';
import { ListItem } from '../ui/list-item';
import React from 'react';

export const Vanderlande = () => (
  <>
    <View>
      <Text style={tw('text-lg font-bold leading-snug mt-3')}>Passionate People client: Vanderlande</Text>
      <Text style={tw('text-xs leading-snug opacity-70')}>March 2022 – Current</Text>
    </View>

    <View style={tw('flex flex-row gap-1')}>
      <Tag>Typescript</Tag>
      <Tag>Node.js</Tag>
      <Tag>Angular</Tag>
      <Tag>NGRX</Tag>
      <Tag>Module federation</Tag>
      <Tag>D3.js</Tag>
      <Tag>Jest</Tag>
      <Tag>Playwright</Tag>
      <Tag>Cucumber</Tag>
      <Tag>ChartJs</Tag>
      <Tag>Docker</Tag>
      <Tag>scss</Tag>
    </View>

    <Text style={tw('text-xs leading-normal')}>
      Fulfilled the senior frontend role within the team and coached junior developers. Worked on a process
      mining tool for the baggage handling system of large airports. The tool contained rich interactions and
      various visualizations like a node segment diagram of the airports and various charts. Set up a scalable
      infrastructure using micro-frontends to enhance cross-team collaboration.
    </Text>

    <View style={tw('flex flex-col')}>
      <ListItem>Improved overall architecture of the process mining tool</ListItem>
      <ListItem>Introduced mature Redux-based state management using NGRX</ListItem>
      <ListItem>Improved the UX flows within the application</ListItem>
      <ListItem>Introduced unit, integration and e2e testing</ListItem>
      <ListItem>Setup micro-frontend architecture, initially as a NPM package and later using Module
        Federation</ListItem>
      <ListItem>Worked on internal design system</ListItem>
    </View>
  </>
);
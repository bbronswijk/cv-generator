import { Text, View } from '@react-pdf/renderer';
import { tw } from '../util/tw';
import { Tag } from '../ui/tag';
import { ListItem } from '../ui/list-item';
import React from 'react';

export const Hoogendoorn = () => (
  <>
    <View>
      <Text style={tw('text-lg font-bold leading-snug mt-3')}>Passionate People client: Hoogendoorn Growth Management / Let’s Grow</Text>
      <Text style={tw('text-xs leading-snug opacity-70')}>Apr 2021 – februari 2022</Text>
    </View>

    <View style={tw('flex flex-row gap-1')}>
      <Tag>Typescript</Tag>
      <Tag>Node.js</Tag>
      <Tag>Angular</Tag>
      <Tag>NGXS</Tag>
      <Tag>Highcharts</Tag>
      <Tag>Jest</Tag>
      <Tag>NestJS</Tag>
      <Tag>Fabric.js</Tag>
      <Tag>scss</Tag>
    </View>

    <Text style={tw('text-xs leading-normal')}>
      Worked in two different teams within Hoogendoorn. Build a sophisticated dashboard for Greenhouse automation,
      with lots of views, reports, graphs and customizable content.
    </Text>

    <View style={tw('flex flex-col')}>
      <ListItem>Migration of .NET Core widgets and charts displayed in iFrames to Angular</ListItem>
      <ListItem>Enhanced performance of data heavy dashboard</ListItem>
      <ListItem>Set up a chart configurator with a complex user flow</ListItem>
      <ListItem>Created a photoshop-like visual configurator for greenhouses using Fabric.js</ListItem>
      <ListItem> Improved overall CSS architecture and responsive design</ListItem>
      <ListItem>Created workshops to teach team members about the workings of Angular, RXJS and Observables</ListItem>
    </View>
  </>
);
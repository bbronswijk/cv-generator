import { Text, View } from '@react-pdf/renderer';
import { tw } from '../util/tw';
import { Tag } from '../ui/tag';
import { ListItem } from '../ui/list-item';
import React from 'react';

export const LyceoFE = () => (
  <>
    <View>
      <Text style={tw('text-lg font-bold leading-snug mt-3')}>Lyceo – Senior Frontend Developer / Lead</Text>
      <Text style={tw('text-xs leading-snug opacity-70')}>Sept 2018 – March 2021</Text>
    </View>

    <View style={tw('flex flex-row gap-1')}>
      <Tag>Typescript</Tag>
      <Tag>Node.js</Tag>
      <Tag>Angular</Tag>
      <Tag>RXJS</Tag>
      <Tag>Ionic</Tag>
      <Tag>Jest</Tag>
      <Tag>React</Tag>
      <Tag>Laravel</Tag>
      <Tag>Fastlane</Tag>
      <Tag>Vue.js</Tag>
      <Tag>Docker</Tag>
      <Tag>scss</Tag>
    </View>

    <Text style={tw('text-xs leading-normal')}>
      Authority within the team regarding frontend. Worked on a complex scheduling application in Angular. Also created
      various apps in Ionic. Did full stack work on a homework institute tool with a Laravel API and a Vue.js frontend.
    </Text>

    <View style={tw('flex flex-col')}>
      <ListItem>Worked on various Angular and Ionic SPA dashboards and several Ionic mobile apps</ListItem>
      <ListItem>Created various NPM packages, including one for a custom OAuth implementation</ListItem>
      <ListItem>Setup automatic deployment of ionic apps to the app stores using Fastlane</ListItem>
      <ListItem>Introduced unit testing using Jest.</ListItem>
      <ListItem>Worked on a dashboard with a Laravel API with Vue.js frontend</ListItem>
      <ListItem>Setup performance and error monitoring using Sentry</ListItem>
      <ListItem>Created tracking time dashboard to analyse and improve the SCRUM process within the team</ListItem>
    </View>
  </>
);
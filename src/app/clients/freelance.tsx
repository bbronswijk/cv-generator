import { Text, View } from '@react-pdf/renderer';
import { tw } from '../util/tw';
import { Tag } from '../ui/tag';
import { ListItem } from '../ui/list-item';
import React from 'react';

export const Freelance = () => (
  <>
    <View>
      <Text style={tw('text-lg font-bold leading-snug mt-3')}>Freelance Webdeveloper</Text>
      <Text style={tw('text-xs leading-snug opacity-70')}>Apr 2014 – februari 2018</Text>
    </View>

    <View style={tw('flex flex-row gap-1')}>
      <Tag>Javascript</Tag>
      <Tag>Wordpress</Tag>
      <Tag>PHP</Tag>
      <Tag>React</Tag>
      <Tag>scss</Tag>
      <Tag>Git</Tag>
    </View>

    <Text style={tw('text-xs leading-normal')}>
      During my studies at the TU Delft, I worked as a freelance web developer. I developed various frontend for
      dashboards, using mustache.js, JavaScript and SCSS. Apart from that, I designed and developed many tailor-made
      WordPress websites.
    </Text>

    <View style={tw('flex flex-col')}>
      <ListItem>Created interactive tool for RowCoaching to follow sailings and rowing regatta&apos;s real-time</ListItem>
      <ListItem>Created the frontend for IRIS to log the time during rowing regatta&apos;s</ListItem>
      <ListItem>Created an admin dashboard to host rowing regatta&apos;s</ListItem>
      <ListItem>Redesigned and created React home page for Laga</ListItem>
      <ListItem>Designed and developer over 20 custom WordPress websites using PHP, Javascript, CSS</ListItem>
      <ListItem>Deployments using Gitlab-ci</ListItem>
    </View>
  </>
);
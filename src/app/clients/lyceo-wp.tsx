import { Text, View } from '@react-pdf/renderer';
import { tw } from '../util/tw';
import { Tag } from '../ui/tag';
import { ListItem } from '../ui/list-item';
import React from 'react';

export const LyceoWp = () => (
  <>
    <View>
      <Text style={tw('text-lg font-bold leading-snug mt-3')}>Lyceo – Wordpress Developer</Text>
      <Text style={tw('text-xs leading-snug opacity-70')}>Sept 2017 – Aug 2018</Text>
    </View>

    <View style={tw('flex flex-row gap-1')}>
      <Tag>Typescript</Tag>
      <Tag>Wordpress</Tag>
      <Tag>PHP</Tag>
      <Tag>Twig</Tag>
      <Tag>Jest</Tag>
      <Tag>React</Tag>
      <Tag>Webpack</Tag>
      <Tag>Cypress</Tag>
      <Tag>NGINX</Tag>
      <Tag>Gitlab-ci</Tag>
      <Tag>AWS</Tag>
      <Tag>Docker</Tag>
      <Tag>scss</Tag>
    </View>

    <Text style={tw('text-xs leading-normal')}>
      Developed various features for a variety of websites. Set up a mature infrastructure for the hosting of 15
      WordPress websites on AWS, including automatic updates, security checks and monitoring. For a number of webshops,
      a link had to be made with multiple back office systems. For the webshops, I set up a React frontend in
      TypeScript.
    </Text>

    <View style={tw('flex flex-col')}>
      <ListItem>Improved overall architecture of the WordPress websites</ListItem>
      <ListItem>Developed various features, themes and plugins</ListItem>
      <ListItem>Solved scalability and performance issues on a high traffic webshop</ListItem>
      <ListItem>Deployments using Gitlab-ci</ListItem>
      <ListItem>Setup S3 Bucket Image CDN hosting.</ListItem>
      <ListItem>Tailored webpack setup</ListItem>
      <ListItem>Setup E2E tests initially using Nightwatch later using Cypress</ListItem>
      <ListItem>Setup availability monitoring using pingdom and setup performance and error monitoring using Sentry</ListItem>
    </View>
  </>
);
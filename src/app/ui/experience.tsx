import { Text, View } from '@react-pdf/renderer';
import { tw } from '../util/tw';
import { Tag } from '../ui/tag';
import { ListItem } from '../ui/list-item';
import React from 'react';
import { WorkExperience } from '@/app/data/data.model';

export const Experience = (experience: WorkExperience) => (
  <>
    <View>
      <Text style={tw('text-lg font-bold leading-snug mt-3')}>{experience.title}</Text>
      <Text style={tw('text-xs leading-snug opacity-70')}>{experience.date}</Text>
    </View>

    <View style={tw('flex flex-row gap-1')}>
      {experience.techStack.map((tech) => <Tag key={tech}>{tech}</Tag>)}
    </View>

    <Text style={tw('text-xs leading-normal')}>
      {experience.description}
    </Text>

    <View style={tw('flex flex-col')}>
      {experience.activities.map((activity) => <ListItem key={activity}>{activity}</ListItem>)}
    </View>
  </>
);
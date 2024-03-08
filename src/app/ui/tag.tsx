import { PropsWithChildren } from 'react';
import { Text } from '@react-pdf/renderer';
import { tw } from '../util/tw';

export const Tag = ({children}: PropsWithChildren) => (<Text style={tw('bg-white text-black text-xs px-1.5 py-1 flex-inline rounded-xs')}>{children}</Text>);

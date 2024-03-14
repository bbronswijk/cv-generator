import { PropsWithChildren } from 'react';
import { Text } from '@react-pdf/renderer';
import { tw } from '../util/tw';

export const Tag = ({children}: PropsWithChildren) => (<Text style={tw('bg-white text-black text-[0.5rem] px-1.5 py-0.5 flex-inline rounded')}>{children}</Text>);

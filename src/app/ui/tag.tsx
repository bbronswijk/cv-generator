import { PropsWithChildren } from 'react';
import { Text } from '@react-pdf/renderer';
import { tw } from '../util/tw';

export const Tag = ({children}: PropsWithChildren) => (<Text style={tw('bg-white text-black text-[0.6rem] px-2 py-1 flex-inline rounded-sm')}>{children}</Text>);

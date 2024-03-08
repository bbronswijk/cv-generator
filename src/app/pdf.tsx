import { PDFViewer, Document, Page, Text, View, Font } from '@react-pdf/renderer';
import { tw } from './util/tw';
import React from 'react';
import { Header } from './header';
import { About } from './about';
import { Vanderlande } from './clients/vanderlande';
import { Hoogendoorn } from './clients/hoogendoorn';
import { LyceoFE } from './clients/lyceo-fe';
import { LyceoWp } from './clients/lyceo-wp';
import { Freelance } from './clients/freelance';
import { Background } from './ui/background';

// https://github.com/diegomura/react-pdf/issues/1075
Font.register({
  family: 'Raleway',
  format: 'truetype',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoooCPNLA3JC9c.ttf',
    },
    {
      src: 'https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVs9pYCPNLA3JC9c.ttf',
      fontWeight: 'bold',
    },
  ],
});

const CV = () => (
  <Document title="resume" style={{fontFamily: 'Raleway'}}>

    <Page size="A4" style={tw('relative p-0 text-white')}>
      <Background/>
      <View style={tw('py-5 px-12')}>
        <Header/>
        <About/>

        <View style={tw('gap-3 py-5')}>
          <Text style={tw('text-2xl leading-none font-bold')}>Work experience</Text>
          <Vanderlande/>
          <Hoogendoorn/>
        </View>
      </View>
    </Page>

    <Page size="A4" style={tw('relative p-0 text-white')}>
      <Background/>
      <View style={tw('py-5 px-12 gap-3')}>
        <Header/>
        <LyceoFE/>
        <LyceoWp/>
        <Freelance/>
      </View>
    </Page>

  </Document>
);

export default function Pdf() {
  return (<PDFViewer width="100%" style={tw('h-screen')}><CV/></PDFViewer>);
}
import { PDFViewer, Document, Page, Text, View, Font } from '@react-pdf/renderer';
import { tw } from './util/tw';
import React from 'react';
import { Header } from './header';
import { Intro } from './intro';
import { Background } from './ui/background';
import { Experience } from '@/app/ui/experience';
import { englishCV } from '@/app/data/english.content';
import { dutchCV } from '@/app/data/dutch.content';

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

    {/*{dutchCV.map((page) => (*/}
    {englishCV.map((page) => (
      <Page key={page.id} size="A4" style={tw('relative p-0 text-white')}>
        <Background/>
        <View style={tw('py-5 px-20')}>
          <Header/>
          {page.about && <Intro {...page.about}/>}

          <View style={tw('gap-3 py-5')}>
            {page.experienceTitle && <Text style={tw('text-2xl leading-none font-bold')}>{page.experienceTitle}</Text>}
            {page.workExperience.map((experience) => <Experience key={experience.title} {...experience} />)}
          </View>
        </View>
      </Page>
    ))}

  </Document>
);

export default function Pdf() {
  return (<PDFViewer width="100%" style={tw('h-screen')}><CV/></PDFViewer>);
}
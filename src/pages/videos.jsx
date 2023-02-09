import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function VideosSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Videos() {
  return (
    <>
      <Head>
        <title>Videos - Giandomenico Riceputi</title>
        <meta
          name="description"
          content="I make video on youtube where I share my passion for web development."
        />
      </Head>
      <SimpleLayout
        title="I make video on youtube where I share my passion for web development."
        intro="One of my favorite ways to share my passion is through videos and articles."
      >
        <div className="space-y-20">
          {/*<videosSection title="Youtube">*/}
          {/*  <Appearance*/}
          {/*    href="#"*/}
          {/*    title="In space, no one can watch you stream — until now"*/}
          {/*    description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."*/}
          {/*    event="SysConf 2021"*/}
          {/*    cta="Watch video"*/}
          {/*  />*/}
          {/*  <Appearance*/}
          {/*    href="#"*/}
          {/*    title="Lessons learned from our first product recall"*/}
          {/*    description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."*/}
          {/*    event="Business of Startups 2020"*/}
          {/*    cta="Watch video"*/}
          {/*  />*/}
          {/*</videosSection>*/}
        </div>
      </SimpleLayout>
    </>
  )
}

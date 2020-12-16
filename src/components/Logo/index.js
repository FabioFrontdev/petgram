import React from 'react'
import { Svg } from './styles'
export const Logo = props => (
  <Svg
    width={327.317}
    height={155.363}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='86.341 -2.681 327.317 155.363'
    style={{
      background: '0 0'
    }}
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <linearGradient
        id='prefix__editing-shiny-gradient'
        x1={0.242}
        x2={0.757}
        y1={0.071}
        y2={0.929}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#ffb200' />
        <stop offset={0.5} stopColor='#e10057' />
        <stop offset={1} stopColor='#5a1a80' />
      </linearGradient>
      <linearGradient
        id='prefix__editing-shiny-gradient2'
        x1={0}
        x2={0}
        y1={0}
        y2={1}
      >
        <stop offset={0.2} stopColor='#fff' stopOpacity={0.8} />
        <stop offset={0.8} stopColor='#fff' stopOpacity={0} />
      </linearGradient>
      <filter
        id='prefix__editing-shiny2'
        x='-100%'
        y='-100%'
        width='300%'
        height='300%'
      >
        <feMorphology radius={2} />
      </filter>
      <filter
        id='prefix__editing-shiny'
        x='-100%'
        y='-100%'
        width='300%'
        height='300%'
      >
        <feFlood floodColor='#fff' result='flood' />
        <feConvolveMatrix
          in='SourceGraphic'
          result='conv'
          order='8,8'
          divisor={1}
          kernelMatrix='0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0'
        />
        <feOffset dy={4} in='conv' result='offset' />
        <feComposite operator='in' in='flood' in2='offset' result='comp' />
        <feGaussianBlur in='offset' stdDeviation={3} result='shadow' />
        <feColorMatrix
          in='shadow'
          values='0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0'
          result='dark-shadow'
        />
        <feOffset dy={4} in='dark-shadow' result='offset-shadow' />
        <feOffset dy={2} in='conv' result='offset-2' />
        <feComposite
          operator='out'
          in='offset'
          in2='offset-2'
          result='edge-diff'
        />
        <feGaussianBlur in='edge-diff' stdDeviation={1} result='edge-blur' />
        <feColorMatrix
          in='edge-blur'
          result='edge-shadow'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
        />
        <feComposite
          operator='in'
          in='edge-shadow'
          in2='offset'
          result='edge-shadow-in'
        />
        <feOffset dy={1} in='edge-shadow-in' result='edge-shadow-final' />
        <feMerge result='out'>
          <feMergeNode in='offset-shadow' />
          <feMergeNode in='comp' />
          <feMergeNode in='edge-shadow-final' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>
    <g filter='url(#prefix__editing-shiny)'>
      <path
        d='M8.26.35Q7.7.35 7.18.32q-.53-.04-.91-.67-.39-.63-.63-2.03-.25-1.4-.25-4.13v-7.42q-.14-.35-.35-1.02-.21-.66-.21-1.08 0-1.4.28-2.49.28-1.08.28-2.69 0-2.8.11-5.67.1-2.87.45-5.22.35-2.34 1.09-3.81.73-1.47 1.99-1.54.42 0 .6.14.17.14.59.14l1.61-.63q.98-.42 2.31-.95 1.33-.52 3.01-.45 6.16 0 9.21 2.76 3.04 2.77 3.04 7.67 0 4.13-1.29 7.14-1.3 3.01-3.71 4.97-2.42 1.96-5.81 2.9-3.4.95-7.6.95-.63 0-1.12-.21.07.56.11 1.12.03.56.1 1.68.07 1.12.21 3.04.14 1.93.35 5.15 0 1.61-.87 1.99-.88.39-1.51.39zm1.54-20.3q.77.28 1.51.42.73.14 1.71.14 2.38 0 4.59-.49 2.2-.49 3.88-1.47 1.68-.98 2.66-2.42.98-1.43.98-3.32 0-2.66-1.75-4.45-1.75-1.78-5.95-1.78-.84 0-1.92.17-1.09.18-2.14.46t-1.89.66q-.84.39-1.12.74 0 .14-.03.52-.04.39-.11 1.58t-.17 3.39q-.11 2.21-.25 5.85zm48.02 2.73l-19.46 6.93q.56 1.82 1.89 2.87 1.33 1.05 2.94 1.54 1.61.49 3.22.59 1.61.11 2.8.11 1.19 0 2.38-.35t2.28-.77q1.08-.42 2.03-.77.94-.35 1.57-.35 2.38 0 2.38 3.08 0 1.82-1.64 2.8-1.65.98-3.85 1.47-2.21.49-4.34.6-2.14.1-3.12.1-2.38 0-4.69-1.05-2.31-1.05-4.09-2.94-1.79-1.89-2.87-4.41-1.09-2.52-1.09-5.46 0-4.06 1.02-7.42 1.01-3.36 2.9-5.81 1.89-2.45 4.69-3.82 2.8-1.36 6.37-1.36 1.75 0 3.64.66 1.89.67 3.4 1.96 1.5 1.3 2.48 3.22.98 1.93.98 4.45 0 1.61-.49 2.73-.49 1.12-1.33 1.4zm-19.74 2.1q1.96-.56 4.45-1.51 2.48-.94 5-1.96 2.52-1.01 4.73-1.96 2.2-.94 3.6-1.5-.91-1.96-3.04-2.77-2.14-.8-4.59-.8-.98 0-2.52.59-1.54.6-3.11 1.86-1.58 1.26-2.84 3.25-1.26 2-1.68 4.8zM78.54.35q-2.52 0-4.06-1.23-1.54-1.22-2.38-3.25-.84-2.03-1.15-4.62-.32-2.59-.39-5.36-.07-2.76-.1-5.42-.04-2.66-.25-4.83-.77 0-1.61.07-.84.07-1.82.07-.28 0-.73-.21-.46-.21-.91-.6-.46-.38-.77-.94-.32-.56-.32-1.33 0-1.4.84-2.38t1.89-.98q.91 0 1.82.03.91.04 1.96.11 0-.91.11-2.8.1-1.89.42-3.71.31-1.82.94-3.22.63-1.4 1.68-1.4.56 0 1.23.8.66.81.66 2.14 0 3.15-.17 4.69-.18 1.54-.32 2.31l-.21 1.26q2.52 0 5.08-.07 2.55-.07 5.14-.07.49 0 .84.35t.56.87q.21.53.32 1.12.1.6.1 1.09 0 1.47-.73 2.2-.74.74-1.44.74l-9.94-.14q0 .63-.03 1.64-.04 1.02-.04 2.21t-.03 2.48q-.04 1.3-.04 2.49 0 1.89.14 3.6.14 1.72.53 3.05.38 1.33 1.08 2.13.7.81 1.89.81.84 0 1.72-.35.87-.35 1.61-.81.73-.45 1.22-.8.49-.35.63-.35.84 0 1.12.52.28.53.28 1.51 0 1.05-.66 2.2-.67 1.16-1.65 2.14-.98.98-2.1 1.61-1.12.63-1.96.63zm12.25-13.72q0-3.29.74-6.41.73-3.11 2.2-5.56 1.47-2.45 3.78-3.92 2.31-1.47 5.46-1.47 2.52 0 4.83 1.26t4.1 3.22q1.78 1.96 2.87 4.27 1.08 2.31 1.08 4.41l-.63 15.19q0 .14-.03.21-.04.07-.04.21-.42 2.66-.7 5.71-.28 3.04-1.05 5.67-.77 2.62-2.38 4.37-1.61 1.75-4.76 1.75-.63 0-2.03-.21t-2.8-.73q-1.4-.53-2.48-1.4-1.09-.88-1.09-2.28 0-1.47.39-2.41.38-.95 1.64-.95.49 0 .77.25.28.24.88.52.59.28 1.75.53 1.15.24 3.39.24 1.54 0 2.28-1.36.73-1.37 1.08-3.36.35-2 .49-4.31.14-2.31.35-4.2-.35 1.19-1.26 2.06-.91.88-2.1 1.51t-2.48.95q-1.3.31-2.42.31-5.81 0-8.82-3.5-3.01-3.5-3.01-10.57zm4.48-.42q0 2.52.6 4.16.59 1.65 1.68 2.63 1.08.98 2.55 1.36 1.47.39 3.22.39 1.61 0 2.94-.91 1.33-.91 2.35-2.28 1.01-1.36 1.71-2.97t1.05-3.01q-.21-1.68-.59-3.47-.39-1.78-1.23-3.25t-2.24-2.45q-1.4-.98-3.57-.98-2.38 0-3.99.87-1.61.88-2.59 2.38-.98 1.51-1.43 3.47-.46 1.96-.46 4.06zm27.86 10.01q0-1.61.04-2.63.03-1.01.03-1.71v-3.75q0-.87.11-2.55.1-1.68.28-4.62.17-2.94.59-8.12.14-1.54.7-2.49.56-.94 1.75-.94.56 0 1.19.73.63.74.63 2.84v.73q0 .39-.07.88.49-1.61 1.58-2.73 1.08-1.12 2.41-1.82t2.73-1.02q1.4-.31 2.59-.31.91 0 2.14.17 1.22.18 2.31.7 1.08.53 1.82 1.54.73 1.02.73 2.7 0 1.54-.56 2.52t-1.61.98q-.84 0-1.08-.39-.25-.38-.56-.87-.32-.49-.95-.88-.63-.38-2.24-.38h-.7q-5.04 0-7.07 2.76-2.03 2.77-2.03 8.23v1.19l.35 9.87q0 .35-.14.87-.14.53-.42 1.09-.28.56-.73.94-.46.39-1.16.39-1.61 0-2.13-.95-.53-.94-.53-2.97zm23.38-8.26q0-3.43 1.19-6.83 1.19-3.39 3.29-6.09 2.1-2.69 4.87-4.34 2.76-1.64 5.91-1.64 2.38 0 4.52 1.12 2.13 1.12 3.67 2.9 1.54 1.79 2.45 4.06.91 2.28.91 4.52 0 1.19-.14 2.27-.14 1.09-.31 2.17-.18 1.09-.32 2.28-.14 1.19-.14 2.66 0 1.96.56 2.73t1.61.77q.63 0 1.23-.7.59-.7 1.08-.84 1.82 0 1.82 2.66 0 .84-.35 1.68t-.98 1.5q-.63.67-1.47 1.12-.84.46-1.82.46-.98 0-1.92-.56-.95-.56-1.72-1.44-.77-.87-1.26-2.03-.49-1.15-.49-2.41-2.1 2.66-4.72 4.69Q161.35.7 158.2.7q-2.03 0-4.09-.98-2.07-.98-3.75-2.7-1.68-1.71-2.76-4.06-1.09-2.34-1.09-5zm4.34-.21q0 1.54.74 2.8.73 1.26 1.96 2.13 1.22.88 2.73 1.37 1.5.49 2.97.49 3.08 0 4.9-1.37 1.82-1.36 2.87-3.43 1.05-2.06 1.47-4.48.42-2.41.77-4.58 0-.77-.73-1.72-.74-.94-1.79-1.75-1.05-.8-2.27-1.36-1.23-.56-2.21-.56-2.59 0-4.69 1.12-2.1 1.12-3.6 2.9-1.51 1.79-2.31 4.03-.81 2.24-.81 4.41zm30.59 8.26v-.35q0-.35.04-.74.03-.38.03-.73 0-2.66-.03-4.66-.04-1.99-.04-3.53v-4.06q0-5.6.32-8.65.31-3.04 1.92-3.04.77 0 1.33.66.56.67.56 2.7v.63q.7-1.82 2.59-3.29t3.99-1.47q1.05 0 2.63.42 1.57.42 2.97 1.4 1.4.98 2.42 2.55 1.01 1.58 1.01 3.82.35-1.75 1.4-3.08 1.05-1.33 2.38-2.24 1.33-.91 2.8-1.4 1.47-.49 2.66-.49 2.73 0 4.9.94 2.17.95 3.75 2.94 1.57 2 2.41 5.11.84 3.12.84 7.53 0 2.59-.17 5.04-.18 2.45-.56 4.37-.39 1.93-.95 3.12Q220.08.7 219.31.7q-.63 0-1.19-.38-.56-.39-.98-.99-.42-.59-.63-1.26-.21-.66-.21-1.29 0-1.26.21-2.1.21-.84.46-1.61.24-.77.45-1.68.21-.91.21-2.17 0-1.33.04-2.52.03-1.19.03-2.52t-.49-2.7q-.49-1.36-1.43-2.48-.95-1.12-2.35-1.86-1.4-.73-3.22-.73-.84 0-1.96.35t-2.17.98q-1.05.63-1.92 1.54-.88.91-1.3 2.03l-.35 13.09q0 .07.04.35.03.28.1.59.07.32.11.63.03.32.03.39 0 1.61-.59 2.76-.6 1.16-1.58 1.16-1.12 0-2.13-.67-1.02-.66-1.02-2.9 0-.07.07-.49t.11-.95q.03-.52.1-1.05.07-.52.07-.73l.14-9.66q0-1.33-.38-2.8-.39-1.47-1.16-2.66-.77-1.19-1.89-1.96-1.12-.77-2.45-.77-3.57 0-4.9 1.43-1.33 1.44-1.33 4.66v1.26q0 1.68.07 3.39.07 1.72.21 3.33l.56 7.42q-.07 1.61-1.01 2.45-.95.84-1.44.84-1.33 0-2.06-.88-.74-.87-.74-3.53z'
        fill='url(#prefix__editing-shiny-gradient)'
        transform='translate(136.425 103.595)'
      />
    </g>
    <g filter='url(#prefix__editing-shiny2)'>
      <path
        d='M8.26.35Q7.7.35 7.18.32q-.53-.04-.91-.67-.39-.63-.63-2.03-.25-1.4-.25-4.13v-7.42q-.14-.35-.35-1.02-.21-.66-.21-1.08 0-1.4.28-2.49.28-1.08.28-2.69 0-2.8.11-5.67.1-2.87.45-5.22.35-2.34 1.09-3.81.73-1.47 1.99-1.54.42 0 .6.14.17.14.59.14l1.61-.63q.98-.42 2.31-.95 1.33-.52 3.01-.45 6.16 0 9.21 2.76 3.04 2.77 3.04 7.67 0 4.13-1.29 7.14-1.3 3.01-3.71 4.97-2.42 1.96-5.81 2.9-3.4.95-7.6.95-.63 0-1.12-.21.07.56.11 1.12.03.56.1 1.68.07 1.12.21 3.04.14 1.93.35 5.15 0 1.61-.87 1.99-.88.39-1.51.39zm1.54-20.3q.77.28 1.51.42.73.14 1.71.14 2.38 0 4.59-.49 2.2-.49 3.88-1.47 1.68-.98 2.66-2.42.98-1.43.98-3.32 0-2.66-1.75-4.45-1.75-1.78-5.95-1.78-.84 0-1.92.17-1.09.18-2.14.46t-1.89.66q-.84.39-1.12.74 0 .14-.03.52-.04.39-.11 1.58t-.17 3.39q-.11 2.21-.25 5.85zm48.02 2.73l-19.46 6.93q.56 1.82 1.89 2.87 1.33 1.05 2.94 1.54 1.61.49 3.22.59 1.61.11 2.8.11 1.19 0 2.38-.35t2.28-.77q1.08-.42 2.03-.77.94-.35 1.57-.35 2.38 0 2.38 3.08 0 1.82-1.64 2.8-1.65.98-3.85 1.47-2.21.49-4.34.6-2.14.1-3.12.1-2.38 0-4.69-1.05-2.31-1.05-4.09-2.94-1.79-1.89-2.87-4.41-1.09-2.52-1.09-5.46 0-4.06 1.02-7.42 1.01-3.36 2.9-5.81 1.89-2.45 4.69-3.82 2.8-1.36 6.37-1.36 1.75 0 3.64.66 1.89.67 3.4 1.96 1.5 1.3 2.48 3.22.98 1.93.98 4.45 0 1.61-.49 2.73-.49 1.12-1.33 1.4zm-19.74 2.1q1.96-.56 4.45-1.51 2.48-.94 5-1.96 2.52-1.01 4.73-1.96 2.2-.94 3.6-1.5-.91-1.96-3.04-2.77-2.14-.8-4.59-.8-.98 0-2.52.59-1.54.6-3.11 1.86-1.58 1.26-2.84 3.25-1.26 2-1.68 4.8zM78.54.35q-2.52 0-4.06-1.23-1.54-1.22-2.38-3.25-.84-2.03-1.15-4.62-.32-2.59-.39-5.36-.07-2.76-.1-5.42-.04-2.66-.25-4.83-.77 0-1.61.07-.84.07-1.82.07-.28 0-.73-.21-.46-.21-.91-.6-.46-.38-.77-.94-.32-.56-.32-1.33 0-1.4.84-2.38t1.89-.98q.91 0 1.82.03.91.04 1.96.11 0-.91.11-2.8.1-1.89.42-3.71.31-1.82.94-3.22.63-1.4 1.68-1.4.56 0 1.23.8.66.81.66 2.14 0 3.15-.17 4.69-.18 1.54-.32 2.31l-.21 1.26q2.52 0 5.08-.07 2.55-.07 5.14-.07.49 0 .84.35t.56.87q.21.53.32 1.12.1.6.1 1.09 0 1.47-.73 2.2-.74.74-1.44.74l-9.94-.14q0 .63-.03 1.64-.04 1.02-.04 2.21t-.03 2.48q-.04 1.3-.04 2.49 0 1.89.14 3.6.14 1.72.53 3.05.38 1.33 1.08 2.13.7.81 1.89.81.84 0 1.72-.35.87-.35 1.61-.81.73-.45 1.22-.8.49-.35.63-.35.84 0 1.12.52.28.53.28 1.51 0 1.05-.66 2.2-.67 1.16-1.65 2.14-.98.98-2.1 1.61-1.12.63-1.96.63zm12.25-13.72q0-3.29.74-6.41.73-3.11 2.2-5.56 1.47-2.45 3.78-3.92 2.31-1.47 5.46-1.47 2.52 0 4.83 1.26t4.1 3.22q1.78 1.96 2.87 4.27 1.08 2.31 1.08 4.41l-.63 15.19q0 .14-.03.21-.04.07-.04.21-.42 2.66-.7 5.71-.28 3.04-1.05 5.67-.77 2.62-2.38 4.37-1.61 1.75-4.76 1.75-.63 0-2.03-.21t-2.8-.73q-1.4-.53-2.48-1.4-1.09-.88-1.09-2.28 0-1.47.39-2.41.38-.95 1.64-.95.49 0 .77.25.28.24.88.52.59.28 1.75.53 1.15.24 3.39.24 1.54 0 2.28-1.36.73-1.37 1.08-3.36.35-2 .49-4.31.14-2.31.35-4.2-.35 1.19-1.26 2.06-.91.88-2.1 1.51t-2.48.95q-1.3.31-2.42.31-5.81 0-8.82-3.5-3.01-3.5-3.01-10.57zm4.48-.42q0 2.52.6 4.16.59 1.65 1.68 2.63 1.08.98 2.55 1.36 1.47.39 3.22.39 1.61 0 2.94-.91 1.33-.91 2.35-2.28 1.01-1.36 1.71-2.97t1.05-3.01q-.21-1.68-.59-3.47-.39-1.78-1.23-3.25t-2.24-2.45q-1.4-.98-3.57-.98-2.38 0-3.99.87-1.61.88-2.59 2.38-.98 1.51-1.43 3.47-.46 1.96-.46 4.06zm27.86 10.01q0-1.61.04-2.63.03-1.01.03-1.71v-3.75q0-.87.11-2.55.1-1.68.28-4.62.17-2.94.59-8.12.14-1.54.7-2.49.56-.94 1.75-.94.56 0 1.19.73.63.74.63 2.84v.73q0 .39-.07.88.49-1.61 1.58-2.73 1.08-1.12 2.41-1.82t2.73-1.02q1.4-.31 2.59-.31.91 0 2.14.17 1.22.18 2.31.7 1.08.53 1.82 1.54.73 1.02.73 2.7 0 1.54-.56 2.52t-1.61.98q-.84 0-1.08-.39-.25-.38-.56-.87-.32-.49-.95-.88-.63-.38-2.24-.38h-.7q-5.04 0-7.07 2.76-2.03 2.77-2.03 8.23v1.19l.35 9.87q0 .35-.14.87-.14.53-.42 1.09-.28.56-.73.94-.46.39-1.16.39-1.61 0-2.13-.95-.53-.94-.53-2.97zm23.38-8.26q0-3.43 1.19-6.83 1.19-3.39 3.29-6.09 2.1-2.69 4.87-4.34 2.76-1.64 5.91-1.64 2.38 0 4.52 1.12 2.13 1.12 3.67 2.9 1.54 1.79 2.45 4.06.91 2.28.91 4.52 0 1.19-.14 2.27-.14 1.09-.31 2.17-.18 1.09-.32 2.28-.14 1.19-.14 2.66 0 1.96.56 2.73t1.61.77q.63 0 1.23-.7.59-.7 1.08-.84 1.82 0 1.82 2.66 0 .84-.35 1.68t-.98 1.5q-.63.67-1.47 1.12-.84.46-1.82.46-.98 0-1.92-.56-.95-.56-1.72-1.44-.77-.87-1.26-2.03-.49-1.15-.49-2.41-2.1 2.66-4.72 4.69Q161.35.7 158.2.7q-2.03 0-4.09-.98-2.07-.98-3.75-2.7-1.68-1.71-2.76-4.06-1.09-2.34-1.09-5zm4.34-.21q0 1.54.74 2.8.73 1.26 1.96 2.13 1.22.88 2.73 1.37 1.5.49 2.97.49 3.08 0 4.9-1.37 1.82-1.36 2.87-3.43 1.05-2.06 1.47-4.48.42-2.41.77-4.58 0-.77-.73-1.72-.74-.94-1.79-1.75-1.05-.8-2.27-1.36-1.23-.56-2.21-.56-2.59 0-4.69 1.12-2.1 1.12-3.6 2.9-1.51 1.79-2.31 4.03-.81 2.24-.81 4.41zm30.59 8.26v-.35q0-.35.04-.74.03-.38.03-.73 0-2.66-.03-4.66-.04-1.99-.04-3.53v-4.06q0-5.6.32-8.65.31-3.04 1.92-3.04.77 0 1.33.66.56.67.56 2.7v.63q.7-1.82 2.59-3.29t3.99-1.47q1.05 0 2.63.42 1.57.42 2.97 1.4 1.4.98 2.42 2.55 1.01 1.58 1.01 3.82.35-1.75 1.4-3.08 1.05-1.33 2.38-2.24 1.33-.91 2.8-1.4 1.47-.49 2.66-.49 2.73 0 4.9.94 2.17.95 3.75 2.94 1.57 2 2.41 5.11.84 3.12.84 7.53 0 2.59-.17 5.04-.18 2.45-.56 4.37-.39 1.93-.95 3.12Q220.08.7 219.31.7q-.63 0-1.19-.38-.56-.39-.98-.99-.42-.59-.63-1.26-.21-.66-.21-1.29 0-1.26.21-2.1.21-.84.46-1.61.24-.77.45-1.68.21-.91.21-2.17 0-1.33.04-2.52.03-1.19.03-2.52t-.49-2.7q-.49-1.36-1.43-2.48-.95-1.12-2.35-1.86-1.4-.73-3.22-.73-.84 0-1.96.35t-2.17.98q-1.05.63-1.92 1.54-.88.91-1.3 2.03l-.35 13.09q0 .07.04.35.03.28.1.59.07.32.11.63.03.32.03.39 0 1.61-.59 2.76-.6 1.16-1.58 1.16-1.12 0-2.13-.67-1.02-.66-1.02-2.9 0-.07.07-.49t.11-.95q.03-.52.1-1.05.07-.52.07-.73l.14-9.66q0-1.33-.38-2.8-.39-1.47-1.16-2.66-.77-1.19-1.89-1.96-1.12-.77-2.45-.77-3.57 0-4.9 1.43-1.33 1.44-1.33 4.66v1.26q0 1.68.07 3.39.07 1.72.21 3.33l.56 7.42q-.07 1.61-1.01 2.45-.95.84-1.44.84-1.33 0-2.06-.88-.74-.87-.74-3.53z'
        fill='url(#prefix__editing-shiny-gradient2)'
        transform='translate(136.425 103.595)'
      />
    </g>
    <style />
  </Svg>
)
'use client';
import {Details} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function DefaultDetails() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div style={{margin: '2rem 0'}}>
      <Details summary={'Click to show details'} dark={dark}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
          Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
        </p>
      </Details>
    </div>
  );
}

export function DetailsPos() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div style={{margin: '2rem 0', display: 'flex', gap: '.5rem', flexDirection: 'column'}}>
      <Details summary={'Click to show details'} iconPosition={'start'} name={'expand'} dark={dark}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
          Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
        </p>
      </Details>

      <Details summary={'Click to show details'} iconPosition={'end'} name={'expand'} dark={dark}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
          Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
        </p>
      </Details>
    </div>
  );
}

export function DetailsIcon() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  const plusIcon = <svg width={12} height={12} style={{marginRight: '.75rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
  </svg>;
  const arrowIcon = <svg fill={'grey'} width={12} height={12} style={{marginRight: '.75rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
  </svg>
    
  return (
    <div style={{margin: '2rem 0', display: 'flex', gap: '.5rem', flexDirection: 'column'}}>
      <Details summary={'Click to show details'} icon={plusIcon} dark={dark}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
          Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
        </p>
      </Details>

      <Details summary={'Click to show details'} icon={arrowIcon} dark={dark}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
          Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
        </p>
      </Details>
    </div>
  );
}

export function DetailDivider() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div style={{margin: '2rem 0'}}>
      <Details summary={'Click to show details'} dark={dark} divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
          Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
        </p>
      </Details>
    </div>
  );
}
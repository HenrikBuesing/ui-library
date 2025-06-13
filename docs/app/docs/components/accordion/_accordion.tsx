'use client';
import {Accordion, Details} from '@hbuesing/ui-library';
import {useTheme} from 'nextra-theme-docs';
import React from 'react';

export default function DefaultAccordion() {
  const {theme} = useTheme();
  const dark = theme === 'dark';
  
  return (
    <div style={{margin: '2rem 0'}}>
      <Accordion dark={dark}>
        <Details summary={'First option'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante.
        </Details>
        <Details summary={'Second option'} open>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
            ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
            Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
          </p>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
            ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
            Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
          </p>
        </Details>
        <Details summary={'Third option'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
          Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
        </Details>
      </Accordion>
    </div>
  );
}

export function AccordionCustom() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  const plusIcon = <svg width={12} height={12} style={{marginRight: '.75rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
  </svg>;

  return (
    <div style={{margin: '2rem 0'}}>
      <Accordion dark={dark} divider icon={plusIcon} iconPosition={'end'}>
        <Details summary={'First option'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante.
        </Details>
        <Details summary={'Second option'} open>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
            ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
            Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
            ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
            Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
          </p>
        </Details>
        <Details summary={'Third option'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
          Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
        </Details>
      </Accordion>
    </div>
  );
}

export function AccordionSingle() {
  const {theme} = useTheme();
  const dark = theme === 'dark';

  return (
    <div style={{margin: '2rem 0'}}>
      <Accordion dark={dark} name={'single-select'}>
        <Details summary={'First option'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante.
        </Details>
        <Details summary={'Second option'} open>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
            ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
            Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
          </p>
        </Details>
        <Details summary={'Third option'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam fermentum, sagittis erat at, rhoncus
          ante. Sed vestibulum orci vel efficitur auctor. Donec tempor odio nec felis blandit, ut vulputate ligula tincidunt.
          Sed finibus varius finibus. Fusce non enim et metus accumsan commodo. Pellentesque auctor arcu eu consectetur tincidunt.
        </Details>
      </Accordion>
    </div>
  );
}
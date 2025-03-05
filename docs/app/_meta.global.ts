import {Meta} from "nextra";

const globalMeta: Meta = {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'full',
      toc: false,
      timestamp: false
    }
  },
  docs: {
    type: 'page',
    title: 'Documentation',
    items: {
      components: {
        title: 'Components',
        theme: {
          collapsed: true,
        },
        items: {
          '-': {
            type: 'separator',
            title: 'Inputs'
          },
          button: 'Button',
          input: 'Input',
          checkbox: 'Checkbox',
          radio: 'Radio',
          '--': {
            type: 'separator',
            title: 'Data Display'
          },
          icon: 'Icon',
          modal: 'Modal',
        }
      },
      hooks: {
        title: 'Hooks',
        theme: {
          collapsed: true
        },
        items: {
          'contrast-color': 'useContrastColor'
        }
      }
    }
  },
  about: {
    type: 'page',
    title: 'About',
    theme: {
      typesetting: 'article',
      timestamp: false
    }
  }
}

export default globalMeta;
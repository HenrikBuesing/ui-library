import {Meta} from 'nextra';

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
          'input-decorator': 'InputDecorator',
          textarea: 'Textarea',
          checkbox: 'Checkbox',
          switch: 'Switch',
          radio: 'Radio',
          'radio-group': 'RadioGroup',
          '--': {
            type: 'separator',
            title: 'Feedback'
          },
          dialog: 'Dialog',
          'dialog-title': 'DialogTitle',
          'dialog-content': 'DialogContent',
          'dialog-controls': 'DialogControls',
          toast: 'Toast',
          progress: 'Progress',
          skeleton: 'Skeleton',
          '---': {
            type: 'separator',
            title: 'Data Display'
          },
          tag: 'Tag'
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
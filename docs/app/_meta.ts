import {Meta} from "nextra";

const meta: Meta = {
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
    title: 'Documentation'
  },
  about: {
    type: 'page',
    title: 'About',
    theme: {
      typesetting: 'article',
      layout: 'full',
      toc: false,
      timestamp: false
    }
  }
}

export default meta;
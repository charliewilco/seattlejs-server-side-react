import {dark as theme} from 'mdx-deck/themes';
import prism from 'react-syntax-highlighter/styles/prism/atom-dark';
const font = '"system-ui, sans-serif"';
const monospace = '"SF Mono", monospace';

export default {
  ...theme,
  monospace,
  prism: {style: prism},
  // colors: {
  //   background: '#33383B',
  //   text: 'white',
  //   link: '#2EA5DE',
  //   code: '#ffba00',
  // },
};

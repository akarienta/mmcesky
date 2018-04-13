import { injectGlobal } from 'styled-components';
import global from '../global';

const variables = {
    colors: {
        primaryColor: '#1974D2',
        secondaryColor: '#FFFFFF',
    },
};

injectGlobal`
  ${global(variables)}
`;

export default variables;

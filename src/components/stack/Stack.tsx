import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InferPropTypes } from '../../types';

const StackPropTypes = {
  recursive: PropTypes.bool,
  splitAfter: PropTypes.number,
  space: PropTypes.string,
};

const StackDefaultProps = {
  recursive: false,
  space: '1rem',
};

type StackProps = InferPropTypes<
  typeof StackPropTypes,
  typeof StackDefaultProps
>;

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${(props) => (props.recursive ? '' : '>')} * + * {
    margin-top: ${(props) => props.space};
  }
  ${({ splitAfter }) =>
    splitAfter
      ? `
      & > :nth-child(${splitAfter}) {
        margin-bottom: auto;
      }`
      : ''}
`;

Stack.propTypes = StackPropTypes;
Stack.defaultProps = StackDefaultProps;

export default Stack;

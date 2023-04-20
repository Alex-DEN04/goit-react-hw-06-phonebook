import PropTypes from 'prop-types';

import { TitleStyled } from './Title.styled';

export const Title = ({ title }) => {
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

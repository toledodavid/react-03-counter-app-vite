// import { Fragment } from "react";
import PropTypes from 'prop-types';

const newMessage = {
  title: 'Hello',
  message: 'David'
};

const greeting = () => (<p>Good morning!</p>);

const getResult = (a, b) => a + b;

export const FirstApp = ({title, subTitle, name}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h3>{subTitle}</h3>
      <p>{name}</p>

      <code>{JSON.stringify(newMessage)}</code>

      { greeting() }

      <p>Result: { getResult(1, 6) }</p>
    </>
  );

  // return (
  //   <Fragment>
  //     <h1>Hi</h1>
  //     <p>This is a paragraph</p>
  //   </Fragment>
  // );
}

FirstApp.defaultProps = {
  title: 'Not title',
  subTitle: 0,
  name: 'Juan',
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
}
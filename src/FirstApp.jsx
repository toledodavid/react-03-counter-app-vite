// import { Fragment } from "react";

const newMessage = {
  title: 'Hello',
  message: 'David'
};

const greeting = () => (<p>Good morning!</p>);

const getResult = (a, b) => a + b;

export const FirstApp = ({title, subtitle}) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      
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
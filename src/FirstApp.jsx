// import { Fragment } from "react";

const newMessage = {
  title: 'Hello',
  message: 'David'
};

const greeting = () => (<p>Good morning!</p>);

const getResult = (a, b) => a + b;

export const FirstApp = () => {
  return (
    <>
      <h1>First App</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quas voluptatem. Consequuntur neque quos hic quod officiis numquam doloribus facilis sapiente quis nemo sit reprehenderit fuga, minima alias quibusdam natus.</h3>

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
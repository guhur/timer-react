import React, { Fragment } from "react";

export const ButtonClickMe = () => <button>Click me</button>;

export const ButtonClickHere = () => <button>Click here</button>;

export const ButtonCliquezIci = () => <button>Cliquez ici</button>;

const Button = (props) => <button {...props}></button>;

export default Button;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const myButtonTexts = ["click me", "click here", "cliquez ici"];
const Buttons = () => (
  <>
    {myButtonTexts.map((textButton, index) => (
      <Fragment key={index}>
        <Button>{textButton}</Button>
        {
          // Cette syntaxe est équivalente mais ne jamais l'utiliser !!
        }
        <Button children={textButton} />
      </Fragment>
    ))}
  </>
);

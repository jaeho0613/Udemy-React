import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  })

  console.log("APP RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevState => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    console.log("allowToggleHandler");
    setAllowToggle(true);
  }

  return (
    <div className="app">
      {/*<h1>Hi there!</h1>*/}
      {/*<DemoOutput show={showParagraph}/>*/}
      {/*<Button onClick={allowToggleHandler}>Allow Toggling</Button>*/}
      {/*<Button onClick={toggleParagraphHandler}>show Paragraph</Button>*/}
      <DemoList title={listTitle} items={[5, 3, 1, 10]}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;

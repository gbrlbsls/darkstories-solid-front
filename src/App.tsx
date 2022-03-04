import { Component, Switch } from "solid-js";

import { Route, Router, Routes } from "solid-app-router";
import { StoryView } from "./views/story.view";
import { GameView } from "./views/game.view";

const App: Component = () => {
  return (
    <>
      <h3 class="title is-dark">DARK STORIES</h3>
      <Router>
        <Routes>
          <Route path="/story/:storyId" element={<StoryView />} />
          <Route path="/story" element={<StoryView />} />
          <Route path="/hash/:storyHash" element={<GameView />} />
          <Route path="/" element={<GameView />} />
        </Routes>
      </Router>

      <div className="container position-fixed fixed-bottom mb-2">
        <i class="nes-icon github is-small"></i>
        gbrlbsls<div></div>
      </div>
    </>
  );
};

export default App;

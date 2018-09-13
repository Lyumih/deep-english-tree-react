import React, { Component } from 'react';

import TreeNode from './../components/TreeNode'

const tree = [
  {
      "rus":"Еда",
      "eng":"Eat",
  },
  {
      "rus":"Фрукт",
      "eng":"Fruct",
  },
  {
      "rus":"Яблоко",
      "eng":"Apple",
  },
  {
      "rus":"Косточка",
      "eng":"Stone",
  }
]


const level = 2
const topLevel = level - 1;
const downLevel = level + 1;
class App extends Component {

  render() {

    return (
      <div className="App">
        <TreeNode 
          tree={tree}
          topLevel={topLevel}
          level={level}
          downLevel={downLevel}/>
      </div>
    );
  }
}

export default App;

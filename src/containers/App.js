import React, { Component } from 'react';

import TreeNode from './../components/TreeNode'

const tree = [
  {
    "rus":"Основа",
    "eng":"Base"
  },
  {
    "rus":"Жизнь",
    "eng":"Life"
  },
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
  },
  {
      "rus":"Белок",
      "eng":"Protein",
  }
]


const level = 3
const topLevel = level - 1;
const downLevel = level + 1;
class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {tree, level}
   // this.state = {level}
    console.log(this.state.level)
  }
  

  render() {

    const down = () => {
      console.log('top')
      console.log('before', this.state)
      const length = this.state.tree.length
      console.log(length)
      if (this.state.level>length-3){
        console.log('это самый глубокий node значение')
        return
      }
      this.setState({level: (this.state.level+1)})
      console.log('after level', this.state.level)
    }
    const top = () => {
      console.log('top')
      console.log('before', this.state)
      const length = this.state.tree.length
      console.log(length)
      if (this.state.level<2){
        console.log('это самый верхний node значение')
        return
      }
      this.setState({level: (this.state.level-1)})
      console.log('after level', this.state.level)
    }

    return (
      <div className="App">
        <TreeNode 
          tree={tree}
          topLevel={this.state.level-1}
          level={this.state.level}
          downLevel={this.state.level+1}/>
        <button onClick={()=>{top()}}>Top</button>
        <button onClick={()=>{down()}}>Down</button>
      </div>
    );
  }
}

export default App;

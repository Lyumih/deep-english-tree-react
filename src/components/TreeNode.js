import React from 'react'

import Node from './Node'

const TreeNode = ({tree=[], topLevel=0,  level=1, downLevel=2}) => {

    return(<div className="TreeNode">
        <p>TreeNode English</p>
        <Node 
            rus={tree[topLevel].rus} 
            eng={tree[topLevel].eng}/>
        <Node 
            rus={tree[level].rus} 
            eng={tree[level].eng}/>
        <Node 
            rus={tree[downLevel].rus} 
            eng={tree[downLevel].eng}/>
    </div>
)
}

export default TreeNode
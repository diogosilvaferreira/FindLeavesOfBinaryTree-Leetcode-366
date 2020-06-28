class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(5)
tree.addLeftNode(tree.root, 4)
tree.addRightNode(tree.root, 8)
tree.addLeftNode(tree.root.left, 11)
tree.addLeftNode(tree.root.left.left, 7)
tree.addRightNode(tree.root.left.left, 2)
tree.addLeftNode(tree.root.right, 13)
tree.addRightNode(tree.root.right, 4)
tree.addRightNode(tree.root.right.right, 1)


//O(n) solution that uses DFS
let result = {}

function dfs(node) {
    if (!node) {
        return 0
    }

    //This and the last line in the function will make sure we update the depth every
    //single time during recursion.
    let level = Math.max(dfs(node.left), dfs(node.right)) 

    if (result[level] == undefined) {
        result[level] = [node.val]
    } else {
        result[level].push(node.val)
    }

    return level + 1
}
dfs(tree.root)

return Object.values(result)
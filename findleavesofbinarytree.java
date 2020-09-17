//Java Solution

class Solution {
    
    List<List<Integer>> result = new ArrayList<>();
    public List<List<Integer>> findLeaves(TreeNode root) {
        dfs(root);
        
        return result;
    }
    
    public int dfs(TreeNode node) {
        if (node == null) {
            return 0;
        }
        
        int left = dfs(node.left);
        int right = dfs(node.right);
        int depth = Math.max(left, right);
        
        if (result.size() <= depth) {
            result.add(new ArrayList<Integer>());
        }
        result.get(depth).add(node.val);
        
        return depth + 1;
    }
}
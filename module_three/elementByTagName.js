function byTagName(node, tagName) {
    tagName = tagName.toUpperCase(); // Convert to uppercase
    let result = []; // Initialize an empty array to store results
  
    function recursiveSearch(node) {
      if (node.nodeType === Node.ELEMENT_NODE) { // Check if node is an element
        if (node.nodeName === tagName) { // Check if node matches the tag name
          result.push(node); // Add node to the result array
        }
        // Recursively search child nodes
        for (let i = 0; i < node.childNodes.length; i++) {
          recursiveSearch(node.childNodes[i]);
        }
      }
    }
  
    recursiveSearch(node); // Start the recursive search
    return result; // Return the result array
  }
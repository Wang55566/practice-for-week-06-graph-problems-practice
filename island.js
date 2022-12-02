function getNeighbors(row, col, graph) {
  const neighbors = [];
  // Check top
  if (row - 1 >= 0 && graph[row - 1][col] === 1) {
    //console.log(graph[[row-1][col]])
    neighbors.push([row - 1, col]);
  }

  // console.log(neighbors)
  // Check bottom

  if (row + 1 < graph.length && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }

  // Check left
  if (col - 1 >= 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Check right
  if (col + 1 < graph[row].length && graph[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }

  // console.log(neighbors);
  return neighbors;
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  // console.log(graph)

  const visited = new Set();
  visited.add(`${[row]},${[col]}`);
  // Create a stack, put the starting node in the stack
  // console.log(visited)
  const stack = [[row, col]];
  // console.log(stack)
  // Put the stringified starting node in visited

  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    let current = stack.pop();
    // console.log('hello',current)
    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    let neighbors = getNeighbors(current[0], current[1], graph);
    for (let neighbor of neighbors) {
      let neighborStr = `${neighbor[0]},${neighbor[1]}`;
      if (!visited.has(neighborStr)) {
        stack.push(neighbor);
        visited.add(neighborStr);
      }
    }
  }
  // console.log('why not here', size)
  return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];

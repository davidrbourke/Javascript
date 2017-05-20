// Populating and searching a binary tree with recursion
(function() {
	const values = [4, 5, 6, 3, 2, 1, 9, 10, 11, 15, 14, 7, 19, 8];
	var rootNode;

	const searchFreeNode = function(node, value) {
		if (value < node.value) {
			if (node.left === undefined) {
				node.left = {
					value: value
				};
				return node;
			} else {
				return searchFreeNode(node.left, value);
			}
		}
		else {
			if (node.right === undefined) {
				node.right = {
					value: value
				};
				return node;
			} else {
				return searchFreeNode(node.right, value);
			}
		}
	}

	const createTree = function(values) {
		values.forEach(function(value) {
			if (rootNode === undefined) {
				rootNode = {
					value: value
				};
				return rootNode;
			}
			return searchFreeNode(rootNode, value);
		});
	};
	createTree(values);
	
	var iterations = 0;
	const searchTree = function(node, value) {
		iterations += 1;
		if (value === node.value) {
			return node;
		}
		if (value < node.value) {
			if (node.left === undefined) {
				return 'not found';
			}
			return searchTree(node.left, value);
		}
		else {
			if (node.right === undefined) {
				return 'not found';
			}
			return searchTree(node.right, value);
		}
	}

	console.log(rootNode);
	console.log(searchTree(rootNode, 5));
	console.log(iterations);
})();
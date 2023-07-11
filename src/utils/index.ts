import { Item } from '../types';

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function deleteNodeById(node: Item, id: number): Item | undefined {
  let queue: Item[] = [node];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode?.children) {
      currentNode.children = currentNode.children.filter(child => child.id !== id);
      queue.push(...currentNode.children);
    }
  }

  return node;
}

export function findNodeByName(node: Item, name: string): Item | undefined {
  if (node.name === name) {
    return node;
  }

  if (node.children) {
    for (let child of node.children) {
      const result = findNodeByName(child, name);
      if (result) {
        return result;
      }
    }
  }

  return undefined;
}

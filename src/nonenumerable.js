import { decorate } from './private/utils';

function handleDescriptor(target, key, descriptor, [options = {}]) {
  descriptor.enumerable = false;
  
  if (options.writable !== false) {
    descriptor.writable = true;
  }
  
  return descriptor;
}

export default function nonenumerable(...args) {
  return decorate(handleDescriptor, args);
}

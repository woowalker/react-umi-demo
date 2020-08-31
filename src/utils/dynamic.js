import { dynamic } from 'umi';

export default function(path) {
  return dynamic({
    loader: async function() {
      return await import(path);
    },
  });
}

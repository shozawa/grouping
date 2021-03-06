import { times } from "lodash";
export function chunk(array, numGroups) {
  const dist = times(numGroups, () => []);
  array.forEach((elm, index) => {
    dist[index % numGroups].push(elm);
  });
  return dist;
}

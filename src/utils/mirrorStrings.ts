export default function mirrorStrings(array: string[], stringA: string, stringB: string) {
  const newArray = array.map((key) => {
    if (key === stringA) {
      return stringB;
    }
    if (key === stringB) {
      return stringA;
    }
    return key;
  })
  return newArray;
};

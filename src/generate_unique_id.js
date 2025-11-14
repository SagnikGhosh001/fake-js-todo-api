export const generateUniqueId = (notes) => {
  const lastElementIndex = notes.length - 1;
  const lastElement = notes[lastElementIndex];
  const id = lastElement ? lastElement.id + 1 : 0;
  return id;
};

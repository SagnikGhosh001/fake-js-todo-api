export const addNote = (notes, dataToAdd) => {
  const { title, content, hasDone } = dataToAdd;
  const id = notes.length + 1;
  return notes.push({
    id,
    title,
    content,
    hasDone,
    createdAt: new Date(),
    updatedAt: null,
  }) &&
    notes;
};

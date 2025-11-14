export const addNote = (notes, dataToAdd) => {
  const { title, content, hasDone } = dataToAdd;
  const id = notes.length + 1;
  notes.push({
    id,
    title,
    content,
    hasDone,
    createdAt: new Date(),
    updatedAt: null,
  });

  return {
    success: true,
    statusCode: 200,
    message: "note added succesfully",
  };
};

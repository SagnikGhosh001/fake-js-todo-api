export const updateNote = (notes, idToUpdate, dataToAdd) => {
  const { title, content, hasDone } = dataToAdd;
  const dataToUpdate = notes.find(({ id }) => id === idToUpdate);

  if (!dataToUpdate) {
    console.log("This Id is not present");
    return;
  }

  dataToUpdate.title = title;
  dataToUpdate.content = content;
  dataToUpdate.hasDone = hasDone;
  dataToUpdate.updatedAt = new Date();

  return dataToUpdate;
};

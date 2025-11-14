export const updateNote = (notes, idToUpdate, dataToAdd) => {
  const { title, content, hasDone } = dataToAdd;
  const note = notes.find(({ id }) => id === idToUpdate);

  if (!note) {
    return {
      success: false,
      statusCode: 404,
      message: "Id not found",
    };
  }

  note.title = title || note.title;
  note.content = content || note.content;
  note.hasDone = hasDone || note.hasDone;
  note.updatedAt = new Date();

  return {
    success: true,
    statusCode: 200,
    message: "note updated succesfully",
    note,
  };
};

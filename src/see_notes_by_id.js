export const notesById = (notes, noteId) => {
  const note = notes.find((note) => note.id === noteId);
  if (!note) {
    return {
      success: false,
      statusCode: 404,
      message: "Id not found",
    };
  }
  const { id, ...withoutId } = note;
  return withoutId;
};

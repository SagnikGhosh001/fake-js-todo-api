export const notesById = (notes, noteId) => {
  const note = notes.find((note) => note.id === noteId);
  if (!note) {
    console.log("Enter Valid Note Id");
    return;
  }

  return note;
};

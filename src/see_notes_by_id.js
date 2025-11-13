export const notesById = (notes, noteId) => {
  const note = notes.find((note) => note.id === noteId);
  if (!note) {
    console.log("Enter Valid Note Id");
    return;
  }
  const { title, content, hasDone } = note;
  return { title, content, hasDone };
};

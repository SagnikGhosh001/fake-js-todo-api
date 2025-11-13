export const addNote = (notes, dataToAdd) => {
  const { title, content, hasDone } = dataToAdd;
  const notesLastElement = notes.length - 1;
  const id = notesLastElement > 0 ? notes[notesLastElement].id + 1 : 0;
  return notes.push({ id, title, content, hasDone }) && notes;
};

export const allNotes = (notes) =>
  notes.map(({ title, content, hasDone }) => ({
    title,
    content,
    hasDone,
  }));

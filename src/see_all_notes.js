export const allNotes = (notes) =>
  notes.map(({ id, ...withoutId }) => withoutId);

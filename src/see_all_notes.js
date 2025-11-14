export const allNotes = (notes) => {
  const notesData = notes.map(({ id, ...withoutId }) => withoutId);
  return {
    sucess: true,
    message: "Fetched successfully",
    notes: notesData,
  };
};

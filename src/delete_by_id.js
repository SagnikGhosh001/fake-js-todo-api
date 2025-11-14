export const deleteById = (notes, idToUpdate) => {
  const note = notes.find(({ id }) => id === idToUpdate);

  if (!note) {
    return {
      success: false,
      statusCode: 404,
      message: "Id not found",
    };
  }

  notes.splice(idToUpdate, 1);

  return {
    success: true,
    statusCode: 200,
    message: "note deleted succesfully",
    note,
  };
};

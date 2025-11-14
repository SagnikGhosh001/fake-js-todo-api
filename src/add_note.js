import { generateUniqueId } from "./generate_unique_id.js";
export const addNote = (notes, dataToAdd) => {
  const { title, content, hasDone } = dataToAdd;
  const id = generateUniqueId(notes);
  notes.push({
    id,
    title,
    content,
    hasDone,
    createdAt: new Date(),
    updatedAt: null,
  });

  return {
    success: true,
    statusCode: 200,
    message: "note added succesfully",
  };
};

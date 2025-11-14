import { takingInput } from "./src/take_user_input.js";
import { addNote } from "./src/add_note.js";
import { updateNote } from "./src/update_note.js";
import { allNotes } from "./src/see_all_notes.js";
import { notes } from "./src/data.js";
import { notesById } from "./src/see_notes_by_id.js";
import { deleteById } from "./src/delete_by_id.js";

const userInputForTitle = () => takingInput("Title").trim();

const userInputForContent = () => takingInput("Content").trim();

const userInputForHasDoneResponse = () =>
  takingInput(
    "Has Done, press 1 for already done otherwise press any other key",
  ).trim();

const userInputForId = () => {
  const response = takingInput("Enter Id").trim();
  const id = parseInt(response);

  if (typeof id === "number") return id;

  console.log("Enter a valid id");
  return userInputForId();
};

const inputsForAllFields = () => {
  const title = userInputForTitle();
  const content = userInputForContent();
  const hasDoneResponse = userInputForHasDoneResponse();
  const hasDone = hasDoneResponse === "1" ? true : false;
  return { title, content, hasDone };
};

const main = () => {
  do {
    const want = prompt(
      "\nPress\n1 for add\n2 for update\n3 for show\n4 for see perticuler note\n5. for delete\n6 for exit\npress:",
    );
    switch (want) {
      case "1":
        console.log(addNote(notes, inputsForAllFields()));
        break;
      case "2":
        console.log(updateNote(notes, userInputForId(), inputsForAllFields()));
        break;
      case "3":
        console.log(allNotes(notes));
        break;
      case "4":
        console.log(notesById(notes, userInputForId()));
        break;
      case "5":
        console.log(deleteById(notes, userInputForId()));
        break;
      default:
        Deno.exit();
    }
  } while (1);
};

main();

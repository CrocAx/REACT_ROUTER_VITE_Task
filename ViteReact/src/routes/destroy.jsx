import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

// Action function to handle deletion of a contact
export async function action({ params }) {
  throw new Error("oh dang!");
  // eslint-disable-next-line no-unreachable
  await deleteContact(params.contactId);
  return redirect("/");
}
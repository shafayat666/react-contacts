import {
  redirect,
} from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect(`/`);
}

const Destroy = () => {
  return (
    <div>
      <h1>I destroy</h1>
    </div>
  );
};

export default Destroy;
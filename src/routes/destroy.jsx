import {
  redirect,
} from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await deleteContact(params.contactId, updates);
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
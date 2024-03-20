import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const renderContacts = contacts.filter(
    (contact) =>
      contact.name.includes(
        filter.charAt(0).toUpperCase() + filter.slice(1).toLowerCase()
      ) || contact.name.startsWith(filter.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {renderContacts.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}

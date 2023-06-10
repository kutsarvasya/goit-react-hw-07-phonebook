// import { Item, List } from './Contacts.styled';

import { Item, List } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { actions } from 'store/contacts/ContactsSlice';

export function Contacts() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = useMemo(() => {
    if (!filter) return contacts;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter, contacts]);

  return (
    <>
      <List>
        {filteredContacts.map(contact => (
          <Item key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => dispatch(actions.remove(contact.id))}>
              Удалить
            </button>
          </Item>
        ))}
      </List>
    </>
  );
}

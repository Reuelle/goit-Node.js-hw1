const contacts = require('./src/contacts');
const argv = require('yargs').argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      contacts.listContacts()
        .then(data => console.table(data))
        .catch(err => console.error(err));
      break;

    case 'get':
      contacts.getContactById(id)
        .then(contact => console.log(contact))
        .catch(err => console.error(err));
      break;

    case 'add':
      contacts.addContact(name, email, phone)
        .then(newContact => console.log('Contact added:', newContact))
        .catch(err => console.error(err));
      break;

    case 'remove':
      contacts.removeContact(id)
        .then(() => console.log('Contact removed'))
        .catch(err => console.error(err));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

// Import necessary libraries and functions
import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

// Function to retrieve contacts from storage based on a query
export async function getContacts(query) {
  // Simulate a network delay
  await fakeNetwork(`getContacts:${query}`);
  // Retrieve contacts from local storage
  let contacts = await localforage.getItem("contacts");
  // If no contacts exist, initialize as an empty array
  if (!contacts) contacts = [];
  // If a query is provided, filter and sort contacts based on the query
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  // Sort contacts by last name and creation date
  return contacts.sort(sortBy("last", "createdAt"));
}

// Function to create a new contact
export async function createContact() {
  // Simulate a network delay
  await fakeNetwork();
  // Generate a random ID for the new contact
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };
  // Retrieve existing contacts and add the new contact to the beginning
  let contacts = await getContacts();
  contacts.unshift(contact);
  // Save the updated contacts to local storage
  await set(contacts);
  return contact;
}

// Function to retrieve a specific contact by ID
export async function getContact(id) {
  await fakeNetwork(`contact:${id}`);
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find(contact => contact.id === id);
  return contact ?? null;
}

// Function to update an existing contact with new information
export async function updateContact(id, updates) {
  await fakeNetwork();
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find(contact => contact.id === id);
  if (!contact) throw new Error("No contact found for", id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

// Function to delete a contact by ID
export async function deleteContact(id) {
  let contacts = await localforage.getItem("contacts");
  let index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

// Function to set contacts in local storage
function set(contacts) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}
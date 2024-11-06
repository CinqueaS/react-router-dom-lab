import { useState } from 'react';
import MailboxList from './components/MailboxList';
import NavBar from './components/NavBar';
import { Route, Routes, } from 'react-router-dom';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';

const initialState = [
  { _id: 1, size: 'Small', boxholder: 'Cinquea'},
  { _id: 2, size: 'Large', boxholder: 'Ashley'},
  { _id: 3, size: 'Medium', boxholder: 'Brittany'},
  { _id: 4, size: 'Medium', boxholder: 'Ben'},
  { _id: 5, size: 'Small', boxholder: 'Aisha'},
  { _id: 6, size: 'Large', boxholder: 'Tom'}
];


const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState)
  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  }


  return (
    <>
      <NavBar />
      <h1>Post Office</h1>
      <Routes>
        <Route path="/" element={<h2>The Post Office</h2>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:mailboxId"  element={<MailboxDetails mailboxes={mailboxes} />}/>
        <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />
        <Route path='*' element={<h2>This page doesn't exist</h2>} />
      </Routes>
    </>
  )
};

export default App;
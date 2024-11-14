
import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    return (
      <>
        <h2>mailbox</h2>
        <ul>
          {props.mailboxes.map((currentMailbox) => (
            <li className='mail-box' key={currentMailbox.boxholder}>
            <p>{currentMailbox._id}</p>
            <Link to={`/mailboxes/${currentMailbox._id}`}>
              {currentMailbox.boxholder}
            </Link>
          </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default MailboxList;
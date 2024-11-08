
import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    return (
      <>
        <h2>mailbox</h2>
        <ul>
          {props.mailboxes.map((currentMailbox) => (
            <li key={currentMailbox.boxholder}>
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
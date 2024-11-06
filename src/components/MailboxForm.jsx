import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
  boxholder: '',
  size: ''
};


const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMailbox(formData)
    setFormData(initialState)
    navigate('/mailboxes')
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Boxholder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="size">Size:</label>
        <select onChange={handleChange}
        name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;

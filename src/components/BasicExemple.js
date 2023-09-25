import * as React from 'react';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/dist/style.css';
import { useState } from 'react';
import emailRemoveIcon from '../assets/close.svg'
import  './styles.css'


 export function BasicExample(props) {
  const [emails, setEmails] = useState([]);
  const [focused, setFocused] = useState(false);
  console.log(emails)
  return (
    <form>
      <h3 className='emailLabel'>E-mail de envio do relatório </h3>
      <ReactMultiEmail
        placeholder='Digite aqui'
        emails={emails}
        onChange={emails=> {
          setEmails(emails);
        }}
        // autoFocus={true}
        // onFocus={() => setFocused(true)}
        // onBlur={() => setFocused(false)}
        getLabel={(email, index, removeEmail) => {
          return (
            <div data-tag key={index}>
              <div data-tag-item>{email}</div>
              <span data-tag-handle className='containerEmailRemove' onClick={() => removeEmail(index)}>
                <img src={emailRemoveIcon} className='emailRemove' alt="Ícone de remover email digitado" />
              </span>
            </div>
          );
        }}
      />
      <br />
      {/* <h3>Focused: {focused ? 'true' : 'false'}</h3> */}
      <p>{emails.join(', ') || ''}</p>
    </form>
  );
}



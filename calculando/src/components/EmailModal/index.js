import {React, useState} from 'react'
import Modal from 'react-modal';
import { Container } from './styles';
import {api} from '../../services/api';


const EmailModal = ({isOpen, onRequestClose}) => {

  const [email, setEmail] = useState('');
  const [mensagem, setMsg] = useState('');

  async function handleEmail(event) {
    event.preventDefault();
    const response = await api.post('/Email', {
      email: email,
    })
    const {_id} = response.data
    if(!_id){
      console.log(response.data);
    }else{
      console.log(_id);    
    }    
  }
  return(
    <>
      <Modal isOpen ={isOpen}
       onRequestClose={onRequestClose}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
       ariaHideApp={false}
      >
        <Container onSubmit={handleEmail}>
          <h2>Contato</h2>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Seu e-mail"></input>
          <input value={mensagem} onChange={event => setMsg(event.target.value)} type="text" placeholder="Sua mensagem"></input>
          <button type="submit">Enviar</button>
        </Container>
      </Modal>
    </>
  );
};

export default EmailModal;
import {React, useState, version} from 'react'
import Modal from 'react-modal';
import { Container } from './styles';
import {api} from '../../services/api';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const NewUserModal = ({isOpen, onRequestClose}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  async function handleCreateNewUser(event) {
    event.preventDefault();
    const response = await api.post('/users', {
      name: name,
      email: email,
      password: password,
      role: role
    })
    const {_id} = response.data
    console.log(_id);    
  }

  function defRole(){
    const cb = document.getElementById("chk").checked;
    if(cb === true){
      setRole("Professor");
    }else{
      setRole("Aluno");
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
        <Container onSubmit={handleCreateNewUser}>
          <h2>Cadastro</h2>
          <FormControlLabel control={<Checkbox id="chk" onChange={defRole}/>} label="Professor" />
          <input value={name} onChange={event => setName(event.target.value)} type="text" placeholder="Nome"></input>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="E-mail"></input>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Senha"></input>  
          <button type="submit">Salvar</button>
        </Container>

      </Modal>
    </>
  );
};

export default NewUserModal;
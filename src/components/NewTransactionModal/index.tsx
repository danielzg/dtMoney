import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";

import btnfecharImg from '../../assets/btn-fechar.svg';
import entradaImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';

import { TransactionContext } from "../../TransactionContext";

import { Container, TransactionTypeContainer, RadioBox } from "./style";

Modal.setAppElement('#root')

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){

    const { createTransaction } = useContext(TransactionContext)

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');


    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('')
        setType('deposit')
        setAmount(0)
        setCategory('')
        onRequestClose()
    }

    return (

            <Modal 
                isOpen={isOpen} 
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >
                    <button type="button" 
                    onClick={onRequestClose}
                    className="react-modal-close">
                        <img src={btnfecharImg} alt="Fechar Modal" />
                    </button>
                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Cadastrar Transação</h2>

                    <input 
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    />
                    <input 
                    type="number"
                    placeholder="Valor" 
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                    />

                    <TransactionTypeContainer>

                        <RadioBox 
                        type="button"
                        isActive={type === 'deposit'}
                        activeColor="green" 
                        onClick={ () => {
                            setType('deposit')
                        }}
                        >
                            <img src={entradaImg} alt="Entradas" />
                            <span>Crédito</span>
                        </RadioBox>

                        <RadioBox 
                        type="button"
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        onClick={ () => {
                            setType('withdraw')
                        }}
                        >
                            <img src={saidasImg} alt="Saidas" />
                            <span>Débito</span>
                        </RadioBox>

                    </TransactionTypeContainer>

                    <input 
                    placeholder="Categoria" 
                    value={category}
                    onChange={event => setCategory(event.target.value)}/>

                    <button type="submit">Cadastrar</button>
                </Container>
                
            </Modal>
            )
}
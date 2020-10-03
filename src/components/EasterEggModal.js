import React from 'react'
import Modal from 'react-modal'
import hibachiPic from '../../public/images/hibachi.jpg'

const EasterEggModal = (props) => (
        <Modal 
            isOpen={!!props.showModal}
            onRequestClose={props.modalClose}
            contentLabel='You found an Easter Egg!'
            closeTimeoutMS={300}
            ariaHideApp={false}
            className="modal"
        >
        <h3 className="modal__title">You found an Easter Egg!</h3>
        {props.belongsModal === 'marc' && <p className="modal__body">Hi Marc!</p>}
        {props.belongsModal === 'jarrett' && <p className="modal__body"><img className="modal__pic" src={hibachiPic}></img><br />Hibachi!</p>}
        <button className="button" onClick={props.modalClose}>Yay!</button>
        </Modal>
    ) 


export default EasterEggModal
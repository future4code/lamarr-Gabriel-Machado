import React from 'react'
import './style.css'


function SecaoComentario(props) {
	return (
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={props.onChangeComentario}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}

export default SecaoComentario
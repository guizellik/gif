import React , { useState } from 'react'


const MostraGif = () => {
    const [mostrando, mudaMostrando] = useState(false)
    return (
        <>
            <button onClick={() => {mudaMostrando(true); console.log(mostrando)}}>Clique para ver seu GIF</button><br/>
            {
                mostrando === true ? <img onClick={() => {mudaMostrando(false)}} src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif"/> : ''
            }
        </>
    )
}

export default MostraGif
import React from 'react'

const FilesViewer = ({files, onBack, onOpen}) => {
    return (
        <table className='table'>
            <tbody>
                <tr key='...' className='clickable' onClick={onBack}>
                    <td className='icon-row'>
                        
                    </td>
                    <td>...</td>
                    <td></td>
                </tr>
                {files.map(({name, directory, size}) => {
                    return (
                        <tr key={name} className='clickable' onClick={() => directory && onOpen(name)}>
                            <td className='icon-row'>
                            </td>
                            <td>{name}</td>
                            <td>
                                <span className='float-end'>{size}</span>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default FilesViewer

import React from 'react'

export default function Todo({todo,onDelete}) {
 let cp={
   cursor:"pointer"
 }
  return (
    <div className='my-2 container'>
      <table>
        <tbody className='text-capitalize'>
        <tr>
          <td>First Name : </td>
          <td>{todo.firstname}</td>
        </tr>
        <tr>
          <td>Last Name : </td>
          <td>{todo.lastname}</td>
          </tr>
          <tr>
            <td className='btn-sm btn-danger text-center ' style={cp} onClick={()=>{onDelete(todo)}}>Delete</td>
          </tr>
        </tbody>
      </table>
       
       </div>
  )
}

import React from 'react';

const Head = ({keys}) => {
    return(
    <thead>
            <tr>
             {
                keys.map(key => <th key={key}>{}</th>)
             }   
            </tr>
    </thead>
    )
}
const Row = ({record}) => {
    const keys = Object.keys(record)
        return(
            <tr key ={record.usuario}>
                {
                    keys.map( key => <td key={key}>{record[key]}</td> )
                }
                 </tr>
        )    
}
const Tabela = ({data}) => {
    const keys = Object.keys(data[0])
  return (
    <table>
        <Head keys={keys}/>
        <tbody>  
            {data.map(record => <Row record={record} />)}
         </tbody>
    </table>
  )

}
 

export default Tabela
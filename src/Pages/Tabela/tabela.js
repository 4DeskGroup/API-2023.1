
import "./tabela.css";
import Navbar from ".././../components/Navbar";

function Lista({users}) {
//const [users, setUsers] = useState()

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getInfo").then((response) => {
  //     console.log(response);
  //   });
  // }, []);


  return (
    <>
    <Navbar/>
    <div className="container3">
      <div className="titulo3">
        <div className="title-container3">
          <h1>Controle de usuários</h1>
          <hr className="title-hr3"></hr>
        </div>
        <div></div>
      </div>

      <div className="fundo3">
        
          <table className="tabela3">
            <thead>
              <div className="alinha">
              <tr>
                <th className="a4">Usuario</th>
                <th className="b4">Cadastro</th>
                <th className="c4">Status</th>
                <th className="d4">Tipo</th>
              </tr>
              </div>
            </thead>
            <body>
              {users.map((item, i )=>(
                  <tr key = {i} className="tr4">
                    <td className="td4Login"> {item.login} </td>
                    <td className="td4Data"> {item.datacadastro} </td>
                    <td className="td4Status"> {item.status} </td>
                    <td className="td4Tipo"> {item.usuariotipo} </td>
                  </tr>
              ))}

            </body>
          </table>
        
      </div>
    </div>
    </>
  );
}

export default Lista;

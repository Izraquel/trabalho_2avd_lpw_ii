import React, { useEffect, useState, FormEvent } from "react";
import { Form, Container } from "./styles";
//import { useRouteMatch } from 'react-router'
import api from "../../services/api";

interface Cliente {
  id: string;
  cliente: string;
  telefone: string;
  email: string;
}

const Home: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([] as Cliente[]);

  const [id, setId] = useState("");
  const [cliente, setCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [idSelecionado, setIdSelecionado] = useState(null);

  async function loadData() {
    const dados = await api.get(`/clients`).then((res) => res.data);
    setClientes(dados);
  }

  useEffect(() => {
    loadData();
  }, []);


  async function handleAddClient(event: FormEvent) {
    event.preventDefault();

    const dado = {
      cliente: cliente,
      telefone: telefone,
      email: email,
    };

    if (idSelecionado) {
      await api.put(`/clients/${idSelecionado}`, dado);
    } else {
      await api.post(`/clients`, dado);
    }

  setCliente("");
  setTelefone("");
  setEmail("");
  setIdSelecionado(null);
  loadData();
  }

  async function handleAlterar(id: string) {
    const client = clientes.find((client: any) => client.id === id) as any;

    setCliente(client.cliente);
    setTelefone(client.telefone);
    setEmail(client.email);
    setIdSelecionado(client.id);

  }

  async function handleDelete(id: string) {
    await api.delete(`/clients/${id}`);

    loadData();
  }

  return (
    <Container>
      <Form onSubmit={handleAddClient}>
        <input
          type="text"
          name="cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          placeholder="Cliente"
        />

        <input
          type="text"
          name="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
        />

        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <button type="submit">Salvar dados</button>
      </Form>

      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Telefone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((client: Cliente) => (
            <tr key={client.id}>
              <td>{client.cliente}</td>
              <td>{client.telefone}</td>
              <td>{client.email}</td>
              <td>
                <button type="button" onClick={() => handleDelete(client.id)}>
                  Excluir
                </button>
                <button type="button" onClick={() => handleAlterar(client.id)}>
                  Alterar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Home;

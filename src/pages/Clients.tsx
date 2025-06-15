import type React from 'react';
import './Clients.css';
import ClientsTable from '../components/ClientsTable';

const mockClients = [
	{ id: 1, name: 'João Silva', email: 'joao@email.com', phone: '11999999999', balance: -10.00 },
	{ id: 2, name: 'Maria Souza', email: 'maria@email.com', phone: '21988888888', balance: 20.00 },
	{ id: 3, name: 'Pedro Santos', email: 'pedro@email.com', phone: '31977777777', balance: -30.00 },
	{ id: 4, name: 'Ana Oliveira', email: 'ana@email.com', phone: '41966666666', balance: 40.00 },
	{ id: 5, name: 'Carlos Ferreira', email: 'carlos@email.com', phone: '51955555555', balance: -50.00 },
	{ id: 6, name: 'Julia Lima', email: 'julia@email.com', phone: '61944444444', balance: 60.00 },
	{ id: 7, name: 'Lucas Costa', email: 'lucas@email.com', phone: '71933333333', balance: -70.00 },
	{ id: 8, name: 'Beatriz Almeida', email: 'beatriz@email.com', phone: '81922222222', balance: 80.00 },
	{ id: 9, name: 'Rafael Pereira', email: 'rafael@email.com', phone: '91911111111', balance: -90.00 },
	{ id: 10, name: 'Mariana Santos', email: 'mariana@email.com', phone: '11900000000', balance: 100.00 },
	{ id: 11, name: 'Gabriel Rocha', email: 'gabriel@email.com', phone: '21999999900', balance: -110.00 },
	{ id: 12, name: 'Isabella Martins', email: 'isabella@email.com', phone: '31988888800', balance: -120.00 },
	{ id: 13, name: 'Thiago Cardoso', email: 'thiago@email.com', phone: '41977777700', balance: -130.00 },
	{ id: 14, name: 'Laura Ribeiro', email: 'laura@email.com', phone: '51966666600', balance: -140.00 },
	{ id: 15, name: 'Bruno Gomes', email: 'bruno@email.com', phone: '61955555500', balance: 150.00 }
];

const Clients: React.FC = () => {
	return (
		<div className="clients">
			<h1>Clientes</h1>
			<p>Bem-vindo à página de clientes!</p>
			<div className='table'>
				<ClientsTable clients={mockClients} />
			</div>
		</div>
	);
};

export default Clients;
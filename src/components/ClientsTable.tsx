import type React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Tooltip from './Tooltip';
import './ClientsTable.css';

type Client = {
  id: number;
  name: string;
  email: string;
  phone: string;
  balance: number;
};

type ClientsTableProps = {
  clients: Client[];
};

const formatPhone = (phone: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  
  if (cleanPhone.length === 11) {
    return cleanPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (cleanPhone.length === 10) {
    return cleanPhone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  return phone;
};

const ClientsTable: React.FC<ClientsTableProps> = ({ clients }) => (
  <div className="clients-table">
    {clients.map((client) => (
		<div className="client-card" key={client.id}>
			<div className="client-main-info">
				<h2 className='client-name'>{client.name}</h2>
				<div className="client-details">
					<p><span>Email:</span> {client.email}</p>
					<p><span>Telefone:</span> {formatPhone(client.phone)}</p>
				</div>
			</div>
			<div className='client-secondary-info'>
				<div className="client-card-actions">
					<Tooltip content="Editar cliente" position="top">
						<button>
							<FiEdit />
						</button>
					</Tooltip>
					<Tooltip content="Excluir cliente" position="top">
						<button>
							<FiTrash2 />
						</button>
					</Tooltip>
				</div>
				<div className='client-balance'>
					<p className={client.balance >= 0 ? 'positive' : 'negative'}>
						<span className="balance-label">Saldo </span>
						<span className="balance-value">R$ {client.balance.toFixed(2).replace('.', ',')}</span>
					</p>
				</div>
			</div>
		</div>
    ))}
  </div>
);

export default ClientsTable;
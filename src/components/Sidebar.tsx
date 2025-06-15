import { FaUsers } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi';
import { TbReportMoney } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import logoName from '../assets/logo_name.png';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={logoName} alt='Penduraí' className='logo'/>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/clients" className="nav-link">
              <FaUsers className="nav-icon" />
              <span>Clientes</span>
            </Link>
          </li>
          <div className="nav-divider"></div>
          <li className="nav-item">
            <Link to="/transactions" className="nav-link">
              <BiTransfer className="nav-icon" />
              <span>Transações</span>
            </Link>
          </li>
          <div className="nav-divider"></div>
          <li className="nav-item">
            <Link to="/balance" className="nav-link">
              <TbReportMoney className="nav-icon" />
              <span>Balanço</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
import Datatable from '../../components/datatable/Datatable';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './list.css';

const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainerr">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List
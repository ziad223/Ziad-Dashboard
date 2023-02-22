import './single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import profile from '../../image/profile.jpeg';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={profile} alt="" className="itemImg" />
               <div className="details">
                <h2 className="itemTitle">Ziad Abdalla</h2>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Ziad@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">01288486337</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Omar St . Zagazig. Egypt</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Egypt</span>
                </div>
               </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title = "User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transcations</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
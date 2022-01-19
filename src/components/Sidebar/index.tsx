import { elastic as Menu } from "react-burger-menu";

const Sidebar = () => {
  return (
    <div>
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <a key="0" href="">
          <i className="fa fa-fw fa-star-o" />
          <span>Favorites</span>
        </a>
        ,
        <a key="1" href="">
          <i className="fa fa-fw fa-bell-o" />
          <span>Alerts</span>
        </a>
        ,
        <a key="2" href="">
          <i className="fa fa-fw fa-envelope-o" />
          <span>Messages</span>
        </a>
        ,
        <a key="3" href="">
          <i className="fa fa-fw fa-comment-o" />
          <span>Comments</span>
        </a>
        ,
        <a key="4" href="">
          <i className="fa fa-fw fa-bar-chart-o" />
          <span>Analytics</span>
        </a>
        ,
        <a key="5" href="">
          <i className="fa fa-fw fa-newspaper-o" />
          <span>Reading List</span>
        </a>
      </Menu>
    </div>
  );
};

export default Sidebar;

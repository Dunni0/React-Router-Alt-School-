import { React } from "react";
import { useLocation, Outlet } from "react-router-dom";

function User() {
  const { state } = useLocation();
  console.log("from user", state);
  const picture = `${state.picture.large}`;
  const name = `${state.name.title} ${state.name.first} ${state.name.last}`;
  const email = `${state.email}`;
  const location = `${state.location.country}, ${state.location.state}`;
  const date = `${state.registered.date}`;
  return (
    <>
      <Outlet />
      <div className="userCard">
        <div className="userCard_pic">
          <img className="image" src={picture} alt="user image" />
        </div>
        <div className="userCard_info">
          <h4> {name} </h4>
          <div className="location">
            <span class="material-symbols-sharp">pin_drop</span>
            {location}
          </div>
          <small className="email">
            <span class="material-symbols-sharp">mail</span>
            {email}
          </small>
          <small className="date"> Registered on: {date} </small>
        </div>
      </div>
    </>
  );
}

export default User;

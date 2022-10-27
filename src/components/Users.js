import { React, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../custom-hook/usefetch";
import Pagination from "../components/Pagination";

function Users() {

  const [page, setPage] = useState(1);
  const { loading, response, error } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );

  const totalPage = 20;

  if (loading) {
    return <> Loading... </>;
  }

  if (!loading && error) {
    return <> Error... </>;
  }

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  const handlePageBtn = (pageNumber) => {
    setPage(pageNumber);
  };



  return (
    <div className="card_con"> 
      <div className="header">
      <h1> PROFILE CARDS</h1>
      </div>
      <div className="cards">
        {response?.results.map((user) => {
          const username = `${user.name.title} ${user.name.first} ${user.name.last}`;
          const picture = `${user.picture.large}`;
          return (

            <div key={user.login.uuid} className="card">
              <div className="picture"> 
              <img className="image" src={picture} alt="profile picture" />
              </div>
              <div className="info">
              <h4> {username} </h4>
              <Link className="link" to={`/users/user/${user.login.uuid}`} state={user}>
                <small> click to user detail </small>
              </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="btns">
      <button className= "onClick_btn" onClick={handlePrev} disabled={page <= 1}>
        Prev
      </button>

      <Pagination className="pagination" totalPage={totalPage} handlePageBtn={handlePageBtn} />

      <button className="onClick_btn" onClick={handleNext} disabled={page >= totalPage}>
        Next
      </button>
    </div>
    </div>
  );
}

export default Users;

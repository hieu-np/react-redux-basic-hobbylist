import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HobbyList from './../components/Home/HobbyList';
import {addNewHobby} from './../actions/hobby'

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage() {
  const hobbyList = useSelector(state => state.hobby.list);
  const dispatch = useDispatch();
  const newId = randomNumber()
  const handleAddHobbyList = () => {
    //random hobby obj: id + title
    const newHobby = {
      id: newId,
      title: `hobby ${newId}`,
    }

    //dispatch
    const action = addNewHobby(newHobby);
    dispatch(action);
  }
  return (
    <div className="home-page">
      <h1>Redux</h1>

      <button onClick={handleAddHobbyList}>Random hobby</button>
      <HobbyList hobbyList={hobbyList}></HobbyList>
    </div>
  )
}

export default HomePage;

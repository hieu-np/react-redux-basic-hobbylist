import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HobbyList from './../components/Home/HobbyList';
import {addNewHobby} from './../actions/hobby'

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage() {
  const hobbyList = useSelector(state => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId);

  // const hobbyState = useSelector(state => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.activeId
  // }))

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
  const handleHobbyClick = () => {

  }
  return (
    <div className="home-page">
      <h1>Redux</h1>

      <button onClick={handleAddHobbyList}>Random hobby</button>
      <HobbyList 
      hobbyList={hobbyList} 
      activeId={activeId}
      onHubbyClick={handleHobbyClick}></HobbyList>
    </div>
  )
}

export default HomePage;

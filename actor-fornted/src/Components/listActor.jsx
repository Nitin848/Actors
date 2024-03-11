// ListActor.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './listActor.css'; // Import your CSS file

const ListActor = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/actor/findAllActors')
      .then((response) => {
        setActors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('An error occurred while fetching actors:', error.message);
      });
  }, []);

  const addNewActor = () => {
    navigate('/add-actor');
  };

  const updateActor = (actorId) => {
    navigate(`/update-actor/${actorId}`);
  };

  const deleteActor = async (actorId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/actor/deleteByActorId?actorId=${actorId}`);
      if (response.data.actorId) {
        setActors((prevActors) => prevActors.filter((actor) => actor.actorId !== actorId));
      } else {
        console.error('Failed to delete actor');
      }
    } catch (error) {
      console.error('Error deleting actor:', error);
    }
  };

  return (
    <div className='container'>
      <h1>ACTOR LIST</h1>
      <button className='btn btn-primary' onClick={addNewActor}>
        Add Actor
      </button>
      <br />
      {loading && <p>Loading actors...</p>}
      {!loading && (
        <div className='table-container'>
          <table className='table'>
            <thead>
              <tr>
                <th>Actor Id</th>
                <th>Actor Name</th>
                <th>Actor Address</th>
                <th>Actor Age</th>
                <th>Actor Industry</th>
                <th>Actor Nationality</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {actors.length > 0 &&
                actors.map((actor) => (
                  <tr key={actor.actorId}>
                    <td>{actor.actorId}</td>
                    <td>{actor.actorName}</td>
                    <td>{actor.actorAddress}</td>
                    <td>{actor.actorAge}</td>
                    <td>{actor.actorIndustry}</td>
                    <td>{actor.actorNationality}</td>
                    <td>
                      <div className='action-box'>
                        <button onClick={() => updateActor(actor.actorId)}>Update</button>
                        <button onClick={() => deleteActor(actor.actorId)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListActor;

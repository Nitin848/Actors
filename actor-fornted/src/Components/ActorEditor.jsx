import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ActorEditor.css'; // Import your CSS file

const ActorEditor = () => {
  const { actorId } = useParams();
  const [actor, setActor] = useState({
    actorId: '',
    actorName: '',
    actorAge: '',
    actorAddress: '',
    actorIndustry: '',
    actorNationality: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (actorId) {
      axios.get(`http://localhost:8080/actor/findByActorId?actorId=${actorId}`)
        .then((response) => {
          setActor(response.data);
        })
        .catch((error) => {
          console.error('Error fetching actor details:', error);
        });
    }
  }, [actorId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActor((prevActor) => ({ ...prevActor, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (actorId) {
        await axios.put(`http://localhost:8080/actor/updateByActorId?actorId=${actorId}`, actor);
        setSuccessMessage('Actor updated successfully!');
      } else {
        const response = await axios.post('http://localhost:8080/actor/addActor', actor);
        setSuccessMessage('Actor added successfully!');
        setActor((prevActor) => ({ ...prevActor, actorId: response.data.actorId }));
      }
      setErrorMessage('');
    } catch (error) {
      console.error('Error updating/adding actor:', error);
      setSuccessMessage('');
      setErrorMessage('Error updating/adding actor. Please try again.');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className={actorId ? 'update-actor' : 'add-actor'}>
          {actorId ? `UPDATE ACTOR` : 'ADD ACTOR'}
        </h1>
        <div className="input-wrapper">
          <input
            type="number"
            name="actorId"
            value={actor.actorId}
            onChange={handleChange}
            placeholder="Actor ID"
            readOnly={!!actorId}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="actorName"
            value={actor.actorName}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="number"
            name="actorAge"
            value={actor.actorAge}
            onChange={handleChange}
            placeholder="Age"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="actorAddress"
            value={actor.actorAddress}
            onChange={handleChange}
            placeholder="Address"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="actorIndustry"
            value={actor.actorIndustry}
            onChange={handleChange}
            placeholder="Industry"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="actorNationality"
            value={actor.actorNationality}
            onChange={handleChange}
            placeholder="Nationality"
          />
        </div>
          <button type="submit" className={actorId ? 'update-actor' : 'add-actor'}>
          {actorId ? 'Update' : 'Add'} Actor
        </button>
      </form>

      {successMessage && (
        <div className="popup success-popup">
          <p>{successMessage}</p>
          <button onClick={handleBack}>Back to Actors</button>
        </div>
      )}

      {errorMessage && (
        <div className="popup error-popup">
          <p>{errorMessage}</p>
          <button onClick={() => setErrorMessage('')}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ActorEditor;

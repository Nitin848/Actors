package com.jsp.springboot.actor.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsp.springboot.actor.model.Actor;
import com.jsp.springboot.actor.repository.ActorRepository;
import com.jsp.springboot.actor.service.ActorService;

@Service
public class ActorServiceImpl implements ActorService{

	@Autowired
	private ActorRepository actorRepository;

	@Override
	public Actor addActor(Actor actor) {
		return actorRepository.save(actor);

	}

	@Override
	public Actor findByActorId(int actorId) {


		Optional<Actor> optional = actorRepository.findById(actorId);
		if(optional.isPresent()) {
			Actor actor = optional.get();
			return actor;
		}else {
			return null;
		}

	}

	@Override
	public Actor updateByActorId(int actorId, Actor updatedActor) {
		Optional<Actor> optional = actorRepository.findById(actorId);
		if(optional.isPresent()) {
			Actor existingActor = optional.get();
			updatedActor.setActorId(existingActor.getActorId());
			return actorRepository.save(updatedActor);

		}
		else {
			return null;
		}

	}

	@Override
	public Actor deleteByActorID(int actorId) {
		Optional<Actor> optional= actorRepository.findById(actorId);
		if(optional.isPresent()) {
			Actor actor = optional.get();
			actorRepository.delete(actor);
			return actor;
		}else {
			return null;
		}
	}

	@Override
	public List<Actor> findAllActors() {
		List<Actor> actors = actorRepository.findAll();
		if(actors.isEmpty()) {
			return null;
			
		}else {
			return actors;
		}
		
	}
}

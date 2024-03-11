package com.jsp.springboot.actor.service;

import java.util.List;

import com.jsp.springboot.actor.model.Actor;

public interface ActorService {
	
	public Actor addActor(Actor actor);
	
	public Actor findByActorId(int actorId);
	
	public Actor updateByActorId(int actorId ,Actor updatedActor);
	
	public Actor deleteByActorID(int actorId);
	
	public List<Actor> findAllActors();
	

}

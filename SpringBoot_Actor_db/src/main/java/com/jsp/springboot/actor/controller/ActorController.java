package com.jsp.springboot.actor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import com.jsp.springboot.actor.model.Actor;
import com.jsp.springboot.actor.service.ActorService;

@Controller
@ResponseBody
@CrossOrigin("*")
public class ActorController {

	@Autowired
	private ActorService actorService;

	@RequestMapping(method = RequestMethod.POST, value = "actor/addActor")
	public Actor addActor(@RequestBody Actor  actor) {
		return actorService.addActor(actor);

	}
	
	@RequestMapping(method =RequestMethod.GET, value="actor/findByActorId")
	public Actor findByActorId(@RequestParam int actorId) {
		return actorService.findByActorId(actorId);
		
	}
	@RequestMapping(method = RequestMethod.PUT, value = "actor/updateByActorId")
	public Actor updateByActorId(@RequestParam int actorId, @RequestBody Actor actor)
	{
		return actorService.updateByActorId(actorId, actor);
	}

	
	@RequestMapping(method =RequestMethod.DELETE, value="actor/deleteByActorId")
	public Actor deleteByActorId(@RequestParam int actorId) {
		return actorService.deleteByActorID(actorId);
		
	}
	
	@RequestMapping(method =RequestMethod.GET, value="actor/findAllActors")
	public List<Actor> findAllActors(){
		return actorService.findAllActors();
		
	}



}

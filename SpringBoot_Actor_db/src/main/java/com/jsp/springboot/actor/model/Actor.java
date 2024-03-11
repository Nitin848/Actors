package com.jsp.springboot.actor.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Actor {
	@Id
	private int actorId;
	private String  actorName;
	private int actorAge;
	private String actorAddress;
	private String actorIndustry;
	private String actorNationality;
	public int getActorId() {
		return actorId;
	}
	public void setActorId(int actorId) {
		this.actorId = actorId;
	}
	public String getActorName() {
		return actorName;
	}
	public void setActorName(String actorName) {
		this.actorName = actorName;
	}
	public int getActorAge() {
		return actorAge;
	}
	public void setActorAge(int actorAge) {
		this.actorAge = actorAge;
	}
	public String getActorAddress() {
		return actorAddress;
	}
	public void setActorAddress(String actorAddress) {
		this.actorAddress = actorAddress;
	}
	public String getActorIndustry() {
		return actorIndustry;
	}
	public void setActorIndustry(String actorIndustry) {
		this.actorIndustry = actorIndustry;
	}
	public String getActorNationality() {
		return actorNationality;
	}
	public void setActorNationality(String actorNationality) {
		this.actorNationality = actorNationality;
	}
	@Override
	public String toString() {
		return "Actor [actorId=" + actorId + ", actorName=" + actorName + ", actorAge=" + actorAge + ", actorAddress="
				+ actorAddress + ", actorIndustry=" + actorIndustry + ", actorNationality=" + actorNationality + "]";
	}
	
	
	
	
}

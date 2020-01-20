package com.med.cardatabase.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.med.cardatabase.domain.Car;
import com.med.cardatabase.repository.CarRepository;

// @RestController
public class CarController {

	/*@Autowired
	private CarRepository carRepo; 
	
	@RequestMapping("/cars")
	public Iterable<Car> getCars(){
		return carRepo.findAll();
	};*/
}

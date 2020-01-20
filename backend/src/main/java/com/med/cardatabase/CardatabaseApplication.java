package com.med.cardatabase;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.med.cardatabase.domain.Car;
import com.med.cardatabase.domain.Owner;
import com.med.cardatabase.domain.User;
import com.med.cardatabase.repository.CarRepository;
import com.med.cardatabase.repository.OwnerRepository;
import com.med.cardatabase.repository.UserRepository;

@SpringBootApplication
public class CardatabaseApplication {

	//  Creating the logger
	private static final Logger logger = LoggerFactory.getLogger(CardatabaseApplication.class);
	
	@Autowired
	private CarRepository carRepository;
	
	@Autowired
	private OwnerRepository ownerRepository; 
	
	@Autowired
	private UserRepository userRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(CardatabaseApplication.class, args);
	}

	@Bean
	CommandLineRunner runner() {
		return args -> {

			logger.info("[CommandLineRunner] => creating users");
			User user1 = new User("user", "$2a$04$1.YhMIgNX/8TkCKGFUONWO1waedKhQ5KrnB30fl0Q01QKqmzLf.Zi", "USER");
			User user2 = new User("admin", "$2a$04$KNLUwOWHVQZVpXyMBNc7JOzbLiBjb9Tk9bP7KNcPI12ICuvzXQQKG", "ADMIN");
			logger.info("[CommandLineRunner] => Owner 1: " + user1);
			logger.info("[CommandLineRunner] => Owner 2: " + user2);
			userRepository.save(user1);
			userRepository.save(user2);
			
			logger.info("[CommandLineRunner] => creating owners");
			Owner owner1 = new Owner("John", "Jhonson"); 
			Owner owner2 = new Owner("Mazy", "Robinson"); 
			logger.info("[CommandLineRunner] => Owner 1: " + owner1);
			logger.info("[CommandLineRunner] => Owner 2: " + owner2);
			ownerRepository.save(owner1);
			ownerRepository.save(owner2);

			logger.info("[CommandLineRunner] => creating cars");
			Car car1 = new Car("Ford", "Mustang", "Red", "ADF-1121", 2017, 59000, owner1);
			Car car2 = new Car("Nissan", "Leaf", "White", "SSJ-3002", 2014, 29000, owner2);
			Car car3 = new Car("Toyota", "Prius", "Silver", "KKO-0212", 2018, 39000, owner2);
			logger.info("[CommandLineRunner] => Car 1: " + car1);
			logger.info("[CommandLineRunner] => Car 2: " + car2);
			logger.info("[CommandLineRunner] => Car 3: " + car3);
			carRepository.save(car1);
			carRepository.save(car2);
			carRepository.save(car3);
		};
	}
}

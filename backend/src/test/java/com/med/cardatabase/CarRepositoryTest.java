package com.med.cardatabase;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.med.cardatabase.domain.Car;
import com.med.cardatabase.repository.CarRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CarRepositoryTest {

	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	private CarRepository carRepository;
	
	@Test
	public void saveCar() {
		Car car = new Car("Tesla", "Model X", "White", "ABC-1234", 2017, 86000, null);
		entityManager.persistAndFlush(car);
		assertThat(car.getId()).isNotNull();
	}
	
	@Test
	public void deleteCars() {
		Car car1 = new Car("Tesla", "Model X", "White", "ABC-1234", 2017, 86000, null);
		entityManager.persistAndFlush(car1);
		Car car2 = new Car("Tesla", "Model X", "Gray", "CBA-4321", 2018, 50000, null);
		entityManager.persistAndFlush(car2);

		carRepository.deleteAll();
		assertThat(carRepository.findAll()).isEmpty();		
	}
}

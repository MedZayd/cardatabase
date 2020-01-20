package com.med.cardatabase.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource; 
import com.med.cardatabase.domain.Car;

@RepositoryRestResource(collectionResourceRel = "cars", path = "cars")
public interface CarRepository extends JpaRepository<Car, Long> {

	// Find By Single Field
	List<Car> findByBrand(@Param("brand") String brand);
	List<Car> findByColor(@Param("color") String color);
	List<Car> findByYear(@Param("year") int year);
	
	/*
	 * // Find By Multiple Fields List<Car> findByBrandAndModel(String brand, String
	 * model); List<Car> findByBrandOrColor(String brand, int color);
	 * 
	 * // Find By With Sorting List<Car> findByBrandOrderByYearAsc(String brand);
	 * 
	 * // Using the query annotation
	 * 
	 * @Query("select c from Car c where c.brand = ?1") List<Car>
	 * queryByBrand(String brand);
	 * 
	 * // @Query annotation with Like expression
	 * 
	 * @Query("select c from Car c where c.brand like %?1") List<Car>
	 * queryByBrandEndsWith(String brand);
	 */
}

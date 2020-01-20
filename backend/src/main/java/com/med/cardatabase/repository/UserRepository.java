package com.med.cardatabase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.med.cardatabase.domain.User;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Long> {
	User findByUsername(@Param("username") String username);
}

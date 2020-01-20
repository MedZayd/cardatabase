package com.med.cardatabase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.med.cardatabase.domain.Owner;

@RepositoryRestResource(collectionResourceRel = "owners", path = "owners")
public interface OwnerRepository extends JpaRepository<Owner, Long> {

}

package com.accountapp.backend.repositories;
import org.springframework.data.repository.CrudRepository;
import com.accountapp.backend.domain.Personnel;

public interface UserRepository extends CrudRepository<Personnel, Integer>{
}
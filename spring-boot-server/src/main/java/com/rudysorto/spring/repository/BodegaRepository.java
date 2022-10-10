package com.rudysorto.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rudysorto.spring.model.Bodega;


public interface BodegaRepository extends JpaRepository<Bodega, Long> {
	
	 List<Bodega> findBytipobodegaContaining(String tipobodega);
}

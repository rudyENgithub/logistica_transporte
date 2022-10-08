package com.rudysorto.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rudysorto.spring.model.Bodega;
import com.rudysorto.spring.model.Transporte;

public interface TransporteRepository extends JpaRepository<Transporte, Long> {

}

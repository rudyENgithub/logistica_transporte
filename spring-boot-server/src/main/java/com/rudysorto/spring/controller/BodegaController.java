package com.rudysorto.spring.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rudysorto.spring.model.Bodega;
import com.rudysorto.spring.repository.BodegaRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class BodegaController {
	
	@Autowired
	BodegaRepository bodegaRepository;
	
	@GetMapping("/bodegas")
	public ResponseEntity<List<Bodega>> getAllBodegas(@RequestParam(required = false) String tipobodega) {
		try {
			List<Bodega> bodegas = new ArrayList<Bodega>();

			if (tipobodega == null)
				bodegaRepository.findAll().forEach(bodegas::add);
			else
				bodegaRepository.findBytipobodegaContaining(tipobodega).forEach(bodegas::add);

			if (bodegas.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(bodegas, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	
	

}

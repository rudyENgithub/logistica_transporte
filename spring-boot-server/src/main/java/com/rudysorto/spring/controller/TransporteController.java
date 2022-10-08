package com.rudysorto.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rudysorto.spring.model.Envio;
import com.rudysorto.spring.model.Transporte;
import com.rudysorto.spring.repository.TransporteRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TransporteController {
	
	@Autowired
	TransporteRepository transporteRepository;
	
	@PostMapping("/transporte")
	public ResponseEntity<Transporte> createTransporte(@RequestBody Transporte transporte) {
		try {
			Transporte _transporte = this.transporteRepository.save(transporte);
			return new ResponseEntity<>(_transporte, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}

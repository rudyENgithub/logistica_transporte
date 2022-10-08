package com.rudysorto.spring.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rudysorto.spring.model.Bodega;
import com.rudysorto.spring.model.Envio;
import com.rudysorto.spring.model.Tutorial;
import com.rudysorto.spring.repository.EnvioRepository;



@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class EnvioController {
	
	@Autowired
	EnvioRepository envioRepository;
	
	
	@PostMapping("/envios")
	public ResponseEntity<Envio> createEnvio(@RequestBody Envio envio) {
		try {
			System.out.println("RS" + envio.toString());
			Envio _envio = this.envioRepository.save(envio);
			return new ResponseEntity<>(_envio, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/envios")
	public ResponseEntity<List<Envio>> getAllEnvios() {
		try {
			List<Envio> envios = new ArrayList<Envio>();

			
			envioRepository.findAll().forEach(envios::add);
		
			if (envios.isEmpty()) {
				System.out.println("isEmpty");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(envios, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("isEmpty" + e.getMessage());
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	/*
	@PostMapping(path="/create")
	public ResponseEntity<Envio> create(@RequestBody Envio envio){
		try {
			this.envioRepository.saveBook(livre);
			return new ResponseEntity<Livre>(livre, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<Livre>(HttpStatus.NOT_ACCEPTABLE);
		}

	}
	*/
	
	@GetMapping("/envios/{id_envio}")
	public ResponseEntity<Envio> getEnvioById(@PathVariable("id_envio") int id) {
		/*System.out.println(Long.valueOf(id).getClass());
		int i = (int) id;
		System.out.println();
		
		*/

		Optional<Envio> envioData = envioRepository.findById(id);

		if (envioData.isPresent()) {
			return new ResponseEntity<>(envioData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/envios/{id_envio}")
	public ResponseEntity<Envio> updateEnvio(@PathVariable("id_envio") int id, @RequestBody Envio envio) {
		Optional<Envio> envioData = envioRepository.findById(id);
		if (envioData.isPresent()) {
			Envio _envio = envioData.get();
			System.out.println(_envio);
			System.out.println(envio);
			if(_envio.getId_envio() == envio.getId_envio()) {
				System.out.println("son iguales");
				_envio = envio;
			}else {
				System.out.println("NO son iguales");
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			
			/*_tutorial.setTitle(tutorial.getTitle());
			_tutorial.setDescription(tutorial.getDescription());
			_tutorial.setPublished(tutorial.isPublished());
			*/
			return new ResponseEntity<>(envioRepository.save(_envio), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/envios/{id_envio}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id_envio") int id) {
		try {
			envioRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	

}

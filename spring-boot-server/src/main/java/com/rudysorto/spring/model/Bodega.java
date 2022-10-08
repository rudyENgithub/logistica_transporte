package com.rudysorto.spring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="bodegas")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bodega {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id_bodega;
	
	private String nombrebodega;
	
	private String tipobodega;
}

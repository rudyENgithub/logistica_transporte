package com.rudysorto.spring.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="envios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Envio {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id_envio;
	
	private int id_usuario;
	
	private int id_transporte;
	
	private int cantidadproducto;
	
	private Date fecharegistro;
	
	private Date fechaentrega;
	
	private int id_bodega;
	
	private double precioenvio;
	
	private double  preciodescuento;
	
	private String numeroguia;
	
	private boolean logisticaterrestre;
	
	private boolean logisticamaritima;
	
	
	
	private String clientenombre;
	
	private String clientedireccion;
	
	private String producto;
	
	//private String modalidad;

}

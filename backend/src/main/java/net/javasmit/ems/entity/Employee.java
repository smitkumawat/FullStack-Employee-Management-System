package net.javasmit.ems.entity;


import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name  ="first_name",nullable = false,unique = true)
    private  String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name ="email_id",nullable=false)
    private String email;




}

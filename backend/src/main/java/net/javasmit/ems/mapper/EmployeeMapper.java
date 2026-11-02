package net.javasmit.ems.mapper;

import net.javasmit.ems.dto.EmployeeDto;
import net.javasmit.ems.entity.Employee;

public class EmployeeMapper {



        public static EmployeeDto mapToEmployeeDto(Employee employee){
            return new EmployeeDto(
                    employee.getId(),
                    employee.getFirstName(),
                    employee.getLastName(),
                    employee.getEmail()

            );
        }

public static Employee maptoEmployee(EmployeeDto employeeDto){
            return new Employee(
                    employeeDto.getId(),
                    employeeDto.getFirstName(),
                    employeeDto.getLastName(),
                    employeeDto.getEmail()

            );
}

    }






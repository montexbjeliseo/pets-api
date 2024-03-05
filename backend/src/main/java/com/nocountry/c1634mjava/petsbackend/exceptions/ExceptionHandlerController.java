package com.nocountry.c1634mjava.petsbackend.exceptions;

import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ExceptionHandlerController extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {

            String fieldName = ((FieldError) error).getField();
            String message = error.getDefaultMessage();
            errors.put(fieldName, message);
        });
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {ResourceNotFoundException.class})
    protected ResponseEntity<ExceptionDTO> handleResourceNotFoundException(ResourceNotFoundException ex,
                                                                           WebRequest request) {
        ExceptionDTO message = new ExceptionDTO(
                HttpStatus.NOT_FOUND.value(),
                new Date(),
                ex.getMessage(),
                request.getDescription(false));

        return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(value = {NoContentException.class})
    protected ResponseEntity<ExceptionDTO> handleNoContentException(NoContentException ex,
                                                                           WebRequest request) {
        ExceptionDTO message = new ExceptionDTO(
                HttpStatus.NO_CONTENT.value(),
                new Date(),
                ex.getMessage(),
                request.getDescription(false));

        return new ResponseEntity<>(message, HttpStatus.NO_CONTENT);
    }
    @ExceptionHandler(value = {ValueAlreadyInUseException.class})
    protected ResponseEntity<ExceptionDTO> handleValueAlreadyInUseException(ValueAlreadyInUseException ex,
                                                                           WebRequest request) {
        ExceptionDTO message = new ExceptionDTO(
                HttpStatus.BAD_REQUEST.value(),
                new Date(),
                ex.getMessage(),
                request.getDescription(false));

        return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(value = {PasswordMismatchException.class})
    protected ResponseEntity<ExceptionDTO> handlePasswordMismatchException(PasswordMismatchException ex,
                                                                           WebRequest request) {
        ExceptionDTO message = new ExceptionDTO(
                HttpStatus.BAD_REQUEST.value(),
                new Date(),
                ex.getMessage(),
                request.getDescription(false));

        return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(value = {InvalidPaginationException.class})
    protected ResponseEntity<ExceptionDTO> handleInvalidPaginationException(InvalidPaginationException ex,
                                                                           WebRequest request) {
        ExceptionDTO message = new ExceptionDTO(
                HttpStatus.BAD_REQUEST.value(),
                new Date(),
                ex.getMessage(),
                request.getDescription(false));

        return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
    }
}

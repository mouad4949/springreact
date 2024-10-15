package com.example.springreact.exception;


import com.example.springreact.model.User;
import com.example.springreact.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class UserNotFoundAdvice {



    @ResponseBody
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> exceptionHandler(UserNotFoundException exception){
        Map<String,String> errormap = new HashMap<>();
        errormap.put("errormessage",exception.getMessage());

        return errormap;
    }


}

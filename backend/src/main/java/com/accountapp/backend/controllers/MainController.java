package com.accountapp.backend.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.accountapp.backend.domain.Personnel;
import com.accountapp.backend.repositories.UserRepository;

@RestController()
@RequestMapping(path="/backend")
public class MainController {
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/add")
    public @ResponseBody String addNewUser(@RequestParam String firstname,
                                           @RequestParam String lastname,
                                           @RequestParam String accountno){
        Personnel p = new Personnel();
        p.setFirst_name(firstname);
        p.setLast_name(lastname);
        p.setAccount_no(accountno);
        userRepository.save(p);
        return "Saved";
    }
    @GetMapping("/all")
    public @ResponseBody Iterable<Personnel> getAllUsers(){
        return userRepository.findAll();
    }
    @GetMapping(path = "/view/{id}")
    public @ResponseBody Personnel getUserById(@PathVariable("id") int id){
        return userRepository.findById(id).get();
    }
    @PutMapping(path = "/edit/{id}")
    public @ResponseBody String editUserById(@PathVariable int id,
                                             @RequestParam String firstname,
                                             @RequestParam String lastname,
                                             @RequestParam String accountno){
        Personnel personnel = userRepository.findById(id).get();
        personnel.setFirst_name(firstname);
        personnel.setLast_name(lastname);
        personnel.setAccount_no(accountno);
        userRepository.save(personnel);
        return "Saved";
    }
    @DeleteMapping("/delete/{id}")
    public @ResponseBody String deleteUserById(@PathVariable int id){
        Personnel personnel = userRepository.findById(id).get();
        userRepository.delete(personnel);
        return "Deleted";
    }
}


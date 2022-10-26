package manage.orderback.controller;
import manage.orderback.model.Role;
import manage.orderback.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("role")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping
    public List<Role> findAll(){
        return roleService.findAll();
    }

    @GetMapping("/{id}")
    public Role findById(@PathVariable int id){
        return roleService.findById(id);
    }

    @PostMapping
    public Role create(@RequestBody Role role){
        return roleService.create(role);
    }

    @PutMapping
    public Role update(@RequestBody Role role){
        return roleService.update(role);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        roleService.delete(id);
    }
}

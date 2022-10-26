package manage.orderback.controller;
import manage.orderback.model.Client;
import manage.orderback.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("client")
public class ClientController {

    @Autowired
    private  ClientService clientService;

    @GetMapping
    public List<Client> findAll(){
        return clientService.findAll();
    }

    @GetMapping("/{id}")
    public Client findById(@PathVariable int id){
        return clientService.findById(id);
    }

    @PostMapping
    public Client create(@RequestBody Client client){
        return clientService.create(client);
    }

    @PutMapping
    public Client update(@RequestBody Client client){
        return clientService.update(client);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        clientService.delete(id);
    }
}

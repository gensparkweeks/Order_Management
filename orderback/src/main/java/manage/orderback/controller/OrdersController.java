package manage.orderback.controller;
import manage.orderback.model.Orders;
import manage.orderback.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("orders")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @GetMapping
    public List<Orders> findAll(){
        return ordersService.findAll();
    }

    @GetMapping("/{id}")
    public Orders findById(@PathVariable int id){
        return ordersService.findById(id);
    }

    @PostMapping
    public Orders create(@RequestBody Orders orders){
        return ordersService.create(orders);
    }

    @PutMapping
    public Orders update(@RequestBody Orders orders){
        return ordersService.update(orders);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        ordersService.delete(id);
    }
}

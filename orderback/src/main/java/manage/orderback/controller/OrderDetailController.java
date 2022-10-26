package manage.orderback.controller;
import manage.orderback.model.OrderDetail;
import manage.orderback.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("orderdetail")
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping
    public List<OrderDetail> findAll(){
        return orderDetailService.findAll();
    }

    @GetMapping("/{id}")
    public OrderDetail findById(@PathVariable int id){
        return orderDetailService.findById(id);
    }

    @PostMapping
    public OrderDetail create(@RequestBody OrderDetail orderDetail){
        return orderDetailService.create(orderDetail);
    }

    @PutMapping
    public OrderDetail update(@RequestBody OrderDetail orderDetail){
        return orderDetailService.update(orderDetail);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        orderDetailService.delete(id);
    }
}

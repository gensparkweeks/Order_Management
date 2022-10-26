package manage.orderback.service;
import manage.orderback.model.Orders;
import java.util.List;

public interface OrdersService {

    List<Orders> findAll();
    Orders findById(int id);
    Orders create(Orders orders);
    Orders update(Orders orders);
    void delete(int id);
}

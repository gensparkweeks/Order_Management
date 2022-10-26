package manage.orderback.service;
import manage.orderback.model.OrderDetail;
import java.util.List;

public interface OrderDetailService {

    List<OrderDetail> findAll();
    OrderDetail findById(int id);
    OrderDetail create(OrderDetail orderDetail);
    OrderDetail update(OrderDetail orderDetail);
    void delete(int id);
}

package manage.orderback.service;
import manage.orderback.dao.OrdersDao;
import manage.orderback.model.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrdersServiceImpl implements OrdersService{

    @Autowired
    OrdersDao ordersDao;

    @Override
    public List<Orders> findAll() {
        return ordersDao.findAll();
    }

    @Override
    public Orders findById(int id) {
        return ordersDao.findById(id).orElseThrow();
    }

    @Override
    public Orders create(Orders orders) {
        return ordersDao.save(orders);
    }

    @Override
    public Orders update(Orders orders) {
        return ordersDao.save(orders);
    }

    @Override
    public void delete(int id) {
        ordersDao.deleteById(id);
    }
}

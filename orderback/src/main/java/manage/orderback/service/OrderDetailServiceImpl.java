package manage.orderback.service;
import manage.orderback.dao.OrderDetailDao;
import manage.orderback.model.OrderDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class OrderDetailServiceImpl implements OrderDetailService{

    @Autowired
    OrderDetailDao orderDetailDao;

    @Override
    public List<OrderDetail> findAll() {
        return orderDetailDao.findAll();
    }

    @Override
    public OrderDetail findById(int id) {
        return orderDetailDao.findById(id).orElseThrow();
    }

    @Override
    public OrderDetail create(OrderDetail orderDetail) {
        return orderDetailDao.save(orderDetail);
    }

    @Override
    public OrderDetail update(OrderDetail orderDetail) {
        return orderDetailDao.save(orderDetail);
    }

    @Override
    public void delete(int id) {
        orderDetailDao.deleteById(id);
    }
}

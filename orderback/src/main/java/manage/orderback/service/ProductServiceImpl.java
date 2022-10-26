package manage.orderback.service;
import manage.orderback.dao.ProductDao;
import manage.orderback.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductDao productDao;

    @Override
    public List<Product> findAll() {
        return productDao.findAll();
    }

    @Override
    public Product findById(int id) {
        return productDao.findById(id).orElseThrow();
    }

    @Override
    public Product create(Product product) {
        return productDao.save(product);
    }

    @Override
    public Product update(Product product) {
        return productDao.save(product);
    }

    @Override
    public void delete(int id) {
        productDao.deleteById(id);
    }
}

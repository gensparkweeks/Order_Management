package manage.orderback.service;
import manage.orderback.model.Product;
import java.util.List;

public interface ProductService {

    List<Product> findAll();
    Product findById(int id);
    Product create(Product product);
    Product update(Product product);
    void delete(int id);
}

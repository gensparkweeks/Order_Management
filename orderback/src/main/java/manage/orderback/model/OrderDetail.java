package manage.orderback.model;
import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int amount;

    @ManyToOne
    @JoinColumn(name="order_id", referencedColumnName = "id")
    private Orders orders;

    @OneToOne
    @JoinColumn(name="product_id", referencedColumnName = "id")
    private Product product;

}

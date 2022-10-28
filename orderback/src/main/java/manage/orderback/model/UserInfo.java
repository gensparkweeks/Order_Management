package manage.orderback.model;
import lombok.Data;
import javax.persistence.*;
@Entity
@Data
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String first;
    private String last;
    private String street;
    private String city;
    private String state;
    private String zipcode;

    @OneToOne
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;
}

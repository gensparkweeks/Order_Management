package manage.orderback.service;
import manage.orderback.model.Client;
import java.util.List;

public interface ClientService {

    List<Client> findAll();
    Client findById(int id);
    Client create(Client client);
    Client update(Client client);
    void delete(int id);
}

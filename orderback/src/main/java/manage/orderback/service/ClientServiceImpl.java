package manage.orderback.service;
import manage.orderback.dao.ClientDao;
import manage.orderback.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClientServiceImpl implements ClientService{

    @Autowired
    ClientDao clientDao;

    @Override
    public List<Client> findAll() {
        return clientDao.findAll();
    }

    @Override
    public Client findById(int id) {
        return clientDao.findById(id).orElseThrow();
    }

    @Override
    public Client create(Client client) {
        return clientDao.save(client);
    }

    @Override
    public Client update(Client client) {
        return clientDao.save(client);
    }

    @Override
    public void delete(int id) {
        clientDao.deleteById(id);
    }
}
